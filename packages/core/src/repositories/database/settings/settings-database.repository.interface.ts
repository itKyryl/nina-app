import { SettingsBaseDto, SettingsFilters } from "../../../domain/repository/database/settings/common.types";

export default interface ISettingsDatabaseRepository {
  findMany(
    filters: SettingsFilters
  ): Promise<SettingsBaseDto[]>;
}
