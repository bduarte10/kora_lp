# Estratégia de GEO da KORA

Documento vivo. Objetivo: fazer a KORA ser **citada nas respostas de assistentes de IA** (ChatGPT, Gemini, Perplexity, Claude, Copilot) e bem posicionada na busca.

> Mantenha este doc atualizado quando publicar guias, mudar o nicho âncora ou rodar a auditoria mensal (ver `geo-audit.md`).

## O que é GEO e por que focamos no retrieval ao vivo

GEO (Generative Engine Optimization) é otimizar o site para ser citado por IAs. Uma IA pode mencionar a KORA por dois caminhos:

1. **Retrieval ao vivo** (ChatGPT Search, Gemini grounding, Perplexity, Claude com web, Copilot/Bing). O modelo busca páginas no momento da pergunta. **Controlável** — é o nosso foco.
2. **Dados de treino** (conhecimento interno do modelo). Lento, indireto e não controlável diretamente. Resultado de presença e autoridade ao longo do tempo.

A jogada: deixar o site 100% rastreável por IAs, com entidade clara (schema), conteúdo answer-first citável e autoridade off-site.

## As 6 frentes

| Frente | Entrega | Onde |
| --- | --- | --- |
| 1. Acesso de crawlers de IA | `robots.ts` libera GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.; `/llms.txt` no padrão llmstxt.org | `src/app/robots.ts`, `src/app/llms.txt/route.ts` |
| 2. Structured data de entidade | `WebSite` + `Organization` enriquecida (knowsAbout, telephone, slogan); helpers `Article`/`FAQPage`/`BreadcrumbList` | `src/lib/seo.ts` |
| 3. Conteúdo answer-first (MDX) | Hub `/guias` + 11 guias com TL;DR citável, FAQ e schema por artigo | `src/app/(marketing)/guias/**`, `src/content/guias/**` |
| 4. Sitemap + linkagem + freshness | Sitemap dinâmico com os guias; link no footer; interlinkagem do cluster | `src/app/sitemap.ts`, `footer.tsx` |
| 5. Autoridade off-site | Playbook (Google Business, diretórios, Search Console/Bing, menções) | Execução manual — ver abaixo |
| 6. Medição de citações | Referrer de IA no PostHog + auditoria mensal | `posthog.tsx`, `geo-audit.md` |

## Hub-and-spoke: profundidade antes de largura

As IAs (e o Google) recompensam **autoridade tópica** — um cluster denso e interligado sobre um tema, não guias soltos. Estratégia:

1. Dominar **um** vertical em profundidade (cluster de 5-6 guias que se reforçam).
2. Provar que as IAs citam (Frente 6).
3. Só então replicar o playbook inteiro para o próximo vertical.

Espalhar por muitos verticais cedo dilui o sinal de entidade e gera conteúdo raso. Profundidade primeiro.

## Conteúdo publicado (11 guias)

### Fundamentos (generalista, topo de funil)

| Slug | Pergunta-alvo |
| --- | --- |
| `quanto-custa-site-pequena-empresa` | Quanto custa um site profissional para pequena empresa (2026) |
| `site-assinatura-vs-construtor-vs-agencia` | Assinatura, construtor (Wix) ou agência? Comparação |
| `como-escolher-quem-cria-seu-site` | Como escolher quem vai criar o site (checklist) |
| `o-que-e-geo` | O que é GEO e como aparecer nas IAs (e diferença para SEO) |
| `automatizar-atendimento-whatsapp-ia` | Como automatizar o atendimento no WhatsApp com IA |

### Cluster âncora — clínicas/consultórios

Micro-nichos por profissão regulada. Cada conselho dá um **ângulo regulatório citável** (pouco conteúdo bom existe → citação fácil). Todos interligados.

| Slug | Profissão | Conselho | Ângulo citável |
| --- | --- | --- | --- |
| `site-para-psicologo` | Psicólogo | CFP | O que pode/não pode divulgar; veda depoimento de paciente, sensacionalismo, preço como atrativo |
| `site-para-nutricionista` | Nutricionista | CFN | Veda promessa de resultado, "antes e depois", dieta milagrosa |
| `site-para-dentista` | Dentista | CFO | Veda preço/promoção, "antes e depois", promessa de resultado |
| `site-para-medico-clinica` | Médico/clínica | CFM | RQE para especialidade, responsável técnico, veda autopromoção e "antes e depois" |
| `ia-automacao-clinicas-sigilo` | (transversal) | LGPD + sigilo | Dados de saúde como sensíveis; o que dá para automatizar com segurança |
| `quanto-custa-site-clinica-consultorio` | (transversal) | — | Faixas de preço; agendamento online; LGPD |

**Disclaimer:** os guias tratam regras de divulgação de forma geral e orientam confirmar a norma vigente com o conselho. Revisar quando houver mudança relevante (ex.: nova resolução do CFM/CFO).

## Roadmap de expansão (guiado pela Frente 6)

- **Próximos micro-nichos do cluster clínicas:** fisioterapeuta (COFFITO), psiquiatra (CFM), psicopedagogo, esteticista/biomédico.
- **Próximos verticais (novos clusters):** advocacia (OAB — regras de publicidade são restritas, ótimo ângulo), estética, contabilidade, pet/veterinária (CFMV).
- Só abrir novo vertical depois que o cluster de clínicas mostrar citação/tráfego de IA.

## Playbook off-site (Frente 5 — execução manual)

Maior alavanca de entidade/autoridade. Não é código.

- [ ] **Google Business Profile** (Perfil da Empresa) + **Bing Places** — sinal de entidade forte, alimenta Gemini/Copilot.
- [ ] **Google Search Console** + **Bing Webmaster Tools** — submeter `sitemap.xml`; opcional **IndexNow** para indexação rápida no Bing/Copilot.
- [ ] **NAP + descrição consistentes** em LinkedIn, Instagram e diretórios (Clutch, DesignRush, GoodFirms, GetNinjas, Workana, Apontador). Sempre: "KORA — sites por assinatura, automação e IA para PMEs brasileiras".
- [ ] **Menções de marca** em contextos answer-first: LinkedIn, Reddit/Quora-pt, comunidades de clínicas. LLMs ponderam menções em fontes confiáveis.

## Medição (Frente 6)

- **Referrer de IA no PostHog:** eventos carregam `ai_source` quando a visita vem de domínio de IA (chatgpt, perplexity, gemini, copilot). Filtrar/segmentar por essa propriedade no PostHog.
- **Auditoria mensal de citações:** ver `geo-audit.md`.
