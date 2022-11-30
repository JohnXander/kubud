/*
  Warnings:

  - Added the required column `youtube` to the `BackFillMeal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BackFillMeal" ADD COLUMN     "youtube" TEXT NOT NULL;
