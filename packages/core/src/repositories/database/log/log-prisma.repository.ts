import { PrismaRepositoryClient } from "../../../clients/prisma";
import { CreateLogInputDataT } from "../../../domain/repository/database/log/create-log.types";
import ILogDatabaseRepository from "./log-database.repository.iterface";

class LogPrismaRepository implements ILogDatabaseRepository {
  constructor(private readonly prismaClient: PrismaRepositoryClient) {}

  async createLog(logData: CreateLogInputDataT): Promise<number> {
    const log = await this.prismaClient.log.create({
      data: {
        isError: logData.isError,
        message: logData.message,
        stack: logData.stack,
        request: logData.request,
        response: logData.response,
        name: logData.name,
        data: logData.data
      },
    });

    return log.id;
  }
}

export default LogPrismaRepository;
