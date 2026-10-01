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
  | { event: "whatsapp_click"; location: string; label?: string }
  | { event: "diagnostic_interest"; location: string; priority?: string }
  | {
      event: "form_submit";
      form_id: string;
      form_variant?: string;
      submission_id?: string;
      interest?: string;
      priority?: string;
    }
  | { event: "lead_received"; form_id: string; form_variant?: string; submission_id: string }
  | { event: "section_view"; section: string };

export function pushEvent(payload: GTMEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);

  const { event, ...props } = payload;
  capturePosthog(event, props);
}

function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer ?? [];
  // biome-ignore lint/style/noArguments: o Consent Mode só reconhece o objeto arguments, não um array.
  window.dataLayer.push(arguments as unknown as Record<string, unknown>);
}

export function pushConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  const state = granted ? "granted" : "denied";
  const consent = {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  };
  gtag("consent", "update", consent);
  // Gatilho para tags que precisam rodar logo depois da mudança de consentimento.
  window.dataLayer.push({ event: "consent_update", ...consent });

  // Reflete a decisão de consentimento no PostHog ao vivo.
  if (!clientEnv.NEXT_PUBLIC_POSTHOG_KEY) return;
  void import("posthog-js").then(({ default: posthog }) => {
    if (!posthog.__loaded) return;
    if (granted) posthog.opt_in_capturing();
    else posthog.opt_out_capturing();
  });
}
