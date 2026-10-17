# GitHub Pages setup for Trend Corner

This repository keeps the editable website source in its original folders and publishes the compiled static site from the repository root. The repository's current Pages setting publishes the `main` branch root, so no Pages setting change is needed.

## How this repo is structured

- `client/`, `server/`, `shared/`, and the root configuration files are the website source.
- `client/public/images/instagram/` contains locally bundled copies of product and store photos from Trend Corner's public Instagram posts; selecting a product opens its on-site detail view.
- Root `index.html`, `assets/`, `images/`, `favicon.svg`, and `api/` are the built files served by GitHub Pages.
- `.nojekyll` tells GitHub Pages to publish the static build as-is.

## Updating the published website

After changing source code or images, run from the repository root with Node.js 22 and pnpm 10.18.0:

```bash
pnpm install --frozen-lockfile
GITHUB_ACTIONS=true GITHUB_REPOSITORY=luminalearnin/TrendCorner pnpm build:static
cp -a dist/public/. .
touch .nojekyll
git add -A
git commit -m "Update Trend Corner website"
git push origin main
```

The build uses `/TrendCorner/` for asset URLs so it works at `https://luminalearnin.github.io/TrendCorner/`. GitHub Pages republishes the root build after the push.

## Local preview

```bash
pnpm install --frozen-lockfile
pnpm dev:static
```

Open `http://localhost:3000`.

## Shop demo notes

The public static demo now has in-page product quick views, preview prices, a size selector, and a browser-persisted guest bag. “Add to cart” updates local browser state; “Buy now” opens a WhatsApp order-inquiry draft for the selected style and size, and the bag can open a WhatsApp message draft for the full selection. The site does not process payment, place an order, or record customer details in a Firebase admin panel. Displayed prices and illustrative fit measurements are demo values that the owner must approve before being treated as current retail information.

GitHub Pages serves static files only. For actual order intake and a protected owner panel, connect a Firebase project and configure Firebase Authentication plus Firestore security rules; do not put service-account credentials in this repository or client bundle. A hidden URL alone does not secure an admin panel.
