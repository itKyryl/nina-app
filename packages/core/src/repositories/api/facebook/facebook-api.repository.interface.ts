import { FacebookAccountApiDtoOutputDto } from "../../../domain/repository/api/facebook/account.types";
import { AdStatDto, GetAdStatInputDto } from "../../../domain/repository/api/facebook/ad-stats.types";
import { FacebookBmApiDto } from "../../../domain/repository/api/facebook/bm.types";

export default interface IFacebookApiRepository {
  getBms(): Promise<FacebookBmApiDto[]>;
  getAccountsByBm(bmExternalId: string): Promise<FacebookAccountApiDtoOutputDto>;
  getAdStats(input: GetAdStatInputDto): Promise<AdStatDto[]>
}
