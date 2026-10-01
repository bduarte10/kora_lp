/**
 * Recebe os leads do site, grava na aba "Leads" desta planilha e manda um
 * e-mail para a conta dona do script.
 *
 * Instalação: na planilha, Extensões > Apps Script, cole este arquivo. Em
 * Configurações do projeto > Propriedades do script, crie LEAD_WEBHOOK_SECRET
 * com o mesmo valor da env LEAD_WEBHOOK_SECRET na Vercel. Publique em
 * Implantar > Nova implantação > App da Web, executando como "Eu" e com acesso
 * para "Qualquer pessoa". A URL gerada vai em LEAD_WEBHOOK_URL na Vercel. Ao
 * mudar o script, publique uma nova versão na mesma implantação para manter a
 * URL.
 *
 * O App da Web sempre responde HTTP 200; o resultado está no campo "ok".
 */

const HEADER = [
  "Data",
  "Nome",
  "Clínica",
  "WhatsApp",
  "Bairro e cidade",
  "Tipo de clínica",
  "Origem",
  "Página de entrada",
  "Site de origem",
  "UTM source",
  "UTM medium",
  "UTM campaign",
  "UTM term",
  "UTM content",
  "Click ID",
  "ID do envio",
  "E-mail de aviso",
];
const ID_COLUMN = HEADER.indexOf("ID do envio") + 1;
const NOTIFY_COLUMN = HEADER.indexOf("E-mail de aviso") + 1;

const REQUIRED = { name: 120, clinic: 160, phone: 20, location: 160 };
const OPTIONAL = { segment: 80, source: 80 };
const CLICK_IDS = ["gclid", "gbraid", "wbraid", "fbclid", "msclkid", "li_fat_id"];

function doPost(e) {
  let lead;
  try {
    lead = JSON.parse(e.postData.contents);
  } catch (error) {
    return reply({ ok: false, error: "invalid_json" });
  }

  const secret = PropertiesService.getScriptProperties().getProperty("LEAD_WEBHOOK_SECRET");
  if (!secret) return reply({ ok: false, error: "secret_not_configured" });
  if (!lead || lead.secret !== secret) return reply({ ok: false, error: "unauthorized" });

  const invalid = invalidField(lead);
  if (invalid) return reply({ ok: false, error: "invalid_field", field: invalid });

  const book = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = book.getSheetByName("Leads") || book.insertSheet("Leads");
  const from = lead.attribution || {};
  const row = [
    lead.name,
    lead.clinic,
    lead.phone,
    lead.location,
    lead.segment,
    lead.source,
    from.landing_page,
    from.referrer,
    from.utm_source,
    from.utm_medium,
    from.utm_campaign,
    from.utm_term,
    from.utm_content,
    CLICK_IDS.filter((key) => from[key])
      .map((key) => key + "=" + from[key])
      .join("; "),
  ];

  // A trava impede que dois reenvios simultâneos do mesmo id passem pela checagem.
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  let rowNumber;
  try {
    ensureHeader(sheet);
    if (findById(sheet, lead.id)) return reply({ ok: true, duplicate: true });
    sheet.appendRow([new Date()].concat(row.map(asText), [lead.id, "pendente"]));
    rowNumber = sheet.getLastRow();
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }

  // O lead já está gravado: falha no e-mail fica registrada na linha e não vira falha do envio.
  let notified = true;
  try {
    MailApp.sendEmail({
      to: Session.getEffectiveUser().getEmail(),
      subject: "Novo lead KORA: " + lead.clinic,
      body: HEADER.slice(1, row.length + 1)
        .map((label, i) => label + ": " + (row[i] || "-"))
        .join("\n"),
    });
    sheet.getRange(rowNumber, NOTIFY_COLUMN).setValue("enviado");
  } catch (error) {
    notified = false;
    console.error("Falha no e-mail do lead " + lead.id + ": " + error);
    sheet.getRange(rowNumber, NOTIFY_COLUMN).setValue("falhou: " + error);
  }

  return reply({ ok: true, notified: notified });
}

function invalidField(lead) {
  if (typeof lead.id !== "string" || !/^[A-Za-z0-9-]{8,64}$/.test(lead.id)) return "id";
  for (const field in REQUIRED) {
    const value = lead[field];
    if (typeof value !== "string" || !value.trim() || value.length > REQUIRED[field]) {
      return field;
    }
  }
  for (const field in OPTIONAL) {
    const value = lead[field];
    if (value == null) continue;
    if (typeof value !== "string" || value.length > OPTIONAL[field]) return field;
  }
  const from = lead.attribution;
  if (from == null) return null;
  if (typeof from !== "object") return "attribution";
  for (const key in from) {
    if (typeof from[key] !== "string" || from[key].length > 300) return "attribution." + key;
  }
  return null;
}

// Planilhas criadas antes das colunas novas ganham o cabeçalho completo; as colunas antigas
// mantêm a mesma ordem.
function ensureHeader(sheet) {
  const current = sheet.getLastRow() === 0 ? [] : sheet.getRange(1, 1, 1, HEADER.length).getValues()[0];
  if (current.join("|") !== HEADER.join("|")) {
    sheet.getRange(1, 1, 1, HEADER.length).setValues([HEADER]);
  }
}

function findById(sheet, id) {
  const rows = sheet.getLastRow() - 1;
  if (rows < 1) return null;
  return sheet
    .getRange(2, ID_COLUMN, rows, 1)
    .createTextFinder(id)
    .matchEntireCell(true)
    .findNext();
}

function reply(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

// Texto que começa com = + - @ vira fórmula na planilha; o apóstrofo força texto.
function asText(value) {
  const text = value == null ? "" : String(value);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}
