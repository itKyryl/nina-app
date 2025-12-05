import z from "zod";

export type SelectBaseKeys<ReturnType> = {
  [K in keyof ReturnType]: boolean;
};

export const trafficSourceTypeEnum = {
  FACEBOOK: 'FACEBOOK',
  TIKTOK: 'TIKTOK'
} as const;
export const trafficSourceTypeSchema = z.enum(trafficSourceTypeEnum);
export type TrafficSourceTypeDto = z.infer<typeof trafficSourceTypeSchema>;