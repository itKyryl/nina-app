import z from "zod";

export const adStatSchema = z.object({
  spend: z.coerce.number(),
  clicks: z.coerce.number(),
  ad_id: z.string(),
  adset_id: z.string(),
  campaign_id: z.string(),
  impressions: z.coerce.number(),
  date_start: z.string(),
  date_stop: z.string(),
});

export type AdStatDto = z.infer<typeof adStatSchema>;

export type GetAdStatInputDto = {
  accountId: string,
  dateFrom: string,
  dateTo: string
}