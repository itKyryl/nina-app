import { TaskBaseDto, TaskFilters, TaskTypeDto } from "../task/common.types";

export type TaskLoopFilters = {
    task?: {
        some?: TaskFilters
    },
    isActive?: boolean
}

export type TaskLoopBaseDto = {
    id: number,
    type: TaskTypeDto
    intervalMin: number,
    payload: any,
    isActive: boolean
};
