-- CreateTable
CREATE TABLE "BackFillMeal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "ingredients" TEXT[],

    CONSTRAINT "BackFillMeal_pkey" PRIMARY KEY ("id")
);
