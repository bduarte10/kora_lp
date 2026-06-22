## Context

KORA already has a premium landing page, centralized content, GTM/PostHog helpers, and a lead flow that posts to `/api/lead`, sends email through Resend, appends to Google Sheets, and optionally enriches CNPJ data server-side. The friction problem is concentrated in the conversion surface: the inline form shows many fields at once and competes with the landing's broader narrative.

The new page should feel like a focused application experience inside the same visual system, not like an embedded third-party form or a second full landing page.

## Goals / Non-Goals

**Goals:**

- Provide a dedicated `/diagnostico` route for focused diagnostic applications.
- Reduce perceived form effort with a three-step progressive flow and choice-card controls.
- Preserve the existing lead API, delivery channels, privacy language, CNPJ enrichment, and thank-you redirect.
- Route primary landing CTAs to the dedicated page while keeping WhatsApp secondary.
- Keep copy centralized and visual styling aligned with existing tokens.

**Non-Goals:**

- Do not add Tally, Fillout, Typeform, or any iframe form provider in this version.
- Do not add payment collection, scheduling, CRM, or a full application portal.
- Do not remove the existing home page diagnostic narrative; it becomes a CTA bridge.
- Do not make CNPJ required or expose CNPJ enrichment to the visitor.

## Decisions

- Build the form in code with `react-hook-form` and `zod` instead of Tally/Fillout. This preserves brand control, server-side enrichment, first-party analytics, and the current lead delivery contract.
- Use route `/diagnostico` under the marketing app group. This creates a shareable campaign URL while keeping the thank-you route unchanged.
- Replace select-heavy UI with radio-card groups for fit questions and paid diagnostic openness. This makes choices scannable on mobile and visually closer to modern form tools.
- Split the application into three steps: fit, contact, and context. Validation is scoped to the current step so visitors do not see errors for fields they have not reached.
- Keep `role` optional server-side for compatibility. The dedicated page will not ask for role in the main flow, while the API accepts older payloads that still include it.
- Keep `mainChallenge` required but reduce the minimum length to a short answer. This keeps lead quality without forcing a long essay.
- Update GTM event typing to support `form_variant` and use `dedicated_progressive_v1` for the new page.

## Risks / Trade-offs

- Progressive forms add client-side state complexity -> Keep the component small, typed, and backed by the existing form library.
- Moving primary CTAs to a new page adds one click before the form -> The destination page is focused and measurable, and landing sections can still explain the offer before the click.
- Making `role` optional may reduce qualification detail -> Contact quality and fit answers remain required, and role can be collected later in sales.
- A dedicated page could feel sparse if over-minimized -> Include a compact expectations panel and trust/privacy copy without rebuilding a full landing.

## Migration Plan

- Create the OpenSpec artifacts and validate the change.
- Add the dedicated page and progressive form.
- Update landing CTAs and centralized copy hrefs to `/diagnostico`.
- Relax API validation for fields removed from the dedicated flow.
- Verify lint, build, OpenSpec validation, and local desktop/mobile rendering.
