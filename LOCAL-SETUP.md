# View the site locally

## Quick start

From the repo root:

```bash
cd "/Users/fatimaburke/Library/CloudStorage/GoogleDrive-fatimaburke@gmail.com/My Drive/_Business/_Design:Dev/_FatimaBurke.com/Clients/Gene/gene-burke-website"

pnpm install
pnpm run dev
```

Then open **http://localhost:3000** in your browser (or the port shown in the terminal if 3000 is in use).

The dev server runs the Express app with Vite in development mode, so you get hot reload for the React frontend.

---

## Optional: environment variables

The app can run without a `.env` file for basic viewing. The database is optional at startup; features that need it (e.g. OAuth login, some tRPC calls) will log warnings or fail until configured.

If you want to add a `.env` later (for DB, OAuth, forms, etc.), create a file named `.env` in the repo root. Example (fill in real values only where needed):

```env
# Server
PORT=3000
NODE_ENV=development
JWT_SECRET=any-random-string-for-local

# Database (optional for local viewing)
# DATABASE_URL=mysql://user:pass@localhost:3306/dbname

# OAuth (optional)
# OAUTH_SERVER_URL=...
# OWNER_OPEN_ID=...

# Client (optional – for maps, etc.)
# VITE_APP_ID=...
# VITE_OAUTH_PORTAL_URL=...
# VITE_FRONTEND_FORGE_API_KEY=...
# VITE_FRONTEND_FORGE_API_URL=...
```

---

## Scripts reference

| Command         | What it does                                      |
|----------------|----------------------------------------------------|
| `pnpm run dev` | Start dev server (Vite + Express) at http://localhost:3000 |
| `pnpm run build` | Build for production → `dist/public/` + `dist/index.js` |
| `pnpm run build:gh-pages` | Build static frontend only (for GitHub Pages) |
| `pnpm run start` | Run production build (Node server + static files)  |

See **GITHUB-PAGES.md** for deploying to GitHub Pages.
