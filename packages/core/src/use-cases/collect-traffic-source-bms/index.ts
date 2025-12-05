import IBaseUseCase from "../BaseUseCase.interface";
import { CollectFacebookBmsByApiTokenInputDto, CollectTrafficSourceBmsUseCaseInputDto, CollectTrafficSourceBmsUseCaseOutputDto, TrafficSourceBmUpsertInputsDto } from "../../domain/use-cases/collect-traffic-source-bms.types";
import IApiAccessDatabaseRepository from "../../repositories/database/api-access/api-access-database.repository.interface";
import { handleLog } from "../../utils/error";
import ITrafficSourceBmDatabaseRepository from "../../repositories/database/traffic-source-bm/traffic-source-bm-database.repository.interface";
import IFacebookApiRepositoryFactory from "../../factories/api/Facebook/FacebookApiRepository.factory.interface";
import { TrafficSourceType } from "../../clients/prisma/generated";
import { ApiAccessToDisconnectDto, TrafficSourceBmUpsertInputDto } from "../../domain/repository/database/traffic-source-bm/update.types";
import { nodeEnv } from "../../utils/env";
import _ from 'lodash';
import { generateTrafficSourceKey } from "../../helpers/traffic-source.helper";



export default class CollectTrafficSourceBmsUseCase
  implements
    IBaseUseCase<
      CollectTrafficSourceBmsUseCaseInputDto,
      CollectTrafficSourceBmsUseCaseOutputDto
    >
{
  constructor(
    private readonly dependency: {
      apiAccessDatabaseRepository: IApiAccessDatabaseRepository,
      trafficSourceBmDatabaseRepository: ITrafficSourceBmDatabaseRepository,
      facebookApiRepositoryFactory: IFacebookApiRepositoryFactory
    },
  ) {}

  public async execute(input: CollectTrafficSourceBmsUseCaseInputDto) {
    let apiAccesses = [];
    
    // collect api accesses to work with
    if(input?.apiAccess) {
      apiAccesses = [input.apiAccess];
    } else {
      apiAccesses = await this.dependency.apiAccessDatabaseRepository.findMany({
        isActive: true,
        apiAccessType: 'TRAFFIC_SOURCE_SOC'
      });
    }

    let bmsToUpdateOrCreate: TrafficSourceBmUpsertInputsDto = new Map();

    for(const apiAccess of apiAccesses) {
      try {
        if(!apiAccess.trafficSourceType) {
          await handleLog({
            message: `Unable to collect BMs for api access entity with id ${apiAccess.id}. Please add Traffic Source Type`
          });
          continue;
        };
  
        let apiAccessesBmsToUpdateOrCreate: TrafficSourceBmUpsertInputsDto = new Map();
  
        // collect bms via api
        switch (apiAccess.trafficSourceType) {
          case 'FACEBOOK':
            const apiToken = apiAccess.firstAccessToken ?? apiAccess.secondAccessToken;
            if(!apiToken) {
              await handleLog({
                message: 'Unable to collect Bms for ${}'
              });
              
              break;
            }
            apiAccessesBmsToUpdateOrCreate = await this.collectFacebookBmsByApiToken({
              apiToken: apiToken,
              apiAccessId: apiAccess.id
            });;
            break;
  
          default:
            break;
        }
  
        if(nodeEnv() === 'test') {
          console.log(`Collected ${[...apiAccessesBmsToUpdateOrCreate].length} bms for api access ${apiAccess.id}(${apiAccess.name})`);
        }
  
        // merge collect api bms with existing bms
        for(let [apiAccessBmsToUpdateOrCreateKey, apiAccessBmsToUpdateOrCreateData] of apiAccessesBmsToUpdateOrCreate) {
          const existingBm = bmsToUpdateOrCreate.get(apiAccessBmsToUpdateOrCreateKey);
          
          if(existingBm) {
            bmsToUpdateOrCreate.set(apiAccessBmsToUpdateOrCreateKey, this.combineTwoBmMapsData(existingBm, apiAccessBmsToUpdateOrCreateData))
          } else {
            bmsToUpdateOrCreate.set(apiAccessBmsToUpdateOrCreateKey, apiAccessBmsToUpdateOrCreateData);
          }
        }
      } catch (e: any) {
        await handleLog({
          ...e,
          message: `Unknown error during bms collection. Error: ${e.message}`
        });
      }
    }

    const createdOrUpdatedBmIds: number[] = [];

    // create / update bms
    for(const [_key, bmToUpdateOrCreate] of bmsToUpdateOrCreate) {
      const createdOrUpdatedBmId = await this.dependency.trafficSourceBmDatabaseRepository.upsert(bmToUpdateOrCreate);
      createdOrUpdatedBmIds.push(createdOrUpdatedBmId);
    }

    const createdOrUpdatedBmIdsChunks = _.chunk(createdOrUpdatedBmIds, 1000);

    // mark bms which was not fetched as inactive
    for(let createdOrUpdatedBmIdsChunk of createdOrUpdatedBmIdsChunks) {
      await this.dependency.trafficSourceBmDatabaseRepository.updateMany({
        id: {
          notIn: createdOrUpdatedBmIdsChunk
        }
      }, {
        isActive: false
      })
    }

    return {
      collectedBms: createdOrUpdatedBmIds.length
    }
  }

  protected combineTwoBmMapsData(map1Data: TrafficSourceBmUpsertInputDto, map2Data: TrafficSourceBmUpsertInputDto): TrafficSourceBmUpsertInputDto {
    const apiAccessToConnect = new Set([...map1Data.apiAccessToConnect ?? [], ...map2Data.apiAccessToConnect ?? []]);
    const apiAccessToDisconnect: ApiAccessToDisconnectDto = {
      in: new Set([...map1Data.apiAccessToDisconnect?.in ?? [], ...map2Data.apiAccessToDisconnect?.in ?? []]),
      notIn: new Set([...map1Data.apiAccessToDisconnect?.notIn ?? [], ...map2Data.apiAccessToDisconnect?.notIn ?? []])
    };

    return {
      data: map1Data.data,
      apiAccessToConnect,
      apiAccessToDisconnect
    };
  }

  protected async collectFacebookBmsByApiToken(input: CollectFacebookBmsByApiTokenInputDto): Promise<TrafficSourceBmUpsertInputsDto> {
    const fbBmsToUpdateOrCreate: TrafficSourceBmUpsertInputsDto = new Map();

    const facebookApiRepository = this.dependency.facebookApiRepositoryFactory.create({
      apiToken: input.apiToken
    });

    const fbApiBms = await facebookApiRepository.getBms();

    for(const fbApiBm of fbApiBms) {
      fbBmsToUpdateOrCreate.set(generateTrafficSourceKey('FACEBOOK', fbApiBm.id), {
        data: {
          name: fbApiBm.name,
          externalId: fbApiBm.id,
          trafficSourceType: 'FACEBOOK',
          isActive: true
        },
        apiAccessToConnect: new Set([input.apiAccessId]),
        apiAccessToDisconnect: {
          notIn: new Set([input.apiAccessId])
        }
      })
    }

    return fbBmsToUpdateOrCreate;
  }
}
