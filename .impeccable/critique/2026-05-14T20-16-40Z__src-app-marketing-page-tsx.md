---
target: src/app/(marketing)/page.tsx
total_score: 22
p0_count: 3
p1_count: 2
p2_count: 0
p3_count: 0
timestamp: 2026-05-14T20-16-40Z
slug: src-app-marketing-page-tsx
---
# Critique v2 · KORA Landing Page (pós-polish)

> Sinal humano explícito: Bruno disse "não gostei do site, não tem visual bonito e está disperso, não tem identidade condizente com o serviço". Esta avaliação confirma e diagnostica.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibilidade do status | 3/4 | Nav blur, FAB, focus visível OK |
| 2 | Match real world | 2/4 | Copy PT-BR forte, mas metáfora visual ("bússola, paisagens grayscale") não corresponde ao serviço técnico |
| 3 | Controle e liberdade | 3/4 | Skip-link, ESC, accordion OK; falta breadcrumb de progresso |
| 4 | Consistência e padrões | 1/4 | **GRAVE.** Cada seção é um sistema fechado. 3 sistemas de numeração (I/II/III, 01/02, 1/2/3/4). Eyebrows aparecem em 3 seções e somem em 4. |
| 5 | Prevenção de erros | 3/4 | LeadForm com zod, consent banner OK |
| 6 | Reconhecimento vs recall | 2/4 | Sem ícones de seção, sem mini-mapa |
| 7 | Flexibilidade | 2/4 | 2 CTAs + FAB OK; sem atalhos contextuais |
| 8 | Estética minimalista | 1/4 | **GRAVE.** Não é minimalista, é vazio decorado. Bricolage Heavy em massa. 7 primitivas de motion. |
| 9 | Diagnóstico de erros | 2/4 | LeadForm presume tratamento; sem evidência visual |
| 10 | Ajuda e documentação | 3/4 | FAQ forte |
| **Total** | | **22/40** | **Banda Média-Baixa (competente, sem identidade)** |

Comparação com critique anterior (26/40): o polish corrigiu hierarquia semântica e reduziu eyebrow scaffolding, mas isso **expôs** o vazio de identidade que estava encoberto pelo ruído. O score caiu porque o avaliador foi mais rigoroso desta vez, com razão.

## Anti-Patterns Verdict · **AI slop sofisticado**

Não é o slop óbvio (neon, robots, gradient text). É o slop de **segunda geração**: o que sai quando se pede "premium editorial landing 2025" para um modelo bom.

- Wordmark "KORA" em font display heavy como única identidade → output default de LLM para "AI consultancy"
- `picsum.photos?grayscale` + `contrast(1.05)` em 4+ lugares → receita exata de "tasteful AI landing 2025"
- Numeral romano gigante semi-transparente atrás dos cards → Awwwards 2018-2019, não 2025
- Marquee horizontal de setores em display gigante → template-fixture desde 2022
- Bento 6-col gapless `[grid-auto-flow:dense]` → template gpt-tasteskill literal
- Eyebrow mono uppercase tracking-wider 0.12em → marca registrada de LP-AI 2024-2025
- Radial wash amber + CTA pill preto com ArrowUpRight → padrão default

**Único elemento que escapa**: a inline typography image (pill com foto embedada no H1). É a única decisão real de design na página. Tudo o mais é receita.

## O Problema Raiz

**A KORA tem voz, posicionamento e copy fortes, e zero linguagem visual própria.**

O DESIGN.md descreve um sistema de **regras de boa educação tipográfica** (paleta, hierarquia, spacing), não um **sistema de identidade**. Não existe:

- Símbolo/monograma
- Motivo gráfico recorrente
- Tratamento fotográfico autoral
- Grid signature
- Segunda cor estrutural
- Voz visual além de "Bricolage Heavy em off-white com amber"

**Identidade é o que sobra quando você tira o nome.** Aqui, nada sobra. Qualquer consultoria poderia rodar `s/KORA/ACME/g` e a página funcionaria igual.

A dispersão que Bruno sente é matemática: sem motivo visual recorrente, 7 seções viram 7 ilhas. A fealdade é a mesma falha — beleza editorial não é "tipo grande + bege", é construção de mundo visual coerente (Kinfolk tem moldura; Aesop tem cor + tipografia; Hermès tem laranja; Linear tem geometria; Vercel tem o triângulo). KORA não tem nada disso.

