import Big from "big.js";
import z from "zod";

export const facebookAccountApiSchema = z.object({
  account_status: z.number(),
  account_id: z.string(),
  balance: z.coerce.number(),
  name: z.string(),
  created_time: z.coerce.date(),
  currency: z.string(),
  timezone_offset_hours_utc: z.number(),
  timezone_name: z.string(),
  spend_cap: z.coerce.number().transform(v => new Big(v).div(100).toNumber()),
  amount_spent: z.coerce.number().transform(v => new Big(v).div(100).toNumber()),
  id: z.string()
});

export type FacebookAccountApiDto = z.infer<typeof facebookAccountApiSchema>;

export type FacebookAccountApiDtoOutputDto = {
  accountsOwned: FacebookAccountApiDto[],
  clientAccounts: FacebookAccountApiDto[]
}