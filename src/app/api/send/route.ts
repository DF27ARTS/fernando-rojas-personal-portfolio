import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";
import { NextResponse } from "next/server";

const resend = new Resend("re_Spdy8B1i_4JUWu1PrkGspA1fzQBpWeU4K");

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["diego27fernando72@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
      text: "Hello world",
    });

    return NextResponse.json(
      {
        message: "Email Sent",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error",
      },
      {
        status: 500,
      }
    );
  }
}
