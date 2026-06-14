import { z } from "zod";

const serverSchema = z.object({
  RESEND_API_KEY: z.string().min(1).optional(),
  LEAD_NOTIFICATION_EMAIL: z.string().email().optional(),
  GOOGLE_SHEETS_CLIENT_EMAIL: z.string().email().optional(),
  GOOGLE_SHEETS_PRIVATE_KEY: z.string().optional(),
  GOOGLE_SHEETS_SPREADSHEET_ID: z.string().optional(),
});

const clientSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://kora.com.br"),
  NEXT_PUBLIC_WHATSAPP_NUMBER: z.string().default("5511920923143"),
  NEXT_PUBLIC_WHATSAPP_MESSAGE: z.string().default(""),
  NEXT_PUBLIC_GTM_ID: z.string().optional(),
  NEXT_PUBLIC_GA4_ID: z.string().optional(),
  NEXT_PUBLIC_META_PIXEL_ID: z.string().optional(),
  NEXT_PUBLIC_LINKEDIN_PARTNER_ID: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().url().default("https://us.i.posthog.com"),
});

const empty = (v: string | undefined) => v || undefined;

export const serverEnv = serverSchema.parse({
  RESEND_API_KEY: empty(process.env.RESEND_API_KEY),
  LEAD_NOTIFICATION_EMAIL: empty(process.env.LEAD_NOTIFICATION_EMAIL),
  GOOGLE_SHEETS_CLIENT_EMAIL: empty(process.env.GOOGLE_SHEETS_CLIENT_EMAIL),
  GOOGLE_SHEETS_PRIVATE_KEY: empty(process.env.GOOGLE_SHEETS_PRIVATE_KEY),
  GOOGLE_SHEETS_SPREADSHEET_ID: empty(process.env.GOOGLE_SHEETS_SPREADSHEET_ID),
});

export const clientEnv = clientSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  NEXT_PUBLIC_WHATSAPP_MESSAGE: process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE,
  NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
  NEXT_PUBLIC_GA4_ID: process.env.NEXT_PUBLIC_GA4_ID,
  NEXT_PUBLIC_META_PIXEL_ID: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  NEXT_PUBLIC_LINKEDIN_PARTNER_ID: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID,
  NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
});
