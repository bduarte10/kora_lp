import { z } from "zod";

const serverSchema = z.object({
  LEAD_WEBHOOK_URL: z.string().url().optional(),
  LEAD_WEBHOOK_SECRET: z.string().optional(),
});

const clientSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://koraintelligence.com.br"),
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
  LEAD_WEBHOOK_URL: empty(process.env.LEAD_WEBHOOK_URL),
  LEAD_WEBHOOK_SECRET: empty(process.env.LEAD_WEBHOOK_SECRET),
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
