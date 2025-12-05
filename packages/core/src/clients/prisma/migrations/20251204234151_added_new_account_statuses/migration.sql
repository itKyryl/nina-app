/*
  Warnings:

  - The values [BLOCKED] on the enum `TrafficSourceAccountStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TrafficSourceAccountStatus_new" AS ENUM ('ACTIVE', 'BLOCK', 'PAYMENT_ERROR', 'CLOSING', 'EXPIRED');
ALTER TABLE "traffic_source_account" ALTER COLUMN "status" TYPE "TrafficSourceAccountStatus_new" USING ("status"::text::"TrafficSourceAccountStatus_new");
ALTER TYPE "TrafficSourceAccountStatus" RENAME TO "TrafficSourceAccountStatus_old";
ALTER TYPE "TrafficSourceAccountStatus_new" RENAME TO "TrafficSourceAccountStatus";
DROP TYPE "public"."TrafficSourceAccountStatus_old";
COMMIT;
