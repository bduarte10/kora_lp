"use client";

import { clientEnv } from "@/lib/env";
import { useEffect } from "react";

const CONSENT_KEY = "kora:consent";

// Mapeia o referrer para a IA de origem (GEO/medição). null se não for de IA.
function detectAiSource(referrer: string): string | null {
  if (!referrer) return null;
  let host: string;
  try {
    host = new URL(referrer).hostname;
  } catch {
    return null;
  }
  const sources: Record<string, string> = {
    "chatgpt.com": "chatgpt",
    "chat.openai.com": "chatgpt",
    "perplexity.ai": "perplexity",
    "gemini.google.com": "gemini",
    "copilot.microsoft.com": "copilot",
    "claude.ai": "claude",
  };
  for (const domain in sources) {
    if (host === domain || host.endsWith(`.${domain}`)) return sources[domain];
  }
  return null;
}

/**
 * Inicializa o PostHog de forma deferida (primeira interação ou 3s), igual ao GTM,
 * via dynamic import para manter o bundle inicial leve.
 *
 * Privacidade: captura desligada por padrão (opt_out_capturing_by_default). Só passa
 * a capturar quando o consentimento é "granted" — o opt-in inicial é resolvido aqui e
 * as mudanças ao vivo chegam via pushConsent (ver src/lib/gtm.ts). Sem autocapture e
 * com perfis só para usuários identificados, para minimizar coleta de PII.
 */
export function PostHog() {
  useEffect(() => {
    const key = clientEnv.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    let cancelled = false;

    const load = async () => {
      const { default: posthog } = await import("posthog-js");
      if (cancelled || posthog.__loaded) return;

      posthog.init(key, {
        api_host: clientEnv.NEXT_PUBLIC_POSTHOG_HOST,
        autocapture: false,
        capture_pageview: true,
        capture_pageleave: true,
        persistence: "localStorage+cookie",
        opt_out_capturing_by_default: true,
        person_profiles: "identified_only",
        respect_dnt: true,
      });

      const aiSource = detectAiSource(document.referrer);
      if (aiSource) posthog.register({ ai_source: aiSource });

      if (window.localStorage.getItem(CONSENT_KEY) === "granted") {
        posthog.opt_in_capturing();
      }
    };

    const timer = window.setTimeout(load, 3000);
    const onInteract = () => load();
    window.addEventListener("scroll", onInteract, { once: true, passive: true });
    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("keydown", onInteract, { once: true });

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
    };
  }, []);

  return null;
}
