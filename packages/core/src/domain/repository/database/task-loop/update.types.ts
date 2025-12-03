import { TaskLoopBaseDto } from "./common.types";

export type TaskLoopUpdateDto = Partial<(Omit<TaskLoopBaseDto, 'id' | 'createDate' | 'updateDate' | 'payload'> & {
    payload: Record<string, any>
})>