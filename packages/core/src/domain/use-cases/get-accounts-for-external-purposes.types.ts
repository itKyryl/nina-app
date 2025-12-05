import { TrafficSourceTypeDto } from "../repository/commont.types";
import { TrafficSourceAccountStatusDto } from "../repository/database/traffic-source-account/common.types";

export type GetAccountsForExternalPurposesUseCaseOutput = {
  accountId: string;
  accountName: string;
  id: number;
  accountBlockDate: string | null;
  accountCreateDate: string | null;
  accountTimezone: string;
  active: boolean;
  status: TrafficSourceAccountStatusDto | null;
  balance: number;
  currency: string;
  trafficSource: TrafficSourceTypeDto;
  businessManager: {
    id: number;
    name: string;
    bmId: string;
    trafficSource: TrafficSourceTypeDto;
    active: boolean;
  } | null,
  spend: number;
}[];