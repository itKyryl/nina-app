-- CreateEnum
CREATE TYPE "ApiAccessType" AS ENUM ('TRAFFIC_SOURCE_SOC');

-- CreateEnum
CREATE TYPE "TrafficSourceAccountStatus" AS ENUM ('ACTIVE', 'BLOCKED');

-- CreateEnum
CREATE TYPE "TrafficSourceType" AS ENUM ('FACEBOOK');

-- CreateTable
CREATE TABLE "api_access" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "trafficSourceType" "TrafficSourceType",
    "apiAccessType" "ApiAccessType" NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "login" TEXT,
    "password" TEXT,
    "firstAccessToken" TEXT,
    "secondAccessToken" TEXT,

    CONSTRAINT "api_access_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "traffic_source_account" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "trafficSourceType" "TrafficSourceType" NOT NULL,
    "externalId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "externalStatus" TEXT NOT NULL,
    "externalCreatedTime" TEXT NOT NULL,
    "status" "TrafficSourceAccountStatus",
    "balance" DECIMAL(18,2) NOT NULL,
    "externalCurrency" TEXT NOT NULL,
    "externalTimezone" TEXT NOT NULL,
    "spendCap" DECIMAL(18,2) NOT NULL,
    "amountSpent" DECIMAL(18,2) NOT NULL,

    CONSTRAINT "traffic_source_account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "traffic_source_account_to_traffic_source_bm" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "trafficSourceBmId" INTEGER NOT NULL,
    "trafficSourceAccountId" INTEGER NOT NULL,

    CONSTRAINT "traffic_source_account_to_traffic_source_bm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "traffic_source_bm" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "trafficSourceType" "TrafficSourceType" NOT NULL,
    "externalId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "traffic_source_bm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "traffic_source_bm_to_api_access" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "trafficSourceBmId" INTEGER NOT NULL,
    "apiAccessId" INTEGER NOT NULL,

    CONSTRAINT "traffic_source_bm_to_api_access_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "traffic_source_account_trafficSourceType_externalId_key" ON "traffic_source_account"("trafficSourceType", "externalId");

-- CreateIndex
CREATE UNIQUE INDEX "traffic_source_account_to_traffic_source_bm_trafficSourceBm_key" ON "traffic_source_account_to_traffic_source_bm"("trafficSourceBmId", "trafficSourceAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "traffic_source_bm_trafficSourceType_externalId_key" ON "traffic_source_bm"("trafficSourceType", "externalId");

-- CreateIndex
CREATE UNIQUE INDEX "traffic_source_bm_to_api_access_trafficSourceBmId_apiAccess_key" ON "traffic_source_bm_to_api_access"("trafficSourceBmId", "apiAccessId");

-- AddForeignKey
ALTER TABLE "traffic_source_account_to_traffic_source_bm" ADD CONSTRAINT "traffic_source_account_to_traffic_source_bm_trafficSourceB_fkey" FOREIGN KEY ("trafficSourceBmId") REFERENCES "traffic_source_bm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "traffic_source_account_to_traffic_source_bm" ADD CONSTRAINT "traffic_source_account_to_traffic_source_bm_trafficSourceA_fkey" FOREIGN KEY ("trafficSourceAccountId") REFERENCES "traffic_source_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "traffic_source_bm_to_api_access" ADD CONSTRAINT "traffic_source_bm_to_api_access_trafficSourceBmId_fkey" FOREIGN KEY ("trafficSourceBmId") REFERENCES "traffic_source_bm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "traffic_source_bm_to_api_access" ADD CONSTRAINT "traffic_source_bm_to_api_access_apiAccessId_fkey" FOREIGN KEY ("apiAccessId") REFERENCES "api_access"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
