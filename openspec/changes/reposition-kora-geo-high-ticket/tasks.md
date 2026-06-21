## 1. OpenSpec

- [x] 1.1 Create branch `feat/kora-geo-high-ticket` from `main`.
- [x] 1.2 Initialize OpenSpec with Codex instructions.
- [x] 1.3 Create change `reposition-kora-geo-high-ticket`.
- [x] 1.4 Add proposal, design, specs, and implementation tasks.
- [x] 1.5 Validate the OpenSpec change.

## 2. Landing And Content

- [x] 2.1 Update site-wide positioning, nav, CTA labels, and WhatsApp default message.
- [x] 2.2 Replace site/pricing narrative with GEO, atendimento automation, and diagnostic application narrative.
- [x] 2.3 Remove plan/pricing UX from the home page and route CTAs to `#diagnostico`.
- [x] 2.4 Update hero, problem, solutions, process, services, proof, FAQ, final CTA, and thank-you copy.

## 3. Diagnostic Application

- [x] 3.1 Replace plan-based lead form fields with diagnostic application fields.
- [x] 3.2 Extend lead payload, Resend notification, and Google Sheets append for diagnostic data.
- [x] 3.3 Add optional server-side CNPJ enrichment via BrasilAPI with fail-open behavior.
- [x] 3.4 Update GTM event typing to remove plan-specific events and track diagnostic interest.

## 4. SEO, GEO And Docs

- [x] 4.1 Update metadata, keywords, OpenGraph, Twitter metadata, JSON-LD services, and OpenGraph image copy.
- [x] 4.2 Update product/design docs for high-ticket GEO positioning.
- [x] 4.3 Replace old site-subscription operations docs with diagnostic GEO operational docs.
- [x] 4.4 Search for old low-ticket phrases and remove public-facing remnants.

## 5. Verification

- [x] 5.1 Run `openspec validate reposition-kora-geo-high-ticket`.
- [x] 5.2 Run `pnpm lint`.
- [x] 5.3 Run `pnpm build`.
- [x] 5.4 Start the app and verify desktop/mobile flows, lead application UI, and metadata behavior.
