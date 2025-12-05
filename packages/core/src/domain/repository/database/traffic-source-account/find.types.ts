import { ApiAccessBaseDto } from "../api-access/common.types";
import { TrafficSourceAccountBaseDto } from "./common.types";

export type TrafficSourceAccountWithApiAccessDto = TrafficSourceAccountBaseDto & {
    trafficSourceAccountToTrafficSourceBmConnections: {
        trafficSourceBm: {
            trafficSourceBmToApiAccessConnections: {
                apiAccess: ApiAccessBaseDto
            }[]
        }
    }[]
};