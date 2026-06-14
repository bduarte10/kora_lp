// Inicialização do Sentry no runtime Node (Server Components, route handlers).
// Importado por src/instrumentation.ts quando NEXT_RUNTIME === "nodejs".
import * as Sentry from "@sentry/nextjs";

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn,
  // Sem DSN o init vira no-op: nada é enviado e o app roda normalmente.
  enabled: Boolean(dsn),
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? process.env.NODE_ENV,
  // Fase 1: error tracking. Amostragem baixa de performance e sem PII.
  tracesSampleRate: 0.1,
  sendDefaultPii: false,
  // Logs do Sentry só em debug local explícito.
  debug: false,
});
