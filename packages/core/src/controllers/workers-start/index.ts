import { WorkersStartUseCaseInputDto, WorkersStartUseCaseOutputDto } from "../../domain/use-cases/workers-start.types";
import WorkersStartUseCase from "../../use-cases/workers-start";
import { BaseController } from "../BaseController";

class WorkersStartController extends BaseController<WorkersStartUseCaseInputDto, WorkersStartUseCaseOutputDto, void> {
  constructor(private readonly dependency: { useCase: WorkersStartUseCase }
  ) { super() }

  async useCasesImplementation(params: WorkersStartUseCaseInputDto) {
    return this.dependency.useCase.execute(params);
  }
}

export default WorkersStartController;
