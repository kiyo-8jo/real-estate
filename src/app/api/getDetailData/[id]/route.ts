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

export const GET = async (request: NextRequest, props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  try {
    await connectDB();
    const id = parseInt(params.id);

    const detailRealEstate = await prisma.realEstate.findUnique({
      where: {
        id: id,
      },
    });

    return NextResponse.json(detailRealEstate, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
