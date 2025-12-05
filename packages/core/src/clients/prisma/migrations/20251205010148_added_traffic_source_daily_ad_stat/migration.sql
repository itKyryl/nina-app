-- CreateTable
CREATE TABLE "traffic_source_daily_ad_stat" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "spend" DECIMAL(18,2) NOT NULL,
    "clicks" INTEGER NOT NULL,
    "externalAdId" TEXT NOT NULL,
    "externalAdSetId" TEXT NOT NULL,
    "externalCampaignId" TEXT NOT NULL,
    "impressions" INTEGER NOT NULL,
    "externalDateStart" TIMESTAMP(3) NOT NULL,
    "externalDateStop" TIMESTAMP(3) NOT NULL,
    "trafficSourceType" "TrafficSourceType" NOT NULL,
    "trafficSourceAccountId" INTEGER NOT NULL,

    CONSTRAINT "traffic_source_daily_ad_stat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "traffic_source_daily_ad_stat_externalDateStart_trafficSourc_key" ON "traffic_source_daily_ad_stat"("externalDateStart", "trafficSourceAccountId", "externalAdId");

-- AddForeignKey
ALTER TABLE "traffic_source_daily_ad_stat" ADD CONSTRAINT "traffic_source_daily_ad_stat_trafficSourceAccountId_fkey" FOREIGN KEY ("trafficSourceAccountId") REFERENCES "traffic_source_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
