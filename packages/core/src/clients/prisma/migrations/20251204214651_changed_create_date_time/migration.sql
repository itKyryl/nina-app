/*
  Warnings:

  - Changed the type of `externalCreatedTime` on the `traffic_source_account` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "traffic_source_account" DROP COLUMN "externalCreatedTime",
ADD COLUMN     "externalCreatedTime" TIMESTAMP(3) NOT NULL;
