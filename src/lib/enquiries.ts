import { supabase } from "@/integrations/supabase/client";

export type EnquiryFormType = "contact" | "export" | "bulk";

export interface EnquiryPayload {
  form_type: EnquiryFormType;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  company?: string;
  country?: string;
  quantity?: string;
  message?: string;
}

const clip = (value: string | undefined, max: number): string | null => {
  const trimmed = value?.trim();
  return trimmed ? trimmed.slice(0, max) : null;
};

export const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());

export async function submitEnquiry(payload: EnquiryPayload): Promise<void> {
  const name = clip(payload.name, 120);
  const email = clip(payload.email, 255);

  if (!name || !email || !isValidEmail(email)) {
    throw new Error("Please provide a valid name and email address.");
  }

  const { error } = await supabase.from("enquiries").insert({
    form_type: payload.form_type,
    name,
    email,
    phone: clip(payload.phone, 30),
    subject: clip(payload.subject, 200),
    company: clip(payload.company, 200),
    country: clip(payload.country, 100),
    quantity: clip(payload.quantity, 100),
    message: clip(payload.message, 5000),
  });

  if (error) throw error;
}
