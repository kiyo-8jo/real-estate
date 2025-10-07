import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import Email from "../../../../../emails/OwnerContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, tel, email, inquiry } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "onboarding@8jo-real-estate.jp",
      to: process.env.MY_ADDRESS!,
      subject: "Island Real Estate",
      react: Email({ name, tel, email, inquiry }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
