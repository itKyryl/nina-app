import z from "zod";

export type TaskFilters = {
    status?: TaskStatusDto
}

const taskStatusEnum = {
    PENDING: "PENDING",
    RUNNING: "RUNNING",
    FAILED: "FAILED",
    DONE: "DONE",
} as const;

export type TaskBaseDto = {
    id: number,
    status: TaskStatusDto,
    error: string | null,
    type: TaskTypeDto
    payload: any
    result: any,
    createDate: Date
};


export const taskStatusSchema = z.enum(taskStatusEnum);

export type TaskStatusDto = z.infer<typeof taskStatusSchema>;

const taskTypeEnum = {
    COLLECT_TRAFFIC_SOURCE_DATA: "COLLECT_TRAFFIC_SOURCE_DATA",
} as const;

export const taskTypeSchema = z.enum(taskTypeEnum);

export type TaskTypeDto = z.infer<typeof taskTypeSchema>;
