import { AdStatDto } from "../repository/api/facebook/ad-stats.types";
import { TrafficSourceDailyAdStatUpsertDto } from "../repository/database/traffic-source-daily-ad-stat/update.types";

export type CollectTrafficSourceDailyAdSpendUseCaseInputDto = {
    daysToCollect?: number
};

export type CollectTrafficSourceDailyAdSpendUseCaseOutputDto = any;

export type TrafficSourceDailyAdSpendUpsertInputsDto = TrafficSourceDailyAdStatUpsertDto[];

export type CollectFacebookDailyAdSpendByApiTokenInputDto = {
    apiToken: string,
    accountExternalId: string,
    dateFrom: string,
    dateTo: string,
    trafficSourceAccountId: number,
    timezone: string,
}

export type ConvertApiDailyAdSpendToDbUpsertInput = {
    adStats: AdStatDto[],
    timezone: string,
    trafficSourceAccountId: number
}