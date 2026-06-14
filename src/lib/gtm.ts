"use client";

import { clientEnv } from "@/lib/env";

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

/**
 * Espelha um evento do dataLayer para o PostHog (se habilitado), via dynamic import
 * para não pesar o bundle inicial. No-op até o PostHog estar inicializado (__loaded)
 * — o que só ocorre após consentimento (ver src/components/tracking/posthog.tsx).
 */
function capturePosthog(event: string, props: Record<string, unknown>) {
  if (!clientEnv.NEXT_PUBLIC_POSTHOG_KEY) return;
  void import("posthog-js").then(({ default: posthog }) => {
    if (posthog.__loaded) posthog.capture(event, props);
  });
}

export type GTMEvent =
  | { event: "cta_click"; label: string; location: string }
  | { event: "whatsapp_click"; location: string }
  | { event: "select_plan"; plan: string; location: string }
  | { event: "toggle_billing"; period: "monthly" | "annual" }
  | { event: "form_submit"; form_id: string; plan?: string }
  | { event: "lead_qualified"; form_id: string; email?: string; plan?: string }
  | { event: "section_view"; section: string };

export function pushEvent(payload: GTMEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);

  const { event, ...props } = payload;
  capturePosthog(event, props);
}

export function pushConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event: "consent_update",
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
    analytics_storage: granted ? "granted" : "denied",
  });

  // Reflete a decisão de consentimento no PostHog ao vivo.
  if (!clientEnv.NEXT_PUBLIC_POSTHOG_KEY) return;
  void import("posthog-js").then(({ default: posthog }) => {
    if (!posthog.__loaded) return;
    if (granted) posthog.opt_in_capturing();
    else posthog.opt_out_capturing();
  });
}
