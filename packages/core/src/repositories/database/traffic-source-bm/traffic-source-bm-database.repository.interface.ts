import { ApiAccessFilters } from "../../../domain/repository/database/api-access/common.types";
import { TrafficSourceBmBaseDto, TrafficSourceBmFilters } from "../../../domain/repository/database/traffic-source-bm/common.types";
import { TrafficSourceBmWithApiAccessDto } from "../../../domain/repository/database/traffic-source-bm/find.types";
import { TrafficSourceBmUpdateDto, TrafficSourceBmUpsertInputDto } from "../../../domain/repository/database/traffic-source-bm/update.types";

export default interface ITrafficSourceBmDatabaseRepository {
  updateMany(
    filters: TrafficSourceBmFilters,
    data: TrafficSourceBmUpdateDto
  ): Promise<void>;

  upsert(
    input: TrafficSourceBmUpsertInputDto
  ): Promise<number>;

  findMany(
    filters: TrafficSourceBmFilters
  ): Promise<TrafficSourceBmBaseDto[]>;

  findManyWithApiAccess(
    filters: TrafficSourceBmFilters
  ): Promise<TrafficSourceBmWithApiAccessDto[]>;
}
