"use client";

import { pushConsent } from "@/lib/gtm";
import { useEffect, useState } from "react";

const STORAGE_KEY = "kora:consent";
const OPEN_EVENT = "kora:consent-open";

type Choice = "granted" | "denied";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [choice, setChoice] = useState<Choice | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    } else if (stored === "granted") {
      pushConsent(true);
    }

    const open = () => {
      const current = window.localStorage.getItem(STORAGE_KEY);
      setChoice(current === "granted" || current === "denied" ? current : null);
      setVisible(true);
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  if (!visible) return null;

  const handle = (granted: boolean) => {
    window.localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    pushConsent(granted);
    setVisible(false);
  };

  return (
    // biome-ignore lint/a11y/useSemanticElements: Fixed banner needs lightweight dialog semantics without native modal behavior.
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 z-50 rounded-md border border-border bg-background-elev p-4 shadow-lg sm:inset-x-auto sm:bottom-4 sm:left-4 sm:max-w-sm"
    >
      <p className="text-sm text-foreground-muted">
        Usamos cookies para medir o site e ajustar campanhas.{" "}
        <a
          href="/politica-de-privacidade"
          className="underline underline-offset-2 hover:text-foreground"
        >
          Saiba mais
        </a>
        .
      </p>
      {choice && (
        <p className="mt-2 text-sm text-foreground-subtle">
          Sua escolha atual: cookies {choice === "granted" ? "aceitos" : "recusados"}.
        </p>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => handle(true)}
          className="rounded-sm bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
        >
          Aceitar
        </button>
        <button
          type="button"
          onClick={() => handle(false)}
          className="rounded-sm border border-border px-4 py-2 text-sm text-foreground-muted transition hover:text-foreground"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}

export function ConsentPreferencesButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className={className}
    >
      Preferências de cookies
    </button>
  );
}
