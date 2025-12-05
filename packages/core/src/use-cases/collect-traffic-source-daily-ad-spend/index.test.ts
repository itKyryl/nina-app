import CollectTrafficSourceDailyAdSpendUseCase from ".";
import prisma from "../../clients/prisma";
import FacebookApiV1RepositoryFactory from "../../factories/api/Facebook/FacebookApiV1RepositoryPrisma.factory";
import TrafficSourceAccountPrismaRepository from "../../repositories/database/traffic-source-account/traffic-source-account-prisma.repository";
import TrafficSourceDailyAdStatPrismaRepository from "../../repositories/database/traffic-source-daily-ad-stat/traffic-source-daily-ad-stat-prisma.repository";

describe(CollectTrafficSourceDailyAdSpendUseCase.name, () => {

  const FACEBOOK_TEST_API_TOKEN: string | undefined = process.env.FACEBOOK_TEST_API_TOKEN;
  
  if(!FACEBOOK_TEST_API_TOKEN) throw new Error(`Please provide FACEBOOK_TEST_API_TOKEN for testing`);;

  const collectTrafficSourceBmsTestUseCase = new CollectTrafficSourceDailyAdSpendUseCase({
    trafficSourceAccountDatabaseRepository: new TrafficSourceAccountPrismaRepository(prisma),
    facebookApiRepositoryFactory: new FacebookApiV1RepositoryFactory(),
    trafficSourceDailyAdStatDatabaseRepository: new TrafficSourceDailyAdStatPrismaRepository(prisma)
  });

  describe.only('execute', () => {
    it('works', async () => {
      await collectTrafficSourceBmsTestUseCase.execute({
        daysToCollect: 7
      });
    }, 9999999)
  })
})