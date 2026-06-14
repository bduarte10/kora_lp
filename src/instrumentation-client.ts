// Inicialização do Sentry no browser. Sem session replay nesta fase
// (replay exigiria consentimento; aqui só rastreamos erros).
import * as Sentry from "@sentry/nextjs";

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn,
  enabled: Boolean(dsn),
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? process.env.NODE_ENV,
  tracesSampleRate: 0.1,
  sendDefaultPii: false,
  debug: false,
});

// Instrumenta as transições de rota do App Router.
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
