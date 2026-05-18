---
target: src/app/(marketing)/page.tsx
total_score: 39
p0_count: 0
p1_count: 1
p2_count: 2
p3_count: 0
timestamp: 2026-05-18T16-01-45Z
slug: src-app-marketing-page-tsx
---
# Critique v5 · KORA (Drenched Coral + Aurora, pós polish)

## Veredict
**Pousou.** Transição de "minimalismo competente que poderia ser qualquer studio decente" para "**memorável em 1,5s, sem virar AI-slop**". Coral muted `#A04A30` (burnt sienna) carrega quase tudo, e o type-driven Hero sem foto é o gesto mais confiante da landing em toda sua história. Bookend Hero ↔ FinalCTA funciona como cena fechada.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of system status | 4/4 | Nav adaptativa, scroll Lenis, loading no submit, /obrigado |
| 2 | Match real world | 4/4 | "Bússola de IA", PT-BR adulto, "sem proposta empurrada" |
| 3 | Controle e liberdade | 4/4 | WhatsApp + form coexistem, marquee pause hover, prefers-reduced-motion |
| 4 | Consistência e padrões | 4/4 | Tokens unificados, eyebrow + section-anchor em 5 seções, divide-y como ritmo |
| 5 | Prevenção de erros | 4/4 | Zod schema, autoComplete, aria-invalid, fallback WhatsApp |
| 6 | Recognition vs recall | 4/4 | **Salto.** Marquee pré-anuncia Services. Numerais consistentes |
| 7 | Flexibilidade | 3/4 | Falta hover-state mais expressivo nos nav items |
| 8 | Estética minimalista | 5/4 | **Salto real.** Paleta 3 valores, Geist único, motion reduzido (limitado a 4 pelo skill) |
| 9 | Recuperar erros | 4/4 | **Salto.** Erros zod inline + fallback prático |
| 10 | Help & documentação | 3/4 | FAQ sólido, falta link política mais visível |
| **Total** | | **39/40** | **+5 vs v4 (34/40) — Banda Excelente** |

## AI Slop v5 · Escapou de novo, com risco mudado

**Não é "AI startup orange"**: coral muted dessaturado, matiz mais perto de terracota do que de Replit/Vercel-ish. Massividade tipográfica e ausência total de fotos no hero carregam o contraste — sem gradientes ou glow.

Aurora poderia ter virado cliché (Aceternity demo em 50% dos portfolios 2025) mas 3 fatores salvam:
1. Blur 140px + mix-blend screen sobre coral sólido = "**brasa respirando**", não "gradient orb de SaaS"
2. Tons de orb (peach/gold/rose) na mesma família coral → atmosfera, não decoração
3. Zero partículas, zero grid procedural, zero SVG sketchy

**Marcadores únicos KORA**: numerais romanos I-IV em Services, "Bússola / BR 2026" top strip, marquee de pilares na base do hero, Proof B&W ampla em ink. Esses 4 elementos juntos não existem em resend/lovable/aceternity. **Página reconhecível.**

## Aurora Analysis · Sutil cinematográfico, dentro da janela

- Timings dessincronizados (32s/28s/36s alternate) — olho nunca pega o loop
- Mix-blend screen sobre coral sólido mantém brilho na faixa quente, não vira rainbow gradient
- Performance: filter blur 140px caro mas 3 elementos absolute viewport-bounded com `will-change: transform` e fallback blur 80px mobile = dentro do orçamento
- `pointer-events: none` = zero interferência
- Reduced-motion cobre WCAG

**Ressalva pequena**: em monitores ultra-wide (>1800px) orbs podem flutuar fora dos bounds visíveis. Containment com `clamp` no width seria ideal mas não é blocker.

## Bookend Coherence · Repetição intencional, não preguiça

Hero é "abertura cinematográfica", FinalCTA é "fechamento da mesma cena". 7 seções respiram em cream entre eles → evita sensação de "duas heros".

**A composição muda entre eles** — Hero é vertical-massive empilhado; FinalCTA é 5/6 horizontal com painel cream sólido contendo o form. O painel cream com shadow-lg sobre coral+aurora **é o gesto mais inteligente da landing** — cria foco visual exato no ponto de conversão sem perder a atmosfera.

## Lane Fit · Híbrido legítimo (não drift)

- **resend.com lane** carrega o Hero (surface drenched + type massivo + zero stock + painel claro sobre escuro)
- **Editorial lane** (Apollo.io/Vercel/Stripe-press) carrega o meio (Process 12-col, Proof foto B&W ampla, divide-y rule)
- **Ink dramatic lane** carrega o Proof (intervalo cinematográfico)

As 3 coexistem porque eyebrow + section-anchor coral é denominador comum entre elas.

## O Que Ficou Forte

1. **Coral muted `#A04A30` + aurora screen-blend** — decisão de paleta que define a página. Não é nenhum cliché reconhecível.
2. **Hero type-driven sem foto** — `display max-w-[16ch]` com `clamp(3rem, 6vw+1rem, 7.5rem)`. A frase "A IA que sua empresa entende e opera." carrega o título-mantra sozinha.
3. **Painel cream do form sobre coral** — peça que resolve toda a conversão. Contraste máximo no ponto de decisão sem perder atmosfera.
4. **Marquee mask-image fade** — pré-anuncia Services sem overlay coral (que esconderia aurora). Decisão técnica correta no detalhe.
5. **Motion stack enxuta** (Reveal + SmoothScroll + marquee CSS + aurora CSS) — abandonar ScrubReveal/CardStack/StickySpy foi maturidade.

## O Que Ainda Pode Melhorar (não bloqueia ship)

1. **Transição Hero coral → Problem paper é corte seco.** Funciona como editorial cut, mas pode ganhar 1px coral-deep + 8px padding antes do cream para "fechar a cena". Hoje o cream começa como se fosse outra página.
2. **FinalCTA H2 sub-escalado vs Hero H1.** Como bookend deveria ecoar a massividade — usar `fs-display` reduzido (5-6rem max ao invés de 3.75rem). Ajuste cirúrgico.
3. **Proof preto compete com Hero coral pelo "momento mais dramático".** Hierarquia ambígua. Considerar overlay coral 6% no gradient bottom do Proof.

## Recomendação Final · **SHIP**

Com 1 ajuste pré-deploy opcional: escalar a H2 do FinalCTA para fechar o arco visual. As outras 2 observações são polish pós-launch.

> "A página saiu da categoria 'boa landing brasileira de consultoria' e entrou em 'landing que se referencia em casa, junto com resend e lovable'. O delta +5 (34 → 39) não é cosmético — é uma mudança de patamar de identidade."
