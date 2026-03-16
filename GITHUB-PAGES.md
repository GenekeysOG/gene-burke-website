# GitHub Pages deployment

The site can be deployed as a **static** build to GitHub Pages. Only the Vite-built frontend is published; the Express server, tRPC API, database, and OAuth are **not** available on GitHub Pages.

## One-time setup

1. **Enable GitHub Pages**
   - In your repo: **Settings → Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**

2. **Default branch**
   - The workflow runs on push to `main`. If your default branch is different (e.g. `master`), edit `.github/workflows/deploy-pages.yml` and change `branches: [main]` to match.

After the first push to `main` (or after running the workflow manually), the site will be available at:

**https://\<your-username\>.github.io/\<repo-name\>/**

Example: if the repo is `gene-burke-website`, the URL is `https://<username>.github.io/gene-burke-website/`.

## What works on GitHub Pages

- All static pages (Home, Bio, Releases, Projects, Education, FAQ, Contact, etc.)
- Client-side routing and direct links (e.g. `/bio`, `/education`)
- Theme and styling

## What does not work on GitHub Pages

- **tRPC / API calls** – there is no backend; any feature that calls `/api/trpc` will fail or show errors (e.g. auth, dynamic data from the server).
- **OAuth / login** – no server to handle callbacks or sessions.
- **Database-backed features** – no DB connection.

For full backend features (API, auth, DB), deploy the full app (e.g. `pnpm run build` + `pnpm run start`) to a Node host (Railway, Render, Fly.io, etc.) instead of or in addition to GitHub Pages.

## Build locally for GitHub Pages

To test the same build that gets deployed:

```bash
VITE_BASE_PATH=/gene-burke-website/ pnpm run build:gh-pages
```

Then serve `dist/public` with any static server (e.g. `npx serve dist/public`) and open the app at `http://localhost:3000/gene-burke-website/`.

## Custom domain (optional)

To use a custom domain (e.g. `geneburke.com`) with GitHub Pages, add a `CNAME` file in `dist/public` with the domain name and configure DNS as per [GitHub’s custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). You would then build with `VITE_BASE_PATH=/` and adjust the workflow to use that base when deploying for the custom domain.
