import prisma from "@repo/core/clients/prisma/index";
import FacebookApiV1RepositoryFactory from "@repo/core/factories/api/Facebook/FacebookApiV1RepositoryPrisma.factory";
import TrafficSourceAccountPrismaRepository from "@repo/core/repositories/database/traffic-source-account/traffic-source-account-prisma.repository";
import TrafficSourceBmPrismaRepository from "@repo/core/repositories/database/traffic-source-bm/traffic-source-bm-prisma.repository";
import CollectTrafficSourceAccountsUseCase from "@repo/core/use-cases/collect-traffic-source-accounts/index";
import CollectTrafficSourceAccountsController from "@repo/core/controllers/collect-traffic-source-accounts/index";

const useCase = new CollectTrafficSourceAccountsUseCase({
  trafficSourceAccountDatabaseRepository: new TrafficSourceAccountPrismaRepository(prisma),
  facebookApiRepositoryFactory: new FacebookApiV1RepositoryFactory(),
  trafficSourceBmDatabaseRepository: new TrafficSourceBmPrismaRepository(prisma)
})

const controller = new CollectTrafficSourceAccountsController({
  useCase
})

export default async function (payload: any): Promise<Record<string, any>> {
  return await controller.runUseCaseImplementation(payload);
}