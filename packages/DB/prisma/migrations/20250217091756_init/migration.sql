-- CreateEnum
CREATE TYPE "modelType" AS ENUM ('Men', 'Women');

-- CreateEnum
CREATE TYPE "ethnicity" AS ENUM ('White', 'Black', 'Asian', 'Hispanic', 'Indian', 'Other');

-- CreateEnum
CREATE TYPE "eyeColor" AS ENUM ('Blue', 'Brown', 'Green', 'Hazel', 'Gray', 'Other');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "generatorImage" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "generatorImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "models" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "modelType" NOT NULL,
    "age" INTEGER NOT NULL,
    "ethnicity" "ethnicity" NOT NULL,
    "eye" "eyeColor" NOT NULL,
    "bold" BOOLEAN NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "models_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trainingmodel" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,

    CONSTRAINT "Trainingmodel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "outputImage" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "outputImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "Trainingmodel" ADD CONSTRAINT "Trainingmodel_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "models"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "outputImage" ADD CONSTRAINT "outputImage_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "models"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
