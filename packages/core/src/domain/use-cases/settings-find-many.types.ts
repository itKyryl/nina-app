import { SettingsBaseDto, SettingsFilters } from "../repository/database/settings/common.types"

export type SettingsFindManyUseCaseInputDto = {
    filters: SettingsFilters
}

export type SettingsFindManyUseCaseOutputDto = SettingsBaseDto[]