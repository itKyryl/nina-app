import IBaseUseCase from "../BaseUseCase.interface";
import ITaskDatabaseRepository from "../../repositories/database/task/task-database.repository.interface";
import { TasksFindManyUseCaseInputDto, TasksFindManyUseCaseOutputDto } from "../../domain/use-cases/tasks-find-many.types";

export default class TasksFindManyUseCase
  implements
    IBaseUseCase<
      TasksFindManyUseCaseInputDto,
      TasksFindManyUseCaseOutputDto
    >
{
  constructor(
    private readonly dependency: {
      taskDatabaseRepository: ITaskDatabaseRepository;
    },
  ) {}

  async execute(
    input: TasksFindManyUseCaseInputDto,
  ) {
    return this.dependency.taskDatabaseRepository.findMany(input.filters);
  }
}
