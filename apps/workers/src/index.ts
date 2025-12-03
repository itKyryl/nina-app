import path from 'path';
import WorkersStartController from '@repo/core/controllers/workers-start/index';
import SettingsPrismaRepository from '@repo/core/repositories/database/settings/settings-prisma.repository';
import TaskPrismaRepository from '@repo/core/repositories/database/task/task-prisma.repository';
import prisma from '@repo/core/clients/prisma/index';
import WorkersStartUseCase from '@repo/core/use-cases/workers-start/index';
import TaskLoopStartController from '@repo/core/controllers/task-loop-start/index';
import TaskLoopStartUseCase from '@repo/core/use-cases/task-loop-start/index';
import TaskLoopPrismaRepository from '@repo/core/repositories/database/task-loop/task-loop-prisma.repository';

const workersStartController = new WorkersStartController({
  useCase: new WorkersStartUseCase({
    settingsDatabaseRepository: new SettingsPrismaRepository(prisma),
    taskDatabaseRepository: new TaskPrismaRepository(prisma)
  })
})

const taskLoopStartController = new TaskLoopStartController({
  useCase: new TaskLoopStartUseCase({
    taskDatabaseRepository: new TaskPrismaRepository(prisma),
    taskLoopDatabaseRepository: new TaskLoopPrismaRepository(prisma)
  })
})

const main = async () => {
  

  await Promise.all(
    [
      // run workers / tasks
      workersStartController.runUseCaseImplementation({
        handlerPath: path.resolve(__dirname, '..', 'dist', 'tasks', 'index.js')
      }),
      // run task loop creator
      taskLoopStartController.runUseCaseImplementation()
    ]
  )
}

main();