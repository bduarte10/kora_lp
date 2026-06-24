## Why

The current site positions KORA around GEO and AI-enabled atendimento, but it still leaves critical buyer objections under-explained: how presence in AI answers is measured, which metrics prove evolution, whether monitoring is recurring, and what evidence exists when named cases are not yet available.

This change makes the offer more concrete by presenting the Diagnostico GEO as a measurable technical-commercial audit rather than a subjective opinion or a promise to "appear in ChatGPT."

## What Changes

- Add a named GEO methodology to the public site, tentatively "Kora AI Presence Framework."
- Explain how KORA measures AI presence across prompt clusters, ChatGPT, Claude, Gemini, Perplexity, and Google with AI experiences.
- Surface measurable indicators such as mention rate, generative share of voice, recommendation rate, context quality, competitor gaps, and source influence.
- Clarify that KORA does not guarantee AI citations, but does establish a baseline, action roadmap, and evolution tracking protocol.
- Make explicit that the diagnostic evaluates entity clarity, schema, reputation, external authority signals, distribution, and answer-first content, not only on-site blog content.
- Add stronger proof language for anonymized/auditable evidence, including dated prompts, screenshots, tested models, URLs, implementation records, and 30/60/90-day comparisons.
- Adjust diagnostic deliverables, process copy, FAQ, metadata, and JSON-LD where needed so the site answers high-intent GEO evaluation questions directly.

## Capabilities

### New Capabilities

- `geo-methodology-proof`: Public website explains KORA's GEO measurement methodology, metrics, monitoring model, scope beyond on-site content, and audit-ready evidence expectations.

### Modified Capabilities

- None. There are no existing archived OpenSpec specs in `openspec/specs/`.

## Impact

- Public marketing content under `src/content`, especially diagnostic, process, FAQ, hero/supporting proof copy, and site metadata.
- Marketing sections under `src/components/sections`, likely adding or revising methodology/proof/diagnostic blocks.
- SEO helpers under `src/lib/seo.ts`, including metadata keywords, service description, FAQ JSON-LD, and knowsAbout terms.
- Main marketing route composition under `src/app/(marketing)/page.tsx` if a new section is introduced.
- No new external dependencies, APIs, persistence changes, or lead submission contract changes are expected.
