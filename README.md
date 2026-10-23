# vercel-nebula

Landing page for **Nebula**, the Android app that streams from BDIX media servers.

Live at https://nebula-bdix.vercel.app

Plain static site (HTML, CSS, a few lines of JS), no build step.

## Deploy on Vercel
1. Import this repo at https://vercel.com/new.
2. Framework preset: **Other**. Leave the build command and output directory empty.
3. Deploy. Every push to `main` redeploys.

## Local preview
```bash
npx serve .
```

## Files
- `index.html`: the page
- `styles.css`: styles; colour tokens mirror the app's `ui/theme/Theme.kt`
- `script.js`: sticky-nav blur and scroll reveal
- `favicon.svg`: the app mark
- `vercel.json`: clean URLs and cache headers

The "Download" buttons point to this repo's latest GitHub Release. Attach the APK to a release to make them work.
