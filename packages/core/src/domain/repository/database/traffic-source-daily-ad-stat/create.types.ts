import { TrafficSourceDailyAdStatBaseDto } from "./common.types";

export type TrafficSourceDailyAdStatCreateDto = Omit<TrafficSourceDailyAdStatBaseDto, 'id' | 'createDate' | 'updateDate'>;