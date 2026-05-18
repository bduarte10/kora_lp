"use client";

import { useEffect, useState } from "react";
import { pushConsent } from "@/lib/gtm";

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
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 rounded-md border border-border bg-background-elev p-4 shadow-lg sm:p-5"
    >
      <p className="text-sm text-foreground-muted">
        Usamos cookies para medir o desempenho deste site e ajustar nossas campanhas. Você pode
        aceitar ou recusar; sua escolha fica salva localmente.{" "}
        <a href="/politica-de-privacidade" className="underline underline-offset-2 hover:text-foreground">
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
