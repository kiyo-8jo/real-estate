import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (request: NextRequest) => {
  try {
    await connectDB();

    const { area, buildingType } = await request.json();

    let realEstates;

    // 価格高い順
    if (!area && !buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: "buy",
        },
        orderBy: {
          value: "desc",
        },
      });
    }

    if (area && buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: "buy",
          area: area,
          buildingType: buildingType,
        },
        orderBy: {
          value: "desc",
        },
      });
    }

    if (!area && buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: "buy",
          buildingType: buildingType,
        },
        orderBy: {
          value: "desc",
        },
      });
    }

    if (area && !buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: "buy",
          area: area,
        },
        orderBy: {
          value: "desc",
        },
      });
    }

    return NextResponse.json(realEstates, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
