/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `models` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "modelStatus" AS ENUM ('Pending', 'Completed', 'Failed');

-- AlterTable
ALTER TABLE "models" DROP COLUMN "imageUrl",
ADD COLUMN     "tensorPath" TEXT,
ADD COLUMN     "trainingStatus" "modelStatus" NOT NULL DEFAULT 'Pending',
ADD COLUMN     "triggerWord" TEXT;

-- AlterTable
ALTER TABLE "outputImage" ADD COLUMN     "falAiRequestId" TEXT,
ALTER COLUMN "imageUrl" SET DEFAULT '',
ALTER COLUMN "status" SET DEFAULT 'Pending';

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "falAiRequestId" TEXT;
