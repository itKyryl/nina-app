import { PrismaRepositoryClient } from "../../../clients/prisma";
import { Prisma } from "../../../clients/prisma/generated";
import { TaskBaseDto, TaskFilters } from "../../../domain/repository/database/task/common.types";
import { TaskCreateDto } from "../../../domain/repository/database/task/create.types";
import { TaskUpdateDto } from "../../../domain/repository/database/task/update.types";
import { createPrismaSelect, createPrismaWhere } from "../../../utils";
import ITaskDatabaseRepository from "./task-database.repository.interface";

export default class TaskPrismaRepository implements ITaskDatabaseRepository {

  constructor(private readonly prismaClient: PrismaRepositoryClient) { }

  public async create(data: TaskCreateDto): Promise<TaskBaseDto> {
    const task = await this.prismaClient.task.create({
      data,
      select: createTaskBaseSelect()
    })

    return task;
  }

  public async findFirst(filters: TaskFilters): Promise<TaskBaseDto | null> {
    const task = await this.prismaClient.task.findFirst({
      where:  createTaskWhere(filters),
      select: createTaskBaseSelect(),
      take: filters.take,
      orderBy: filters.orderBy
    })

    return task;
  }

  public async update(id: number, data: TaskUpdateDto): Promise<TaskBaseDto> {
    const task = await this.prismaClient.task.update({
      where: {
        id
      },
      data,
      select: createTaskBaseSelect()
    })

    return task;
  }

  public async findMany(filters: TaskFilters): Promise<TaskBaseDto[]> {
    const tasks = await this.prismaClient.task.findMany({
      where: createTaskWhere(filters),
      select: createTaskBaseSelect()
    })

    return tasks;
  }
}

export function createTaskBaseSelect() {
  return createPrismaSelect<TaskBaseDto>({
    id: true,
    type: true,
    payload: true,
    result: true,
    status: true,
    error: true,
    createDate: true,
    endTime: true,
    startTime: true,
    taskLoopId: true
  })
}

export function createTaskWhere(filters: TaskFilters) {
  return createPrismaWhere<TaskFilters, Prisma.TaskWhereInput>(filters, (filters, where) => {
      if(filters.status?.eq) {
        where.addWhereConditions({
          status: filters.status.eq
        })
      }

      if(filters.status?.in) {
        where.addWhereConditions({
          status: {
            in: filters.status.in
          }
        })
      }

      if(filters.taskLoopId) {
        where.addWhereConditions({
          taskLoopId: filters.taskLoopId
        })
      }
    })
}
