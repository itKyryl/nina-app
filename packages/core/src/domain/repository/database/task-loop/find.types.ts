import { TaskBaseDto } from "../task/common.types";
import { TaskLoopBaseDto } from "./common.types";

export type TaskLoopWithTasksBaseDto = TaskLoopBaseDto & {
    tasks: TaskBaseDto[]
}