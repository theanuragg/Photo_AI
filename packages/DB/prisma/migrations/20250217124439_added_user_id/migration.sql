/*
  Warnings:

  - The `imageUrl` column on the `models` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `userId` to the `models` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "models" ADD COLUMN     "userId" TEXT NOT NULL,
DROP COLUMN "imageUrl",
ADD COLUMN     "imageUrl" TEXT[];
