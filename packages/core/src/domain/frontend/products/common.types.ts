export type ProductSizeDto = {
    id: number,
    pricePerUnitAmount: number,
    unitAmount: number,
    unit: 'KG' | 'GR' | 'PCS',
}

export type ProductVariationDto = {
    id: number,
    name: string,
    price?: number,
    useSizes: boolean,
    sizes: ProductSizeDto[],
    cartAlerts?: {
        message: string,
        product?: AlertProductDto
    }[]
}

export type ProductDto = {
    id: number
    name: string,
    currency: 'USD' | 'UAH',
    imageUrl: string,
    isFavorite: boolean,
    variations: ProductVariationDto[],
    description?: string,
    price?: number,
    useVariations: boolean,
    recommendedProducts?: ProductDto[]
};

export type AlertProductDto = Pick<ProductDto, 'id' | 'name' | 'currency' | 'imageUrl'>;