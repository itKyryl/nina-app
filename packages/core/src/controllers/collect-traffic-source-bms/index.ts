import { CollectTrafficSourceBmsUseCaseInputDto, CollectTrafficSourceBmsUseCaseOutputDto } from "../../domain/use-cases/collect-traffic-source-bms.types";
import CollectTrafficSourceBmsUseCase from "../../use-cases/collect-traffic-source-bms";
import { BaseController } from "../BaseController";

class CollectTrafficSourceBmsController extends BaseController<CollectTrafficSourceBmsUseCaseInputDto, CollectTrafficSourceBmsUseCaseOutputDto, void> {
  constructor(private readonly dependency: { useCase: CollectTrafficSourceBmsUseCase }
  ) { super() }

  async useCasesImplementation(params: CollectTrafficSourceBmsUseCaseInputDto) {
    return this.dependency.useCase.execute(params);
  }
}

export default CollectTrafficSourceBmsController;
