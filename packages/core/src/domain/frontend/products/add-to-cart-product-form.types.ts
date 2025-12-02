import z from "zod";

export const addToCartProductFormSchema = z.object({
    quantity: z.number(),
    variationId: z.number().nullable(),
    sizeId: z.number().nullable()
})

export type AddToCartProductFormSchemaType = z.infer<typeof addToCartProductFormSchema>;