-- CreateTable
CREATE TABLE "BackFillIngredient" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "BackFillIngredient_pkey" PRIMARY KEY ("id")
);
