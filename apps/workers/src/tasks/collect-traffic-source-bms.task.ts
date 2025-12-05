import prisma from "@repo/core/clients/prisma/index";
import FacebookApiV1RepositoryFactory from "@repo/core/factories/api/Facebook/FacebookApiV1RepositoryPrisma.factory";
import ApiAccessPrismaRepository from "@repo/core/repositories/database/api-access/api-access-prisma.repository";
import TrafficSourceBmPrismaRepository from "@repo/core/repositories/database/traffic-source-bm/traffic-source-bm-prisma.repository";
import CollectTrafficSourceBmsUseCase from "@repo/core/use-cases/collect-traffic-source-bms/index";
import CollectTrafficSourceBmsController from '@repo/core/controllers/collect-traffic-source-bms/index';

const useCase = new CollectTrafficSourceBmsUseCase({
  apiAccessDatabaseRepository: new ApiAccessPrismaRepository(prisma),
  facebookApiRepositoryFactory: new FacebookApiV1RepositoryFactory(),
  trafficSourceBmDatabaseRepository: new TrafficSourceBmPrismaRepository(prisma)
})

const controller = new CollectTrafficSourceBmsController({
  useCase
})

export default async function (payload: any): Promise<Record<string, any>> {
  return await controller.runUseCaseImplementation(payload);
}