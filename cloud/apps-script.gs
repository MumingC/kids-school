/** @OnlyCurrentDoc */
/*
  Kids School 雲端紀錄 —— 貼進「Google 試算表 → 擴充功能 → Apps Script」的程式。
  網站把紀錄（例如英文測驗結果）連同 Google 登入的憑證送來；這裡先向 Google 確認憑證是真的、
  而且是 ROLES 裡登記過的帳號，才寫進這份試算表的「紀錄」分頁。

  部署：部署 → 新增部署作業 → 類型「網頁應用程式」→ 執行身分「我」、存取權「所有人」。
  「所有人」只是讓網站叫得到它；沒有登記帳號的有效憑證，什麼都讀不到也寫不進去。
  這個檔案在公開的 GitHub repo 裡，所以只放 email 的 SHA-256 雜湊，不放真的 email。
  ROLES 要和網站首頁 index.html 的 KS_AUTH.ROLES 一致。
*/
var CLIENT_ID = "58307936708-iaq9fqnvidmk0shc2aqdkda01nnrto47.apps.googleusercontent.com";
var ROLES = {
  "708d6808de7e41311e88faec3348e9538a137d2456a5b97be062f87a697cb732": "m",
  "b2bb02d76a983839f5ff629a69d3f94e2f7642a28b88c50a73307b655e90e69c": "b",
  "d7bca5588175a5e21fe9d240a78219dea51199d6ae8e99d923c74f95652a53bf": "p",
  "eb1f9bb8c337a37298d70e2f9573ab5d3b898e420fa0077eef26af3360fe245e": "p"
};
var NAMES = { m: "中孩", b: "大孩", o: "其他人", p: "爸爸媽媽" };
var SHEET = "紀錄";
var HEAD = ["時間", "誰", "項目", "結果", "分鐘", "登入帳號", "id", "資料（給程式讀的）"];

function doGet() { return out({ ok: true, hello: "Kids School cloud" }); }

function doPost(e) {
  try {
    var req = JSON.parse(e.postData.contents);
    var me = verify(req.token);
    if (req.action === "save") return out(save(me, req.items || []));
    if (req.action === "list") return out(list(me, req.app));
    if (req.action === "whoami") return out({ ok: true, role: me.role });
    return out({ ok: false, error: "bad action" });
  } catch (err) {
    return out({ ok: false, error: String(err && err.message || err) });
  }
}

function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

// Ask Google whether the ID token is genuine, for this site, unexpired, and from a registered account.
function verify(tok) {
  if (!tok) throw new Error("token: missing");
  var r = UrlFetchApp.fetch("https://oauth2.googleapis.com/tokeninfo?id_token=" + encodeURIComponent(tok), { muteHttpExceptions: true });
  if (r.getResponseCode() !== 200) throw new Error("token: invalid");
  var p = JSON.parse(r.getContentText());
  if (p.aud !== CLIENT_ID) throw new Error("token: wrong site");
  if (String(p.email_verified) !== "true") throw new Error("token: email not verified");
  if (Number(p.exp) * 1000 < Date.now()) throw new Error("token: expired");
  var mail = String(p.email || "").trim().toLowerCase();
  var h = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, mail, Utilities.Charset.UTF_8)
    .map(function (b) { return ("0" + ((b + 256) % 256).toString(16)).slice(-2); }).join("");
  var role = ROLES[h];
  if (!role) throw new Error("account: not registered");
  return { role: role };
}

function sheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET) || ss.insertSheet(SHEET, 0);
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEAD);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEAD.length).setFontWeight("bold");
    sh.setColumnWidth(4, 320);
  }
  return sh;
}

function plain(s) {             // keep text from being read as a formula
  s = String(s == null ? "" : s).slice(0, 300);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function save(me, items) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var sh = sheet(), last = sh.getLastRow();
    var have = {};
    if (last > 1) sh.getRange(2, 7, last - 1, 1).getValues().forEach(function (r) { have[r[0]] = 1; });
    var rows = [], saved = [];
    items.slice(0, 50).forEach(function (it) {
      var rec = it && it.rec, app = String(it && it.app || "");
      if (!rec || !/^[a-z0-9-]{1,30}$/.test(app) || !/^[A-Za-z0-9_-]{6,40}$/.test(String(rec.id || ""))) return;
      if (have[rec.id]) { saved.push(rec.id); return; }       // already there: a retry, not a new record
      var json = JSON.stringify(rec);
      if (json.length > 45000) return;                       // a sheet cell holds 50,000 characters
      var who = me.role === "p" ? (NAMES[rec.who] && rec.who !== "p" ? rec.who : "p") : me.role;
      rows.push([rec.ts ? new Date(rec.ts) : new Date(), NAMES[who], app, plain(rec.summary), rec.min || "", NAMES[me.role], rec.id, json]);
      have[rec.id] = 1; saved.push(rec.id);
    });
    if (rows.length) sh.getRange(last + 1, 1, rows.length, HEAD.length).setValues(rows);
    return { ok: true, role: me.role, saved: saved };
  } finally {
    lock.releaseLock();
  }
}

// A kid gets their own records back; a parent gets everyone's.
function list(me, app) {
  var sh = sheet(), last = sh.getLastRow();
  if (last < 2) return { ok: true, role: me.role, items: [] };
  var mine = NAMES[me.role];
  var items = sh.getRange(2, 1, last - 1, HEAD.length).getValues().filter(function (r) {
    return (!app || r[2] === app) && (me.role === "p" || r[1] === mine);
  }).slice(-200).map(function (r) {
    var data = null;
    try { data = JSON.parse(r[7]); } catch (e) {}
    return { app: r[2], who: r[1], data: data };
  }).filter(function (x) { return x.data; });
  return { ok: true, role: me.role, items: items };
}
