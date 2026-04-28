import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import type { APIRoute } from 'astro';

dotenv.config();

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const post: APIRoute = async ({ request }) => {
  const { name, email, message }: ContactForm = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Nouveau message de ${name}`,
      text: `De : ${name} <${email}>\n\n${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};
