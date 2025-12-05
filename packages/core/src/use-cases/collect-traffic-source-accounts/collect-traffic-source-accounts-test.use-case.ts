import CollectTrafficSourceAccountsUseCase from ".";
import { CollectFacebookAccountsByApiTokenInputDto, TrafficSourceAccountUpsertInputsDto } from "../../domain/use-cases/collect-traffic-source-accounts.types";

export class CollectTrafficSourceAccountsTestUseCase extends CollectTrafficSourceAccountsUseCase {
    public testCollectFacebookBmsByApiToken(input: CollectFacebookAccountsByApiTokenInputDto): Promise<TrafficSourceAccountUpsertInputsDto> {
        return this.collectFacebookAccountsByApiTokenAndBmId(input);
    }
}