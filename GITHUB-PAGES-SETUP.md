# GitHub Pages setup for Trend Corner

This repository keeps the editable website source in its original folders and publishes the compiled static site from the repository root. The repository's current Pages setting publishes the `main` branch root, so no Pages setting change is needed.

## How this repo is structured

- `client/`, `server/`, `shared/`, and the root configuration files are the website source.
- `client/public/images/instagram/` contains locally bundled copies of product and store photos from Trend Corner's public Instagram posts; product cards link back to their source posts.
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

## Catalogue notes

The displayed names, sizes and dates are transcribed from the linked public Instagram posts; they may not reflect current stock. No prices, delivery promises, payment methods, or return/exchange terms are stated on the page. The site is a WhatsApp enquiry catalogue with no cart or online checkout; shoppers should confirm current details directly with the store.
