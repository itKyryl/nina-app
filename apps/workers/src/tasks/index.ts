import { TaskBaseDto } from '@repo/core/domain/repository/database/task/common.types';
import collectTrafficSourceBmsTask from './collect-traffic-source-bms.task';
import TaskUpdateController from '@repo/core/controllers/task-update/index';
import TasksUpdateUseCase from '@repo/core/use-cases/task-update/index';
import TaskPrismaRepository from '@repo/core/repositories/database/task/task-prisma.repository';
import prisma from '@repo/core/clients/prisma/index';
import collectTrafficSourceAccountsTask from './collect-traffic-source-accounts.task';
import collectTrafficSourceDailyAdSpendTask from './collect-traffic-source-daily-ad-spend.task';

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
        case "COLLECT_TRAFFIC_SOURCE_BMS": 
            result = collectTrafficSourceBmsTask(payload);
            break;
        case "COLLECT_TRAFFIC_SOURCE_ACCOUNTS": 
            result = collectTrafficSourceAccountsTask(payload);
            break;
        case "COLLECT_TRAFFIC_SOURCE_DAILY_AD_SPEND": 
            result = collectTrafficSourceDailyAdSpendTask(payload);
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