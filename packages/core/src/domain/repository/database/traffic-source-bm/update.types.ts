import { TrafficSourceBmCreateDto } from "./create.types";

export type TrafficSourceBmUpdateDto = Partial<TrafficSourceBmCreateDto>;

export type TrafficSourceBmUpsertDto = Omit<TrafficSourceBmCreateDto, 'externalId' | 'trafficSourceType'> & Pick<TrafficSourceBmCreateDto, 'externalId' | 'trafficSourceType'>;

export type ApiAccessToDisconnectDto = {
    notIn?: Set<number>,
    in?: Set<number>
}

export type TrafficSourceBmUpsertInputDto = {
    data: TrafficSourceBmUpsertDto,
    apiAccessToConnect?: Set<number>
    apiAccessToDisconnect?: ApiAccessToDisconnectDto
}