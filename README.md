# KORA — Landing Page

Landing page de **implantação de IA & automação para PMEs brasileiras**. Posicionamento premium cinematográfico, multi-conversão (Cal.com + WhatsApp), preparada para tráfego pago e SEO long-tail.

## Stack

- **Next.js 16** (App Router, RSC) + **React 19** + **TypeScript**
- **Tailwind CSS v4** com `@theme inline` design tokens
- **GSAP + ScrollTrigger + Lenis** para motion cinematográfico
- **shadcn/ui** (Radix primitives) para componentes base
- **Resend** + **Google Sheets API** para captura de leads
- **Cal.com** embed para agendamento
- **GTM** (GA4 + Meta Pixel + LinkedIn Insight Tag) com Consent Mode v2
- **Vercel** hosting + Analytics + Speed Insights

## Setup

```bash
pnpm install
cp .env.example .env.local  # preencher chaves
pnpm dev                    # localhost:3000
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
│   ├── ui/            # shadcn primitives
│   ├── sections/      # Hero, Problem, Services, Process, Proof, FAQ, FinalCTA, Nav, Footer
│   ├── motion/        # SmoothScrollProvider, SplitText, Reveal, PinnedSection
│   ├── forms/         # LeadForm (RHF + zod)
│   ├── widgets/       # CalEmbed, WhatsAppFab
│   └── tracking/      # GTM, ConsentBanner
├── content/           # Copy estruturado (site, services, process, faq)
├── lib/               # env, gtm, sheets, resend, seo, utils
└── styles/            # tokens.css
```

## GEO / Conteúdo

Estratégia para a KORA ser citada por IAs (ChatGPT, Gemini, Perplexity, Copilot) e bem posicionada na busca:

- **`docs/geo-strategy.md`** — estratégia completa (6 frentes, hub-and-spoke, tabela de nichos/conselhos, roadmap, playbook off-site).
- **`docs/geo-audit.md`** — ritual mensal de auditoria de citações + conjunto de prompts.

Hub de conteúdo em `/guias` (MDX em `src/content/guias/`, registry em `registry.ts`). `robots.ts` libera crawlers de IA e `/llms.txt` é gerado dinamicamente.

## Plano completo

Spec em `~/.claude/plans/crie-uma-nova-pasta-kind-peach.md`.

## Pendências antes do go-live

- Domínio `kora.com.br` (apontar para Vercel)
- Conta Cal.com com event type `diagnostico-kora`
- Service Account Google + Spreadsheet compartilhada
- Domínio verificado no Resend (DKIM/SPF)
- Containers: GTM, GA4, Meta Business, LinkedIn Campaign Manager
- WhatsApp Business + número
- CNPJ + endereço (footer + política de privacidade)
