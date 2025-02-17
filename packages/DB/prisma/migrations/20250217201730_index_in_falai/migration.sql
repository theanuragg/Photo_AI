-- AlterTable
ALTER TABLE "models" ADD COLUMN     "falAiRequestId" TEXT;

-- CreateIndex
CREATE INDEX "models_falAiRequestId_idx" ON "models"("falAiRequestId");

-- CreateIndex
CREATE INDEX "outputImage_falAiRequestId_idx" ON "outputImage"("falAiRequestId");
