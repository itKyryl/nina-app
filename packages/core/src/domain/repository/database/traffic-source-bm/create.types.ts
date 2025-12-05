import { TrafficSourceBmBaseDto } from "./common.types";

export type TrafficSourceBmCreateDto = Omit<TrafficSourceBmBaseDto, 'id' | 'createDate' | 'updateDate'>;