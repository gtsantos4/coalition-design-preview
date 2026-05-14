// PFS inline-edit worker.
// Receives POST /save {field, text, page, password} from a published page
// and writes the edit directly to the source HTML in the GitHub repo. The
// PFS site has no build step — source = served — so a single write to the
// page file is enough; GitHub Pages picks it up on the next deploy.
//
// Required secrets (set via `npx wrangler secret put …`):
//   GITHUB_TOKEN     fine-grained PAT scoped to the PFS repo, Contents r/w
//
// Required vars (in wrangler.toml [vars]):
//   GITHUB_REPO      owner/repo, e.g. "gtsantos4/coalition-design-preview"
//   ALLOWED_ORIGIN   the production site origin, e.g. "https://gtsantos4.github.io"

const ALLOWED_PAGES = new Set([
  "index.html",
  "about.html",
  "contact.html",
  "members.html",
  "how-it-works.html",
]);

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors(env) });
    }

    const url = new URL(request.url);
    if (url.pathname !== "/save" || request.method !== "POST") {
      return json({ error: "not found" }, 404, env);
    }

    // Origin check — only allow POSTs from the production site
    const origin = request.headers.get("Origin") || "";
    if (env.ALLOWED_ORIGIN && origin !== env.ALLOWED_ORIGIN) {
      return json({ error: "forbidden origin" }, 403, env);
    }

    let body;
    try { body = await request.json(); }
    catch { return json({ error: "invalid json" }, 400, env); }

    const { field, text, page } = body || {};
    if (!field || typeof text !== "string" || !page) {
      return json({ error: "missing field/text/page" }, 400, env);
    }
    if (!ALLOWED_PAGES.has(page)) {
      return json({ error: `page not allowed: ${page}` }, 400, env);
    }
    if (text.length > 50000) {
      return json({ error: "text too long" }, 413, env);
    }
    if (!/^[a-zA-Z0-9._-]+$/.test(field)) {
      return json({ error: "invalid field name" }, 400, env);
    }

    try {
      const changed = await updateHtml(env, page, field, text);
      if (!changed) {
        return json({ ok: true, noop: true, reason: "field not found or text unchanged" }, 200, env);
      }
      return json({ ok: true }, 200, env);
    } catch (err) {
      return json({ error: String(err.message || err) }, 500, env);
    }
  },
};

function cors(env) {
  return {
    "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function json(obj, status, env) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...cors(env) },
  });
}

async function updateHtml(env, page, field, text) {
  const fileUrl = `https://api.github.com/repos/${env.GITHUB_REPO}/contents/${page}`;
  const getResp = await fetch(fileUrl, { headers: ghHeaders(env) });
  if (getResp.status === 404) return false;
  if (!getResp.ok) throw new Error(`GET ${page} → ${getResp.status}`);
  const meta = await getResp.json();
  const html = b64decodeUtf8(meta.content.replace(/\s/g, ""));

  const newHtml = applyEdit(html, field, text);
  if (newHtml === html) return false;

  const putResp = await fetch(fileUrl, {
    method: "PUT",
    headers: ghHeaders(env),
    body: JSON.stringify({
      message: `inline-edit: ${page} · ${field}`,
      content: b64encodeUtf8(newHtml),
      sha: meta.sha,
      committer: { name: "PFS edit bot", email: "edit-bot@pathwaystofamilysuccess.local" },
    }),
  });
  if (!putResp.ok) {
    const t = await putResp.text();
    throw new Error(`PUT ${page} → ${putResp.status} ${t.slice(0, 200)}`);
  }
  return true;
}

function ghHeaders(env) {
  return {
    "Authorization": `Bearer ${env.GITHUB_TOKEN}`,
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "pfs-edit-worker",
  };
}

function applyEdit(html, field, text) {
  const safeText = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const escField = field.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `(<([a-zA-Z][\\w-]*)[^>]*\\bdata-field=["']${escField}["'][^>]*>)([\\s\\S]*?)(<\\/\\2>)`
  );
  return html.replace(re, `$1${safeText}$4`);
}

function b64decodeUtf8(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

function b64encodeUtf8(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}
