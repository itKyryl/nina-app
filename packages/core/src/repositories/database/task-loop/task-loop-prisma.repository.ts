import { PrismaRepositoryClient } from "../../../clients/prisma";
import { Prisma } from "../../../clients/prisma/generated";
import { TaskLoopBaseDto, TaskLoopFilters } from "../../../domain/repository/database/task-loop/common.types";
import { TaskLoopWithTasksBaseDto } from "../../../domain/repository/database/task-loop/find.types";
import { TaskLoopUpdateDto } from "../../../domain/repository/database/task-loop/update.types";
import { createPrismaSelect, createPrismaWhere } from "../../../utils";
import { createTaskBaseSelect, createTaskWhere } from "../task/task-prisma.repository";
import ITaskLoopDatabaseRepository from "./task-loop-database.repository.interface";

export default class TaskLoopPrismaRepository implements ITaskLoopDatabaseRepository {

  constructor(private readonly prismaClient: PrismaRepositoryClient) { }

  public async update(id: number, data: TaskLoopUpdateDto): Promise<TaskLoopBaseDto> {
    const task = await this.prismaClient.taskLoop.update({
      where: {
        id
      },
      data,
      select: this.createTaskLoopBaseSelect()
    })

    return task;
  }

  public async findMany(filters: TaskLoopFilters): Promise<TaskLoopBaseDto[]> {
    const tasks = await this.prismaClient.taskLoop.findMany({
      where: this.createTaskLoopWhere(filters),
      select: this.createTaskLoopBaseSelect()
    })

    return tasks;
  }

  public async findManyWithTasks(filters: TaskLoopFilters): Promise<TaskLoopWithTasksBaseDto[]> {
    const tasks = await this.prismaClient.taskLoop.findMany({
      where: this.createTaskLoopWhere(filters),
      select: this.createTaskLoopWithTasksBaseSelect()
    })

    return tasks;
  }

  protected createTaskLoopWhere(filters: TaskLoopFilters) {
    return createPrismaWhere<TaskLoopFilters, Prisma.TaskLoopWhereInput>(filters, (filters, where) => {
        if(filters.task?.some) {
          where.addWhereConditions({
            tasks: {
              some: createTaskWhere(filters.task.some),
            }
          })
        }

        if(filters.isActive !== undefined) {
          where.addWhereConditions({
            isActive: filters.isActive
          })
        }
      })
  }

  protected createTaskLoopWithTasksBaseSelect() {
    return {
      ...this.createTaskLoopBaseSelect(),
      tasks: {
        select: createTaskBaseSelect()
      }
    }
  }

  protected createTaskLoopBaseSelect() {
    return createPrismaSelect<TaskLoopBaseDto>({
      id: true,
      type: true,
      payload: true,
      intervalMin: true,
      isActive: true
    })
  }
}
