import { ApiAccessBaseDto } from "../api-access/common.types";
import { TrafficSourceBmBaseDto } from "./common.types";

export type TrafficSourceBmWithApiAccessDto = TrafficSourceBmBaseDto & {
    trafficSourceBmToApiAccessConnections: {
        apiAccess: ApiAccessBaseDto
    }[]
};