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

首頁也是孩子的上網首頁，畫成一張有六座分類島的海圖（科學、自然、歷史、地理、電腦、娛樂）。每個有字的六角格是一個可以去的地方，點島或格子，下方碼頭會列出那座島的選項。

**新增科目要加到首頁**：在 `index.html` 的 `ISLANDS` 裡，把一筆 `{ id, emo, short, title, age, desc, href }` 加進對應島的 `items`（每座島最多 6 格）。只給大孩加 `only:"b"`（中孩會看到上鎖）；有簡單版加 `mHref:"…"`；還沒做的題目寫在 `ideas`，會顯示成虛線空地。

娛樂島上的 [`tv/`](tv/) 是家長篩選的 YouTube 小電視（三個年齡檔案、每日限時、家長 PIN、電視模式），首頁會顯示每個孩子今天還剩幾分鐘；`tv/?p=s|m|b` 直接進入該孩子的檔案。

- 片單 `tv/videos.json` 由 `Dropbox/Family/kidstube/build.py`（頻道清單 `channels.json`）以 yt-dlp 產生，不在 repo 內。改清單後重跑 `python build.py`，再 commit `tv/videos.json`。
- 限時、PIN、隱藏影片都存在各裝置的 `localStorage`（key 前綴 `kt.`）。
- **連續故事**（`channels.json` 的 `series`，目前是 GEN-Z Media 的 *The Six Minutes*，205 集）：照集數順序播、播完自動接下一集，不混進隨機的「電視模式」；進度存在 `kt.series`。

### 每個孩子自己的首頁

- `mid/`（＝`?k=m`，🦊 中孩）：只顯示中孩的小電視＋「帶小小孩看」、The Six Minutes；二戰與 River City 連到簡單版；核分裂與小小村長顯示為上鎖。
- `big/`（＝`?k=b`，🚀 大孩）：全部科目（完整版），不顯示 The Six Minutes。
- 根目錄不帶參數：全部內容。

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
