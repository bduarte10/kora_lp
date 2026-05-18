import { Resend } from "resend";
import { serverEnv } from "@/lib/env";

const apiKey = serverEnv.RESEND_API_KEY;
export const resend = apiKey ? new Resend(apiKey) : null;

export type LeadPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message?: string;
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
    replyTo: lead.email,
    subject: `Novo lead · ${lead.company}`,
    text: `Nome: ${lead.name}
Empresa: ${lead.company}
E-mail: ${lead.email}
Telefone: ${lead.phone}

Mensagem:
${lead.message ?? "(sem mensagem)"}
`,
  });
}
