"use client";

import { pushConsent } from "@/lib/gtm";
import { useEffect, useState } from "react";

const STORAGE_KEY = "kora:consent";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    } else if (stored === "granted") {
      pushConsent(true);
    }
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
