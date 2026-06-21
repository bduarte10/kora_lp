import type { CnpjEnrichment } from "@/lib/cnpj";
import { serverEnv } from "@/lib/env";
import { Resend } from "resend";

const apiKey = serverEnv.RESEND_API_KEY;
export const resend = apiKey ? new Resend(apiKey) : null;

export type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  company?: string;
  role?: string;
  segment?: string;
  companySize?: string;
  cnpj?: string;
  mainChallenge?: string;
  priority?: string;
  urgency?: string;
  paidDiagnosticOpenness?: string;
  message?: string;
  cnpjEnrichment?: CnpjEnrichment;
};

export async function sendLeadEmail(lead: LeadPayload) {
  if (!resend) {
    console.warn("[resend] RESEND_API_KEY ausente;pulando e-mail.");
    return { skipped: true as const };
  }
  const to = serverEnv.LEAD_NOTIFICATION_EMAIL;
  if (!to) {
    console.warn("[resend] LEAD_NOTIFICATION_EMAIL ausente;pulando e-mail.");
    return { skipped: true as const };
  }

  return resend.emails.send({
    from: "KORA Leads <leads@getsynapse.com.br>",
    to,
    ...(lead.email ? { replyTo: lead.email } : {}),
    subject: `Nova aplicação GEO · ${lead.company ?? lead.name}`,
    text: `Nome: ${lead.name}
Empresa: ${lead.company ?? "(não informado)"}
Cargo: ${lead.role ?? "(não informado)"}
Telefone: ${lead.phone}
E-mail: ${lead.email}
Segmento: ${lead.segment ?? "(não informado)"}
Tamanho: ${lead.companySize ?? "(não informado)"}
CNPJ: ${lead.cnpj || "(não informado)"}
Prioridade: ${lead.priority ?? "(não informado)"}
Urgência: ${lead.urgency ?? "(não informado)"}
Abertura para diagnóstico pago: ${lead.paidDiagnosticOpenness ?? "(não informado)"}

Desafio:
${lead.mainChallenge ?? "(não informado)"}

Dados públicos do CNPJ:
Razão social: ${lead.cnpjEnrichment?.razaoSocial ?? "(não encontrado)"}
Nome fantasia: ${lead.cnpjEnrichment?.nomeFantasia ?? "(não encontrado)"}
Cidade/UF: ${[lead.cnpjEnrichment?.cidade, lead.cnpjEnrichment?.uf].filter(Boolean).join("/") || "(não encontrado)"}
CNAE: ${lead.cnpjEnrichment?.cnaeFiscal ?? "(não encontrado)"}
Atividade: ${lead.cnpjEnrichment?.atividadePrincipal ?? "(não encontrado)"}
Situação cadastral: ${lead.cnpjEnrichment?.situacaoCadastral ?? "(não encontrado)"}
${lead.message ? `\nMensagem:\n${lead.message}\n` : ""}`,
  });
}
