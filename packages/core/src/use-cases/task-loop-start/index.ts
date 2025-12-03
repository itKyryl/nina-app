import IBaseUseCase from "../BaseUseCase.interface";
import ITaskDatabaseRepository from "../../repositories/database/task/task-database.repository.interface";
import { TaskLoopStartUseCaseInputDto, TaskLoopStartUseCaseOutputDto } from "../../domain/use-cases/task-loop-start.types";
import ITaskLoopDatabaseRepository from "../../repositories/database/task-loop/task-loop-database.repository.interface";
import { delay } from "../../utils";
import moment from "moment";
import { handleLog } from "../../utils/error";

export default class TaskLoopStartUseCase
  implements
    IBaseUseCase<
      TaskLoopStartUseCaseInputDto,
      TaskLoopStartUseCaseOutputDto
    >
{
  constructor(
    private readonly dependency: {
      taskDatabaseRepository: ITaskDatabaseRepository;
      taskLoopDatabaseRepository: ITaskLoopDatabaseRepository;
    },
  ) {}

  async execute(
    input: TaskLoopStartUseCaseInputDto,
  ) {
    while (true) {
      const taskLoops = await this.dependency.taskLoopDatabaseRepository.findManyWithTasks({
        isActive: true
      });

      const tasksCreated: number[] = [];

      for (const taskLoop of taskLoops) {
        const lastTask = await this.dependency.taskDatabaseRepository.findFirst({
          orderBy: {
            createDate: 'desc'
          },
          taskLoopId: taskLoop.id
        });

        let newTaskShouldBeCreated = false;

        if(lastTask) {
          switch (lastTask.status) {
            case 'FAILED':
            case 'PENDING':
            case 'RUNNING':
              newTaskShouldBeCreated = false;
              break;
            case 'DONE':
              if(!lastTask.endTime) {
                await handleLog({
                  message: `Last task status is ${lastTask.status} (id - ${lastTask.id}, type - ${taskLoop.type}. But end time does not exists`
                });
                break;
              }

              const curTime = moment();
              const timeToStartNewTask = moment(lastTask.endTime).add(taskLoop.intervalMin, 'minutes');

              if(curTime.isSameOrAfter(timeToStartNewTask)) {
                newTaskShouldBeCreated = true;
              } else {
                newTaskShouldBeCreated = false;
              }

              break;
            default:
              break;
          }
        } else {
          newTaskShouldBeCreated = true;
        }

        if(newTaskShouldBeCreated) {
          const newTask = await this.dependency.taskDatabaseRepository.create({
            payload: taskLoop.payload,
            status: 'PENDING',
            type: taskLoop.type,
            endTime: null,
            error: null,
            result: {},
            startTime: null,
            taskLoopId: taskLoop.id
          })

          tasksCreated.push(newTask.id);
        }
      }

      console.log(`Created ${tasksCreated.length} new tasks`);
      await delay(5000);
    }
  }
}
