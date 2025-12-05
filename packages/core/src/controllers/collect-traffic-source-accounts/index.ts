import { CollectTrafficSourceAccountsUseCaseInputDto, CollectTrafficSourceAccountsUseCaseOutputDto } from "../../domain/use-cases/collect-traffic-source-accounts.types";
import CollectTrafficSourceAccountsUseCase from "../../use-cases/collect-traffic-source-accounts";
import { BaseController } from "../BaseController";

class CollectTrafficSourceAccountsController extends BaseController<CollectTrafficSourceAccountsUseCaseInputDto, CollectTrafficSourceAccountsUseCaseOutputDto, void> {
  constructor(private readonly dependency: { useCase: CollectTrafficSourceAccountsUseCase }
  ) { super() }

  async useCasesImplementation(params: CollectTrafficSourceAccountsUseCaseInputDto) {
    return this.dependency.useCase.execute(params);
  }
}

export default CollectTrafficSourceAccountsController;
