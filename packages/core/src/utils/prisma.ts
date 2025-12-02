import PrismaWhereBuilderService from "../services/prisma-where-builder/prisma-where-builder.service.";

export function createPrismaSelect<EntityDto>(entries: Record<keyof EntityDto, boolean>) {
    return entries;
}

export function createPrismaWhere<FiltersType, PrismaWhereInput>(filters: FiltersType, callback: (filters: FiltersType, where: PrismaWhereBuilderService<PrismaWhereInput>) => void) {
    const where = new PrismaWhereBuilderService<PrismaWhereInput>();

    callback(filters, where);

    return where.buildWhere();
  }