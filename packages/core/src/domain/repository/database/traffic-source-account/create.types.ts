import { TrafficSourceAccountBaseDto } from "./common.types";

export type TrafficSourceAccountCreateDto = Omit<TrafficSourceAccountBaseDto, 'id' | 'createDate' | 'updateDate'>;