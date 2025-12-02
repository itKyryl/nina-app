export default async function (payload: any): Promise<Record<string, any>> {
  console.log(`Started traffic source collection`);

  return {
    fbCollectedData: 0,
    ttCollectedData: 0
  };
}