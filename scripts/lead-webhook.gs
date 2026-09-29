/**
 * Recebe os leads do site, grava na aba "Leads" desta planilha e manda um
 * e-mail para a conta dona do script.
 *
 * Instalação: na planilha, Extensões > Apps Script, cole este arquivo e
 * publique em Implantar > Nova implantação > App da Web, executando como
 * "Eu" e com acesso para "Qualquer pessoa". A URL gerada vai em
 * LEAD_WEBHOOK_URL na Vercel. Ao mudar o script, publique uma nova versão na
 * mesma implantação para manter a URL.
 */

const HEADER = ["Data", "Nome", "Clínica", "WhatsApp", "Bairro e cidade", "Tipo de clínica", "Origem"];

function doPost(e) {
  const lead = JSON.parse(e.postData.contents);
  const book = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = book.getSheetByName("Leads") || book.insertSheet("Leads");
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADER);

  const row = [lead.name, lead.clinic, lead.phone, lead.location, lead.segment, lead.source];
  sheet.appendRow([new Date()].concat(row.map(asText)));

  MailApp.sendEmail({
    to: Session.getEffectiveUser().getEmail(),
    subject: "Novo lead KORA: " + lead.clinic,
    body: HEADER.slice(1)
      .map((label, i) => label + ": " + (row[i] || "-"))
      .join("\n"),
  });

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
    ContentService.MimeType.JSON,
  );
}

// Texto que começa com = + - @ vira fórmula na planilha; o apóstrofo força texto.
function asText(value) {
  const text = value == null ? "" : String(value);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}
