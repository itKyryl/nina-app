import { WorkersStartController } from '@repo/core/controllers/index';
import { WorkersStartUseCase } from '@repo/core/use-cases/index';
import { SettingsPrismaRepository, TaskPrismaRepository } from '@repo/core/repositories/database/index';
import prisma from '../../../packages/db/src';
import path from 'path';

const workersStartController = new WorkersStartController({
  useCase: new WorkersStartUseCase({
    settingsDatabaseRepository: new SettingsPrismaRepository(prisma),
    taskDatabaseRepository: new TaskPrismaRepository(prisma)
  })
})

const main = async () => {
  await workersStartController.runUseCaseImplementation({
    handlerPath: path.resolve(__dirname, 'tasks', 'index.js')
  })
}

main();