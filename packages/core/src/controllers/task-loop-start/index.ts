import { TaskLoopStartUseCaseInputDto, TaskLoopStartUseCaseOutputDto } from "../../domain/use-cases/task-loop-start.types";
import TaskLoopStartUseCase from "../../use-cases/task-loop-start";
import { BaseController } from "../BaseController";

class TaskLoopStartController extends BaseController<TaskLoopStartUseCaseInputDto, TaskLoopStartUseCaseOutputDto, void> {
  constructor(private readonly dependency: { useCase: TaskLoopStartUseCase }
  ) { super() }

  async useCasesImplementation(params: TaskLoopStartUseCaseInputDto) {
    return this.dependency.useCase.execute(params);
  }
}

export default TaskLoopStartController;
