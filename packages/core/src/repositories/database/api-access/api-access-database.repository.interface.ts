import { ApiAccessBaseDto, ApiAccessFilters } from "../../../domain/repository/database/api-access/common.types";

export default interface IApiAccessDatabaseRepository {
  findMany(
    filters: ApiAccessFilters
  ): Promise<ApiAccessBaseDto[]>;
}
