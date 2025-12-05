import { PrismaRepositoryClient } from "../../../clients/prisma";
import { Prisma } from "../../../clients/prisma/generated";
import { ApiAccessBaseDto, ApiAccessFilters } from "../../../domain/repository/database/api-access/common.types";
import { createPrismaSelect, createPrismaWhere } from "../../../utils";
import IApiAccessDatabaseRepository from "./api-access-database.repository.interface";

export default class ApiAccessPrismaRepository implements IApiAccessDatabaseRepository {

  constructor(private readonly prismaClient: PrismaRepositoryClient) { }

  public async findMany(filters: ApiAccessFilters): Promise<ApiAccessBaseDto[]> {
    const apiAccess = await this.prismaClient.apiAccess.findMany({
      where: createApiAccessWhere(filters),
      select: createApiAccessBaseSelect()
    });

    return apiAccess;
  }
}

export function createApiAccessBaseSelect() {
    return createPrismaSelect<ApiAccessBaseDto>({
      id: true,
      apiAccessType: true,
      firstAccessToken: true,
      isActive: true,
      login: true,
      name: true,
      password: true,
      secondAccessToken: true,
      trafficSourceType: true
    })
  }

export function createApiAccessWhere(filters: ApiAccessFilters) {
    return createPrismaWhere<ApiAccessFilters, Prisma.ApiAccessWhereInput>(filters, (filters, where) => {
        if(filters.isActive !== undefined) {
          where.addWhereConditions({
            isActive: filters.isActive
          })
        }

        if(filters.apiAccessType) {
          where.addWhereConditions({
            apiAccessType: filters.apiAccessType
          })
        }
      })
  }
