import IPrismaBuilderService from "./prisma-where-builder.service.interface";

export default class PrismaWhereBuilderService<WhereType>
  implements IPrismaBuilderService<WhereType>
{
  private where: WhereType = {} as WhereType;

  private andContainer: WhereType[] = [];

  public buildWhere(): WhereType {
    if ((this.andContainer as any[]).length > 0) {
      (this.where as any).AND = this.andContainer;
    }

    return this.where;
  }

  public addWhereConditions(condition: Omit<WhereType, "AND" | "OR" | "NOT">) {
    this.where = {
      ...this.where,
      ...condition,
    };
  }

  public addWhereANDConditions(condition: WhereType) {
    this.andContainer.push(condition);
  }
}
