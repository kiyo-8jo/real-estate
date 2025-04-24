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

export const GET = async (request: NextRequest) => {
  const params = request.nextUrl.searchParams;
  const area = params.get("area") as string;
  const buildingType = params.get("buildingType") as string;
  const sort: string = params.get("sort") as string;

  let realEstates;

  try {
    await connectDB();

    // "recommendation" || "new" || "space"
    if (sort == "recommendation" || "new" || "space") {
      if (area !== "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            area: area,
            buildingType: buildingType,
          },
          orderBy: {
            [sort]: "desc",
          },
        });
      }
      if (area === "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
          },
          orderBy: {
            [sort]: "desc",
          },
        });
      }
      if (area !== "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            area: area,
          },
          orderBy: {
            [sort]: "desc",
          },
        });
      }
      if (area === "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            buildingType: buildingType,
          },
          orderBy: {
            [sort]: "desc",
          },
        });
      }
    }

    // year
    if (sort == "year") {
      if (area !== "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            area: area,
            buildingType: buildingType,
          },
          orderBy: {
            [sort]: "asc",
          },
        });
      }
      if (area === "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
          },
          orderBy: {
            [sort]: "asc",
          },
        });
      }
      if (area !== "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            area: area,
          },
          orderBy: {
            [sort]: "asc",
          },
        });
      }
      if (area === "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            buildingType: buildingType,
          },
          orderBy: {
            [sort]: "asc",
          },
        });
      }
    }

    // cheap
    if (sort == "cheap") {
      if (area !== "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            area: area,
            buildingType: buildingType,
          },
          orderBy: {
            value: "asc",
          },
        });
      }
      if (area === "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
          },
          orderBy: {
            value: "asc",
          },
        });
      }
      if (area !== "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            area: area,
          },
          orderBy: {
            value: "asc",
          },
        });
      }
      if (area === "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            buildingType: buildingType,
          },
          orderBy: {
            value: "asc",
          },
        });
      }
    }

    // expensive
    if (sort == "expensive") {
      if (area !== "null" && buildingType !== "null") {
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
      if (area === "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
          },
          orderBy: {
            value: "desc",
          },
        });
      }
      if (area !== "null" && buildingType === "null") {
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
      if (area === "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            buildingType: buildingType,
          },
          orderBy: {
            value: "asc",
          },
        });
      }
    }
    return NextResponse.json(realEstates, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
