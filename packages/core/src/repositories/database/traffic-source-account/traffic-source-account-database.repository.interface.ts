import { TrafficSourceAccountBaseDto, TrafficSourceAccountFilters } from "../../../domain/repository/database/traffic-source-account/common.types";
import { TrafficSourceAccountWithApiAccessDto } from "../../../domain/repository/database/traffic-source-account/find.types";
import { TrafficSourceAccountUpdateDto, TrafficSourceAccountUpsertInputDto } from "../../../domain/repository/database/traffic-source-account/update.types";
import { GetAccountsForExternalPurposesUseCaseOutput } from "../../../domain/use-cases/get-accounts-for-external-purposes.types";

export default interface ITrafficSourceAccountDatabaseRepository {
  upsert(
    input: TrafficSourceAccountUpsertInputDto
  ): Promise<number>;

  updateMany(
    filters: TrafficSourceAccountFilters,
    data: TrafficSourceAccountUpdateDto
  ): Promise<void>;

  getManyForExternalPurposes(
    filters: TrafficSourceAccountFilters,
  ): Promise<GetAccountsForExternalPurposesUseCaseOutput>;

  findMany(
      filters: TrafficSourceAccountFilters
  ): Promise<TrafficSourceAccountBaseDto[]>;

  findManyWithApiAccess(
    filters: TrafficSourceAccountFilters
  ): Promise<TrafficSourceAccountWithApiAccessDto[]>;
}
