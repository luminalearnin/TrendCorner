# GitHub Pages setup for Trend Corner

This repository keeps the editable website source in its original folders and publishes the compiled static site from the repository root. The repository's current Pages setting already publishes the `main` branch root, so no Pages setting change is needed.

## How this repo is structured

- `client/`, `server/`, `shared/`, and the root configuration files are the website source.
- `client/public/images/` contains the four local WebP assets used by the site.
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

## Demo notes

Product names, sample prices, contact details, and WhatsApp ordering links are demo content; confirm them with Trend Corner before launch. This static site has no product database or online checkout.
