import * as z from "zod";
import { ProductDto } from "./common.types";
import { sortingDirectionSchema } from "../../common/sorting.types";

export const sortableProductFields = ['name'] as const satisfies (keyof ProductDto)[];

export const productSortBySchema = z.enum(sortableProductFields);

export type SortableProductFieldsDto = z.infer<typeof productSortBySchema>;

export const filtersSchema = z.object({
    sortBy: productSortBySchema,
    sortDirection: sortingDirectionSchema
})

export type FiltersSchemaDto = z.infer<typeof filtersSchema>;