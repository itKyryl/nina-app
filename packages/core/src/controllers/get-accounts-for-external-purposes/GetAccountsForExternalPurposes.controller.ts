import { TrafficSourceAccountFilters } from "../../domain/repository/database/traffic-source-account/common.types";
import { GetAccountsForExternalPurposesUseCaseOutput } from "../../domain/use-cases/get-accounts-for-external-purposes.types";
import { GetAccountsForExternalPurposesUseCase } from "../../use-cases/get-accounts-for-external-purposes/get-accounts-for-external-purposes.use-case";
import { BaseController } from "../BaseController";

class GetAccountsForExternalPurposesController extends BaseController<
  TrafficSourceAccountFilters,
  GetAccountsForExternalPurposesUseCaseOutput,
  any
> {
  constructor(
    private readonly dependency: {
      getAccountsForExternalPurposesUseCase: GetAccountsForExternalPurposesUseCase;
    },
  ) {
    super();
  }

  async useCasesImplementation(filters: TrafficSourceAccountFilters) {
    return this.dependency.getAccountsForExternalPurposesUseCase.execute(
      filters,
    );
  }
}

export default GetAccountsForExternalPurposesController;
