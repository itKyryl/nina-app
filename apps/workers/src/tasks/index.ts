import { TaskBaseDto, TaskTypeDto } from '@repo/core/domain/repository/database/task/common.types';
import collectTrafficSourceDataTask from './collect-traffic-source-data.task';
import TaskUpdateController from '@repo/core/controllers/task-update/index';
import TasksUpdateUseCase from '@repo/core/use-cases/task-update/index';
import TaskPrismaRepository from '@repo/core/repositories/database/task/task-prisma.repository';
import prisma from '@repo/core/clients/prisma/index';

const updateTaskController = new TaskUpdateController({
    useCase: new TasksUpdateUseCase({
        taskDatabaseRepository: new TaskPrismaRepository(prisma)
    })
})

export default async function ({ 
    type, 
    payload,
    id
}: TaskBaseDto): Promise<Record<string, number | string | boolean>> {
    let result;
    switch (type) {
        case "COLLECT_TRAFFIC_SOURCE_DATA": 
            result = collectTrafficSourceDataTask(payload);
            break;
        default: 
            throw new Error("Unknown task type"); 
    }

    await updateTaskController.runUseCaseImplementation({
        data: {
            startTime: new Date(),
            status: 'RUNNING'
        },
        id
    })

    return result;
}