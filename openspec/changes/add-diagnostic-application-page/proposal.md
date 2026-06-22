## Why

The current diagnostic application is a long inline form inside the landing page, which makes the main conversion moment feel heavier than the premium, focused diagnostic offer. A dedicated application page can reduce friction, improve campaign routing, and make abandonment easier to measure without replacing the existing lead delivery infrastructure.

## What Changes

- Add a focused `/diagnostico` page for the Diagnostico GEO & Automacao de Atendimento application.
- Replace the long inline primary conversion path with a progressive, three-step application form inspired by modern form tools while remaining code-native.
- Route primary landing CTAs to `/diagnostico`; keep WhatsApp as a secondary channel for quick questions.
- Keep `/api/lead`, Resend, Google Sheets, optional CNPJ enrichment, and GTM/PostHog as the canonical lead flow.
- Identify the new experience in analytics with a dedicated form variant.

## Capabilities

### New Capabilities

- `diagnostic-application-page`: Dedicated diagnostic application route, progressive form behavior, landing CTA routing, and analytics identity for the new experience.

### Modified Capabilities

- None. This change adds a focused conversion page while preserving the existing lead delivery capability.

## Impact

- New marketing route under `src/app/(marketing)/diagnostico`.
- Lead form components under `src/components/forms` and page/section CTAs under `src/components/sections`.
- Lead API validation in `src/app/api/lead/route.ts`.
- GTM event typing in `src/lib/gtm.ts`.
- Centralized copy in `src/content/*`.
