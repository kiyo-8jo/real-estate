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
            type: "rent",
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
            type: "rent",
          },
          orderBy: {
            recommendation: "desc",
          },
        });
      } else if (area !== "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "rent",
            area: area,
          },
          orderBy: {
            recommendation: "desc",
          },
        });
      } else if (area === "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "rent",
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
            type: "rent",
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
            type: "rent",
          },
          orderBy: {
            space: "desc",
          },
        });
      } else if (area !== "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "rent",
            area: area,
          },
          orderBy: {
            space: "desc",
          },
        });
      } else if (area === "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "rent",
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
            type: "rent",
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
            type: "rent",
          },
          orderBy: {
            createdAt: "desc",
          },
        });
      } else if (area !== "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "rent",
            area: area,
          },
          orderBy: {
            createdAt: "desc",
          },
        });
      } else if (area === "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "rent",
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
            type: "rent",
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
            type: "rent",
          },
          orderBy: {
            value: "asc",
          },
        });
      } else if (area !== "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "rent",
            area: area,
          },
          orderBy: {
            value: "asc",
          },
        });
      } else if (area === "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "rent",
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
            type: "rent",
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
            type: "rent",
          },
          orderBy: {
            value: "desc",
          },
        });
      } else if (area !== "null" && buildingType === "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "rent",
            area: area,
          },
          orderBy: {
            value: "desc",
          },
        });
      } else if (area === "null" && buildingType !== "null") {
        realEstates = await prisma.realEstate.findMany({
          where: {
            type: "rent",
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

