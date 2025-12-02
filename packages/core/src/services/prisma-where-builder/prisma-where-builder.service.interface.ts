export default interface IPrismaBuilderService<WhereType> {
  buildWhere(): WhereType;

  addWhereConditions(conditions: WhereType): void;
}
