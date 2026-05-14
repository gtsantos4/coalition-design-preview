# pfs-edit-worker

Cloudflare Worker that powers inline content editing on the PFS site.

## How it fits

```
Boss in browser  →  POST /save  →  Cloudflare Worker  →  GitHub Contents API
                                                                ↓
                                              commit directly to index.html etc.
                                                                ↓
                                                      GitHub Pages redeploys
                                                                ↓
                                                        live site updates
```

Because PFS has no build step (source HTML files are served directly), the
worker writes straight to source — no sidecar JSON, no transform. The
edit-bar's `data-field="f-N"` markers in each page tell the worker exactly
which element to patch.

## Setup (one-time)

1. **Install wrangler:**
   ```sh
   cd edit-worker
   npm install
   ```

2. **Log in to Cloudflare:**
   ```sh
   npx wrangler login
   ```

3. **Create a GitHub fine-grained PAT:**
   - https://github.com/settings/personal-access-tokens/new
   - Resource owner: `gtsantos4`
   - Repository access: only `coalition-design-preview`
   - Permissions → Repository → **Contents: Read and write**
   - Copy the token (starts with `github_pat_…`)

4. **Set the GitHub token secret on the Worker:**
   ```sh
   npx wrangler secret put GITHUB_TOKEN
   # paste the github_pat_... token
   ```

5. **Deploy:**
   ```sh
   npx wrangler deploy
   ```
   Wrangler prints the deployed URL (e.g. `https://pfs-edit-worker.<account>.workers.dev`).
   Drop that URL into `assets/edit.js` (`SAVE_URL` constant) and push.

## Updating

```sh
npx wrangler deploy
```

## Adding a new editable page

1. Add the page filename to `ALLOWED_PAGES` in `src/index.js`.
2. Re-run `node auto-mark.js` (in the project root) to add `data-field`
   markers, and add the edit-bar markup + `<body data-edit-page="…">`.
3. Redeploy the worker: `npx wrangler deploy`.

## Security

- **Origin check** — only requests from `ALLOWED_ORIGIN` (set in `wrangler.toml`) are accepted. This is the main barrier; without it anyone could POST to the worker URL.
- **Allowlist** — only filenames in `ALLOWED_PAGES` can be patched.
- **Length cap** — single field edits capped at 50KB.

The origin check relies on the browser sending an honest `Origin` header on cross-origin requests, which it does for any normal fetch from a different site. Anyone visiting the production site can edit it. If you need to restrict to specific people, add a password back (or use Cloudflare Access).
