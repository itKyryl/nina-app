import { CreateLogInputDataT } from "../../../domain/repository/database/log/create-log.types";

export default interface ILogDatabaseRepository {
  createLog(logData: CreateLogInputDataT): Promise<number>;
}
