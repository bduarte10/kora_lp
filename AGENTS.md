# AGENTS.md

## Project

KORA — Landing page de implantação de IA & automação para PMEs brasileiras. Premium cinematográfico, motion-first.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind v4 (@theme inline) · GSAP + ScrollTrigger + Lenis · shadcn/ui · pnpm

## Conventions

- **RSC by default.** Adicionar `'use client'` apenas em motion/forms/widgets/tracking.
- **Path alias:** `@/` → `src/`.
- **Tipografia:** Geist (body/UI) + display editorial (`next/font/local`). Sempre via tokens.
- **Tokens:** todos os valores visuais saem de `src/styles/tokens.css` e `@theme inline` em `globals.css`. Nunca hardcode hex/spacing.
- **Motion:** GSAP via dynamic import dentro de `SmoothScrollProvider`. Sempre respeitar `prefers-reduced-motion`.
- **Copy:** centralizado em `src/content/*`. Componentes consomem, não duplicam strings.
- **Forms:** `react-hook-form` + `zod`. Submissão via `/api/lead`, que repassa ao webhook do Apps Script (`LEAD_WEBHOOK_URL`).
- **Tracking:** push em `window.dataLayer` via `lib/gtm.ts`. Nunca chamar pixels direto — só GTM.

## Design skills

- **gpt-tasteskill** — invocar antes do hero e seções com motion forte (ScrollTrigger pin, bento gapless, AIDA, tipografia editorial).
- **impeccable** — revisar/polir cada seção após implementada.

## SEO

- Metadata via `generateMetadata` ou objeto `metadata`.
- JSON-LD em `lib/seo.ts` (Organization, ProfessionalService, FAQPage, BreadcrumbList).
- `app/sitemap.ts` e `app/robots.ts` autoritativos — `next-sitemap` complementa para dynamic routes futuras.
- HTML `lang="pt-BR"`. `hreflang` preparado para expansão.

## Lead flow

`LeadForm → POST /api/lead → Apps Script (scripts/lead-webhook.gs: linha na planilha + e-mail) → redirect /obrigado`. Se o envio falhar, o formulário oferece o WhatsApp com os dados preenchidos; o lead nunca some calado.

## Tracking events (padronizados)

`cta_click` · `form_submit` · `lead_received` · `schedule_click` · `whatsapp_click` · `section_view`

`form_submit` é a tentativa; `lead_received` só sai quando `/api/lead` confirma a gravação, com o `submission_id` do envio. Qualificação comercial não é evento do site.
