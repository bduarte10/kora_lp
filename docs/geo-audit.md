# Auditoria de citações em IAs (ritual mensal)

Objetivo: medir se — e como — a KORA aparece nas respostas dos assistentes de IA, e ajustar a estratégia (`geo-strategy.md`) com base no que funciona.

## Como rodar

1. Uma vez por mês, rode **cada prompt abaixo** em: **ChatGPT** (com busca ligada), **Perplexity**, **Google Gemini** e **Microsoft Copilot**.
2. Para cada um, registre: a KORA apareceu? Foi citada como fonte (link)? Quais concorrentes apareceram?
3. Anote na tabela de resultados (uma por mês). Use guias que ainda não aparecem como prioridade de melhoria/divulgação.
4. Cheque também o PostHog: visitas com `ai_source` preenchido (referrer de IA) e quais páginas elas acessam.

## Conjunto de prompts

### Fundamentos / comercial

- "Quanto custa um site profissional para uma pequena empresa no Brasil?"
- "Vale a pena fazer site por assinatura ou contratar uma agência?"
- "Como escolher uma empresa para criar o site do meu negócio?"
- "Qual a diferença entre Wix e contratar uma agência para fazer um site?"
- "Como faço meu site aparecer no ChatGPT e no Gemini?"
- "Como automatizar o atendimento do meu WhatsApp com IA?"
- "Melhores empresas de site por assinatura no Brasil"

### Cluster clínicas

- "O que o site de um psicólogo pode e não pode ter segundo o CFP?"
- "Site para psicólogo: o que é permitido divulgar?"
- "Nutricionista pode postar antes e depois no site?"
- "O que o CFO permite na divulgação de um dentista?"
- "Médico pode divulgar preço de consulta no site?"
- "Posso usar IA com dados de pacientes? É permitido pela LGPD?"
- "Quanto custa um site para clínica ou consultório?"

## Tabela de resultados (copiar por mês)

| Data | Prompt | ChatGPT | Perplexity | Gemini | Copilot | KORA citada? | Concorrentes citados |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-MM | … | | | | | | |

## O que fazer com o resultado

- **Prompt onde a KORA não aparece:** reforçar o guia correspondente (mais profundidade, dados, FAQ) e buscar menções off-site sobre o tema.
- **Prompt onde um concorrente domina:** analisar a fonte citada e cobrir melhor o assunto.
- **Guia que nunca é citado em 2-3 meses:** revisar título/ângulo ou despriorizar.
- **Vertical com boa citação:** sinal verde para abrir o próximo cluster (ver roadmap em `geo-strategy.md`).
