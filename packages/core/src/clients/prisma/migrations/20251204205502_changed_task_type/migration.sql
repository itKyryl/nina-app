/*
  Warnings:

  - The values [COLLECT_TRAFFIC_SOURCE_DATA] on the enum `TaskType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TaskType_new" AS ENUM ('COLLECT_TRAFFIC_SOURCE_BMS');
ALTER TABLE "task-loop" ALTER COLUMN "type" TYPE "TaskType_new" USING ("type"::text::"TaskType_new");
ALTER TABLE "task" ALTER COLUMN "type" TYPE "TaskType_new" USING ("type"::text::"TaskType_new");
ALTER TYPE "TaskType" RENAME TO "TaskType_old";
ALTER TYPE "TaskType_new" RENAME TO "TaskType";
DROP TYPE "public"."TaskType_old";
COMMIT;
