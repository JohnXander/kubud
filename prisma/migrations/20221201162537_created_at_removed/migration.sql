/*
  Warnings:

  - You are about to drop the column `createdAt` on the `BackFillIngredient` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Ingredient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BackFillIngredient" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "createdAt";
