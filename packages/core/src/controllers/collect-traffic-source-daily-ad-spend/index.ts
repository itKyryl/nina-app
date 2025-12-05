import { CollectTrafficSourceDailyAdSpendUseCaseInputDto, CollectTrafficSourceDailyAdSpendUseCaseOutputDto } from "../../domain/use-cases/collect-traffic-source-daily-ad-spend.types";
import CollectTrafficSourceDailyAdSpendUseCase from "../../use-cases/collect-traffic-source-daily-ad-spend";
import { BaseController } from "../BaseController";

class CollectTrafficSourceDailyAdSpendController extends BaseController<CollectTrafficSourceDailyAdSpendUseCaseInputDto, CollectTrafficSourceDailyAdSpendUseCaseOutputDto, void> {
  constructor(private readonly dependency: { useCase: CollectTrafficSourceDailyAdSpendUseCase }
  ) { super() }

  async useCasesImplementation(params: CollectTrafficSourceDailyAdSpendUseCaseInputDto) {
    return this.dependency.useCase.execute(params);
  }
}

export default CollectTrafficSourceDailyAdSpendController;
