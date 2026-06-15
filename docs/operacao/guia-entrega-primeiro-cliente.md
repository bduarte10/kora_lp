# Guia operacional — do "sim" ao site no ar (primeiro cliente)

Checklist passo a passo para executar o primeiro cliente no modelo de assinatura, com cobrança no **Asaas**. Princípio: **manual e simples** no começo — automatize quando tiver 5–10 assinantes.

## Pré-requisitos (uma vez só)

- [ ] **CNPJ** aberto (MEI já serve para começar; confira o limite e as atividades permitidas).
- [ ] Conta no **Asaas** (asaas.com) verificada com o CNPJ.
- [ ] Conta na **Vercel** (hospedagem — já é o stack do projeto).
- [ ] Conta no **registro.br** (para domínios .com.br).
- [ ] Ferramenta de **assinatura de contrato**: ZapSign, Autentique ou Clicksign (têm plano gratuito).
- [ ] Definir como vai emitir **NFS-e** (nota fiscal de serviço do seu município) — o Asaas pode emitir automaticamente após cada pagamento.

## Fluxo por cliente

### 1. Fechamento

- [ ] Cliente confirmou o plano e o valor (setup + mensalidade).
- [ ] Envie o **contrato** ([modelo](contrato-modelo.md)) para assinatura digital.

### 2. Cobrança no Asaas

- [ ] **Cadastrar o cliente** no Asaas (nome, CPF/CNPJ, e-mail, telefone).
- [ ] Criar a **cobrança de setup** (avulsa): valor da taxa de setup, forma PIX/boleto/cartão. Envie o link.
- [ ] Criar a **assinatura** (recorrente): valor da mensalidade, ciclo **mensal**, vencimento no dia combinado, forma PIX/boleto/cartão. O Asaas envia cobrança e lembretes automáticos todo mês.
- [ ] Ative a **emissão automática de NFS-e** no Asaas (se já configurada) para cada pagamento.
- [ ] **Comece a produção só após o setup pago** (ou conforme sua política).

### 3. Briefing

- [ ] Envie o **[briefing](briefing-cliente.md)** (Google Form/Typeform).
- [ ] Reúna conteúdo: textos, fotos, logo, cores, referências, acessos.
- [ ] Sem conteúdo do cliente? Combine quem escreve o quê e ajuste o prazo.

### 4. Domínio

- [ ] **Cliente já tem domínio:** peça acesso ao painel do registrador e prepare o apontamento (DNS) para a Vercel.
- [ ] **Não tem:** registre no **registro.br em nome (CPF/CNPJ) do cliente**. O domínio é dele — isso é parte da promessa da KORA.

### 5. Construção e publicação (Vercel)

- [ ] Crie o **projeto/deploy do cliente** (um por cliente no começo).
- [ ] Configure as variáveis de ambiente necessárias (WhatsApp, e-mail de leads, etc.).
- [ ] Faça o deploy e gere a **URL de pré-visualização** para revisão.
- [ ] Revise com o cliente; ajuste (entra na lógica de "alterações na fila").

### 6. Domínio no ar

- [ ] Adicione o **domínio do cliente** ao projeto na Vercel.
- [ ] Configure os registros DNS (A/CNAME) no registrador. SSL é automático na Vercel.
- [ ] Confirme HTTPS funcionando e o site abrindo no domínio final.

### 7. Entrega e handoff

- [ ] Cheque: páginas, links, WhatsApp, formulário de contato, responsivo no celular, velocidade.
- [ ] Confirme **SEO/GEO básico** (título, descrição, sitemap, robots — já vem do projeto).
- [ ] Emita a **NFS-e** do setup (se não automática).
- [ ] Mensagem de entrega ao cliente: link do site, como pedir alterações, canal de suporte.

### 8. Pós-venda (retenção)

- [ ] Registre o cliente no seu controle (planilha/CRM): plano, valores, vencimento, domínio, acessos.
- [ ] Mantenha a **fila de alterações** (uma por vez).
- [ ] Contato proativo no 1º mês — é o que mais segura o churn.

## Economia da assinatura (referência)

- Custo recorrente real por cliente é baixo: **domínio ~R$40/ano**, **hospedagem na Vercel ~R$0** (sobe se precisar do plano Pro). A mensalidade cobre, sobretudo, **seu tempo de suporte/alterações + margem**.
- A **taxa de setup** cobre o trabalho de criação inicial — é o que evita trabalhar no prejuízo no primeiro mês.

## Quando automatizar (depois de ~5–10 clientes)

- Webhook do Asaas → atualizar status de pagamento e notificar.
- Painel/planilha automática de assinantes e vencimentos.
- Formulário de briefing no próprio site (`/briefing`) gravando no Google Sheets (infra de leads já existe no projeto).
- Template de projeto Vercel para acelerar novos sites.
