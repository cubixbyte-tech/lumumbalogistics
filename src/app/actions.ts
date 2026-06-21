"use server";

import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/lib/site";

const quoteSchema = z.object({
  company: z.string().min(2).max(100),
  phone: z.string().min(7).max(30),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
  website: z.string().max(0),
});

export type QuoteState = { success?: boolean; message?: string };

export async function submitQuote(_: QuoteState, formData: FormData): Promise<QuoteState> {
  const parsed = quoteSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { success: false, message: "Please complete every field with valid information." };
  if (!process.env.RESEND_API_KEY) return { success: true, message: "Thanks. Your quote request is ready for our dispatch team." };
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { company, phone, email, message } = parsed.data;
  const { error } = await resend.emails.send({
    from: process.env.QUOTE_FROM_EMAIL || "Lumumba Website <onboarding@resend.dev>",
    to: process.env.QUOTE_TO_EMAIL || siteConfig.email,
    replyTo: email,
    subject: `Freight quote request from ${company}`,
    text: `Company: ${company}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
  });
  return error ? { success: false, message: "We could not send your request. Please email dispatch directly." } : { success: true, message: "Thank you. Our dispatch team will contact you shortly." };
}
