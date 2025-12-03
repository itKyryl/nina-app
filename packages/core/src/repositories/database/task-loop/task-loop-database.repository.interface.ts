import { TaskLoopBaseDto, TaskLoopFilters } from "../../../domain/repository/database/task-loop/common.types";
import { TaskLoopWithTasksBaseDto } from "../../../domain/repository/database/task-loop/find.types";
import { TaskLoopUpdateDto } from "../../../domain/repository/database/task-loop/update.types";

export default interface ITaskLoopDatabaseRepository {
  findMany(
    filters: TaskLoopFilters
  ): Promise<TaskLoopBaseDto[]>;

  findManyWithTasks(
    filters: TaskLoopFilters
  ): Promise<TaskLoopWithTasksBaseDto[]>;

  update(
    id: number, data: TaskLoopUpdateDto
  ): Promise<TaskLoopBaseDto>;
}
