-- AlterTable
ALTER TABLE "traffic_source_account" ADD COLUMN     "trafficSourceOwnerBmId" INTEGER;

-- AddForeignKey
ALTER TABLE "traffic_source_account" ADD CONSTRAINT "traffic_source_account_trafficSourceOwnerBmId_fkey" FOREIGN KEY ("trafficSourceOwnerBmId") REFERENCES "traffic_source_bm"("id") ON DELETE SET NULL ON UPDATE CASCADE;
