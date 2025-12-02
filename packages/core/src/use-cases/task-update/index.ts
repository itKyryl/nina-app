import IBaseUseCase from "../BaseUseCase.interface";
import ITaskDatabaseRepository from "../../repositories/database/task/task-database.repository.interface";
import { TasksUpdateUseCaseOutputDto, TaskUpdateUseCaseInputDto } from "../../domain/use-cases/tasks-update.types";

export default class TasksUpdateUseCase
  implements
    IBaseUseCase<
      TaskUpdateUseCaseInputDto,
      TasksUpdateUseCaseOutputDto
    >
{
  constructor(
    private readonly dependency: {
      taskDatabaseRepository: ITaskDatabaseRepository;
    },
  ) {}

  async execute(
    input: TaskUpdateUseCaseInputDto,
  ) {
    return this.dependency.taskDatabaseRepository.update(input.id, input.data);
  }
}
