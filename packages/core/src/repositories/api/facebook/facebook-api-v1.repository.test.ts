import FacebookApiV1Repository from "./facebook-api-v1.repository";

describe(FacebookApiV1Repository.name, () => {

  const FACEBOOK_TEST_API_TOKEN: string | undefined = process.env.FACEBOOK_TEST_API_TOKEN;

  if(!FACEBOOK_TEST_API_TOKEN) throw new Error(`Please provide FACEBOOK_TEST_API_TOKEN for testing`);

  const facebookApiV1Repository = new FacebookApiV1Repository({
    apiToken: FACEBOOK_TEST_API_TOKEN
  });

  describe('getBms', () => {
    it('collect bms', async () => {
      const bms = await facebookApiV1Repository.getBms();

      console.log(bms);

      expect(bms.length > 0).toBe(true);
    }, 99999999)
  })
})