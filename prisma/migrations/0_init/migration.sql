-- CreateTable
CREATE TABLE "RealEstate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "postCode" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "space" INTEGER NOT NULL,
    "layout" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "recommendation" INTEGER NOT NULL DEFAULT 1,
    "year" INTEGER NOT NULL DEFAULT 1,
    "floor" INTEGER NOT NULL DEFAULT 1,
    "allFloor" INTEGER NOT NULL DEFAULT 1,
    "buildingType" TEXT NOT NULL DEFAULT 'apartment',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RealEstate_pkey" PRIMARY KEY ("id")
);

