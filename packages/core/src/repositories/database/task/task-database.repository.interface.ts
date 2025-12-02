import { TaskBaseDto, TaskFilters } from "../../../domain/repository/database/task/common.types";
import { TaskUpdateDto } from "../../../domain/repository/database/task/update.types";

export default interface ITaskDatabaseRepository {
  findMany(
    filters: TaskFilters
  ): Promise<TaskBaseDto[]>;

  update(
    id: number, data: TaskUpdateDto
  ): Promise<TaskBaseDto>;
}
