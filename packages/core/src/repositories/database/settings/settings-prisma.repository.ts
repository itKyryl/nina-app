import { PrismaRepositoryClient } from "../../../clients/prisma";
import { Prisma } from "../../../clients/prisma/generated";
import { SettingsBaseDto, SettingsFilters } from "../../../domain/repository/database/settings/common.types";
import { createPrismaSelect, createPrismaWhere } from "../../../utils/prisma";
import ISettingsDatabaseRepository from "./settings-database.repository.interface";

export default class SettingsPrismaRepository implements ISettingsDatabaseRepository {

  constructor(private readonly prismaClient: PrismaRepositoryClient) { }

  public async findMany(filters: SettingsFilters): Promise<SettingsBaseDto[]> {
    const settings = await this.prismaClient.settings.findMany({
      where: createPrismaWhere<SettingsFilters, Prisma.SettingsWhereInput>(filters, (filters, where) => {
        if(filters.isActive !== undefined) {
          where.addWhereConditions({
            isActive: filters.isActive
          })
        }
      }),
      select: createPrismaSelect<SettingsBaseDto>({
        maxWorkerThreads: true,
        minWorkerThreads: true
      })
    })

    return settings;
  }
}
