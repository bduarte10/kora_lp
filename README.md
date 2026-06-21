# KORA — Landing Page

Landing page de **GEO e automação de atendimento para PMEs brasileiras**. Posicionamento premium cinematográfico, aplicação consultiva para diagnóstico pago e conteúdo preparado para SEO tradicional e mecanismos generativos.

## Stack

- **Next.js 16** (App Router, RSC) + **React 19** + **TypeScript**
- **Tailwind CSS v4** com `@theme inline` design tokens
- **GSAP + ScrollTrigger + Lenis** para motion cinematográfico
- **shadcn/ui** (Radix primitives) para componentes base
- **react-hook-form** + **zod** para aplicação de diagnóstico
- **Resend** + **Google Sheets API** para captura de leads
- **BrasilAPI** para enriquecimento opcional de CNPJ no backend
- **GTM** + PostHog com Consent Mode v2
- **Vercel** hosting + Analytics + Speed Insights

## Setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Scripts

| Comando | Função |
|---|---|
| `pnpm dev` | Server de desenvolvimento |
| `pnpm build` | Build de produção (+ sitemap pós-build) |
| `pnpm start` | Server de produção |
| `pnpm lint` | Biome check |
| `pnpm format` | Biome format |

## Estrutura

```
src/
├── app/                # App Router (RSC default)
├── components/
│   ├── sections/      # Hero, Solutions, Problem, Diagnostic, Process, Services, Proof, FAQ
│   ├── forms/         # LeadForm (aplicação para diagnóstico)
│   ├── motion/        # SmoothScrollProvider, Reveal
│   ├── widgets/       # WhatsAppFab
│   └── tracking/      # GTM, PostHog, ConsentBanner
├── content/           # Copy estruturado
├── lib/               # env, gtm, cnpj, sheets, resend, seo, utils
└── styles/            # tokens.css
```

## OpenSpec

Mudança ativa:

```bash
openspec validate reposition-kora-geo-high-ticket
```

Artefatos em `openspec/changes/reposition-kora-geo-high-ticket`.

## Go-live

- Service Account Google + Spreadsheet compartilhada
- Domínio verificado no Resend (DKIM/SPF)
- Containers GTM e PostHog
- WhatsApp Business + número
- CNPJ + endereço definitivo para footer e políticas
