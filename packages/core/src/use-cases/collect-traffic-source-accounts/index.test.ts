import CollectTrafficSourceAccountsUseCase from ".";
import prisma from "../../clients/prisma";
import FacebookApiV1RepositoryFactory from "../../factories/api/Facebook/FacebookApiV1RepositoryPrisma.factory";
import TrafficSourceAccountPrismaRepository from "../../repositories/database/traffic-source-account/traffic-source-account-prisma.repository";
import TrafficSourceBmPrismaRepository from "../../repositories/database/traffic-source-bm/traffic-source-bm-prisma.repository";
import { CollectTrafficSourceAccountsTestUseCase } from "./collect-traffic-source-accounts-test.use-case";

describe(CollectTrafficSourceAccountsUseCase.name, () => {

  const FACEBOOK_TEST_API_TOKEN: string | undefined = process.env.FACEBOOK_TEST_API_TOKEN;
  
  if(!FACEBOOK_TEST_API_TOKEN) throw new Error(`Please provide FACEBOOK_TEST_API_TOKEN for testing`);;

  const collectTrafficSourceBmsTestUseCase = new CollectTrafficSourceAccountsTestUseCase({
    trafficSourceAccountDatabaseRepository: new TrafficSourceAccountPrismaRepository(prisma),
    facebookApiRepositoryFactory: new FacebookApiV1RepositoryFactory(),
    trafficSourceBmDatabaseRepository: new TrafficSourceBmPrismaRepository(prisma)
  });

  describe.only('execute', () => {
    it('works', async () => {
      await collectTrafficSourceBmsTestUseCase.execute(); 
    }, 9999999)
  })
})