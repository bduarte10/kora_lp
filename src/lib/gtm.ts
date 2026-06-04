"use client";

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

export type GTMEvent =
  | { event: "cta_click"; label: string; location: string }
  | { event: "whatsapp_click"; location: string }
  | { event: "select_plan"; plan: string; location: string }
  | { event: "form_submit"; form_id: string; plan?: string }
  | { event: "lead_qualified"; form_id: string; email?: string; plan?: string }
  | { event: "section_view"; section: string };

export function pushEvent(payload: GTMEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
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
}
