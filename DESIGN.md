# Design

Visual system para a landing **KORA**. Lane **Drenched Coral + Aurora** (referência: resend.com, lovable.dev). Surface coral muted (#A04A30 burnt sienna) cobre Hero e FinalCTA como bookends; orbs blurred fluem lentamente no fundo (lane Aceternity UI). Demais seções em cream warm com accent coral parcimonioso. Tipografia única Geist com weights altos e tracking calibrado. Motion mínimo. Antônimos diretos: Bricolage Heavy condensada, SVG procedural (parecem wireframe), bento dense, hero centered template, eyebrows mono em todas as seções, paleta restrained-cream-amber (lane saturada).

## Theme

Tema claro warm. Cena física: fundador/diretor de PME brasileira abre a página no laptop num escritório bem iluminado, depois de clicar num anúncio. O coral drenched no hero captura atenção dos primeiros 1,5s; transição para cream serve a leitura longa do scroll. Hero coral também serve como ancoragem de identidade (todo creative pago carrega o tom). Dark mode propositalmente postergado.

## Color

**Estratégia: Drenched para Hero/FinalCTA, Restrained para o resto.** Brand register permite Drenched em surfaces que precisam de identity-driven impact (entrada e saída do leitor). Sections intermediárias respiram em cream warm para que o coral mantenha peso simbólico.

| Token | Valor | Uso |
|---|---|---|
| `paper` | `#FAF6F2` | Bg base cream warm (Problem, Process, Footer) |
| `paper-warm` | `#F5EFE6` | Surface elevada / form panels |
| `bone` | `#EFE8DD` | Bg de Services e FAQ — cream warm mais saturado para alternância |
| `ink` | `#171717` | Bg de Proof; texto sobre cream |
| `ink-soft` | `#3A3A3A` | Texto secundário sobre cream |
| `stone` | `#737373` | Foreground muted/subtle |
| `mist` | `#A3A3A3` | Foreground faint (sobre ink: chips na Proof) |
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
| `.eyebrow` | 500 | +0.08em uppercase | normal | 5 momentos: Problem, Services, Process, Proof, FinalCTA |
| `font-mono` (Geist Mono) | 400 | +0.08em uppercase | normal | Numerais (01, 02), "Antes" / "Depois" labels, BR / 2026 marker |
| (default body) | 400 | 0 | 1.55 | Texto corrido |

**Escala fluida via `clamp()`:**

| Token | Range | Linha alvo |
|---|---|---|
| `--fs-display` | `clamp(3rem, 6vw + 1rem, 7.5rem)` | Hero H1 type-driven |
| `--fs-h1` | `clamp(2.25rem, 3vw + 1rem, 3.75rem)` | Section H2 |
| `--fs-h2` | `clamp(1.875rem, 2vw + 1rem, 2.75rem)` | Subsection / step title |
| `--fs-h3` | `clamp(1.375rem, 0.8vw + 1rem, 1.75rem)` | Card title, pillar marquee items |
| `--fs-lead` | `clamp(1.125rem, 0.4vw + 1rem, 1.375rem)` | Sub-paragraph |

Sem font-display secundária, sem Bricolage, sem heavy condensed.

## Layout

**Containers:**
- `container-page` 1280px — padrão de seções
- `container-narrow` 1024px — listas densas
- `container-text` 680px — prose longa, páginas legais

Gutter fluido `clamp(1.25rem, 3vw, 2rem)`. Section spacing `clamp(7rem, 11vw, 14rem)` — massivo.

**Ritmo de bg colors (alternância intencional):**

1. Hero — `bg-coral` + aurora
2. Problem — `bg-background` (paper)
3. Services — `bg-bone border-y` (cream warm mais saturado)
4. Process — `bg-background` (paper)
5. Proof — `bg-ink` (única seção escura, intervalo cinematográfico)
6. FAQ — `bg-bone border-y`
7. FinalCTA — `bg-coral` + aurora (bookend do Hero)
8. Footer — `bg-background` (paper)

**Grids específicos:**
- Problem: 2×2 simples com `divide-y` + `divide-y-0 sm:grid sm:grid-cols-2`. Sem bento.
- Services: lista vertical divide-y. 3-col (numerais/kicker) + 9-col (conteúdo).
- Process: lista divide-y. 12-col com numeral + título + descrição + chips.
- Proof: 3 transformações em 3-col (área) + 4-col (antes) + 5-col (depois).
- FAQ: 4-col título + 8-col accordion.
- FinalCTA: split 5/6 — copy+WhatsApp à esquerda, form em painel cream à direita.

Bordas 1px neutras, nunca side-stripe colorida.

## Hero composition (v12)

Type-driven Resend-style:

1. **Top editorial strip** — eyebrow cream-muted com section-anchor cream + rule + "BR / 2026" cream-faint.
2. **H1 massive** — `display` class, scale `clamp(3rem, 6vw+1rem, 7.5rem)`, max-w-[16ch], cream sobre coral.
3. **Sub-paragraph** — cream-muted (78% alpha), max-w-xl.
4. **CTAs** — primary `bg-cream text-coral-deep`, secondary outline `border-cream-faint text-cream`.
5. **Marquee pilares** — pilares de serviço (Diagnóstico, Automação, IA aplicada, Operação contínua) rolando lentamente (CSS animation 36s), mask-image fade nas bordas (não overlay coral — overlay esconde aurora).
6. **Aurora layer** — 3 orbs blurred fluindo no fundo, atrás de todo conteúdo.

Min-height: `88vh`. Sem foto no hero. Sem stagger forçado. Foco total em uma frase, gigante, com confiança.

## FinalCTA composition

Bookend do Hero — mesma surface coral + aurora. Split 5/6:

- **Esquerda (cols 1-5)**: eyebrow "Próximo passo" com section-anchor-cream, H2 "Diagnóstico gratuito de 30 minutos, sem proposta empurrada", lead cream-muted, WhatsApp CTA outline.
- **Direita (cols 7-12)**: painel `rounded-2xl bg-paper shadow-lg` contendo LeadForm. Ilha cream sobre o coral, dark text readable (contrast WCAG AA+).

## Imagery

**Fotografia Unsplash profissional curada — só 1 instância**, em Proof (foto B&W aspect 16:9 ampla, anchor visual da seção de metodologia).

Tratamento padrão: `grayscale(1) contrast(1.02) brightness(0.96)`. IDs estáveis em `src/content/photos.ts`.

**Zero fotos no Hero** (a composição é type-driven; foto seria competir com aurora + headline).

## Motion

Stack reduzida:
- **SmoothScrollProvider** (Lenis) — suave, sem exagero.
- **Reveal** — fade + translate-y simples, scroll-triggered.
- **Marquee CSS** — `@keyframes marquee-x` 36s linear infinite.
- **Aurora CSS** — `@keyframes aurora-drift-1/2/3` 28-36s ease-in-out infinite alternate.

Removidos (não fazem sentido nessa lane): `ScrubReveal`, `CardStack`, `StickySpy`, `ImageScaleFade`, `Marquee` JS, `SplitText`, `PinnedSection`. Apenas `Reveal` + `SmoothScrollProvider` permanecem.

`prefers-reduced-motion`: marquee + aurora param.

## Components

| Componente | Tipo | Notas |
|---|---|---|
| `Nav` | Client | Detecta `scrolled`; sobre hero coral: transparent + text-cream; sobre cream: blur + text-foreground. CTA primário inverte: cream-on-coral vs ink-on-cream. |
| `Hero` | Server | Aurora layer + editorial strip + H1 massive + lead + CTAs + marquee pilares. |
| `Problem` | Server | 2×2 grid `divide-y`. Hierarquia com `0X` mono + linha + título. |
| `Services` | Server | Lista divide-y. 3-col (numero+kicker) + 9-col (título+entregáveis com check coral). |
| `Process` | Server | Lista divide-y. 12-col (numero mono + título + descrição + chips). |
| `Proof` | Server | Bg ink. 1 foto ampla + 3 transformações Antes/Depois em texto. |
| `FAQ` | Client | Accordion limpo com `Plus` que rotaciona para `x`. |
| `FinalCTA` | Server | Aurora bookend. Split 5/6: copy+WhatsApp / cream-panel form. **Sem Cal.com.** |
| `Footer` | Server | 4-col grid, wordmark simples. |
| `WhatsAppFab` | Client | Fixed bottom-right, aparece após scroll>600. |
| `LeadForm` | Client | RHF + zod; submete a `/api/lead` (Resend + Sheets). |
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
