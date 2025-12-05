import CollectTrafficSourceBmsUseCase from ".";
import prisma from "../../clients/prisma";
import FacebookApiV1RepositoryFactory from "../../factories/api/Facebook/FacebookApiV1RepositoryPrisma.factory";
import ApiAccessPrismaRepository from "../../repositories/database/api-access/api-access-prisma.repository";
import TrafficSourceBmPrismaRepository from "../../repositories/database/traffic-source-bm/traffic-source-bm-prisma.repository";
import { CollectTrafficSourceBmsTestUseCase } from "./collect-traffic-source-bms-test.use-case";

describe(CollectTrafficSourceBmsUseCase.name, () => {

  const FACEBOOK_TEST_API_TOKEN: string | undefined = process.env.FACEBOOK_TEST_API_TOKEN;
  
  if(!FACEBOOK_TEST_API_TOKEN) throw new Error(`Please provide FACEBOOK_TEST_API_TOKEN for testing`);;

  const collectTrafficSourceBmsTestUseCase = new CollectTrafficSourceBmsTestUseCase({
    apiAccessDatabaseRepository: new ApiAccessPrismaRepository(prisma),
    facebookApiRepositoryFactory: new FacebookApiV1RepositoryFactory(),
    trafficSourceBmDatabaseRepository: new TrafficSourceBmPrismaRepository(prisma)
  });

  describe.only('execute', () => {
    it('works', async () => {
      await collectTrafficSourceBmsTestUseCase.execute({}); 
    }, 9999999)
  })

  describe('getBms', () => {
    it('collect fb bms', async () => {
      const bms = await collectTrafficSourceBmsTestUseCase.testCollectFacebookBmsByApiToken({
        apiAccessId: 1,
        apiToken: FACEBOOK_TEST_API_TOKEN
      })

      console.dir(bms, {depth: null});

      expect([...bms.values()].length > 0).toBe(true);
    }, 99999999)
  })

  describe('combineTwoBmMapsData', () => {
    it('combine different values', async () => {
      const newMapData = await collectTrafficSourceBmsTestUseCase.testCombineTwoBmMapsData({
        data: {
          externalId: '1',
          trafficSourceType: 'FACEBOOK',
          name: 'test',
          isActive: true
        },
        apiAccessToConnect: new Set([1]),
        apiAccessToDisconnect: {
          notIn: new Set([1])
        }
      }, {
        data: {
          externalId: '1',
          trafficSourceType: 'FACEBOOK',
          name: 'test',
          isActive: true
        },
        apiAccessToConnect: new Set([2]),
        apiAccessToDisconnect: {
          notIn: new Set([2])
        }
      })

      console.dir(newMapData, {depth: null});
      
      const apiAccessToConnect = newMapData.apiAccessToConnect?.values();
      const notInValues = newMapData.apiAccessToDisconnect?.notIn?.values();

      const apiAccessToConnectCount = apiAccessToConnect ? [...apiAccessToConnect].length : 0;
      const notInValuesCount = notInValues ? [...notInValues].length : 0;

      expect(apiAccessToConnectCount === 2 && notInValuesCount === 2).toBe(true);
    }, 99999999)

    it('combine does not combine same values', async () => {
      const newMapData = collectTrafficSourceBmsTestUseCase.testCombineTwoBmMapsData({
        data: {
          externalId: '1',
          trafficSourceType: 'FACEBOOK',
          name: 'test',
          isActive: true,
        },
        apiAccessToConnect: new Set([1]),
        apiAccessToDisconnect: {
          notIn: new Set([1])
        }
      }, {
        data: {
          externalId: '1',
          trafficSourceType: 'FACEBOOK',
          name: 'test',
          isActive: true,
        },
        apiAccessToConnect: new Set([1]),
        apiAccessToDisconnect: {
          notIn: new Set([1])
        }
      })

      console.dir(newMapData, {depth: null});
      
      const apiAccessToConnect = newMapData.apiAccessToConnect?.values();
      const notInValues = newMapData.apiAccessToDisconnect?.notIn?.values();

      const apiAccessToConnectCount = apiAccessToConnect ? [...apiAccessToConnect].length : 0;
      const notInValuesCount = notInValues ? [...notInValues].length : 0;

      expect(apiAccessToConnectCount === 1 && notInValuesCount === 1).toBe(true);
    }, 99999999)
  })
})