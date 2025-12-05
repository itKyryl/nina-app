import { ApiAccessBaseDto } from "../repository/database/api-access/common.types";
import { TrafficSourceBmUpsertInputDto } from "../repository/database/traffic-source-bm/update.types";

export type CollectTrafficSourceBmsUseCaseInputDto = {
    apiAccess?: ApiAccessBaseDto
} | void;

export type CollectTrafficSourceBmsUseCaseOutputDto = any;

export type TrafficSourceBmUpsertInputsDto = Map<string, TrafficSourceBmUpsertInputDto>;

export type CollectFacebookBmsByApiTokenInputDto = {
    apiToken: string,
    apiAccessId: number
}