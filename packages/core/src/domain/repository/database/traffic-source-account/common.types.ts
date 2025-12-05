import z from "zod";
import { TrafficSourceTypeDto } from "../../commont.types";

export const trafficSourceAccountStatusEnum = {
    ACTIVE: 'ACTIVE',
    BLOCKED: 'BLOCK',
    PAYMENT_ERROR: 'PAYMENT_ERROR',
    CLOSING: 'CLOSING',
    EXPIRED: 'EXPIRED'
} as const;
export const trafficSourceAccountStatusSchema = z.enum(trafficSourceAccountStatusEnum);
export type TrafficSourceAccountStatusDto = z.infer<typeof trafficSourceAccountStatusSchema>;

export type TrafficSourceAccountFilters = {
    isActive?: boolean,
    trafficSourceType?: TrafficSourceTypeDto,
    apiAccess?: {
        isActive?: boolean
    },
    id?: {
        in?: number[],
        notIn?: number[]
    },
    include?: {
        spend: {
        dateFrom?: string,
        dateTo?: string
        }
    }
}

export type TrafficSourceAccountBaseDto = {
    id: number,
    trafficSourceType: TrafficSourceTypeDto,
    externalId: string,
    name: string,
    externalStatus: string,
    externalCreatedTime: Date
    status: TrafficSourceAccountStatusDto | null,
    balance: number,
    externalCurrency: string,
    externalTimezone: string,
    spendCap: number,
    amountSpent: number,
    isActive: boolean,
    trafficSourceOwnerBmId: number | null
};
