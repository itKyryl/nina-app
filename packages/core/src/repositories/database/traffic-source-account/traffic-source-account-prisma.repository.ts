import _ from "lodash";
import { PrismaRepositoryClient } from "../../../clients/prisma";
import { Prisma } from "../../../clients/prisma/generated";
import { TrafficSourceAccountBaseDto, TrafficSourceAccountFilters } from "../../../domain/repository/database/traffic-source-account/common.types";
import { TrafficSourceAccountWithApiAccessDto } from "../../../domain/repository/database/traffic-source-account/find.types";
import { TrafficSourceAccountUpdateDto, TrafficSourceAccountUpsertInputDto } from "../../../domain/repository/database/traffic-source-account/update.types";
import { GetAccountsForExternalPurposesUseCaseOutput } from "../../../domain/use-cases/get-accounts-for-external-purposes.types";
import { createPrismaSelect, createPrismaWhere } from "../../../utils";
import { createApiAccessBaseSelect } from "../api-access/api-access-prisma.repository";
import ITrafficSourceAccountDatabaseRepository from "./traffic-source-account-database.repository.interface";
import { DateTime } from "luxon";
import moment from "moment-timezone";

export default class TrafficSourceAccountPrismaRepository implements ITrafficSourceAccountDatabaseRepository {

  constructor(private readonly prismaClient: PrismaRepositoryClient) { }
  
  public async getManyForExternalPurposes(filters: TrafficSourceAccountFilters): Promise<GetAccountsForExternalPurposesUseCaseOutput> {
    const accounts = await this.prismaClient.trafficSourceAccount.findMany({
      where: createAccountWhere(filters),
      select: {
        ...createAccountBaseSelect(),
        trafficSourceOwnerBm: true,
      },
    });

    type AccountType = typeof accounts[number];
    const accountToSpend = new Map<number, number>();
    
    if(filters.include?.spend) {
      const timezoneGroupedAccounts = new Map<string, AccountType[]>();
      
      for(const account of accounts) {
        const existingTimezone = timezoneGroupedAccounts.get(account.externalTimezone);
        
        if(existingTimezone) {
          timezoneGroupedAccounts.set(account.externalTimezone, [...existingTimezone, account]);
        } else {
          timezoneGroupedAccounts.set(account.externalTimezone, [account]);
        }
      }
      
      
      for(let [timezone, accountsData] of timezoneGroupedAccounts) {
        const accountsCollectedChunks = _.chunk(accountsData.map(a => a.id), 1000);
        
        for(const accountsCollectedChunk of accountsCollectedChunks) {
          const spends = await this.prismaClient.trafficSourceDailyAdStat.groupBy({
            by: 'trafficSourceAccountId',
            _sum: {
              spend: true
            },
            where: {
              trafficSourceAccountId: {
                in: accountsCollectedChunk
              },
              externalDateStart: {
                gte: filters.include.spend.dateFrom ? moment.tz(filters.include.spend.dateFrom, timezone).startOf('day').toDate() : undefined,
                lte: filters.include.spend.dateTo ? moment.tz(filters.include.spend.dateTo, timezone).endOf('day').toDate() : undefined,
              }
            }
          })
    
          for(const spend of spends) {
            accountToSpend.set(spend.trafficSourceAccountId, spend._sum.spend?.toNumber() ?? 0)
          }
        }
      }
    }

    

    return accounts.map((a) => {
      const businessManager = a.trafficSourceOwnerBm;

      return {
        accountId: a.externalId,
        accountName: a.name,
        accountBlockDate: null,
        accountCreateDate: a.externalCreatedTime?.toISOString() ?? null,
        accountTimezone: a.externalTimezone,
        active: a.isActive,
        status: a.status,
        trafficSource: a.trafficSourceType,
        currency: a.externalCurrency,
        balance: a.balance.toNumber(),
        spend: accountToSpend.get(a.id) ?? 0,
        id: a.id,
        businessManager: businessManager && {
          active: businessManager.isActive,
          bmId: businessManager.externalId,
          id: businessManager.id,
          name: businessManager.name,
          trafficSource: businessManager.trafficSourceType,
        },
      };
    });
  }

  public async findManyWithApiAccess(filters: TrafficSourceAccountFilters): Promise<TrafficSourceAccountWithApiAccessDto[]> {
    const accounts = await this.prismaClient.trafficSourceAccount.findMany({
      where: createAccountWhere(filters),
      select: createAccountBaseSelectWithApiAccess()
    })
  
    return accounts.map(a => ({
      ...a,
      balance: a.balance.toNumber(),
      amountSpent: a.amountSpent.toNumber(),
      spendCap: a.spendCap.toNumber()
    }));
  }

