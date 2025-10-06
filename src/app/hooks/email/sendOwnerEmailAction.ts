"use server";
import { Resend } from "resend";
import Email from "../../../../emails/OwnerContactEmail";

export const sendOwnerEmailAction = async (formData: FormData) => {
  // サニタイズ用関数
  const getSanitizedValue = (inputValue: FormDataEntryValue | null) => {
    return String(inputValue)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/'/g, "&apos;")
      .replace(/"/g, "&quot;");
  };
  const name = getSanitizedValue(formData.get("name"));
  const tel = getSanitizedValue(formData.get("tel"));
  const email = getSanitizedValue(formData.get("email"));
  const inquiry = getSanitizedValue(formData.get("inquiry"));

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.MY_ADDRESS!,
      subject: "Island Real Estate",
      react: Email({ name, tel, email, inquiry }),
    });
  } catch (error) {
    return console.log(error);
  }
};
