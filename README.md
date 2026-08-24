# Kids School

A small collection of static learning websites I build for my kids.
為自己的孩子做的自學網站，一個科目一個資料夾。

## Subjects

| | Folder | Title | About |
|---|---|---|---|
| 01 | [`rocket/`](rocket/) | 從地面到軌道 · Ground to Orbit | 12 關火箭課程，小三起點，終點是理解真實火箭如何進入軌道。每關附互動模擬器與 Space English。 |
| 02 | [`ww2/`](ww2/) | 小小歷史家 · WWII | 二次世界大戰互動教材：會動的戰爭地圖、1931–1945 歷史大軸線、老照片、武器圖鑑、臺灣篇與小測驗。另有[國小中低年級簡單版](ww2/kids.html)。 |
| 03 | [`fission/`](fission/) | 核分裂實驗室 · Fission Lab | 8 站，從原子結構、同位素、半衰期，到 U-235 分裂、連鎖反應與臨界質量，最後談反應爐與核彈的分岔。 |

## How it works

- Plain static HTML. No build step, no dependencies, no tracking.
- Each subject is one self-contained `index.html` inside its own folder (`ww2/` also ships a `kids.html` easy version and its own `images/`).
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
