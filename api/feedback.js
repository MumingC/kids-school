// 收「看不懂」回報，寫進 Notion 資料庫。
// Notion token 只存在 Vercel 的環境變數裡，永遠不會出現在瀏覽器端。
//
// 需要的環境變數：
//   NOTION_TOKEN  — Notion internal integration 的 secret
//   NOTION_DB_ID  — 「Kids School · 看不懂回報」資料庫 ID

// GitHub Pages 那份，加上本專案的所有 Vercel 網址（含每次 push 的預覽部署）。
// 同源請求根本不會走 CORS，所以這裡實際上只是為了讓 github.io 那份也能送。
const ALLOWED_ORIGIN = /^https:\/\/(mumingc\.github\.io|kids-school[a-z0-9-]*\.vercel\.app)$/;

const COURSES = new Set(["火箭", "二戰", "二戰(小學生版)", "核分裂", "首頁"]);

const UUID = /^[0-9a-f]{32}$/i; // 去掉連字號後的 Notion page id

// 很陽春的防洗版：同一個 IP 每分鐘最多 20 筆。
// 記憶體是綁在單一 function 實例上的，重啟或多實例就會歸零，
// 所以這只擋得住隨手亂按，擋不住認真的攻擊。目前的量級夠用。
const RATE = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 20;

function rateLimited(ip) {
  const now = Date.now();
  const hits = (RATE.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  RATE.set(ip, hits);
  if (RATE.size > 5000) RATE.clear(); // 防止記憶體無限長大
  return hits.length > MAX_PER_WINDOW;
}

const clip = (v, n) => String(v == null ? "" : v).replace(/\s+/g, " ").trim().slice(0, n);

async function notion(path, method, body, token) {
  const r = await fetch("https://api.notion.com/v1" + path, {
    method,
    headers: {
      Authorization: "Bearer " + token,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!r.ok) {
    const detail = await r.text();
    throw new Error("Notion " + r.status + ": " + detail.slice(0, 400));
  }
  return r.json();
}

module.exports = async (req, res) => {
  const origin = req.headers.origin || "";
  if (ALLOWED_ORIGIN.test(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ ok: false });

  const token = process.env.NOTION_TOKEN;
  const db = process.env.NOTION_DB_ID;
  if (!token || !db) {
    console.error("NOTION_TOKEN / NOTION_DB_ID 沒設好");
    return res.status(500).json({ ok: false, error: "not_configured" });
  }

  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) return res.status(429).json({ ok: false, error: "slow_down" });

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  try {
    // 第二步：小孩按完之後又補打了一句話 → 更新同一筆，不要另開一列
    if (body.id) {
      const id = String(body.id);
      if (!UUID.test(id.replace(/-/g, ""))) return res.status(400).json({ ok: false });
      const note = clip(body.note, 500);
      if (!note) return res.status(200).json({ ok: true });
      await notion("/pages/" + id, "PATCH", {
        properties: { "小孩說": { rich_text: [{ text: { content: note } }] } },
      }, token);
      return res.status(200).json({ ok: true });
    }

    // 第一步：一鍵「看不懂」，立刻建一筆
    const course = COURSES.has(body.course) ? body.course : "首頁";
    const section = clip(body.section, 120);
    const url = /^https:\/\/(mumingc\.github\.io|kids-school[a-z0-9-]*\.vercel\.app)\//.test(body.url || "")
      ? clip(body.url, 300)
      : "";

    const properties = {
      "哪一段": { title: [{ text: { content: (course + " · " + (section || "未標示")).slice(0, 180) } }] },
      "課程": { select: { name: course } },
      "段落": { rich_text: [{ text: { content: section } }] },
      "時間": { date: { start: new Date().toISOString() } },
      "狀態": { select: { name: "待處理" } },
      "筆數": { number: 1 },
    };
    if (url) properties["連結"] = { url };

    const page = await notion("/pages", "POST", { parent: { database_id: db }, properties }, token);
    return res.status(200).json({ ok: true, id: page.id });
  } catch (e) {
    console.error(e);
    return res.status(502).json({ ok: false });
  }
};
