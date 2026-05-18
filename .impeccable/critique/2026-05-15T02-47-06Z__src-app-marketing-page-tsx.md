---
target: src/app/(marketing)/page.tsx
total_score: 34
p0_count: 0
p1_count: 1
p2_count: 2
p3_count: 0
timestamp: 2026-05-15T02-47-06Z
slug: src-app-marketing-page-tsx
---
# Critique v4 · KORA Landing Page (Anthropic-style refined minimal)

## Veredict
**Funcionou.** O redesign resolve quase tudo do v3. Página respira, voz tipográfica consistente, paleta calma, zero ruído procedural. **Floor sólido, não teto.** Um clique abaixo do limiar Anthropic puro porque falta um momento de "esta marca tem olhar"; está mais para midpoint Anthropic/Cresta com viés Cresta.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibilidade do status | 3/4 | Nav blur, focus coral, FAQ accordion claro |
| 2 | Match real world | 4/4 | "Diagnóstico/30 minutos/Antes-Depois" em PT-BR adulto. Forte |
| 3 | Controle e liberdade | 3/4 | 2 CTAs + FAB + FAQ collapsível. Sem armadilhas |
| 4 | Consistência e padrões | 4/4 | **Salto.** Geist única, eyebrows só em 4 momentos, numerais mono coerentes |
| 5 | Prevenção de erros | 3/4 | RHF + zod, labels associados |
| 6 | Recognition vs recall | 4/4 | **Salto.** Process chips, Services deliverables list. Tudo visível |
| 7 | Flexibilidade | 3/4 | Skip-link, atalhos, Cal embed + form |
| 8 | Estética minimalista | 4/4 | **Salto.** Genuinamente minimal sem ser estéril |
| 9 | Recuperar erros | 3/4 | Sem prova runtime |
| 10 | Ajuda e documentação | 3/4 | FAQ com 1 aberto por default, processo claro |
| **Total** | | **34/40** | **+1 vs. v3 33/40 — Banda Boa+** |

Categorias 4, 6 e 8 (onde v3 quebrava) subiram de 3→4. Heurísticas 1, 3, 5, 9 têm teto baixo em LP de serviço; não dispara.

## AI Slop v4 · **Escapou**

Tells clássicos AUSENTES: gradient hero, dark-mode verde-lima Linear-clone, eyebrow "AI POWERED", robô SVG, hero-metric, card grid 3×3. O conjunto Geist + off-white + coral parcimonioso + listas divide-y + numerais mono é mais próximo de Stripe/Anthropic/Vercel-marketing do que deck de agência genérica.

**Maneirismos que ainda pegam o olhar treinado:**
- Padrão "Frase ink. <span muted>complemento questionador.</span>" se repete em 5 das 7 seções (Hero, Problem, Services, Process, FinalCTA). Funciona uma vez; vira fórmula nas quatro seguintes.
- Fotos Unsplash B&W de "reunião" + "mãos em notebook" são semanticamente *stock*. Anthropic mostra artefatos do produto. KORA mostra "trabalho em geral".

Não é slop. É polish real com dois tics discretos.

## Anthropic-fit · **70% bate, 30% drifta**

**Bate:** paleta off-white + accent terroso único, tipografia única driving hierarquia, section spacing massivo (`clamp(7rem, 11vw, 14rem)` está certo), eyebrow uppercase tracking +0.08em, listas divide-y, numerais mono.

**Drifta:**
- Anthropic raramente usa fotografia humana — o site deles é diagrams + product UI + abstract art. KORA usa 2 fotos humanas → vai no sentido Cresta, não Anthropic.
- Hero da Anthropic = 1 statement. Hero do KORA = headline + sub + 2 CTAs + foto. Ainda é template LP-de-conversão refinado.
- Falta diagrama/visual conceitual estilo Anthropic ("constitutional AI" minimalistas). Aqui tudo é tipo + 2 fotos.

Você está no midpoint Anthropic/Cresta, com viés Cresta. **Provavelmente é o que faz sentido para consultoria PME brasileira** — Anthropic puro seria frio demais para o leitor que precisa enxergar humano.

## Coesão · **Uma família agora**

Motivo recorrente costurado:
- Numerais mono `01..04` discretos em Problem, Services, Process, Proof
- Coral em pontos signature: dot hero, check services, dot process, "Depois" proof, "30 minutos" FinalCTA
- Headline-ink + complemento-muted em 5 seções
- Listas divide-y como pattern denso
- Eyebrow uppercase mono em 4 deliberadas (não em todas)

Ritmo Hero (espaço) → Problem (denso 2×2) → Services (lista densa) → Process (lista leve) → Proof (foto + lista) → FAQ (split 4/8) → FinalCTA (split 2-col) funciona como sequência de cenas com pesos diferentes. **Não é mais 7 ilhas.**

Crítica menor: Problem usa `gap-12` sem divide-y enquanto Services/Process/Proof usam divide-y. Inconsistência interna pequena.

## O que ficou forte

1. **Construção tipográfica.** Geist 600 com tracking -0.035em segura display sem fonte secundária. Contraste 600/500/400 cria hierarquia que não depende de cor. Exatamente como Anthropic resolve.
2. **Coral como accent disciplinado.** Aparece 6-7× na página inteira, sempre com intenção semântica. Restringir a paleta força significado.
3. **Section spacing massivo.** Onde 90% das LPs de consultoria erram. Não economizou pixels — é o que mais separa de "site de agência BR genérica".
4. **Copy/voz.** "30 minutos. Você sai com clareza." / "Quatro etapas. Zero achismo." / "Sem proposta empurrada." Premium B2B brasileiro raramente acerta essa altura.
5. **Process e Services em divide-y vertical.** Decisão estrutural que mais tira do template Tailwind UI / shadcn-marketing.

## O que ainda pode melhorar (não exige overhaul)

1. **Quebrar a fórmula headline-split em 1-2 seções.** Hoje "frase ink + complemento muted" está em 5. É o tic mais visível. Hero é o lugar natural pra quebrar — frase única em ink puro, mais peso. Subiria pra ~36/40 sem refactor.
2. **Fotos Unsplash semanticamente fracas.** Tecnicamente refinadas, mas "reunião" e "mãos em notebook" são default B2B. v1.1: sessão fotográfica mínima (diretor real olhando tela, detalhe de processo escrito à mão, ambiente vazio) OU substituir uma foto por diagrama conceitual minimal Anthropic-style.
3. **Hero sem ponto âncora da marca.** Se eu trocar "KORA" por "Atlas" na navbar, ninguém percebe. Falta uma micro-escolha signature (numeral romano discreto no topo, ou rule line vertical 1px ao lado do display). Não voltar pro K monograma — algo mais sutil.

## Recomendação final · **SHIP COM 1 FIX MENOR**

Quebrar a fórmula headline-split em 1 seção (sugiro Hero) antes de shipar. Pontos 2 e 3 são v1.1, não bloqueadores. **Página atual está acima da média de 95% das consultorias de IA brasileiras e do nível B2B refined-minimal global.**
