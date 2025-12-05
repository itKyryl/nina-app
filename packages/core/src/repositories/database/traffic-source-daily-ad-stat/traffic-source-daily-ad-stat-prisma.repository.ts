import { PrismaRepositoryClient } from "../../../clients/prisma";
import { Prisma } from "../../../clients/prisma/generated";
import { TrafficSourceDailyAdStatBaseDto, TrafficSourceDailyAdStatFilters } from "../../../domain/repository/database/traffic-source-daily-ad-stat/common.types";
import { TrafficSourceDailyAdStatUpdateDto, TrafficSourceDailyAdStatUpsertInputDto } from "../../../domain/repository/database/traffic-source-daily-ad-stat/update.types";
import { createPrismaSelect, createPrismaWhere } from "../../../utils";
import ITrafficSourceDailyAdStatDatabaseRepository from "./traffic-source-daily-ad-stat-database.repository.interface";

export default class TrafficSourceDailyAdStatPrismaRepository implements ITrafficSourceDailyAdStatDatabaseRepository {

  constructor(private readonly prismaClient: PrismaRepositoryClient) { }
  
  public async updateMany(filters: TrafficSourceDailyAdStatFilters, data: TrafficSourceDailyAdStatUpdateDto) {
    await this.prismaClient.trafficSourceDailyAdStat.updateMany({
      where: createBmWhere(filters),
      data
    })
  }

  public async findMany(filters: TrafficSourceDailyAdStatFilters): Promise<TrafficSourceDailyAdStatBaseDto[]> {
    const adStats = await this.prismaClient.trafficSourceDailyAdStat.findMany({
      where: createBmWhere(filters),
      select: createBmBaseSelect()
    });
  
    return adStats.map( adStat => ({
      ...adStat,
      spend: adStat.spend.toNumber(),
    }));
  }

  public async upsert(input: TrafficSourceDailyAdStatUpsertInputDto): Promise<number> {
    // create or update
    const trafficSourceDailyAdStat = await this.prismaClient.trafficSourceDailyAdStat.upsert({
      where: {
        externalDateStart_trafficSourceAccountId_externalAdId: {
          externalAdId: input.externalAdId,
          externalDateStart: input.externalDateStart,
          trafficSourceAccountId: input.trafficSourceAccountId
        }
      },
      create: input,
      update: input,
      select: {
        id: true
      }
    });

    return trafficSourceDailyAdStat.id;
  }
}

export function createBmBaseSelect() {
  return createPrismaSelect<TrafficSourceDailyAdStatBaseDto>({
    id: true,
    clicks: true,
    externalAdId: true,
    externalAdSetId: true,
    externalCampaignId: true,
    externalDateStart: true,
    externalDateStop: true,
    impressions: true,
    spend: true,
    trafficSourceAccountId: true,
    trafficSourceType: true
  })
}

export function createBmWhere(filters: TrafficSourceDailyAdStatFilters) {
  return createPrismaWhere<TrafficSourceDailyAdStatFilters, Prisma.TrafficSourceDailyAdStatWhereInput>(filters, (filters, where) => {
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
  })
}
