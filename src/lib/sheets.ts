import type { LeadPayload } from "@/lib/resend";
import { google } from "googleapis";

function getClient() {
  const email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const key = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!email || !key) return null;
  return new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function appendLeadToSheet(lead: LeadPayload) {
  const auth = getClient();
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  if (!auth || !spreadsheetId) {
    console.warn("[sheets] credenciais ausentes;pulando append.");
    return { skipped: true as const };
  }

  const sheets = google.sheets({ version: "v4", auth });
  return sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Leads!A:T",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          lead.name,
          lead.email ?? "",
          lead.phone,
          lead.company ?? "",
          lead.role ?? "",
          lead.segment ?? "",
          lead.companySize ?? "",
          lead.cnpj ?? "",
          lead.mainChallenge ?? "",
          lead.priority ?? "",
          lead.urgency ?? "",
          lead.paidDiagnosticOpenness ?? "",
          lead.cnpjEnrichment?.razaoSocial ?? "",
          lead.cnpjEnrichment?.nomeFantasia ?? "",
          lead.cnpjEnrichment?.cidade ?? "",
          lead.cnpjEnrichment?.uf ?? "",
          lead.cnpjEnrichment?.cnaeFiscal ?? "",
          lead.cnpjEnrichment?.atividadePrincipal ?? "",
          lead.cnpjEnrichment?.situacaoCadastral ?? "",
        ],
      ],
    },
  });
}
