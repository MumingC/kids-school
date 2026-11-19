# Kids School

A small collection of static learning websites I build for my kids.
為自己的孩子做的自學網站，一個科目一個資料夾。

## Subjects

| | Folder | Title | About |
|---|---|---|---|
| 01 | [`rocket/`](rocket/) | 從地面到軌道 · Ground to Orbit | 12 關火箭課程，小三起點，終點是理解真實火箭如何進入軌道。每關附互動模擬器與 Space English。 |
| 02 | [`ww2/`](ww2/) | 小小歷史家 · WWII | 二次世界大戰互動教材：會動的戰爭地圖、1931–1945 歷史大軸線、老照片、武器圖鑑、臺灣篇與小測驗。另有[國小中低年級簡單版](ww2/kids.html)。 |
| 03 | [`fission/`](fission/) | 核分裂實驗室 · Fission Lab | 8 站，從原子結構、同位素、半衰期，到 U-235 分裂、連鎖反應與臨界質量，最後談反應爐與核彈的分岔。 |
| 04 | [`ai-history/`](ai-history/) | AI 是怎麼長大的？ | 給國小三至六年級的 AI 發展史：AlphaGo、圖靈、感知器、ELIZA，以及持續增加的後續篇章。 |
| 05 | [`village-chief/`](village-chief/) | Village Chief · 小小村長 | 英文介面的六角格經濟策略遊戲：探索、建城、供需與價格、交換與合作。可跟電腦玩或兩人輪流。圖片清單見 [`ART.md`](village-chief/ART.md)。 |
| 06 | [`detective/`](detective/) | 環球小偵探 · World Detective | 類似《Carmen Sandiego》的世界追緝遊戲：跟著線索追怪盜飛遍 38 座城市，點真實照片找秘密、讀文化圖鑑、認國旗；飛行時間照真實距離計算。照片授權見 [`CREDITS.md`](detective/CREDITS.md)。 |
| 07 | [`relativity/`](relativity/) | 時間變慢實驗室 · Relativity | 5 站相對論入門（小二起）：光速賽跑到月球、光子鐘看時間膨脹、雙胞胎太空旅行計算機、緲子雨與 GPS 的證據，最後是延伸遊戲、影片與書單。 |
| 08 | [`river-city/`](river-city/) | 台北的水上公路 · River City | 9 站專題：台北能不能有通勤用的水上公路？從威尼斯的 MOSE 閘門、布里斯本會浮的碼頭、東京和首爾的通勤船，到台北的堤防與 200 年洪水、基隆河截彎取直、潮汐與藍色公路、日本的超級堤防，最後當市長做選擇。另有[國小中年級簡單版](river-city/kids.html)和[教師／家長手冊](river-city/teacher.html)。地圖用真實地理資料繪製；照片直接從 Wikimedia Commons 載入，作者與授權標在每張照片下。 |
| 09 | [`trip-planner/`](trip-planner/) | 旅行規劃師 · Trip Planner | 8 站學會規劃旅行：問大家的願望、把地方放上地圖、算時間與開放時間、比較交通方式、算全家預算、看天氣收行李、想備案，最後一站用「一日行程模擬器」排出全家的淡水一日遊（自動算路程、花費、每個人的開心度與體力，可以「試跑」抽天氣和狀況，也能印成一頁）。簡單／挑戰兩種難度（`?lv=easy`）。票價與時間是 2026 年查的大約數字，寫在檔案開頭的 `PLACES`、`TRV` 裡。 |

## Kids TV 家庭小電視（`tv/`）

首頁也是孩子的上網首頁，畫成一座可以拖著逛、可以放大縮小的城市，有六個區（科學、歷史、電腦、自然、地理、遊樂）。每一棟房子是一個可以去的地方，點房子會從下方滑出說明和「進去」按鈕；上方的按鈕可以直接飛到某一區。

**新增科目要加到首頁**：在 `index.html` 的 `DISTRICTS` 裡，把一筆 `{ id, img, emo, short, title, age, desc, href }` 加進對應區的 `items`（每區 6 塊地）。`img` 是 `assets/city/` 裡的圖檔名（尺寸登記在 `SPR`）；圖是用 Canva 產生的黏土風建築，新的房子可以先借用現有的圖。只給大孩加 `only:"b"`（中孩會看到上鎖的灰房子）；有簡單版加 `mHref:"…"`；還沒做的題目寫在 `ideas`，會顯示成工地。新增一個區就在 `DISTRICTS` 加一筆，會佔下一個街廓；六個街廓滿了就把 `COLS` 加一，城市會往右長。

遊樂街上的 [`tv/`](tv/) 是家長篩選的 YouTube 小電視（三個年齡檔案、每日限時、家長 PIN、電視模式），首頁會顯示每個孩子今天還剩幾分鐘；`tv/?p=s|m|b` 直接進入該孩子的檔案。

- 片單 `tv/videos.json` 由 `Dropbox/Family/kidstube/build.py`（頻道清單 `channels.json`）以 yt-dlp 產生，不在 repo 內。改清單後重跑 `python build.py`，再 commit `tv/videos.json`。
- 限時、PIN、隱藏影片都存在各裝置的 `localStorage`（key 前綴 `kt.`）。
- **連續故事**（`channels.json` 的 `series`，目前是 GEN-Z Media 的 *The Six Minutes*，205 集）：照集數順序播、播完自動接下一集，不混進隨機的「電視模式」；進度存在 `kt.series`。

### 每個孩子自己的首頁

