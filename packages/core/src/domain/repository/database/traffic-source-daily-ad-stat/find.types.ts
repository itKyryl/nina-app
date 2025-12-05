import { ApiAccessBaseDto } from "../api-access/common.types";
import { TrafficSourceDailyAdStatBaseDto } from "./common.types";

export type TrafficSourceDailyAdStatWithApiAccessDto = TrafficSourceDailyAdStatBaseDto & {
    trafficSourceBmToApiAccessConnections: {
        apiAccess: ApiAccessBaseDto
    }[]
};