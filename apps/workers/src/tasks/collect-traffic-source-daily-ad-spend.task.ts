import prisma from "@repo/core/clients/prisma/index";
import FacebookApiV1RepositoryFactory from "@repo/core/factories/api/Facebook/FacebookApiV1RepositoryPrisma.factory";
import TrafficSourceAccountPrismaRepository from "@repo/core/repositories/database/traffic-source-account/traffic-source-account-prisma.repository";
import CollectTrafficSourceDailyAdSpendUseCase from "@repo/core/use-cases/collect-traffic-source-daily-ad-spend/index";
import CollectTrafficSourceDailyAdSpendController from "@repo/core/controllers/collect-traffic-source-daily-ad-spend/index";
import TrafficSourceDailyAdStatPrismaRepository from "@repo/core/repositories/database/traffic-source-daily-ad-stat/traffic-source-daily-ad-stat-prisma.repository";

const useCase = new CollectTrafficSourceDailyAdSpendUseCase({
  trafficSourceAccountDatabaseRepository: new TrafficSourceAccountPrismaRepository(prisma),
  facebookApiRepositoryFactory: new FacebookApiV1RepositoryFactory(),
  trafficSourceDailyAdStatDatabaseRepository: new TrafficSourceDailyAdStatPrismaRepository(prisma)
})

const controller = new CollectTrafficSourceDailyAdSpendController({
  useCase
})

export default async function (payload: any): Promise<Record<string, any>> {
  return await controller.runUseCaseImplementation(payload);
}