  public async findMany(filters: TrafficSourceAccountFilters): Promise<TrafficSourceAccountBaseDto[]> {
    const accounts = await this.prismaClient.trafficSourceAccount.findMany({
      where: createAccountWhere(filters),
      select: createAccountBaseSelect()
    })

    return accounts.map(a => ({
      ...a,
      balance: a.balance.toNumber(),
      amountSpent: a.amountSpent.toNumber(),
      spendCap: a.spendCap.toNumber()
    }));
  }

  public async updateMany(filters: TrafficSourceAccountFilters, data: TrafficSourceAccountUpdateDto) {
    await this.prismaClient.trafficSourceAccount.updateMany({
      where: createAccountWhere(filters),
      data
    })
  }

  public async upsert(input: TrafficSourceAccountUpsertInputDto): Promise<number> {
    // create or update
    const trafficSourceAccount = await this.prismaClient.trafficSourceAccount.upsert({
      where: {
        trafficSourceType_externalId: {
          externalId: input.data.externalId,
          trafficSourceType: input.data.trafficSourceType
        }
      },
      create: input.data,
      update: input.data,
      select: {
        id: true
      }
    });

    // connect
    if(input.bmsToConnect) {
      for(const bmId of input.bmsToConnect) {
        await this.prismaClient.trafficSourceAccountToTrafficSourceBm.upsert({
          where: {
            trafficSourceBmId_trafficSourceAccountId: {
              trafficSourceAccountId: trafficSourceAccount.id,
              trafficSourceBmId: bmId
            },
          },
          create: {
            trafficSourceAccountId: trafficSourceAccount.id,
            trafficSourceBmId: bmId
          },
          update: {}
        })
      }
    }

    // disconnect
    if(input.bmsToDisconnect) {
      await this.prismaClient.trafficSourceAccountToTrafficSourceBm.deleteMany({
        where: {
          trafficSourceAccountId: trafficSourceAccount.id,
          trafficSourceBmId: {
            notIn: input.bmsToDisconnect.notIn && [...input.bmsToDisconnect.notIn],
            in: input.bmsToDisconnect.in && [...input.bmsToDisconnect.in]
          }
        }
      })
    }

    return trafficSourceAccount.id;
  }
}


export function createAccountBaseSelectWithApiAccess() {
  return {
    ...createAccountBaseSelect(),
    trafficSourceAccountToTrafficSourceBmConnections: {
      select: {
        trafficSourceBm: {
          select: {
            trafficSourceBmToApiAccessConnections: {
              select: {
                apiAccess: {
                  select: createApiAccessBaseSelect()
                }
              }
            }
          }
        }
      }
    }
  }
}

export function createAccountWhere(filters: TrafficSourceAccountFilters) {
  return createPrismaWhere<TrafficSourceAccountFilters, Prisma.TrafficSourceAccountWhereInput>(filters, (filters, where) => {
    if(filters.id?.in && filters.id?.in.length > 0) {
      where.addWhereConditions({
        id: {
          in: filters.id.in
        }
      })
    }

    if(filters.id?.notIn && filters.id.notIn.length > 0) {
      where.addWhereConditions({
        id: {
          notIn: filters.id.notIn
        }
      })
    }

    if(filters.isActive !== undefined) {
      where.addWhereConditions({
        isActive: filters.isActive
      })
    }

    if(filters.trafficSourceType) {
      where.addWhereConditions({
        trafficSourceType: filters.trafficSourceType
      })
    }

    if(filters.apiAccess?.isActive !== undefined) {
      where.addWhereConditions({
        trafficSourceAccountToTrafficSourceBmConnections: {
          some: {
            trafficSourceBm: {
              trafficSourceBmToApiAccessConnections: {
                some: {
                  apiAccess: {
                    isActive: filters.apiAccess?.isActive
                  }
                }
              }
            }
          }
        }
      })
    }
  })
}

export function createAccountBaseSelect() {
  return createPrismaSelect<TrafficSourceAccountBaseDto>({
    id: true,
    amountSpent: true,
    balance: true,
    externalCreatedTime: true,
    externalCurrency: true,
    externalId: true,
    externalStatus: true,
    externalTimezone: true,
    isActive: true,
    name: true,
    spendCap: true,
    status: true,
    trafficSourceOwnerBmId: true,
    trafficSourceType: true
  })
}
