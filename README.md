# What Would Bro Do? (WWBD)

Mobile-first PWA (Progressive Web App) for the “Bro Thinks He's Jesus” comedy universe.

- App name: What Would Bro Do?
- Tagline: “When life gets hard, ask Bro.”
- GitHub: https://github.com/chiwong2050-max/WhatWouldBroDo

## Run locally

Service workers only work on `http://` (or `https://`) — not by double-clicking `index.html`.

Pick one:

### Option A: Python

```bash
python -m http.server 5173
```

Then open:

`http://localhost:5173/`

### Option B: Node

```bash
npx serve .
```

## Customize links + IDs

### Social links

Update the URLs in [index.html](file:///e:/Trae2/What%20Would%20Bro%20Do/index.html) anywhere you see:

- `https://youtube.com/@BroThinksHesJesus`
- `https://tiktok.com/@BroThinksHesJesus`
- `https://instagram.com/BroThinksHesJesus`
- `https://facebook.com/BroThinksHesJesus`

## Sharing (deep links)

When someone shares from the Result screen, the app includes a link like:

`/?i=...`

Opening that link loads the shared blessing directly on the Result screen.

Older shared links using `/?r=...` are still supported for backward compatibility.

## Share preview image (OG/Twitter)

This project includes local share images:

- `og.png` (1200x630)
- `og-square.png` (1080x1080)

For best results on social platforms, update the meta tags in [index.html](file:///e:/Trae2/What%20Would%20Bro%20Do/index.html) to use your final deployed absolute URL (example: `https://yourdomain.com/og.png`) after you deploy.

## Safety notes

- Do not send user “struggle” text into analytics events.
- If you enable analytics/ads in production, add a consent banner where required by law.

### Analytics + ads placeholders

In [index.html](file:///e:/Trae2/What%20Would%20Bro%20Do/index.html), replace:

- `G-XXXXXXXX` with your real Google Analytics ID
- `ca-pub-XXXXXXXXXXXXXXX` with your AdSense publisher ID

## PWA notes

- Manifest: [manifest.json](file:///e:/Trae2/What%20Would%20Bro%20Do/manifest.json)
- Offline caching: [service-worker.js](file:///e:/Trae2/What%20Would%20Bro%20Do/service-worker.js)
- Icons: `icons/icon-192.png` and `icons/icon-512.png` (placeholders)

## Deploy for free

### Netlify (drag & drop)

1. Go to Netlify
2. Drag-and-drop this folder into the deploy area
3. Done

### Vercel (connect GitHub repo)

1. Push this folder to a GitHub repository
2. Import the repo in Vercel
3. Deploy

### GitHub Pages (static hosting)

This project uses relative asset paths and a relative PWA scope, so it works at:

- a domain root (Netlify/Vercel/custom domain), and
- a sub-path (GitHub Pages like `https://username.github.io/repo-name/`)

Steps:

1. Push the repo to GitHub
2. GitHub → Settings → Pages
3. Build and deployment:
   - Source: Deploy from a branch
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
4. Wait for Pages to publish, then open the provided URL

## “After Trae.ai builds it, do these 3 things”

1. Replace the social links with your real handles once you create them
2. Add your real Google Analytics ID for tracking downloads/visits
3. Deploy to Netlify (free, drag and drop, done in minutes)
