import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import Email from "../../../../../emails/DetailContactEmail";
import { RealEstateDataType } from "@/app/types/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, tel, email, inquiry, id } = await req.json();
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${API_URL}/api/getDetailData/${id}`, {
      cache: "no-store",
    });
    const realEstate: RealEstateDataType = await res.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.MY_ADDRESS!,
      subject: "Island Real Estate",
      react: Email({
        name,
        tel,
        email,
        inquiry,
        buildingName: realEstate.name,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
