import { TrafficSourceType } from "../clients/prisma/generated";
import { TrafficSourceAccountStatusDto } from "../domain/repository/database/traffic-source-account/common.types";

export function generateTrafficSourceKey(trafficSource: TrafficSourceType, externalId: string) {
    return `${trafficSource}_${externalId}`;
}

export function convertNativeFbStatusToAbstractStatus(externalStatus: number) {
    let abstractStatus: null | TrafficSourceAccountStatusDto = null;

    switch(externalStatus) {
        case 2:
            abstractStatus = 'BLOCK';
            break;
        case 1:
            abstractStatus = 'ACTIVE';
            break;
        case 3:
            abstractStatus = 'PAYMENT_ERROR';
            break;
        case 101:
            abstractStatus = 'CLOSING';
            break;
        case 100:
            abstractStatus = 'EXPIRED'
            break;
        default:
            break;
    }

    return abstractStatus;
}