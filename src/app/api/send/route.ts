import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend("re_Spdy8B1i_4JUWu1PrkGspA1fzQBpWeU4K");

export async function POST(req: NextRequest) {
  try {
    const {name, email, company, message} = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["diego27fernando72@gmail.com"],
      subject: "New message",
      react: EmailTemplate({ 
        name,
        email,
        company,
        message,
      }),
      text: "New message",
    });

    return NextResponse.json(
      {
        message: "Email Sent successfully",
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
