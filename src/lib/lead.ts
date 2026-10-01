import { z } from "zod";

export const segmentOptions = [
  "Implante e reabilitação",
  "Estética",
  "Ortodontia",
  "Clínica geral",
  "Rede ou franquia",
] as const;

export const leadFieldsSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(120),
  clinic: z.string().trim().min(2, "Informe o nome da clínica").max(160),
  phone: z
    .string()
    .trim()
    .max(20)
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Informe o WhatsApp com DDD"),
  location: z.string().trim().min(3, "Informe o bairro e a cidade").max(160),
  segment: z.string().max(80).optional(),
  website: z.string().max(200).optional(),
});

export const leadSchema = leadFieldsSchema.extend({
  id: z.string().uuid(),
  source: z.string().max(80).optional(),
});

export type LeadFields = z.infer<typeof leadFieldsSchema>;
export type Lead = z.infer<typeof leadSchema>;
