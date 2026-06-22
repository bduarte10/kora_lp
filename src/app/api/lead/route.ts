import { enrichCnpj, normalizeCnpj } from "@/lib/cnpj";
import { sendLeadEmail } from "@/lib/resend";
import { appendLeadToSheet } from "@/lib/sheets";
import * as Sentry from "@sentry/nextjs";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2).max(120),
  phone: z.string().min(10).max(20),
  email: z.string().email().max(160),
  company: z.string().min(2).max(160),
  role: z.string().max(120).optional(),
  segment: z.string().min(1).max(120),
  companySize: z.string().min(1).max(80),
  cnpj: z.string().max(24).optional(),
  mainChallenge: z.string().min(8).max(2000),
  priority: z.string().min(1).max(120),
  urgency: z.string().min(1).max(120),
  paidDiagnosticOpenness: z.string().min(1).max(120),
  message: z.string().max(2000).optional(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "validation_failed", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const cnpj = normalizeCnpj(parsed.data.cnpj);
  const cnpjEnrichment = await enrichCnpj(cnpj);
  const lead = { ...parsed.data, cnpj, cnpjEnrichment };

  const [emailResult, sheetsResult] = await Promise.allSettled([
    sendLeadEmail(lead),
    appendLeadToSheet(lead),
  ]);

  if (emailResult.status === "rejected") {
    console.error("[lead] resend falhou:", emailResult.reason);
    Sentry.captureException(emailResult.reason, { tags: { channel: "resend" } });
  }
  if (sheetsResult.status === "rejected") {
    console.error("[lead] sheets falhou:", sheetsResult.reason);
    Sentry.captureException(sheetsResult.reason, { tags: { channel: "sheets" } });
  }

  const allFailed = emailResult.status === "rejected" && sheetsResult.status === "rejected";

  if (allFailed) {
    Sentry.captureMessage("[lead] todos os canais de entrega falharam", "error");
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
