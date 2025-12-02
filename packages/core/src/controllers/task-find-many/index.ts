import { TasksFindManyUseCaseInputDto, TasksFindManyUseCaseOutputDto } from "../../domain/use-cases/tasks-find-many.types";
import TasksFindManyUseCase from "../../use-cases/tasks-find-many";
import { BaseController } from "../BaseController";

class TaskFindManyController extends BaseController<TasksFindManyUseCaseInputDto, TasksFindManyUseCaseOutputDto, void> {
  constructor(private readonly dependency: { useCase: TasksFindManyUseCase; }
  ) { super() }

  async useCasesImplementation(params: TasksFindManyUseCaseInputDto) {
    return this.dependency.useCase.execute(params);
  }
}

export default TaskFindManyController;
