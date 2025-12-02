import z from "zod";

export const sortingDirectionEnum = {
    'asc': 'asc',
    'desc': 'desc'
} as const;

export const sortingDirectionSchema = z.enum(sortingDirectionEnum);

export type SortingDirectionDto = z.infer<typeof sortingDirectionSchema>;