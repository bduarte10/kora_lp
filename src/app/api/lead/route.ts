import { NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadEmail } from "@/lib/resend";
import { appendLeadToSheet } from "@/lib/sheets";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(160),
  company: z.string().min(2).max(160),
  phone: z.string().min(10).max(20),
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

  const lead = parsed.data;

  const [emailResult, sheetsResult] = await Promise.allSettled([
    sendLeadEmail(lead),
    appendLeadToSheet(lead),
  ]);

  if (emailResult.status === "rejected") console.error("[lead] resend falhou:", emailResult.reason);
  if (sheetsResult.status === "rejected")
    console.error("[lead] sheets falhou:", sheetsResult.reason);

  const allFailed =
    emailResult.status === "rejected" && sheetsResult.status === "rejected";

  if (allFailed) {
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
