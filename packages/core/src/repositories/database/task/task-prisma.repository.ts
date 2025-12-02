import { Prisma, PrismaRepositoryClient } from "../../../../../db/src";
import { TaskBaseDto, TaskFilters } from "../../../domain/repository/database/task/common.types";
import { TaskUpdateDto } from "../../../domain/repository/database/task/update.types";
import { createPrismaSelect, createPrismaWhere } from "../../../utils";
import ITaskDatabaseRepository from "./task-database.repository.interface";

export default class TaskPrismaRepository implements ITaskDatabaseRepository {

  constructor(private readonly prismaClient: PrismaRepositoryClient) { }

  public async update(id: number, data: TaskUpdateDto): Promise<TaskBaseDto> {
    const task = await this.prismaClient.task.update({
      where: {
        id
      },
      data,
      select: this.createBaseSelect()
    })

    return task;
  }

  public async findMany(filters: TaskFilters): Promise<TaskBaseDto[]> {
    const tasks = await this.prismaClient.task.findMany({
      where: this.createWhere(filters),
      select: this.createBaseSelect()
    })

    return tasks;
  }

  protected createWhere(filters: TaskFilters) {
    return createPrismaWhere<TaskFilters, Prisma.TaskWhereInput>(filters, (filters, where) => {
        if(filters.status) {
          where.addWhereConditions({
            status: filters.status
          })
        }
      })
  }

  protected createBaseSelect() {
    return createPrismaSelect<TaskBaseDto>({
      id: true,
      type: true,
      payload: true,
      result: true,
      status: true,
      error: true,
      createDate: true
    })
  }
}
