import { TrafficSourceTypeDto } from "../../commont.types";

export type TrafficSourceBmFilters = {
    isActive?: boolean,
    apiAccess?: {
        isActive?: boolean
    },
    id?: {
        in?: number[],
        notIn?: number[]
    }
}

export type TrafficSourceBmBaseDto = {
    id: number,
    trafficSourceType: TrafficSourceTypeDto,
    externalId: string,
    name: string,
    isActive: boolean
};
