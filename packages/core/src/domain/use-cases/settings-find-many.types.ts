import { SettingsBaseDto, SettingsFilters } from "../repository/database/settings/common.types"
import { TaskBaseDto, TaskFilters } from "../repository/database/task/common.types"

export type SettingsFindManyUseCaseInputDto = {
    filters: SettingsFilters
}

export type SettingsFindManyUseCaseOutputDto = SettingsBaseDto[]