import { TrafficSourceDailyAdStatBaseDto, TrafficSourceDailyAdStatFilters } from "../../../domain/repository/database/traffic-source-daily-ad-stat/common.types";
import { TrafficSourceDailyAdStatUpdateDto, TrafficSourceDailyAdStatUpsertInputDto } from "../../../domain/repository/database/traffic-source-daily-ad-stat/update.types";

export default interface ITrafficSourceDailyAdStatDatabaseRepository {
  updateMany(
    filters: TrafficSourceDailyAdStatFilters,
    data: TrafficSourceDailyAdStatUpdateDto
  ): Promise<void>;

  upsert(
    input: TrafficSourceDailyAdStatUpsertInputDto
  ): Promise<number>;

  findMany(
    filters: TrafficSourceDailyAdStatFilters
  ): Promise<TrafficSourceDailyAdStatBaseDto[]>;
}
