import { TrafficSourceAccountFilters } from "../../domain/repository/database/traffic-source-account/common.types";
import { GetAccountsForExternalPurposesUseCaseOutput } from "../../domain/use-cases/get-accounts-for-external-purposes.types";
import ITrafficSourceAccountDatabaseRepository from "../../repositories/database/traffic-source-account/traffic-source-account-database.repository.interface";
import IBaseUseCase from "../BaseUseCase.interface";

// use case for front
export class GetAccountsForExternalPurposesUseCase
  implements IBaseUseCase<TrafficSourceAccountFilters, GetAccountsForExternalPurposesUseCaseOutput>
{
  constructor(
    private readonly dependency: {
      accountDatabaseRepository: ITrafficSourceAccountDatabaseRepository;
    },
  ) {}

  public async execute(filters: TrafficSourceAccountFilters) {
    return await this.dependency.accountDatabaseRepository.getManyForExternalPurposes(
      filters,
    );
  }
}
