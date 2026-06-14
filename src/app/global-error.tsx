"use client";

import * as Sentry from "@sentry/nextjs";
import { GeistSans } from "geist/font/sans";
import { useEffect } from "react";
import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="pt-BR" className={GeistSans.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 text-center">
          <h1 className="display-balanced text-[length:var(--fs-h2)]">Algo deu errado</h1>
          <p className="mt-3 leading-relaxed text-foreground-muted">
            Tivemos um problema inesperado ao carregar esta página. Já fomos avisados e estamos
            cuidando disso.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-coral px-5 py-3 text-sm font-medium text-cream transition hover:bg-coral-deep"
          >
            Tentar novamente
          </button>
        </main>
      </body>
    </html>
  );
}
