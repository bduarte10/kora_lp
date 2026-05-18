---
target: src/app/(marketing)/page.tsx
total_score: 26
p0_count: 2
p1_count: 2
p2_count: 1
p3_count: 1
timestamp: 2026-05-14T19-40-42Z
slug: src-app-marketing-page-tsx
---
# Critique · KORA Landing Page (homepage)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | StickySpy + scrolled-nav OK; falta loading no LeadForm; sinal entre "diagnóstico" e "venda" pouco claro no CTA |
| 2 | Match System / Real World | 4/4 | PT-BR adulto sem corporativês; "30 minutos", "4-6 semanas" linguagem de PME |
| 3 | User Control and Freedom | 2/4 | FAB WhatsApp sem fechar; FAQ sem "fechar todos"; sem voltar-ao-topo após Proof escura |
| 4 | Consistency and Standards | 3/4 | Tokens bem aplicados; **toda seção principal não tem H2 semântico** porque ScrubReveal renderiza `<p>`. Eyebrow ora `<span>` ora `<p>` ora `<h4>` no footer |
| 5 | Error Prevention | 2/4 | LeadForm + Cal embed + FAB = três caminhos simultâneos sem hierarquia clara |
| 6 | Recognition Rather Than Recall | 3/4 | Nav visível; marca KORA sem logomarca, só wordmark display que some sob blur em scroll longo |
| 7 | Flexibility and Efficiency | 2/4 | Sem `skip-to-main` link visível; Cal.com forçado pra quem prefere e-mail |
| 8 | Aesthetic and Minimalist Design | 2/4 | Eyebrow scaffolding (18 instâncias) + hero-metric strip + sub-eyebrows em cards = ruído visual excessivo |
| 9 | Error Recovery | 2/4 | Mensagens de erro/sucesso inline ausentes ou frágeis |
| 10 | Help and Documentation | 3/4 | FAQ bem posicionada antes do CTA final; microcópia honesta |
| **Total** | | **26/40** | **Banda Médio** |

## Anti-Patterns Verdict

**Veredicto: AI slop parcial. Cinco crimes principais evitados; dois reflex-rejects do impeccable brand register caem com força.**

**LLM Assessment:**

- **Mono-tracked eyebrow em TODA seção e sub-card.** 18 ocorrências contadas. Hero (5), FinalCTA (3), Services (2), Process (2), Proof (2), Footer (2), Problem/FAQ/Process (1 cada). Scaffolding AI conhecido. O DESIGN.md baniu "01 ·" mas reintroduziu a lógica via uniformidade tipográfica monospace.
- **Instrument Serif está na ban list de fontes-reflexo** do `reference/brand.md`. É o que toda LLM puxa quando pedem "editorial premium".
- **Aesthetic lane drift**: a página caiu na lane "Editorial-typographic Klim-influenced" (também banida), apesar do brief explicitar "Awwwards SOTD + cinematic studios".
- **Hero-metric template reintroduzido** (hero.tsx linhas 86-103): "Primeiros ganhos / Modelo / Idioma / Stack" é literalmente o anti-pattern banido no próprio DESIGN.md linha 141.
- **Em-dashes residuais visíveis**: `consent-banner.tsx` linha 36 ainda tem "aceitar ou recusar —".

**Deterministic Scan:** `npx impeccable detect` indisponível no ambiente (EUNKNOWNCOMMAND — pacote não publicado nessa distribuição). Sem overlay visual. LLM assessment é a única fonte estruturada deste run.

## Overall Impression

A LP é competente e foge das armadilhas óbvias (sem gradient text, sem glass, sem corporate B2B azul), mas drift para a **estética default das LLMs em 2025**: serif italic display + mono caps + ruled separators + monochromatic restraint. Isso é "Pentagram-via-Klim-via-design-Twitter", não "Awwwards SOTD". Para uma marca jovem competindo com consultoria genérica + IBM + Linear-clone, a maior oportunidade é **comprometer com cor** e **cortar 14 dos 18 eyebrows**. Os gestos verdadeiramente memoráveis (inline typography image no H1, switch ink na Proof, card-stack das Services, marquee de setores) já estão lá, mas diluídos.

## What's Working

1. **Inline typography image no H1** (hero.tsx:38-44) quebra o ritmo esperado de "headline grande + imagem grande". Editorial real, não cosplay.
2. **Switch ink na Proof** (proof.tsx:44) cria intervalo cinematográfico, candidato a peak-end positivo.
3. **Microcópia adulta** (`"Cases sob NDA, solicite no diagnóstico"`, `"onde IA faz sentido, e onde não faz"`). Voz de bússola real, não vendedor. PRODUCT.md sendo cumprido.

## Priority Issues

### [P0] Eyebrow scaffolding (18 instâncias)
**Why it matters**: É a impressão digital mais fácil de identificar como "feito por LLM" em 2025. Cada eyebrow vira ruído visual e dilui o display tipográfico que carrega a marca. Anti-padrão explícito no `reference/brand.md` do impeccable (linha 108).
**Fix**: Reduzir para 4 eyebrows totais: 1 em Process, 1 em Proof, 1 em FinalCTA, e usar só em transição de seção (não em sub-cards, não no Hero, não em FAQ). Hero NÃO precisa de eyebrow — o H1 é o eyebrow.
**Suggested**: `/impeccable distill` ou `/impeccable typeset`

