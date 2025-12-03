import TaskLoopStartUseCase from ".";
import prisma from "../../clients/prisma";
import TaskLoopPrismaRepository from "../../repositories/database/task-loop/task-loop-prisma.repository";
import TaskPrismaRepository from "../../repositories/database/task/task-prisma.repository";

const useCase = new TaskLoopStartUseCase({
  taskDatabaseRepository: new TaskPrismaRepository(prisma),
  taskLoopDatabaseRepository: new TaskLoopPrismaRepository(prisma)
})

describe(TaskLoopStartUseCase.name, () => {
  it('Works', async () => {
    await useCase.execute();
  }, 9999999)
})