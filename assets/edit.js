// PFS inline-edit client.
// Pages opt in by setting <body data-edit-page="filename.html">.
// Every element with [data-field="..."] becomes editable when Edit mode is on.
// On blur (or Enter), changes POST to the Cloudflare Worker, which commits
// them directly to the source HTML in GitHub.
//
// Configure the worker URL by setting window.PFS_EDIT_URL before this script
// loads. Otherwise edits will fail silently to a placeholder.

(function () {
  const SAVE_URL = window.PFS_EDIT_URL || "https://pfs-edit-worker.gracetsantos.workers.dev/save";

  const page = document.body.dataset.editPage;
  if (!page) return;

  const bar = document.getElementById("edit-bar");
  const toggleBtn = document.getElementById("edit-toggle");
  const statusEl = document.getElementById("edit-status");
  const revertBtn = document.getElementById("edit-revert");
  if (!bar || !toggleBtn || !statusEl) return;

  // ---- Password gate ----
  // Prompts once per browser session on initial load. Without the correct
  // password the edit toolbar is hidden and the page behaves as read-only.
  // NOTE: this is a client-side gate only — the password lives in this file
  // and the worker has no server-side check, so it deters casual access but
  // is not real security.
  const EDIT_PASSWORD = "708123";
  const SESSION_KEY = "pfs-edit-unlocked";
  if (sessionStorage.getItem(SESSION_KEY) !== "1") {
    const entered = window.prompt("Enter the password to edit this page:");
    if (entered !== EDIT_PASSWORD) {
      bar.style.display = "none";
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");
  }

  const originals = new Map();
  const pending = new Map();
  let savingCount = 0;
  let errorCount = 0;

  document.querySelectorAll("[data-field]").forEach(el => {
    originals.set(el.dataset.field, el.innerHTML);
  });

  function setStatus(state, text) {
    statusEl.className = "edit-status " + state;
    statusEl.textContent = text;
  }

  function refresh() {
    if (!document.body.classList.contains("edit-mode")) {
      setStatus("", "viewing");
      revertBtn.style.display = "none";
      return;
    }
    if (errorCount > 0) { setStatus("err", "save failed"); return; }
    if (savingCount > 0) { setStatus("saving", "saving…"); return; }
    if (pending.size > 0) { setStatus("dirty", "unsaved"); revertBtn.style.display = "inline-block"; return; }
    setStatus("saved", "saved");
    revertBtn.style.display = "none";
  }

  function enable() {
    document.body.classList.add("edit-mode");
    toggleBtn.textContent = "Exit edit";
    document.querySelectorAll("[data-field]").forEach(el => {
      el.setAttribute("contenteditable", "plaintext-only");
      el.setAttribute("spellcheck", "true");
    });
    refresh();
  }

  function disable() {
    document.body.classList.remove("edit-mode");
    toggleBtn.textContent = "Edit mode";
    document.querySelectorAll("[data-field]").forEach(el => {
      el.removeAttribute("contenteditable");
      el.removeAttribute("spellcheck");
    });
    refresh();
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.contains("edit-mode") ? disable() : enable();
  });

  document.querySelectorAll("[data-field]").forEach(el => {
    el.addEventListener("input", () => {
      pending.set(el.dataset.field, el.innerText);
      errorCount = 0;
      refresh();
    });
    el.addEventListener("blur", () => {
      if (pending.has(el.dataset.field)) {
        const f = el.dataset.field;
        const t = pending.get(f);
        pending.delete(f);
        save(f, t, el);
      }
    });
    el.addEventListener("keydown", e => {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); el.blur(); }
      if (e.key === "Escape") {
        el.innerText = originals.get(el.dataset.field).replace(/<[^>]+>/g, "");
        pending.delete(el.dataset.field);
        el.blur();
      }
    });
  });

  function save(field, text, el) {
    savingCount++;
    refresh();
    fetch(SAVE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ field, text, page }),
    })
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(() => {
        originals.set(field, el.innerHTML);
        el.classList.remove("just-saved");
        void el.offsetWidth;
        el.classList.add("just-saved");
      })
      .catch(err => {
        errorCount++;
        console.error("save failed", err);
      })
      .finally(() => {
        savingCount--;
        refresh();
      });
  }

  revertBtn.addEventListener("click", () => {
    pending.forEach((_, f) => {
      const el = document.querySelector(`[data-field="${CSS.escape(f)}"]`);
      if (el) el.innerHTML = originals.get(f);
    });
    pending.clear();
    errorCount = 0;
    refresh();
  });

  window.addEventListener("beforeunload", e => {
    if (pending.size > 0 || savingCount > 0) { e.preventDefault(); e.returnValue = ""; }
  });
})();
