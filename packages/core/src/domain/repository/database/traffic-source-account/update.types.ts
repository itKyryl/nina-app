import { TrafficSourceAccountCreateDto } from "./create.types";

export type TrafficSourceAccountUpdateDto = Partial<TrafficSourceAccountCreateDto>;

export type TrafficSourceAccountUpsertDto = Omit<TrafficSourceAccountCreateDto, 'externalId' | 'trafficSourceType'> & Pick<TrafficSourceAccountCreateDto, 'externalId' | 'trafficSourceType'>;

export type ApiAccessToDisconnectDto = {
    notIn?: Set<number>,
    in?: Set<number>
}

export type TrafficSourceAccountUpsertInputDto = {
    data: TrafficSourceAccountUpsertDto,
    bmsToConnect?: Set<number>
    bmsToDisconnect?: ApiAccessToDisconnectDto
}