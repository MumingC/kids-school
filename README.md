# Kids School

A small collection of static learning websites I build for my kids.
為自己的孩子做的自學網站，一個科目一個資料夾。

## Subjects

| | Folder | Title | About |
|---|---|---|---|
| 01 | [`rocket/`](rocket/) | 從地面到軌道 · Ground to Orbit | 12 關火箭課程，小三起點，終點是理解真實火箭如何進入軌道。每關附互動模擬器與 Space English。 |

## How it works

- Plain static HTML. No build step, no dependencies, no tracking.
- Each subject is one self-contained `index.html` inside its own folder.
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
