/*
  Warnings:

  - Added the required column `isActive` to the `task-loop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "task-loop" ADD COLUMN     "isActive" BOOLEAN NOT NULL;
