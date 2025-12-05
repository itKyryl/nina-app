-- DropForeignKey
ALTER TABLE "traffic_source_account_to_traffic_source_bm" DROP CONSTRAINT "traffic_source_account_to_traffic_source_bm_trafficSourceA_fkey";

-- DropForeignKey
ALTER TABLE "traffic_source_account_to_traffic_source_bm" DROP CONSTRAINT "traffic_source_account_to_traffic_source_bm_trafficSourceB_fkey";

-- DropForeignKey
ALTER TABLE "traffic_source_bm_to_api_access" DROP CONSTRAINT "traffic_source_bm_to_api_access_apiAccessId_fkey";

-- DropForeignKey
ALTER TABLE "traffic_source_bm_to_api_access" DROP CONSTRAINT "traffic_source_bm_to_api_access_trafficSourceBmId_fkey";

-- AddForeignKey
ALTER TABLE "traffic_source_account_to_traffic_source_bm" ADD CONSTRAINT "traffic_source_account_to_traffic_source_bm_trafficSourceB_fkey" FOREIGN KEY ("trafficSourceBmId") REFERENCES "traffic_source_bm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "traffic_source_account_to_traffic_source_bm" ADD CONSTRAINT "traffic_source_account_to_traffic_source_bm_trafficSourceA_fkey" FOREIGN KEY ("trafficSourceAccountId") REFERENCES "traffic_source_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "traffic_source_bm_to_api_access" ADD CONSTRAINT "traffic_source_bm_to_api_access_trafficSourceBmId_fkey" FOREIGN KEY ("trafficSourceBmId") REFERENCES "traffic_source_bm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "traffic_source_bm_to_api_access" ADD CONSTRAINT "traffic_source_bm_to_api_access_apiAccessId_fkey" FOREIGN KEY ("apiAccessId") REFERENCES "api_access"("id") ON DELETE CASCADE ON UPDATE CASCADE;
