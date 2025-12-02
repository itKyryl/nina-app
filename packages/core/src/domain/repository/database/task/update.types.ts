import { TaskBaseDto } from "./common.types";

export type TaskUpdateDto = Partial<(Omit<TaskBaseDto, 'id' | 'createDate' | 'updateDate' | 'payload' | 'result'> & {
    result: Record<string, any>,
    payload: Record<string, any>
})>