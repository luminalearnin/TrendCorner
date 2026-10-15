# GitHub upload and Pages setup

This ZIP includes the Trend Corner website source, four local WebP images, and a GitHub Actions workflow. The export copy no longer relies on Manus-hosted image URLs. Preparing it did not change the original Webdev project or upload anything to GitHub.

## Upload the files

1. Download and **extract** this ZIP on your computer. Keep the folder structure intact; `package.json`, `client/`, `vite.config.ts`, and `.github/` should be at the extracted folder's top level. Do not upload the ZIP as a single file.
2. Create a GitHub repository. If you plan to use GitHub Pages, check **Settings → Pages** to confirm Pages is available for your repository visibility and GitHub plan.
3. Upload the extracted files using GitHub Desktop (recommended), or open a terminal in the extracted folder and run:

   ```bash
   git init -b main
   git add .
   git commit -m "Add Trend Corner website"
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

   Replace `YOUR-USERNAME` and `YOUR-REPO` with your GitHub owner and repository name. GitHub Desktop is preferable to the web uploader because it reliably includes the hidden `.github/workflows/` folder.

## Publish with GitHub Pages

1. Open the repository's **Settings → Pages** and choose **GitHub Actions** as the deployment source.
2. Push the files to `main`. The workflow at `.github/workflows/deploy-pages.yml` installs dependencies, builds the static site, and deploys `dist/public`.
3. Check the workflow run under **Actions**. After it succeeds, GitHub shows the site URL in **Settings → Pages**.

The build automatically uses the repository subpath (for example, `/YOUR-REPO/`) for project sites and `/` for an `owner.github.io` user/organization site. If GitHub does not offer Pages for a private repository on your plan, choose a Pages-eligible visibility or plan before publishing.

## Run locally

Install Node.js 22 and pnpm 10.18.0, then run:

```bash
pnpm install --frozen-lockfile
pnpm dev:static
```

Open `http://localhost:3000`.

## Important demo notes

- Product names, sample prices, contact details and WhatsApp actions are part of the demo; verify them with Trend Corner before launch.
- This static export does not include a product database or online payment checkout.
- The ZIP is a source export only. It does not create a repository or upload files to GitHub for you.
