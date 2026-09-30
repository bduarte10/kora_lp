import { serverEnv } from "@/lib/env";
import { leadSchema } from "@/lib/lead";
import * as Sentry from "@sentry/nextjs";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "validation_failed", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  // Campo invisível: só robô preenche. Responde sucesso para não ensinar o robô.
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const webhook = serverEnv.LEAD_WEBHOOK_URL;
  if (!webhook) {
    Sentry.captureMessage("[lead] LEAD_WEBHOOK_URL ausente; lead não foi salvo", "error");
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const { website: _, ...lead } = parsed.data;
  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(10_000),
    });
    const result = (await res.json()) as { ok?: boolean };
    if (!res.ok || !result.ok) throw new Error(`webhook respondeu ${res.status}`);
  } catch (error) {
    Sentry.captureException(error, { tags: { channel: "lead-webhook" } });
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
