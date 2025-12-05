import IBaseUseCase from "../BaseUseCase.interface";
import { handleLog } from "../../utils/error";
import IFacebookApiRepositoryFactory from "../../factories/api/Facebook/FacebookApiRepository.factory.interface";
import ITrafficSourceAccountDatabaseRepository from "../../repositories/database/traffic-source-account/traffic-source-account-database.repository.interface";
import _ from "lodash";
import { CollectFacebookDailyAdSpendByApiTokenInputDto, CollectTrafficSourceDailyAdSpendUseCaseInputDto, CollectTrafficSourceDailyAdSpendUseCaseOutputDto, ConvertApiDailyAdSpendToDbUpsertInput, TrafficSourceDailyAdSpendUpsertInputsDto } from "../../domain/use-cases/collect-traffic-source-daily-ad-spend.types";
import ITrafficSourceDailyAdStatDatabaseRepository from "../../repositories/database/traffic-source-daily-ad-stat/traffic-source-daily-ad-stat-database.repository.interface";
import { DateTime } from "luxon";
import { nodeEnv } from "../../utils/env";

export default class CollectTrafficSourceDailyAdSpendUseCase
  implements
    IBaseUseCase<
      CollectTrafficSourceDailyAdSpendUseCaseInputDto,
      CollectTrafficSourceDailyAdSpendUseCaseOutputDto
    >
{
  constructor(
    private readonly dependency: {
      trafficSourceAccountDatabaseRepository: ITrafficSourceAccountDatabaseRepository,
      facebookApiRepositoryFactory: IFacebookApiRepositoryFactory,
      trafficSourceDailyAdStatDatabaseRepository: ITrafficSourceDailyAdStatDatabaseRepository
    },
  ) {}

  public async execute(input: CollectTrafficSourceDailyAdSpendUseCaseInputDto) {
    let accounts = await this.dependency.trafficSourceAccountDatabaseRepository.findManyWithApiAccess({
      isActive: true,
      apiAccess: {
        isActive: true
      }
    });
    
    const daysToCollect = input?.daysToCollect ?? 7;

    const dateFrom = DateTime.now().minus({days: daysToCollect});
    const dateTo = DateTime.now();

    let adsStatsToUpdateOrCreate: TrafficSourceDailyAdSpendUpsertInputsDto = [];

    for(const account of accounts) {
      try {
        const dateFromString = dateFrom.setZone(account.externalTimezone).toFormat('yyyy-LL-dd');
        const dateToString = dateTo.setZone(account.externalTimezone).toFormat('yyyy-LL-dd');
  
        let collectedAdStats: TrafficSourceDailyAdSpendUpsertInputsDto = [];
  
        switch (account.trafficSourceType) {
          case 'FACEBOOK':
            const apiAccess = account.trafficSourceAccountToTrafficSourceBmConnections[0]?.trafficSourceBm.trafficSourceBmToApiAccessConnections[0]?.apiAccess;
  
            if(!apiAccess) {
              await handleLog({
                message: `Unable to collect ad stats. ApiAccess does not exists for bm with id ${account.id}`
              });
              
              break;
            }
  
            const apiToken = apiAccess.firstAccessToken ?? apiAccess.secondAccessToken;
  
            if(!apiToken) {
              await handleLog({
                message: `Unable to collect ad stats. ApiToken does not exists for active api access with id ${apiAccess.id}`
              });
              
              break;
            }
  
            collectedAdStats = await this.collectFacebookDailyAdSpendByApiTokenAndBmId({
              apiToken: apiToken,
              accountExternalId: account.externalId,
              dateFrom: dateFromString,
              dateTo: dateToString,
              trafficSourceAccountId: account.id,
              timezone: account.externalTimezone
            });
  
            break;
            
            default:
              break;
        }
  
        adsStatsToUpdateOrCreate.push(...collectedAdStats);
  
        if(nodeEnv() === 'test') {
          console.log(`Collected ${collectedAdStats.length} ad stats for account ${account.externalId} ${account.trafficSourceType} for last ${daysToCollect} days`);
        }
      } catch (e: any) {
        await handleLog({
          ...e,
          message: `Unknown error during ad stat collection. Error: ${e.message}`
        });
      }
    }

    for(const adStatToUpdateOrCreate of adsStatsToUpdateOrCreate) {
      await this.dependency.trafficSourceDailyAdStatDatabaseRepository.upsert(adStatToUpdateOrCreate);
    }

    return {
      collectedAdStats: adsStatsToUpdateOrCreate.length
    }
  }

  protected async collectFacebookDailyAdSpendByApiTokenAndBmId(input: CollectFacebookDailyAdSpendByApiTokenInputDto): Promise<TrafficSourceDailyAdSpendUpsertInputsDto> {

    const facebookApiRepository = this.dependency.facebookApiRepositoryFactory.create({
      apiToken: input.apiToken,
    });

    const fbApiAdStats = await facebookApiRepository.getAdStats({
      accountId: input.accountExternalId,
      dateFrom: input.dateFrom,
      dateTo: input.dateTo
    });

    const convertedFbApiAdStats = this.convertFacebookApiAdStatsToDbUpsertStructure({
      adStats: fbApiAdStats,
      trafficSourceAccountId: input.trafficSourceAccountId,
      timezone: input.timezone
    })

    return convertedFbApiAdStats;
  }

  protected convertFacebookApiAdStatsToDbUpsertStructure(input: ConvertApiDailyAdSpendToDbUpsertInput): TrafficSourceDailyAdSpendUpsertInputsDto {
    const fbAdStatsToUpdateOrCreate: TrafficSourceDailyAdSpendUpsertInputsDto = [];

    for(const fbApiAdStat of input.adStats) {
      fbAdStatsToUpdateOrCreate.push({
        clicks: fbApiAdStat.clicks,
        externalAdId: fbApiAdStat.ad_id,
        externalAdSetId: fbApiAdStat.adset_id,
        externalCampaignId: fbApiAdStat.campaign_id,
        externalDateStart: DateTime.fromISO(fbApiAdStat.date_start, { zone: input.timezone}).toJSDate(),
        externalDateStop: DateTime.fromISO(fbApiAdStat.date_stop, { zone: input.timezone}).toJSDate(),
        impressions: fbApiAdStat.impressions,
        spend: fbApiAdStat.spend,
        trafficSourceAccountId: input.trafficSourceAccountId,
        trafficSourceType: 'FACEBOOK'
      })
    }

    return fbAdStatsToUpdateOrCreate;
  }
}
