/*
  Warnings:

  - Added the required column `prompt` to the `outputImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `outputImage` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "outputStatus" AS ENUM ('Pending', 'Completed', 'Failed');

-- AlterTable
ALTER TABLE "outputImage" ADD COLUMN     "prompt" TEXT NOT NULL,
ADD COLUMN     "status" "outputStatus" NOT NULL;
