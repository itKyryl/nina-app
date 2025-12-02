import z from "zod";

export const sizeEnum = {
    KG: 'KG',
    GR: 'GR',
    PCS: 'PCS'
} as const;

export const sizeSchema = z.enum(sizeEnum);

export type SizeDto = z.infer<typeof sizeSchema>;