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

## Custom domain

When you point a custom domain (e.g. `geneburke.com`) at this GitHub Pages site, GitHub serves the site at the **root** of that domain. So you want the app to use base path `/` instead of `/gene-burke-website/`.

1. **Build with root base**  
   In your deploy workflow (or when building locally for the custom domain), set:
   ```yaml
   env:
     VITE_BASE_PATH: /
   ```
   and run `pnpm run build:gh-pages`. The app already uses `pathFor()` and `basePath` everywhere, so with `VITE_BASE_PATH=/` all links and routes work at the domain root (e.g. `https://geneburke.com/bio`).

2. **Optional: separate workflow for custom domain**  
   You can have a second workflow or a manual deploy that sets `VITE_BASE_PATH=/` and uploads the same `dist/public` artifact. Or change the existing workflow to use `VITE_BASE_PATH: /` once the custom domain is active and you no longer need the `*.github.io/repo-name/` URL.

3. **DNS and CNAME**  
   Add a `CNAME` file in `client/public/` containing your domain (e.g. `geneburke.com`) so it’s included in the build. Configure DNS as in [GitHub’s custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
