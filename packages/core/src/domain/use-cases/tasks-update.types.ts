import { TaskBaseDto, TaskFilters } from "../repository/database/task/common.types"
import { TaskUpdateDto } from "../repository/database/task/update.types"

export type TaskUpdateUseCaseInputDto = {
    id: number,
    data: TaskUpdateDto
}

export type TasksUpdateUseCaseOutputDto = TaskBaseDto;