A reação **"não condiz com o serviço"** é precisa: o serviço é técnico-operacional (implantação de IA + automação), a pele visual é literária-editorial (Bricolage + paisagens picsum grayscale). Um fundador de PME olhando isso por 3s pensa "agência de branding", não "vai implantar agente de WhatsApp na minha operação". A camada visual está ocupada com outra coisa.

## O Que Precisa Mudar (Foundationais, Não Polish)

### 1. **Construir um símbolo/monograma KORA real**
Não estilizar a palavra. Uma marca gráfica: bússola estilizada (alinha com posicionamento), rosa-dos-ventos, glifo abstrato. Que apareça no Nav, no Hero como elemento contemplativo grande, no Footer, como marca d'água em sections. Sem isso, o resto é maquiagem.

### 2. **Substituir 100% das picsum.photos por linguagem visual própria**
Três opções, escolher **uma**:
- **(a) Diagramas técnicos vetoriais autorais** (fluxos de dados, nós de agente, sistemas conectados) em line-art monocromático com amber accent. **Conecta visual ao serviço.** Recomendado.
- **(b) Fotografia P&B autoral** de operação real (mãos, escritórios br). Caro, demora.
- **(c) Tratamento gráfico abstrato** (composições geométricas remetendo a fluxos). Diferenciador, rápido.

### 3. **Quadra cromática (não só paper+amber)**
Manter paper como base, mas introduzir **um segundo accent estrutural**. DESIGN.md já tem cobalt #243E7C declarado "raríssimo" — usar de verdade. **Paper + Amber + Cobalt + Ink** é uma quadra memorável; paper + amber é a paleta default 2025.

### 4. **Reduzir Bricolage Heavy a 2-3 ocorrências**
Hero H1, Proof title, FinalCTA H2. **Não mais.** Resto: Bricolage regular (500-600) com tracking generoso. Adicionar Instrument Serif italic (declarado no DESIGN.md mas não usado) para momento de respiro/voz humana. Cinematografia precisa de tons baixos para os altos funcionarem.

### 5. **Motivo visual recorrente entre seções**
Fio fino amber que atravessa transições; ou o símbolo da marca em escalas diferentes em cada cena; ou numeração editorial unificada (só I/II/III ou só 01/02/03); ou textura de papel sutil cobrindo tudo. **Algo que apareça 4-5 vezes dando ao olho um ponto de retorno.**

## O Que Pode Ficar

1. **Copy.** "Em semanas, não trimestres. Sob medida, não prateleira." é forte. "Quatro etapas. Zero achismo." é forte. **Não mexer.**
2. **Estrutura AIDA.** Hero → Problem → Services → Process → Proof → FAQ → FinalCTA é correta. Não mexer.
3. **Inline typography image no H1.** É o único elemento de identidade real. Manter, mas trocar a picsum por imagem autoral.

## Recomendação Estratégica · **`brand_overhaul`**

Não `start_over` (arquitetura/código/copy estão sólidos). Não `specific_pivot` (incremental não basta). Construir a **camada de identidade que foi pulada**.

**Sequência sugerida:**

1. **Brand sprint (3-5 dias)**: definir símbolo, segundo accent, linguagem visual, motivo recorrente, tratamento tipográfico revisado. Output: brand-kit board + tokens atualizados.
2. **Re-skin da landing existente** aplicando o brand-kit. Manter componentes, motion, copy. Trocar: imagens, símbolo (Nav/Hero/Footer), paleta secundária, tratamento de numerações, hierarquia tipográfica.
3. **Testar com 3 fundadores de PME**. Pergunta única: "em 5s, o que essa empresa faz?". Se a resposta não for "implanta IA/automação", continua falhando.

Arquivos-chave para começar:
- `DESIGN.md` (reescrever com seção "Brand Identity" real, não só "Theme")
- `src/styles/tokens.css` (adicionar tokens de brand: símbolo SVG, segundo accent, motivo recorrente)
- `src/components/sections/nav.tsx` (primeiro lugar a receber o símbolo)

O instinto do Bruno está certo. A página não está feia por descuido, está feia porque foi construída sem a camada que precisava existir primeiro.
