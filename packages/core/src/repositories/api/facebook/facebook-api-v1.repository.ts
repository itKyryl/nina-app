import axios, { AxiosInstance } from "axios";
import { FacebookApiConstructorDto } from "../../../domain/repository/api/facebook/common.types";
import IFacebookApiRepository from "./facebook-api.repository.interface";
import { FacebookBmApiDto, facebookBmApiSchema } from "../../../domain/repository/api/facebook/bm.types";
import { handleLog } from "../../../utils/error";
import { FacebookAccountApiDto, FacebookAccountApiDtoOutputDto, facebookAccountApiSchema } from "../../../domain/repository/api/facebook/account.types";
import { AdStatDto, adStatSchema, GetAdStatInputDto } from "../../../domain/repository/api/facebook/ad-stats.types";

export default class FacebookApiV1Repository implements IFacebookApiRepository {

  private base: AxiosInstance;

  constructor(input: FacebookApiConstructorDto) {
    this.base = axios.create({
      baseURL: 'https://graph.facebook.com/v23.0/',
      params: {
        access_token: input.apiToken,
      },
    })
  }

  public async getAdStats(input: GetAdStatInputDto, next?: string): Promise<AdStatDto[]> {
    const result: AdStatDto[] = [];

    try {
      const response = next
        ? await axios.get(next)
        : await this.base.get(`/act_${input.accountId}/insights`, {
          params: {
            fields:
              "spend,actions,clicks,ad_id,adset_id,campaign_id,account_id,impressions",
            limit: "1000",
            time_increment: "1",
            time_range: `{"since":"${input.dateFrom}","until":"${input.dateTo}"}`,
            level: "ad",
          },
        });
      
      if(response.data.data) {
        result.push(...await this.convertApiAdStat(response.data.data));
      }

      const responseNext = response.data?.paging?.next as
        | string
        | undefined;

      if (responseNext) {
        const data = await this.getAdStats(input, responseNext);

        if (data) {
          result.push(...data);
        }
      }
    } catch (e: any) {
      await handleLog({
        ...e,
        message: `Error during fb ad stat collection. Error message: ${e.message}`
      })
    }

    return result;
    
  }

  public async getAccountsByBm(bmExternalId: string, next?: string ): Promise<FacebookAccountApiDtoOutputDto> {
    const accountsOwned: FacebookAccountApiDto[] = [];
    const clientAccounts: FacebookAccountApiDto[] = [];

    try {
      const response = next
        ? await axios.get(next)
        : await this.base.get(`/${bmExternalId}`, {
          params: {
            fields:
              "name,client_ad_accounts.limit(1000){account_status,account_id,balance,name,created_time,currency,timezone_offset_hours_utc,timezone_name,spend_cap,amount_spent},owned_ad_accounts.limit(1000){account_status,account_id,balance,name,created_time,currency,timezone_offset_hours_utc,timezone_name,spend_cap,amount_spent}",
          },
      });
  
      if(response.data.client_ad_accounts?.data) {
        clientAccounts.push(...await this.convertApiAccountResponseData(response.data.client_ad_accounts.data));
      }

      if(response.data.owned_ad_accounts?.data) {
        accountsOwned.push(...await this.convertApiAccountResponseData(response.data.owned_ad_accounts.data));
      }

      const responseNext = response.data?.paging?.next as string | undefined;

      if(responseNext) {
        const nextResponse = await this.getAccountsByBm(bmExternalId, responseNext);

        clientAccounts.push(...nextResponse.clientAccounts);
        accountsOwned.push(...nextResponse.accountsOwned);
      }
      
    } catch (e: any) {
      await handleLog({
        ...e,
        message: `Error during fb account collection. Error message: ${e.message}`
      })
    }

    return {
      accountsOwned,
      clientAccounts
    };;
  }

  public async getBms(next?: string): Promise<FacebookBmApiDto[]> {
    const result: FacebookBmApiDto[] = [];

    try {
      const response = next
        ? await axios.get(next)
        : await this.base.get(`/me/businesses`, {
          params: {
            limit: "1000",
          },
      });
  
      if(response.data.data) {
        result.push(...await this.convertApiBmResponseData(response.data.data));
      }

      const responseNext = response.data?.paging?.next as string | undefined;

      if(responseNext) {
        result.push(...await this.getBms(responseNext));
      }
      
    } catch (e: any) {
      await handleLog({
        ...e,
        message: `Error during fb account collection. Error message: ${e.message}`
      })
    }

    return result;
  }

  protected async convertApiAdStat(data: any) {
    const result: AdStatDto[] = [];

    const parsedFacebookApiAdStats = adStatSchema.loose().array().safeParse(data);
  
    if(parsedFacebookApiAdStats.success) result.push(...parsedFacebookApiAdStats.data);
    else {
      await handleLog({
        message: `Issue when parsing facebook response data during ad stats collection. Error message: ${parsedFacebookApiAdStats.error.message}`,
        data: data
      })
    }

    return result;
  }

  protected async convertApiAccountResponseData(data: any): Promise<FacebookAccountApiDto[]> {
    const result: FacebookAccountApiDto[] = [];

    const parsedFacebookApiBms = facebookAccountApiSchema.loose().array().safeParse(data);
  
    if(parsedFacebookApiBms.success) result.push(...parsedFacebookApiBms.data);
    else {
      await handleLog({
        message: `Issue when parsing facebook response data during account collection. Error message: ${parsedFacebookApiBms.error.message}`,
        data: data
      })
    }

    return result;
  }

  protected async convertApiBmResponseData(data: any): Promise<FacebookBmApiDto[]> {
    const result: FacebookBmApiDto[] = [];

    const parsedFacebookApiBms = facebookBmApiSchema.loose().array().safeParse(data);
  
    if(parsedFacebookApiBms.success) result.push(...parsedFacebookApiBms.data);
    else {
      await handleLog({
        message: `Issue when parsing facebook response data during bm collection. Error message: ${parsedFacebookApiBms.error.message}`,
        data: data
      })
    }

    return result;
  }
}
