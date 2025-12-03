import { TaskBaseDto, TaskFilters } from "../../../domain/repository/database/task/common.types";
import { TaskCreateDto } from "../../../domain/repository/database/task/create.types";
import { TaskUpdateDto } from "../../../domain/repository/database/task/update.types";

export default interface ITaskDatabaseRepository {
  findMany(
    filters: TaskFilters
  ): Promise<TaskBaseDto[]>;

  findFirst(
    filters: TaskFilters,
  ): Promise<TaskBaseDto | null>;

  update(
    id: number, data: TaskUpdateDto
  ): Promise<TaskBaseDto>;

  create(
    data: TaskCreateDto
  ): Promise<TaskBaseDto>;
}
