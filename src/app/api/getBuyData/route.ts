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

    if (sort === "recommendation" || "year") {
      if (area !== "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            area: area,
            buildingType: buildingType,
          },
          orderBy: {
            recommendation: "desc",
          },
        });
      } else if (area === "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
          },
          orderBy: {
            recommendation: "desc",
          },
        });
      } else if (area !== "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            area: area,
          },
          orderBy: {
            recommendation: "desc",
          },
        });
      } else if (area === "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            buildingType: buildingType,
          },
          orderBy: {
            recommendation: "desc",
          },
        });
      }
    }

    if (sort === "space") {
      if (area !== "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            area: area,
            buildingType: buildingType,
          },
          orderBy: {
            space: "desc",
          },
        });
      } else if (area === "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
          },
          orderBy: {
            space: "desc",
          },
        });
      } else if (area !== "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            area: area,
          },
          orderBy: {
            space: "desc",
          },
        });
      } else if (area === "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            buildingType: buildingType,
          },
          orderBy: {
            space: "desc",
          },
        });
      }
    }

    if (sort === "new") {
      if (area !== "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            area: area,
            buildingType: buildingType,
          },
          orderBy: {
            createdAt: "desc",
          },
        });
      } else if (area === "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
          },
          orderBy: {
            createdAt: "desc",
          },
        });
      } else if (area !== "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            area: area,
          },
          orderBy: {
            createdAt: "desc",
          },
        });
      } else if (area === "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            buildingType: buildingType,
          },
          orderBy: {
            createdAt: "desc",
          },
        });
      }
    }

    if (sort === "cheap") {
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
      } else if (area === "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
          },
          orderBy: {
            value: "asc",
          },
        });
      } else if (area !== "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            area: area,
          },
          orderBy: {
            value: "asc",
          },
        });
      } else if (area === "null" && buildingType !== "null") {
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

    if (sort === "expensive") {
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
      } else if (area === "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
          },
          orderBy: {
            value: "desc",
          },
        });
      } else if (area !== "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "buy",
            area: area,
          },
          orderBy: {
            value: "desc",
          },
        });
      } else if (area === "null" && buildingType !== "null") {
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
    }

    return NextResponse.json(realEstates, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
