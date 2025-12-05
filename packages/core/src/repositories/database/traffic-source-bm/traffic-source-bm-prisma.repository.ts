import { PrismaRepositoryClient } from "../../../clients/prisma";
import { Prisma } from "../../../clients/prisma/generated";
import { ApiAccessFilters } from "../../../domain/repository/database/api-access/common.types";
import { TrafficSourceBmFilters, TrafficSourceBmBaseDto } from "../../../domain/repository/database/traffic-source-bm/common.types";
import { TrafficSourceBmWithApiAccessDto } from "../../../domain/repository/database/traffic-source-bm/find.types";
import { TrafficSourceBmUpdateDto, TrafficSourceBmUpsertInputDto } from "../../../domain/repository/database/traffic-source-bm/update.types";
import { createPrismaSelect, createPrismaWhere } from "../../../utils";
import { createApiAccessBaseSelect, createApiAccessWhere } from "../api-access/api-access-prisma.repository";
import ITrafficSourceBmDatabaseRepository from "./traffic-source-bm-database.repository.interface";

export default class TrafficSourceBmPrismaRepository implements ITrafficSourceBmDatabaseRepository {

  constructor(private readonly prismaClient: PrismaRepositoryClient) { }
  
  public async updateMany(filters: TrafficSourceBmFilters, data: TrafficSourceBmUpdateDto) {
    await this.prismaClient.trafficSourceBm.updateMany({
      where: createBmWhere(filters),
      data
    })
  }

  public async findManyWithApiAccess(filters: TrafficSourceBmFilters): Promise<TrafficSourceBmWithApiAccessDto[]> {
    const bms = await this.prismaClient.trafficSourceBm.findMany({
      where: createBmWhere(filters),
      select: createBmBaseSelectWithApiAccess()
    })
  
    return bms;
  }

  public async findMany(filters: TrafficSourceBmFilters): Promise<TrafficSourceBmBaseDto[]> {
    const bms = await this.prismaClient.trafficSourceBm.findMany({
      where: createBmWhere(filters),
      select: createBmBaseSelect()
    })
  
    return bms;
  }

  public async upsert(input: TrafficSourceBmUpsertInputDto): Promise<number> {
    // create or update
    const trafficSourceBm = await this.prismaClient.trafficSourceBm.upsert({
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
    if(input.apiAccessToConnect) {
      for(const apiAccessId of input.apiAccessToConnect) {
        await this.prismaClient.trafficSourceBmToApiAccess.upsert({
          where: {
            trafficSourceBmId_apiAccessId: {
              trafficSourceBmId: trafficSourceBm.id,
              apiAccessId: apiAccessId
            },
          },
          create: {
            trafficSourceBmId: trafficSourceBm.id,
            apiAccessId: apiAccessId
          },
          update: {}
        })
      }
    }

    // disconnect
    if(input.apiAccessToDisconnect) {
      await this.prismaClient.trafficSourceBmToApiAccess.deleteMany({
        where: {
          trafficSourceBmId: trafficSourceBm.id,
          apiAccessId: {
            notIn: input.apiAccessToDisconnect.notIn && [...input.apiAccessToDisconnect.notIn],
            in: input.apiAccessToDisconnect.in && [...input.apiAccessToDisconnect.in]
          }
        }
      })
    }

    return trafficSourceBm.id;
  }
}

export function createBmBaseSelectWithApiAccess() {
  return {
    ...createPrismaSelect<TrafficSourceBmBaseDto>({
      id: true,
      externalId: true,
      isActive: true,
      name: true,
      trafficSourceType: true
    }),
    trafficSourceBmToApiAccessConnections: {
      select: {
        apiAccess: {
          select: createApiAccessBaseSelect(),
        }
      }
    }
  }
}

export function createBmBaseSelect() {
  return createPrismaSelect<TrafficSourceBmBaseDto>({
    id: true,
    externalId: true,
    isActive: true,
    name: true,
    trafficSourceType: true
  })
}

export function createBmWhere(filters: TrafficSourceBmFilters) {
  return createPrismaWhere<TrafficSourceBmFilters, Prisma.TrafficSourceBmWhereInput>(filters, (filters, where) => {
      if(filters.isActive !== undefined) {
        where.addWhereConditions({
          isActive: filters.isActive
        })
      }

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

      if(filters.apiAccess?.isActive !== undefined) {
        where.addWhereConditions({
          trafficSourceBmToApiAccessConnections: {
            some: {
              apiAccess: {
                isActive: filters.apiAccess.isActive
              }
            }
          }
        })
      }
    })
}
