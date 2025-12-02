import { TasksUpdateUseCaseOutputDto, TaskUpdateUseCaseInputDto } from "../../domain/use-cases/tasks-update.types";
import TasksUpdateUseCase from "../../use-cases/task-update";
import { BaseController } from "../BaseController";

class TaskUpdateController extends BaseController<TaskUpdateUseCaseInputDto, TasksUpdateUseCaseOutputDto, void> {
  constructor(private readonly dependency: { useCase: TasksUpdateUseCase }
  ) { super() }

  async useCasesImplementation(params: TaskUpdateUseCaseInputDto) {
    return this.dependency.useCase.execute(params);
  }
}

export default TaskUpdateController;
