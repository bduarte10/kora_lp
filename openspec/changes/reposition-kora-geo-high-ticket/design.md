## Context

The current site was recently shaped around "site profissional por assinatura" with pricing cards, plan selection, and a WhatsApp-friendly low-friction path. That was useful for a low-ticket offer, but it conflicts with the new strategic direction: high-ticket GEO, AI search visibility, atendimento automation, and paid diagnostic entry.

The existing visual system remains useful: cinematic coral bookends, editorial typography, generous spacing, shadcn-compatible primitives, GSAP/Lenis motion, and centralized copy. The implementation should preserve that premium feel while replacing the business narrative and qualification path.

## Goals / Non-Goals

**Goals:**

- Make GEO the central category and explain it in language a Brazilian SME owner can understand.
- Present the paid diagnostic as an application and fit review, not as a generic contact form.
- Keep the page useful for traditional SEO and structured for GEO answer extraction.
- Preserve existing lead infrastructure while extending it with richer qualification and optional CNPJ enrichment.
- Remove low-ticket site signals from the public conversion path.

**Non-Goals:**

- Do not add public pricing for the diagnostic.
- Do not implement payment collection for the diagnostic in this change.
- Do not guarantee AI citations or rankings.
- Do not build a full customer portal, CRM, or scheduling system.
- Do not store or display socios or person-level CNPJ data in the application flow.

## Decisions

- Use a new `#diagnostico` section in place of `#planos`. The old pricing cards and plan selection provider are removed from the home page because plan UX anchors the wrong offer.
- Keep WhatsApp as secondary conversion. CTAs should prefer "Solicitar diagnostico GEO" and "Aplicar para o diagnostico"; WhatsApp remains available for quick questions and the floating button.
- Treat CNPJ as optional enrichment. Submission must succeed even when lookup fails, times out, or the user skips CNPJ.
- Perform CNPJ lookup server-side in the lead API using BrasilAPI with a short timeout. The client sends the CNPJ; the backend enriches the lead for email and Sheets.
- Store only company-level public fields: CNPJ, razao social, nome fantasia, cidade, UF, CNAE principal, atividade principal, and situacao cadastral.
- Keep content centralized in `src/content/*`. Section components should consume copy and structured arrays instead of duplicating business claims.
- Write FAQ and headings in clear answer-first language for GEO, while avoiding absolute claims.

## Risks / Trade-offs

- A longer application form may reduce volume, but that is acceptable because the new goal is fit and deal quality.
- CNPJ enrichment adds an external dependency. The flow must fail open and log lookup issues without blocking lead delivery.
- Removing pricing reduces immediate buyer certainty, but protects high-ticket perception and leaves pricing to the diagnostic conversation.
- GEO is still an emerging market term. The page must define it plainly and tie it to business outcomes, not jargon.