### [P0] Hero-metric template reintroduzido
**Why it matters**: Auto-violação. DESIGN.md baniu explicitamente "big number + small label + supporting stats" mas hero.tsx:86-103 entrega exatamente isso (4 colunas, label pequeno em mono caps + number display).
**Fix**: Substituir por **uma** frase editorial em display (ex: "Em semanas, não trimestres.") ou **um** dado memorável em typography lockup. Não 4 dados nivelados.
**Suggested**: `/impeccable distill` no hero

### [P1] H2 semântico ausente em 4 seções
**Why it matters**: SEO (outline pulando H1 → H2 do FAQ direto) + a11y (screen readers perdem a estrutura). ScrubReveal renderiza `<p>` por design.
**Fix**: Adicionar prop `as` ao ScrubReveal (default `<p>`, mas suportar `<h2>`). Wrapping atual em `<h2 className="sr-only">` é alternativa menos elegante.
**Suggested**: `/impeccable harden` ou edit direto

### [P1] Cor restrita demais para brand register
**Why it matters**: PRODUCT.md pede "cinematográfico" e "premium sem ser intimidante". DESIGN.md auto-restringe amber a <8%. Para uma marca construindo brand equity zero, **"safe = invisible"** (brand.md). Em ranking de criativos Meta, paleta tímida perde para 50 outros.
**Fix**: 1 cena drench em amber-deep como background (Hero OU Proof). OU numerais romanos das Services em 35-50% opacity em vez de 15%. Cor precisa virar **decisão**, não acidente.
**Suggested**: `/impeccable bolder` ou `/impeccable colorize`

### [P2] Motion stack denso sem hierarquia narrativa
**Why it matters**: 7 primitivas (SplitText + ScrubReveal + Reveal + CardStack + StickySpy + Marquee + ImageScaleFade) + Lenis = tudo se move, nada importa. Motion deve servir narrativa, não decorar (DESIGN.md linha 124).
**Fix**: 1 "moment hero" de motion por cena. Hero=SplitText. Problem=estático (intencional para "afiar"). Services=CardStack. Process=StickySpy. Proof=Marquee OU ImageScaleFade (não ambos por testimonial). FinalCTA=estático.
**Suggested**: `/impeccable quieter` motion choreography

### [P3] Em-dashes residuais
**Why it matters**: DESIGN.md baniu. `consent-banner.tsx:36` ainda tem em-dash visível ("aceitar ou recusar —"). Comentários em motion files também.
**Fix**: Quick sweep — `consent-banner.tsx`, comentários em `marquee.tsx`/`sticky-spy.tsx`.
**Suggested**: edit direto

## Persona Red Flags

**Líder de PME tradicional (vindo de Meta Ads)** — bandeira vermelha:
Janela curta de atenção (1.5-2s). ScrubReveal exige scroll para revelar palavras. Em mobile com Lenis, o headline do Problem demora ~1 viewport-height pra terminar de aparecer. Esse usuário desiste antes de ler a frase completa.

**Fundador tech-savvy** — bandeira amarela:
Reconhece o stack (Instrument Serif + Geist + GSAP + Lenis). Pode reagir "competente" OU "mais uma LP de design Twitter 2024". A inline typography image e o ink switch da Proof são os elementos que decidem entre uma reação e outra.

**Diretor financeiro cético** — bandeira vermelha crítica:
Procura: preço, prazo, garantia, casos. Encontra prazo. Não encontra preço (esperado, posicionamento premium). Não encontra cases ("sob NDA"). Encontra 2 depoimentos **anônimos** ("Fundadora, Empresa de serviços B2B"). Anonimato em testimonials para PME BR é morte. Vale apagar a seção Proof inteira até ter cases nomeáveis OU reformular como "metodologia validada" sem fingir prova social.

## Cognitive Load

**3/8 falhas — moderate.** Itens que falham:

1. CTAs concorrentes: Hero (2) + FAB permanente + FinalCTA (Cal + Form) = 4 caminhos simultâneos.
2. Motion redundante: 7 primitivas, risco de motion fatigue.
3. Eyebrows redundantes (18, scaffolding).

Itens OK: hierarquia tipográfica, densidade textual (max-w-prose), padrões reconhecíveis (Nav/FAQ/Footer), ruído cromático (paleta restrita é virtude aqui), sequência narrativa (AIDA cumprida).

## Minor Observations

- `services.tsx:44`: Numerais romanos display a `text-amber-deep/15` (15%). Editorial pede 30-50%; estão tímidos.
- `hero.tsx:13`: Radial wash com cobalt 10%. DESIGN.md declarou cobalt "raríssimo"; primeira cena já o usa. Inconsistente.
- `nav.tsx:25`: `backdrop-blur-md` no scroll. Uso funcional na nav é defensável, mas vale auditar contraste do CTA sobre bg blur.
- `final-cta.tsx`: Cal embed + LeadForm lado-a-lado em desktop. Dois forms competindo. Considerar toggle progressivo "agendar / escrever".
- Marketing pages legais sem header/nav próprio (politica/termos/obrigado) — bom para foco mas vale checar se nav persiste.

## Questions to Consider

1. **Se o brief é "Awwwards SOTD + cinematic", por que parece Pentagram-2022 e não Active-Theory-2025?** O que está impedindo um gesto que nenhuma outra consultoria BR teria coragem de fazer (color drench, video hero, WebGL pontual, tipografia variável)?
2. **Por que amber <8%?** É restraint editorial ou segurança visual disfarçada? Marca com brand equity zero precisa ser memorável primeiro, restrained depois.
3. **Depoimentos anônimos funcionam aqui ou destroem?** Vale apagar a seção Proof até ter cases nomeáveis, OU reformular como "como trabalhamos" sem fingir prova social?
