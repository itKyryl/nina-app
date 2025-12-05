import CollectTrafficSourceBmsUseCase from ".";
import { TrafficSourceBmUpsertInputDto } from "../../domain/repository/database/traffic-source-bm/update.types";
import { CollectFacebookBmsByApiTokenInputDto, TrafficSourceBmUpsertInputsDto } from "../../domain/use-cases/collect-traffic-source-bms.types";

export class CollectTrafficSourceBmsTestUseCase extends CollectTrafficSourceBmsUseCase {
    public testCollectFacebookBmsByApiToken(input: CollectFacebookBmsByApiTokenInputDto): Promise<TrafficSourceBmUpsertInputsDto> {
        return this.collectFacebookBmsByApiToken(input);
    }

    public testCombineTwoBmMapsData(map1Data: TrafficSourceBmUpsertInputDto, map2Data: TrafficSourceBmUpsertInputDto): TrafficSourceBmUpsertInputDto {
        return this.combineTwoBmMapsData(map1Data, map2Data);
    }
}