- `mid/`（＝`?k=m`，🦊 中孩）：只顯示中孩的小電視＋「帶小小孩看」、The Six Minutes；二戰與 River City 連到簡單版；核分裂與小小村長顯示為上鎖。
- `big/`（＝`?k=b`，🚀 大孩）：全部科目（完整版），不顯示 The Six Minutes。
- 根目錄不帶參數：全部內容。

### 用 Google 登入切換首頁（已啟用）

首頁可以加一顆「使用 Google 帳戶登入」的按鈕：孩子登入後，首頁自動變成他自己的版本（等同 `?k=m`／`?k=b`），並記在那台裝置的 `localStorage`（`ks.who`，只存 `m`／`b`／`p` 一個字母，不存 email）。標題旁邊會出現「🦊 中孩的城市　換人」，按「換人」就登出回到全部內容。

**它不是權限控管。** 這是公開的靜態網站，沒有後端，ID token 只在瀏覽器裡解開讀 email、沒有驗簽章；任何人照樣可以直接開 `?k=b` 或任何一門課。它只是省掉「選自己是誰」這一步，不保護任何內容。

- `index.html` 裡 `window.KS_AUTH` 的 `GOOGLE_CLIENT_ID` 是空字串時，整個功能不存在：不載入 Google 的程式、畫面沒有任何變化。
- 網址明確帶 `?k=` 時（包含 `mid/`、`big/`）以網址為準，不顯示登入列。`?k=a` 可以強制看全部內容。
- 沒登記的帳號登入，會看到「這個帳號還沒登記喔」，照樣顯示全部內容。
- repo 是公開的，所以 `ROLES` **只放 email 的 SHA-256，不放 email 本身**。雜湊只是不讓地址直接出現在原始碼裡；已經知道或猜得到地址的人仍然可以比對出來。
- 啟用後，還沒登入的訪客開首頁時，瀏覽器會向 `accounts.google.com` 載入登入元件（「給大人的說明」裡「不需要登入、不收集任何資料」那句屆時要跟著改）。

**啟用步驟（家長做一次）**

1. 到 [Google Cloud Console → Google Auth Platform → Clients](https://console.developers.google.com/auth/clients)，選一個專案（沒有就新建），第一次會先要求填 Branding（應用程式名稱、支援 email）。
2. **Create client** → Application type 選 **Web application**。
3. **Authorized JavaScript origins** 加入（只有網域，不含路徑、結尾不加 `/`）：
   - `https://mumingc.github.io`
   - `https://kids-school-tawny.vercel.app`
   - `http://localhost` 和 `http://localhost:8000`（本機預覽用；Google 文件要求兩個都加，埠號換成實際使用的）
   
   Authorized redirect URIs 不用填。
4. 把產生的 Client ID（`….apps.googleusercontent.com`）貼到 `index.html` 的 `GOOGLE_CLIENT_ID`。Client ID 不是密碼，可以公開。
5. 取得每個人 email 的代碼：開 `首頁?hash=1`，在「家長工具」輸入 email（只在本機計算，不會送出），或在終端機執行（`fox@example.com` 換成真的地址，全部小寫）：

   ```
   python -c "import hashlib,sys;print(hashlib.sha256(sys.argv[1].strip().lower().encode()).hexdigest())" fox@example.com
   ```

   把結果加進 `ROLES`：`"代碼": "m"`（中孩）、`"b"`（大孩）或 `"p"`（家長，看全部）。
6. commit、push。Vercel preview 網址每次不同，沒列在 origins 裡的網址按鈕不會動。

**還沒確認的事**

- OAuth 同意畫面如果停在 Testing 狀態，只有列在 Test users 的帳號能登入；要讓名單外的帳號也能登入就要發布成 In production（只要 email／profile 這類基本範圍，一般不需要送審，但這點請以 Console 當下顯示的為準）。
- **Family Link 監護的兒童帳號能不能用「使用 Google 帳戶登入」登入第三方網站，沒有在 Google 官方說明裡查到明確文字（未驗證）。** 2021 年的媒體報導說可以，但預設要家長逐次核准，Family Link 裡有相關開關；實際情況要拿孩子的帳號試一次才知道。學校發的 Google Workspace for Education 帳號則由學校管理員決定能不能登入第三方網站。

## How it works

- Plain static HTML. No build step, no dependencies, no tracking.
- Each subject is one self-contained `index.html` inside its own folder (`ww2/` also ships a `kids.html` easy version and its own `images/`; `village-chief/` loads optional artwork from its `images/`; `detective/` ships `photos/`, `culture/` and `flags/`).
- Progress is stored in the browser's `localStorage`, so it never leaves the device.

## Local preview

Open `index.html` in any browser, or serve the folder:

```
python3 -m http.server 8000
```

## GitHub Pages

Settings → Pages → Source: `Deploy from a branch` → Branch `main` / `(root)`.

- Home: `https://mumingc.github.io/kids-school/`
- Rocket course: `https://mumingc.github.io/kids-school/rocket/`
- WWII: `https://mumingc.github.io/kids-school/ww2/` (easy version: `.../ww2/kids.html`)
- Fission Lab: `https://mumingc.github.io/kids-school/fission/`
- AI History: `https://mumingc.github.io/kids-school/ai-history/`
- Village Chief: `https://mumingc.github.io/kids-school/village-chief/`
- World Detective: `https://mumingc.github.io/kids-school/detective/`
- Relativity: `https://mumingc.github.io/kids-school/relativity/`
- River City: `https://mumingc.github.io/kids-school/river-city/`
- Kids TV: `https://mumingc.github.io/kids-school/tv/`
