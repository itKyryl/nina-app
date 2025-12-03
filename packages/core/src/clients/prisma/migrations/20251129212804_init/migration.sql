-- CreateEnum
CREATE TYPE "TaskType" AS ENUM ('COLLECT_TRAFFIC_SOURCE_DATA');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('PENDING', 'RUNNING', 'FAILED', 'DONE');

-- CreateTable
CREATE TABLE "log" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "message" TEXT,
    "isError" BOOLEAN NOT NULL,
    "workerId" INTEGER,
    "stack" TEXT,
    "request" TEXT,
    "response" TEXT,
    "data" TEXT,

    CONSTRAINT "log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "minWorkerThreads" INTEGER NOT NULL,
    "maxWorkerThreads" INTEGER NOT NULL,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL,
    "type" "TaskType" NOT NULL,
    "payload" JSONB NOT NULL,
    "status" "TaskStatus" NOT NULL DEFAULT 'PENDING',
    "result" JSONB,
    "error" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);
