import { TrafficSourceDailyAdStatCreateDto } from "./create.types";

export type TrafficSourceDailyAdStatUpdateDto = Partial<TrafficSourceDailyAdStatCreateDto>;

export type TrafficSourceDailyAdStatUpsertDto = TrafficSourceDailyAdStatCreateDto;

export type ApiAccessToDisconnectDto = {
    notIn?: Set<number>,
    in?: Set<number>
}

export type TrafficSourceDailyAdStatUpsertInputDto = TrafficSourceDailyAdStatUpsertDto;