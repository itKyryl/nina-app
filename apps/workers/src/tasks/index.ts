import { TaskTypeDto } from '@repo/core/domain/repository/database/task/common.types';
import collectTrafficSourceDataTask from './collect-traffic-source-data.task';

export default async function ({ 
    type, 
    payload 
}: { type: TaskTypeDto, payload: any }): Promise<Record<string, number | string | boolean>> { 
    switch (type) { 
        case "COLLECT_TRAFFIC_SOURCE_DATA": 
            return await collectTrafficSourceDataTask(payload); 
        default: 
        throw new Error("Unknown task type"); 
    } 
}