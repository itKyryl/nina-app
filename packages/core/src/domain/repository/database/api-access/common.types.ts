import z from "zod";
import { TrafficSourceTypeDto } from "../../commont.types";

export const apiAccessTypeEnum = {
    TRAFFIC_SOURCE_SOC: "TRAFFIC_SOURCE_SOC",
} as const;
export const apiAccessTypeSchema = z.enum(apiAccessTypeEnum);
export type ApiAccessTypeDto = z.infer<typeof apiAccessTypeSchema>;

export type ApiAccessFilters = {
    isActive?: boolean,
    apiAccessType?: ApiAccessTypeDto
}

export type ApiAccessBaseDto = {
    id: number,
    trafficSourceType: TrafficSourceTypeDto | null,
    apiAccessType: ApiAccessTypeDto
    isActive: boolean
    name: string,
    login: string | null,
    password: string | null,
    firstAccessToken: string | null,
    secondAccessToken: string | null,
};


