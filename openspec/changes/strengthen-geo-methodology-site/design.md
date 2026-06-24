## Context

KORA already presents GEO and atendimento with IA as the core offer, with centralized copy in `src/content/*`, marketing sections in `src/components/sections`, and SEO/JSON-LD helpers in `src/lib/seo.ts`. The current narrative says KORA audits AI presence and builds an implementation plan, but it does not yet answer the evaluation questions a serious GEO buyer will ask: what methodology is used, what is measured, how recurring monitoring works, whether the scope includes entity/schema/reputation/distribution, and how proof is shown without overclaiming.

The context file `/Users/brunoduarte/Downloads/conversa-kora-geo.md` recommends positioning the diagnostic as a measurable technical-commercial audit with baseline, score, action plan, monitoring, and evolution instead of promising guaranteed mentions in AI answers.

## Goals / Non-Goals

**Goals:**

- Make the diagnostic feel measurable, audit-ready, and commercially concrete.
- Add a named methodology that can be reused across landing, diagnostic page, FAQ, and SEO metadata.
- Answer buyer objections around metrics, monitoring, off-site authority signals, and evidence.
- Preserve the current premium visual system, centralized copy convention, and existing lead flow.
- Keep claims honest: no guaranteed AI citation, ranking, or model-specific control.

**Non-Goals:**

- Do not implement actual prompt-monitoring infrastructure, dashboards, crawlers, scraping, or model APIs in this change.
- Do not add public pricing, payment collection, scheduling, or CRM features.
- Do not create fake named cases, fabricated metrics, or unverifiable proof.
- Do not change `/api/lead`, Google Sheets, Resend, or GTM event names unless implementation reveals a copy-only gap.

## Decisions

1. **Create a reusable methodology content model.**
   - Add centralized copy for "Kora AI Presence Framework" or equivalent under `src/content`.
   - Include five blocks: Prompt Universe, AI Visibility Scan, Generative Share of Voice, Entity & Trust Audit, and Action Roadmap.
   - Rationale: keeping this as structured content lets home page, diagnostic page, metadata, and future sales material reuse the same language.
   - Alternative considered: hardcode the framework inside a component. Rejected because project conventions require copy in `src/content/*`.

2. **Introduce or revise a methodology/proof section instead of overloading hero.**
   - Add a dedicated section such as `#metodologia` or upgrade the existing proof/diagnostic area to show how measurement works.
   - The section should be scan-friendly: framework steps, measured indicators, and proof artifacts.
   - Rationale: the hero should remain sharp and emotional; methodology belongs lower in the page after the visitor understands the offer.
   - Alternative considered: expand FAQ only. Rejected because FAQ is not prominent enough for a core trust objection.

3. **Treat metrics as protocol indicators, not guarantees.**
   - Use language such as baseline, evolution, controlled prompt set, mention rate, share of voice generativo, recommendation rate, context quality, competitor gap, and source influence.
   - Explicitly state that AI answers vary by model, date, location, context, personalization, and source updates.
   - Rationale: this increases credibility while avoiding unsupported claims.

4. **Show scope beyond on-site content.**
   - Diagnostic copy must include entity clarity, schema/dados estruturados, consistency across external profiles, reputation, reviews, mentions, directories, and distribution.
   - Rationale: this differentiates KORA from generic content agencies and addresses the strongest objection in the context file.

5. **Represent proof as auditable artifacts.**
   - When named cases are unavailable, proof copy should mention anonymized examples, dated screenshots, tested prompts, model list, competitor set, source URLs, implementation log, and 30/60/90-day comparisons.
   - Rationale: this creates a credible proof standard without pretending public cases exist.

6. **Update SEO and answer-first metadata.**
   - Add terms related to AI presence audit, generative share of voice, prompt monitoring, entity audit, schema, and AI search visibility where appropriate.
   - Update FAQ content and JSON-LD through existing `faq` data so the same answers serve visitors and search/answer engines.

## Risks / Trade-offs

- **Longer page may feel denser** -> Use restrained editorial layout, progressive disclosure, and concise section copy.
- **GEO metrics may sound like guaranteed rankings** -> Pair every metric cluster with clear "baseline and evolution, not guaranteed citation" language.
- **Adding too many claims can dilute the current high-ticket narrative** -> Keep the framework tied to the paid diagnostic and action roadmap.
- **Case proof could overpromise** -> Use auditable evidence language and anonymized examples unless real client authorization exists.
- **New section may affect visual rhythm** -> Reuse existing section patterns, tokens, Reveal motion, and run visual QA during implementation.

## Migration Plan

1. Add/extend centralized content for methodology, metrics, monitoring, scope, evidence, and FAQ.
2. Add or revise marketing sections to render the methodology/proof content on the home page and, if suitable, `/diagnostico`.
3. Update navigation anchors if a new `#metodologia` section is introduced.
4. Update SEO metadata and JSON-LD via existing helpers.
5. Verify with `openspec validate`, lint/build, and visual checks for desktop/mobile rendering.

Rollback is limited to reverting the new content/section files and restoring previous nav/metadata copy; no data migration is expected.

## Open Questions

- Should the public name be exactly "Kora AI Presence Framework" or translated to "Framework de Presenca em IA da KORA"?
- Should the first implementation add a new standalone methodology section, or fold it into the existing proof and diagnostic sections to keep the page shorter?
- Which anonymized evidence, if any, is already available for the first version of proof copy?
