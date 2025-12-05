import { FacebookAccountApiDto } from "../repository/api/facebook/account.types";
import { TrafficSourceAccountUpsertInputDto } from "../repository/database/traffic-source-account/update.types";

export type CollectTrafficSourceAccountsUseCaseInputDto = void;

export type CollectTrafficSourceAccountsUseCaseOutputDto = any;

export type TrafficSourceAccountUpsertInputsDto = Map<string, TrafficSourceAccountUpsertInputDto>;

export type CollectFacebookAccountsByApiTokenInputDto = {
    apiToken: string,
    bmId: number,
    bmExternalId: string
}

export type ConvertApiAccountsToDbUpsertInput = {
    apiAccounts: FacebookAccountApiDto[],
    bmOwnerId?: number,
    bmConnectId: number
}