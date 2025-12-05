import IBaseUseCase from "../BaseUseCase.interface";
import { handleLog } from "../../utils/error";
import ITrafficSourceBmDatabaseRepository from "../../repositories/database/traffic-source-bm/traffic-source-bm-database.repository.interface";
import IFacebookApiRepositoryFactory from "../../factories/api/Facebook/FacebookApiRepository.factory.interface";
import { TrafficSourceType } from "../../clients/prisma/generated";
import { ApiAccessToDisconnectDto, TrafficSourceBmUpsertInputDto } from "../../domain/repository/database/traffic-source-bm/update.types";
import { nodeEnv } from "../../utils/env";
import { CollectFacebookAccountsByApiTokenInputDto, CollectTrafficSourceAccountsUseCaseInputDto, CollectTrafficSourceAccountsUseCaseOutputDto, ConvertApiAccountsToDbUpsertInput, TrafficSourceAccountUpsertInputsDto } from "../../domain/use-cases/collect-traffic-source-accounts.types";
import ITrafficSourceAccountDatabaseRepository from "../../repositories/database/traffic-source-account/traffic-source-account-database.repository.interface";
import { convertNativeFbStatusToAbstractStatus, generateTrafficSourceKey } from "../../helpers/traffic-source.helper";
import { FacebookAccountApiDto } from "../../domain/repository/api/facebook/account.types";
import { TrafficSourceAccountUpsertDto, TrafficSourceAccountUpsertInputDto } from "../../domain/repository/database/traffic-source-account/update.types";
import _ from "lodash";

