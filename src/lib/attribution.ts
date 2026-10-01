"use client";

import type { Attribution } from "@/lib/lead";

const STORAGE_KEY = "kora:attribution";

const trackedParams = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "li_fat_id",
] as const;

/**
 * Guarda, na sessão da aba, por onde o visitante chegou: a primeira página vista ou a última
 * que veio com UTM ou click ID. O formulário lê isso no envio, mesmo depois de navegar.
 */
export function captureAttribution() {
  const url = new URL(window.location.href);
  const fromUrl: Attribution = {};
  for (const key of trackedParams) {
    const value = url.searchParams.get(key);
    if (value) fromUrl[key] = value.slice(0, 300);
  }

  try {
    if (Object.keys(fromUrl).length === 0 && window.sessionStorage.getItem(STORAGE_KEY)) return;
    const attribution: Attribution = { ...fromUrl, landing_page: url.pathname };
    const referrer = referrerHost();
    if (referrer) attribution.referrer = referrer;
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // sessionStorage bloqueado: o lead segue sem origem.
  }
}

export function readAttribution(): Attribution {
  try {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) ?? "{}") as Attribution;
  } catch {
    return {};
  }
}

// Só o domínio externo: o caminho de quem indicou pode carregar dados de terceiros.
function referrerHost() {
  if (!document.referrer) return undefined;
  const host = new URL(document.referrer).hostname;
  return host === window.location.hostname ? undefined : host;
}
