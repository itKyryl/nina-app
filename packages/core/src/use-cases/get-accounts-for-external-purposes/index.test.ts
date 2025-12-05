import prisma from "../../clients/prisma";
import TrafficSourceAccountPrismaRepository from "../../repositories/database/traffic-source-account/traffic-source-account-prisma.repository";
import { GetAccountsForExternalPurposesUseCase } from "./get-accounts-for-external-purposes.use-case";

describe(GetAccountsForExternalPurposesUseCase.name, () => {

  const FACEBOOK_TEST_API_TOKEN: string | undefined = process.env.FACEBOOK_TEST_API_TOKEN;
  
  if(!FACEBOOK_TEST_API_TOKEN) throw new Error(`Please provide FACEBOOK_TEST_API_TOKEN for testing`);;

  const collectTrafficSourceBmsTestUseCase = new GetAccountsForExternalPurposesUseCase({
    accountDatabaseRepository: new TrafficSourceAccountPrismaRepository(prisma)
  });

  describe.only('execute', () => {
    it('works', async () => {
      const result = await collectTrafficSourceBmsTestUseCase.execute({
        include: {
          spend: {
            dateFrom: '2025-11-25',
            dateTo: '2025-12-05'
          }
        }
      });

      console.log(result);
    }, 9999999)
  })
})