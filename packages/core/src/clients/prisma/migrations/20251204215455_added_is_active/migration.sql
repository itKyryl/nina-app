-- AlterTable
ALTER TABLE "traffic_source_account" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "traffic_source_bm" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;