export default class CollectTrafficSourceAccountsUseCase
  implements
    IBaseUseCase<
      CollectTrafficSourceAccountsUseCaseInputDto,
      CollectTrafficSourceAccountsUseCaseOutputDto
    >
{
  constructor(
    private readonly dependency: {
      trafficSourceAccountDatabaseRepository: ITrafficSourceAccountDatabaseRepository,
      trafficSourceBmDatabaseRepository: ITrafficSourceBmDatabaseRepository,
      facebookApiRepositoryFactory: IFacebookApiRepositoryFactory
    },
  ) {}

  public async execute(input: CollectTrafficSourceAccountsUseCaseInputDto) {
    let bms = await this.dependency.trafficSourceBmDatabaseRepository.findManyWithApiAccess({
      isActive: true,
      apiAccess: {
        isActive: true
      },
    });

    if(nodeEnv() === 'test') {
      bms = bms.filter(a => a.externalId === '1251850253411555');
    }

    let accountsToUpdateOrCreate: TrafficSourceAccountUpsertInputsDto = new Map();

    for(const bm of bms) {
      try {
        let bmAccountsToUpdateOrCreate: TrafficSourceAccountUpsertInputsDto = new Map();
  
        switch (bm.trafficSourceType) {
          case 'FACEBOOK':
            const apiAccess = bm.trafficSourceBmToApiAccessConnections[0]?.apiAccess;
  
            if(!apiAccess) {
              await handleLog({
                message: `Unable to collect accounts. ApiAccess does not exists for bm with id ${bm.id}`
              });
              
              break;
            }
  
            const apiToken = apiAccess.firstAccessToken ?? apiAccess.secondAccessToken;
            if(!apiToken) {
              await handleLog({
                message: `Unable to collect accounts. ApiToken does not exists for active api access with id ${apiAccess.id}`
              });
              
              break;
            }
  
            bmAccountsToUpdateOrCreate = await this.collectFacebookAccountsByApiTokenAndBmId({
              apiToken: apiToken,
              bmExternalId: bm.externalId,
              bmId: bm.id
            });
            break;
  
          default:
            break;
        }
  
        if(nodeEnv() === 'test') {
          console.log(`Collected ${[...bmAccountsToUpdateOrCreate].length} accounts for bm ${bm.id}(${bm.name})`);
        }
  
        for(let [apiAccessBmsToUpdateOrCreateKey, apiAccessBmsToUpdateOrCreateData] of bmAccountsToUpdateOrCreate) {
          const existingBm = accountsToUpdateOrCreate.get(apiAccessBmsToUpdateOrCreateKey);
  
          if(existingBm) {
            accountsToUpdateOrCreate.set(apiAccessBmsToUpdateOrCreateKey, this.combineTwoBmMapsData(existingBm, apiAccessBmsToUpdateOrCreateData))
          } else {
            accountsToUpdateOrCreate.set(apiAccessBmsToUpdateOrCreateKey, apiAccessBmsToUpdateOrCreateData);
          }
        }
      } catch (e: any) {
        await handleLog({
          ...e,
          message: `Unknown error during account collection. Error: ${e.message}`
        });
      }
    }

    const createdOrUpdatedAccountIds: number[] = [];

    for(const [_key, bmToUpdateOrCreate] of accountsToUpdateOrCreate) {
      const createdOrUpdatedAccountId = await this.dependency.trafficSourceAccountDatabaseRepository.upsert(bmToUpdateOrCreate);
      createdOrUpdatedAccountIds.push(createdOrUpdatedAccountId);
    }

    const createdOrUpdatedAccountIdsChunks = _.chunk(createdOrUpdatedAccountIds, 1000);

    // mark bms which was not fetched as inactive
    for(let createdOrUpdatedAccountIdsChunk of createdOrUpdatedAccountIdsChunks) {
      await this.dependency.trafficSourceAccountDatabaseRepository.updateMany({
        id: {
          notIn: createdOrUpdatedAccountIdsChunk
        }
      }, {
        isActive: false
      })
    }

    return {
      collectedAccounts: createdOrUpdatedAccountIds
    }
  }

  protected combineTwoBmMapsData(map1Data: TrafficSourceAccountUpsertInputDto, map2Data: TrafficSourceAccountUpsertInputDto): TrafficSourceAccountUpsertInputDto {
    const bmsToConnect = new Set([...map1Data.bmsToConnect ?? [], ...map2Data.bmsToConnect ?? []]);
    const bmsToDisconnect: ApiAccessToDisconnectDto = {
      in: new Set([...map1Data.bmsToDisconnect?.in ?? [], ...map2Data.bmsToDisconnect?.in ?? []]),
      notIn: new Set([...map1Data.bmsToDisconnect?.notIn ?? [], ...map2Data.bmsToDisconnect?.notIn ?? []])
    };

    return {
      data: map1Data.data,
      bmsToConnect,
      bmsToDisconnect
    };
  }

  protected async collectFacebookAccountsByApiTokenAndBmId(input: CollectFacebookAccountsByApiTokenInputDto): Promise<TrafficSourceAccountUpsertInputsDto> {

    const facebookApiRepository = this.dependency.facebookApiRepositoryFactory.create({
      apiToken: input.apiToken,
    });

    const fbApiAccounts = await facebookApiRepository.getAccountsByBm(input.bmExternalId);

    const convertedOwnedFbAccounts = this.convertApiAccountsToDbUpsertStructure({
      bmConnectId: input.bmId,
      bmOwnerId: input.bmId,
      apiAccounts: fbApiAccounts.accountsOwned
    });

    const convertedClientFbAccounts = this.convertApiAccountsToDbUpsertStructure({
      bmConnectId: input.bmId,
      apiAccounts: fbApiAccounts.clientAccounts
    });

    return new Map([...convertedOwnedFbAccounts, ...convertedClientFbAccounts]);
  }

  protected convertApiAccountsToDbUpsertStructure(input: ConvertApiAccountsToDbUpsertInput): TrafficSourceAccountUpsertInputsDto {
    const fbAccountsToUpdateOrCreate: TrafficSourceAccountUpsertInputsDto = new Map();

    for(const fbApiAccount of input.apiAccounts) {
      fbAccountsToUpdateOrCreate.set(generateTrafficSourceKey('FACEBOOK', fbApiAccount.id), {
        data: {
          name: fbApiAccount.name,
          externalId: fbApiAccount.account_id,
          trafficSourceType: 'FACEBOOK',
          amountSpent: fbApiAccount.amount_spent,
          balance: fbApiAccount.spend_cap - fbApiAccount.amount_spent,
          externalCreatedTime: fbApiAccount.created_time,
          externalCurrency: fbApiAccount.currency,
          externalStatus: fbApiAccount.account_status.toString(),
          externalTimezone: fbApiAccount.timezone_name,
          isActive: true,
          spendCap: fbApiAccount.spend_cap,
          status: convertNativeFbStatusToAbstractStatus(fbApiAccount.account_status),
          trafficSourceOwnerBmId: input.bmOwnerId ?? null
        },
        bmsToConnect: new Set([input.bmConnectId]),
        bmsToDisconnect: {
          notIn: new Set([input.bmConnectId])
        }
      })
    }

    return fbAccountsToUpdateOrCreate;
  }
}
