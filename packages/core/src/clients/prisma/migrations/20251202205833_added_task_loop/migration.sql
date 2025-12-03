-- AlterTable
ALTER TABLE "task" ADD COLUMN     "taskLoopId" INTEGER;

-- CreateTable
CREATE TABLE "task-loop" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "TaskType" NOT NULL,
    "payload" JSONB,
    "intervalMin" INTEGER NOT NULL,

    CONSTRAINT "task-loop_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_taskLoopId_fkey" FOREIGN KEY ("taskLoopId") REFERENCES "task-loop"("id") ON DELETE SET NULL ON UPDATE CASCADE;
