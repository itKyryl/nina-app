import z from "zod";

export const facebookBmApiSchema = z.object({
    id: z.string(),
    name: z.string()
})

export type FacebookBmApiDto = z.infer<typeof facebookBmApiSchema>;