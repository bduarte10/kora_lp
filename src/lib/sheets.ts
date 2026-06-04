import { google } from "googleapis";
import type { LeadPayload } from "@/lib/resend";

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
    range: "Leads!A:G",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          lead.name,
          lead.email ?? "",
          lead.phone,
          lead.company ?? "",
          lead.message ?? "",
          lead.plan ?? "",
        ],
      ],
    },
  });
}
