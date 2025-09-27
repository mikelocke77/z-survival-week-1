# Keep Your Head — Ultra Minimal Next.js App

This version is **as simple as it gets** so GitHub + Vercel is easy:
- Pages Router (`pages/` folder)
- No TypeScript, no Tailwind, no icons
- One page: `pages/index.js`
- Journaling saved locally
- Bible verses open to NIV on BibleGateway

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy (GitHub → Vercel)
1. Create a new **empty** GitHub repo.
2. Upload the **contents of this folder** (so `pages/` and `package.json` are at the repo top level).
3. Go to https://vercel.com/new and import your repo, then **Deploy**.

If Vercel says it can't find `pages/` or `app/`, your files are probably inside an extra folder. Move them up so `pages/` sits next to `package.json`.
