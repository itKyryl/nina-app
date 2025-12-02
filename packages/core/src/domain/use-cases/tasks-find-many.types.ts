import { TaskBaseDto, TaskFilters } from "../repository/database/task/common.types"

export type TasksFindManyUseCaseInputDto = {
    filters: TaskFilters
}

export type TasksFindManyUseCaseOutputDto = TaskBaseDto[]