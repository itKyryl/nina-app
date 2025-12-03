import { TaskBaseDto } from "./common.types";

export type TaskCreateDto = Omit<TaskBaseDto, 'id' | 'createDate' | 'updateDate' | 'payload' | 'result'> & {
    result: Record<string, any>
    payload: Record<string, any>
}