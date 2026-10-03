# Village Chief · artwork list

The game draws everything itself, so every image here is optional. Save a PNG with the exact file name below into `images/` and the game uses it the next time the page loads. Anything missing falls back to the drawn version.

## Shared style (paste this at the start of every prompt)

> Cozy hand-painted storybook illustration for a children's strategy game, soft gouache texture, warm afternoon light, gentle outlines, friendly and readable at small sizes, muted natural palette (meadow green, river blue, wheat gold, warm wood brown). No text, no letters, no logos, no watermark.

Keep all images in one ChatGPT conversation so the style stays consistent. After the first one you like, add: "Match the style of the image we made before."

## Map tiles · `images/tiles/`

Square, seamless, **top-down** textures. The game cuts them into hexagons, so the edges can be anything.

| File | Size | Prompt (after the shared style) |
|---|---|---|
| `grass.png` | 512 × 512 | Seamless top-down texture of a sunny meadow, short grass with a few tiny wildflowers, viewed straight from above, even lighting, no objects in the center. |
| `forest.png` | 512 × 512 | Seamless top-down texture of a dense leafy forest canopy, round tree crowns in several greens, viewed straight from above. |
| `hill.png` | 512 × 512 | Seamless top-down texture of rolling golden-brown hills with soft shadows and dry grass, viewed straight from above. |
| `mountain.png` | 512 × 512 | Top-down texture of a rocky grey mountain peak with a little snow at the center, viewed from above, rock fills the whole square. |
| `water.png` | 512 × 512 | Seamless top-down texture of a calm blue river with gentle ripples and light reflections, viewed straight from above. |

## Buildings · `images/buildings/`

One building per image, **transparent background**, three-quarter view from slightly above, centered with a little empty space around it.

| File | Size | Prompt |
|---|---|---|
| `farm.png` | 512 × 512 | A small wheat field with neat golden rows and a tiny wooden fence, transparent background. |
| `lumber.png` | 512 × 512 | A small lumber camp: a stack of logs, a chopping stump with an axe, a little wooden shed, transparent background. |
| `quarry.png` | 512 × 512 | A small stone quarry: grey stone blocks, a pickaxe and a wooden cart, transparent background. |
| `market.png` | 512 × 512 | A cheerful village shop stall with a striped awning and baskets of goods, transparent background. |
| `house.png` | 512 × 512 | A cozy cottage with a thatched roof, a chimney and a small garden, transparent background. |
| `granary.png` | 512 × 512 | A round wooden granary on stilts with a conical roof, a few sacks of grain beside it, transparent background. |

## City, bridge and units

| File | Size | Prompt |
|---|---|---|
| `images/city.png` | 512 × 512 | A small cluster of five cottages around a well with a tiny flag on a pole, three-quarter view, transparent background. |
| `images/bridge.png` | 512 × 512 | A sturdy wooden footbridge seen from directly above, running left to right across the square, transparent background. |
| `images/units/explorer.png` | 512 × 512 | Head-and-shoulders portrait of a friendly young explorer with a hat and a compass, facing forward, plain light background. |
| `images/units/settler.png` | 512 × 512 | Head-and-shoulders portrait of a cheerful settler carrying a backpack and a bedroll, facing forward, plain light background. |

Units are shown inside a small circle, so keep the face in the middle.

## Advisors · `images/advisors/`

Square portraits, head and shoulders, facing forward, plain soft background. They appear in small circles next to the advice.

| File | Size | Prompt |
|---|---|---|
| `farmer.png` | 512 × 512 | Farmer Hana, a kind woman in her fifties with a straw hat and a basket of vegetables, warm smile. |
| `builder.png` | 512 × 512 | Builder Rocco, a sturdy man with a hard hat, rolled-up sleeves and a hammer on his shoulder, confident grin. |
| `merchant.png` | 512 × 512 | Merchant Goldie, a lively young woman with a coin purse and a small scale, clever smile. |
| `scout.png` | 512 × 512 | Scout Hawk, an adventurous teenager with goggles on the forehead and a hawk feather in the hair, curious look. |

## Start screen

| File | Size | Prompt |
|---|---|---|
| `images/cover.png` | 1600 × 900 | Wide landscape of two small villages on either side of a winding river, fields on the left bank, a forest village on the right, an unfinished wooden bridge in the middle, morning light. |

## Checklist

- File names are lower case and end in `.png`.
- Buildings, city and bridge need a transparent background. If ChatGPT returns a white background, ask: "Please give me the same image as a PNG with a transparent background."
- Smaller files load faster on the tablet. 512 × 512 is plenty for everything except the cover.
