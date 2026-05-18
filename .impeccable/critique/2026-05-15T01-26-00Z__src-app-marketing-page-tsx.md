---
target: src/app/(marketing)/page.tsx
total_score: 33
p0_count: 0
p1_count: 2
p2_count: 2
p3_count: 0
timestamp: 2026-05-15T01-26-00Z
slug: src-app-marketing-page-tsx
---
# Critique v3 · KORA Landing Page (pós-brand overhaul)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibilidade do status | 3/4 | Nav scroll-state, StickySpy, hover transitions OK |
| 2 | Match real world | 4/4 | PT-BR maduro, zero jargão IA gratuito |
| 3 | Controle e liberdade | 3/4 | Skip-to-main OK, sem voltar-ao-topo visível |
| 4 | Consistência e padrões | 4/4 | **Salto.** Quadra cromática explícita, eyebrow mono só 4×, font-heavy contido em 4 momentos, lockup consistente |
| 5 | Prevenção de erros | 3/4 | RHF + zod presentes, inline-validation não verificada estaticamente |
| 6 | Recognition vs recall | 3/4 | Numerais romanos + chip "01/04" + cobalt numerals do Process funcionam como marca-página |
| 7 | Flexibilidade | 3/4 | Cal + WhatsApp + FAB acessíveis |
| 8 | Estética minimalista | 4/4 | **Salto.** Heavy reduzido, diagramas line-art autorais, ink reservado para Proof. Editorial de verdade |
| 9 | Recuperar erros | 3/4 | Sem prova visual no review estático |
| 10 | Ajuda e documentação | 3/4 | FAQ existe mas é a seção mais fraca |
| **Total** | | **33/40** | **+11 vs. 22/40 — Banda Boa** |

## AI Slop v3 · Saiu do default LLM-2025

Três marcadores específicos de identidade real:

1. **Monograma desenhado em path SVG manual** (`M4 3 H10 V13 L22 3 H29 L17 16 L29 29 H22 L10 18 V29 H4 Z`). Geometria pensada, não generator.
2. **Diagramas com metáfora narrativa.** Treinamento usa pontilhado→tracejado→sólido representando passagem de bastão. FogPaths converge em reta amber. Decisões de designer, não slop.
3. **Cobalt como vocabulário semântico.** DESIGN.md formaliza "cobalt aparece onde se fala de mecânica, amber onde se fala de impacto". Voz de marca, não paleta default.

**O que ainda cheira a template:** Hero radial-gradient-wash + grid de pontos é tropo 2025. Tile inline na H1 corre risco de parecer Stripe-chip por arredondamento + sombra.

## O Que Ficou Bom

1. Monograma K em `kora-mark.tsx` com variant solid/stroke + lockup component reusável. Geometria intencional.
2. **Diagrama Treinamento** com fases dashed→long-dash→solid no eixo temporal. Conta história sem texto.
3. **Cobalt operacional** nos Process numerals (`text-cobalt group-hover:text-amber`) — transição frio→quente em hover é micro-narrativa.
4. Footer com watermark gigante + lockup ancora a marca no fechamento.
5. Hero bottom statement em `font-display` regular tirou o efeito "tudo grita". Respiro tipográfico real.

## O Que Ainda Está Fraco

### 1. **FAQ é a ilha sobrante**
Sem diagrama, sem cobalt, sem watermark. Apenas H2 + accordion.
**Fix:** Adicionar KoraMark stroke watermark no canto esquerdo da coluna de título, ou diagrama "pergunta→resposta" geométrico no espaço vazio.

### 2. **Hero ainda depende de gradient-wash radial**
Com watermark K + tile inline já presentes, o wash amber está fazendo trabalho dobrado.
**Fix:** Reduzir opacidade do wash para 0.12-0.15 OU remover e deixar watermark K fazer protagonismo.

### 3. **Inline tile no H1 corre risco de parecer Stripe-chip**
Cantos arredondados pequenos + sombra cinematográfica = gesto Linear/Stripe.
**Fix:** Testar variante com cantos retos (`rounded-none`) ou borda 1px ink em vez de fill ink, casando com line-art dos diagramas.

### 4. **Proof "ilha escura" desconectada**
Bg ink editorial, mas nada da Proof carrega símbolo K nem diagrama.
**Fix:** KoraMark watermark amber/[0.04] em algum canto, ou diagrama "before/after" abstrato como meta-figura.

## Recomendação Final · **SHIP**

Pode shipar para tráfego pago hoje, com ressalvas pequenas. Salto 22→33 resolve o argumento estrutural do Bruno (identidade ausente). Polidas restantes são 4-6h de sprint, não outro ciclo de redesign.

**Tática:** Rodar 3-5 dias de tráfego pago observando CTR + scroll-depth. Em paralelo, sprint manhã para os 4 fixes acima. Se CTR anúncio→hero engajamento ficar >35% scroll até Services, identidade nova validada. Se travar antes, problema não é mais design, é copy/oferta.
