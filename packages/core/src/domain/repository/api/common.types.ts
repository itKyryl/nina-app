type ApiSuccessResponse<DataType> = {
    error: false,
    data: DataType
}

type ApiErrorResponse = {
    error: true,
    message: string
}

export type ApiResponse<DataType> = (ApiSuccessResponse<DataType> | ApiErrorResponse)