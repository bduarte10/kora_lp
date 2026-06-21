## Why

KORA changed direction from low-ticket sites by subscription to high-ticket GEO and AI automation consulting. The current landing still signals site packages, public pricing, and WhatsApp-first conversion, which lowers perceived authority and attracts the wrong buyer.

Search behavior is also shifting from lists of links to generated answers. KORA needs a stronger category position around GEO so Brazilian SMEs can understand why they must be found, cited, and chosen by ChatGPT, Gemini, Perplexity, and Google AI experiences.

## What Changes

- Reposition the public website around GEO, AI search visibility, and atendimento automation for Brazilian SMEs with 20 to 200 employees.
- Replace site pricing and plan selection with a premium "Diagnostico GEO & Automacao de Atendimento" application flow.
- Make WhatsApp a secondary channel for quick questions, not the main diagnostic path.
- Add optional CNPJ enrichment through public company data to improve qualification without blocking lead submission.
- Update SEO/GEO metadata, JSON-LD, OpenGraph, FAQ, and headings so the page is clear to both people and generative answer engines.
- Replace old site-subscription operations docs with high-ticket GEO diagnostic operations docs.

## Capabilities

### New Capabilities

- `geo-positioning`: Public landing communicates KORA as a high-ticket GEO and atendimento automation consultancy.
- `diagnostic-application`: The lead flow collects a qualified diagnostic application, optionally enriches CNPJ data, and routes the lead through the existing delivery channels.
- `geo-metadata`: Metadata, JSON-LD, FAQ, and OpenGraph describe GEO, AI search visibility, diagnostic fit, and atendimento automation.
- `operational-docs`: Internal docs describe how to sell, brief, scope, and deliver the paid diagnostic.

### Modified Capabilities

- None. This project has no existing OpenSpec specs yet.

## Impact

- Marketing page sections and content modules under `src/components/sections` and `src/content`.
- Lead form, lead API schema, Resend notification, Google Sheets append, and GTM event typing.
- SEO helpers in `src/lib/seo.ts`, app metadata consumers, OpenGraph image, FAQ JSON-LD, sitemap/manifest indirect descriptions.
- Docs under `docs/operacao`.
- New OpenSpec structure and change artifacts under `openspec/`.
