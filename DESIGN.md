# Design

Visual system para a landing **KORA**. A página vende uma mensalidade de presença no Google, no Maps e em IA para clínicas odontológicas. Lane **Drenched Coral + Aurora** (referência: resend.com, lovable.dev). Surface coral muted (#A04A30 burnt sienna) cobre Hero e FinalCTA como bookends. Demais seções em cream warm com accent coral parcimonioso. Tipografia única Geist com weights altos e tracking calibrado. Motion mínimo.

## Theme

Tema claro warm. Cena física: dono ou dona de clínica odontológica abre a página, muitas vezes no celular, depois de uma mensagem de prospecção ou de perceber que pacientes perguntam à IA onde se tratar. O coral drenched no hero captura atenção dos primeiros 1,5s; transição para cream serve a leitura longa do scroll. Hero coral também serve como ancoragem de identidade. Dark mode propositalmente postergado.

## Color

**Estratégia: Drenched para Hero/FinalCTA, Restrained para o resto.** Brand register permite Drenched em surfaces que precisam de identity-driven impact (entrada e saída do leitor). Sections intermediárias respiram em cream warm para que o coral mantenha peso simbólico.

| Token | Valor | Uso |
|---|---|---|
| `paper` | `#FAF6F2` | Bg base cream warm (Problem, Process, Footer) |
| `paper-warm` | `#F5EFE6` | Surface elevada / form panels |
| `bone` | `#EFE8DD` | Bg de Services e FAQ — cream warm mais saturado para alternância |
| `ink` | `#171717` | Bg de Report; texto sobre cream |
| `ink-soft` | `#3A3A3A` | Texto secundário sobre cream |
| `stone` | `#737373` | Foreground muted/subtle |
| `mist` | `#A3A3A3` | Só decorativo; não usar em texto sobre cream (2.5:1) |
| `fog` | `#D4D4D4` | Numerais discretos (01, 02) sobre cream |
| `coral` | `#A04A30` | **Bg drenched** Hero + FinalCTA. Burnt sienna muted. Contraste 7.8:1 com cream. |
| `coral-deep` | `#7A3924` | Hover/active sobre coral; texto sobre cream-panel dentro do hero |
| `coral-soft` | `#B86850` | Accent raro |
| `cream` | `#FAF6F2` | Texto sobre coral (mesma família do paper, não #fff puro) |
| `aurora-peach` | `#C77562` | Orb 1 do aurora (top-left, mix-blend screen) |
| `aurora-gold` | `#A87440` | Orb 2 do aurora (bottom-right) |
| `aurora-rose` | `#A55A50` | Orb 3 do aurora (middle drift) |

Banidos: `#000`, `#fff`, gradient text, glassmorphism decorativo, side-stripe borders, hero-metric template, identical card grids, qualquer SVG procedural inline.

### Aurora ambient

Hero e FinalCTA têm `.aurora-bg` absolute layer com 3 orbs blurred (`filter: blur(140px)`, opacity 0.55, mix-blend-mode screen) animados em `ease-in-out infinite alternate` 28-36s não-sincronizados. Mobile (<640px) reduz blur para 80px e opacity para 0.45. Respeita `prefers-reduced-motion`. `pointer-events: none` — zero impacto em interações.

## Typography

**Stack: Geist (única família, weights 400-700 + tracking).**

Não há fonte de display separada. Geist em weight 600 (`display` class) ou 500 (`display-balanced` class) com tracking negativo carrega toda hierarquia visual.

| Classe | Weight | Tracking | Line-height | Uso |
|---|---|---|---|---|
| `.display` | 600 | -0.04em | 0.96 | Hero H1, FinalCTA H2 |
| `.display-balanced` | 500 | -0.015em | 1.12 | H3, subtítulos, "Conte um pouco..." |
| `.eyebrow` | 500 | +0.08em uppercase | normal | Problem, Services, Process, Report, FAQ, FinalCTA |
| `font-mono` (Geist Mono) | 400 | +0.08em uppercase | normal | Numerais (01, 02), "Antes" / "Depois" labels, BR / 2026 marker |
| (default body) | 400 | 0 | 1.55 | Texto corrido |

**Escala fluida via `clamp()`:**

| Token | Range | Linha alvo |
|---|---|---|
| `--fs-display` | `clamp(3rem, 6vw + 1rem, 7.5rem)` | Hero H1 type-driven |
| `--fs-h1` | `clamp(2.25rem, 3vw + 1rem, 3.75rem)` | Section H2 |
| `--fs-h2` | `clamp(1.875rem, 2vw + 1rem, 2.75rem)` | Subsection / step title |
| `--fs-h3` | `clamp(1.375rem, 0.8vw + 1rem, 1.75rem)` | Card title, título de etapa e de pilar |
| `--fs-lead` | `clamp(1.125rem, 0.4vw + 1rem, 1.375rem)` | Sub-paragraph |

Sem font-display secundária, sem Bricolage, sem heavy condensed.

## Layout

**Containers:**
- `container-page` 1280px — padrão de seções
- `container-narrow` 1024px — listas densas
- `container-text` 680px — prose longa, páginas legais

Gutter fluido `clamp(1.25rem, 3vw, 2rem)`. Section spacing `clamp(7rem, 11vw, 14rem)` — massivo.

**Ritmo de bg colors (alternância intencional):**

1. Hero — `bg-coral` + NoiseBackground
2. Problem — `bg-background` (paper)
3. Services — `bg-bone border-y`, com o card de preço (`#preco`)
4. Process — `bg-background` (paper)
5. Report — `bg-foreground` (ink)
6. About — `bg-background` (paper), quem faz + dados legais. Fora da página até o conteúdo ser decidido (`sections/about.tsx` segue pronto).
7. FAQ — `bg-bone border-y`
8. FinalCTA — `bg-coral` (bookend do Hero)
9. Footer — `bg-background` (paper)

**CTA:** a principal é sempre a conversa de 15 minutos pelo WhatsApp ("Ver onde minha clínica aparece"). "Aplicar para a mensalidade" aparece como link ou botão outline, nunca como botão cheio.

**Piso de texto:** 13px para labels mono e eyebrows, 14px para nav. Numerais e labels usam `stone` (`foreground-subtle`), não `mist`/`fog`, para passar AA sobre cream.

**Grids específicos:**
- Problem: bloco `bone` com os números reais da pesquisa (prova do problema antes da solução) + 3 colunas com `border-t`, sem numerais.
- Services: 7 colunas com os três pilares (kicker coral, título, entregáveis em 2 colunas) + card de preço sticky em 5 colunas.
- Process: timeline de 4 colunas (2 no tablet, 1 no mobile), linha com ponto coral, duração em mono acima do título.
- Report: título e lead em 6/6; exemplo de relatório (tabela) em 7 colunas, métricas e limite honesto em 5.
- FAQ: 4-col título + 8-col accordion.
- FinalCTA: split 5/6, WhatsApp cheio à esquerda, painel cream com o link do formulário à direita.

Bordas 1px neutras, nunca side-stripe colorida.

## Hero composition (v13)

Split 7/5 sobre coral:

1. **Esquerda:** eyebrow "Para clínicas odontológicas", H1 em `--fs-hero` (`clamp(2.75rem, 5vw + 0.5rem, 5.25rem)`, maior texto da página), lead, uma CTA primária cream (WhatsApp, "Ver onde minha clínica aparece") e um link sublinhado para `#mensalidade`. Nota de 15px com duração da conversa e preço inicial.
2. **Direita:** painel cream com uma resposta de IA para "onde fazer implante em Moema?". Três clínicas genéricas citadas (Clínica A, B, C) e a última linha tracejada em coral, "Sua clínica: não citada". Legenda "Exemplo ilustrativo" sempre visível.
3. **Fundo:** coral quase chapado. `NoiseBackground` só adiciona uma luz radial fraca no topo esquerdo (22%, para o texto cream manter contraste) e grão a 18%. Sem grade, sem escurecimento para marrom.
4. **Motion:** as três clínicas entram uma por uma (0,7 a 1,2 s) e a linha "Sua clínica" chega por último, a 1,9 s, com um tremor curto. Com `prefers-reduced-motion`, tudo aparece de uma vez.

Sem marquee, sem faixa editorial, sem checklist de inclusos (o conteúdo vive em Services). Min-height `92svh`.

## FinalCTA composition

Bookend do Hero — mesma surface coral + aurora. Split 5/6:

- **Esquerda (cols 1-5)**: eyebrow "Próximo passo" com section-anchor-cream, H2 de fit para diagnóstico, lead cream-muted, WhatsApp CTA outline como canal secundário.
- **Direita (cols 7-12)**: painel `rounded-2xl bg-paper shadow-lg` contendo LeadForm de aplicação consultiva. Ilha cream sobre o coral, dark text readable (contrast WCAG AA+).

## Imagery

**Sem fotografia.** As imagens são mockups do próprio produto, construídos em HTML: a resposta de IA no Hero e uma página de exemplo do relatório mensal em Report (`src/content/report-sample.ts`). Todo mockup leva o rótulo "exemplo" e nenhum número inventado.

## Motion

Stack reduzida:
- **SmoothScrollProvider** (Lenis) — suave, sem exagero.
- **Reveal** — fade + translate-y simples, scroll-triggered.
- **Scrub** — timeline GSAP presa à rolagem (`scrub: 0.6`), passo a passo. Usado na linha da timeline de Process (ponto e preenchimento coral por etapa) e nas linhas da tabela do relatório.
- **CountUp** — os números da pesquisa contam até o valor uma vez, ao entrar na tela.
- **InViewPlay** — segura a animação CSS da resposta de IA do hero até o card aparecer (no mobile ele fica abaixo da dobra).
- **Aurora CSS** — `@keyframes aurora-drift-1/2/3` 28-36s ease-in-out infinite alternate.

Scroll-driven só onde o movimento conta algo (progresso, relatório sendo preenchido). Nada de pin, parallax ou texto que se monta letra a letra. Nunca apagar texto para dar foco: derruba o contraste.

`prefers-reduced-motion`: nada anima; tudo aparece no estado final.

## Components

| Componente | Tipo | Notas |
|---|---|---|
| `Nav` | Client | Detecta `scrolled`; sobre hero coral: transparent + text-cream; sobre cream: blur + text-foreground. CTA primário inverte: cream-on-coral vs ink-on-cream. |
| `Hero` | Server | Split 7/5: H1 + lead + CTA WhatsApp / mockup de resposta de IA com a clínica do leitor fora da lista. |
| `Problem` | Server | 3 colunas com `border-t`. |
| `Services` | Server | Três pilares + card de preço sticky (`#preco`). |
| `Process` | Server | Timeline de 4 etapas com duração. |
| `Report` | Server | Bg ink. Exemplo de relatório mensal, métricas e limite honesto. |
| `FAQ` | Client | Accordion limpo com `Plus` que rotaciona para `x`. |
| `FinalCTA` | Server | Aurora bookend. Split 5/6: copy+WhatsApp / cream-panel form. **Sem Cal.com.** |
| `Footer` | Server | 4-col grid, wordmark simples. |
| `WhatsAppFab` | Client | Fixed bottom-right, aparece após scroll>600. |
| `LeadForm` | Client | RHF + zod; aplicação para diagnóstico, CNPJ opcional, submete a `/api/lead` (Resend + Sheets). |
| `ConsentBanner` | Client | LGPD + Consent Mode v2. |

## Iconography

`lucide-react`. Tamanhos: 15 (CTAs), 16 (toggles), 18 (acordeão), 13 (FAB). Sempre `aria-hidden` quando decorativo.

## Anti-patterns banidos

- Side-stripe colored borders
- Gradient text
- Glassmorphism decorativo (aurora não é glass — é gradient com mix-blend)
- Hero-metric template
- Identical card grids
- Em dashes — usar vírgulas, dois pontos, parênteses
- Meta-labels numerados ("SECTION 04", "QUESTION 05")
- Bricolage Heavy condensada
- SVG procedural inline (line-art com pontos, caixas, setas — parecem wireframe)
- KoraMark/símbolo forte (descartado — wordmark sozinho funciona)
- Mono-tracked eyebrows em toda seção
- Hero centered template (AI slop)
- Cal.com ou outro agendamento embedado (removido — form-only flow)
- Pricing público ou cards de plano para a oferta principal
