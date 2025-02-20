import { NextRequest, NextResponse } from "next/server";
import { validateTurnstileToken } from "next-turnstile";
import nodemailer from "nodemailer";
import { v4 } from "uuid";

export async function POST(req: NextRequest) {
  const { token, name, email, subject, message, tel } = await req.json();

  if (!name || !email || !subject || !message || !tel) {
    return NextResponse.json(
      { message: "Todos os campos são obrigatórios" },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ message: "Email inválido" }, { status: 400 });
  }

  const validationResponse = await validateTurnstileToken({
    token,
    secretKey: process.env.TURNSTILE_SECRET_KEY!,
    idempotencyKey: v4(),
  });

  if (!validationResponse.success) {
    return NextResponse.json({ message: "Invalid token" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_EMAIL_HOST,
      port: parseInt(process.env.NEXT_PUBLIC_EMAIL_PORT || "587", 10),
      secure: false,
      auth: {
        user: process.env.EMAIL_HOST_USER,
        pass: process.env.EMAIL_HOST_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <no-reply@xcloud.com.br>`,
      to: process.env.DEFAULT_FROM_EMAIL || "contato@xcloud.tec.br",
      subject: subject,
      text: message,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Nova Mensagem de Contato</h2>
        <p style="margin-bottom: 10px;"><strong style="color: #555;">Nome:</strong> ${name}</p>
        <p style="margin-bottom: 10px;"><strong style="color: #555;">Email:</strong> ${email}</p>
        <p style="margin-bottom: 10px;"><strong style="color: #555;">Telefone:</strong> ${tel}</p>
        <p style="margin-bottom: 10px;"><strong style="color: #555;">Mensagem:</strong></p>
        <p style="background-color: #f9f9f9; padding: 10px; border-radius: 4px;">${message}</p>
        <div style="margin-top: 20px; font-size: 12px; color: #777; border-top: 1px solid #e0e0e0; padding-top: 10px;">
          Esta mensagem foi enviada através do formulário de contato do site LaraClaud.
        </div>
      </div>
    `,
    });

    return NextResponse.json(
      { message: "Email enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Erro ao enviar email", error: error.message },
      { status: 500 }
    );
  }
}
