import { TrafficSourceTypeDto } from "../../commont.types";

export type TrafficSourceDailyAdStatFilters = {
    id?: {
        in?: number[],
        notIn?: number[]
    }
}

export type TrafficSourceDailyAdStatBaseDto = {
    id: number,
    trafficSourceType: TrafficSourceTypeDto,
    spend: number,
    clicks: number,
    externalAdId: string,
    externalAdSetId: string,
    externalCampaignId: string,
    impressions: number,
    externalDateStart: Date,
    externalDateStop: Date,
    trafficSourceAccountId: number
};
