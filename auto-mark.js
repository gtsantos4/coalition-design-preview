// One-time script: walks each page and adds data-field="f-N" to every text
// leaf element so the inline-edit client can target them.
//
// Run: `node auto-mark.js`
//
// Skips: nav, header, footer, script, style, svg, the edit toolbar itself,
// and elements that already have data-field. A "text leaf" is an element
// whose direct children are only text or simple inline tags.

const { parse } = require("node-html-parser");
const fs = require("fs");
const path = require("path");

const PAGES = ["index.html", "about.html", "contact.html", "members.html", "how-it-works.html"];

const SKIP_TAGS = new Set([
  "script", "style", "noscript", "svg", "header", "nav", "footer", "template",
]);
const SKIP_IDS = new Set(["edit-bar"]);
const INLINE_OK = new Set([
  "br", "strong", "em", "span", "a", "code", "b", "i", "u",
  "small", "sub", "sup", "mark", "abbr", "time",
]);

function isTextLeaf(el) {
  let hasNonWhitespace = false;
  for (const child of el.childNodes) {
    if (child.nodeType === 3) {
      if ((child.rawText || "").trim()) hasNonWhitespace = true;
      continue;
    }
    if (child.nodeType !== 1) continue;
    const t = (child.rawTagName || "").toLowerCase();
    if (!INLINE_OK.has(t)) return false;
  }
  return hasNonWhitespace;
}

function walk(el, state) {
  const tag = (el.rawTagName || "").toLowerCase();
  if (SKIP_TAGS.has(tag)) return;
  if (el.id && SKIP_IDS.has(el.id)) return;

  if (tag && isTextLeaf(el) && !el.hasAttribute("data-field")) {
    state.counter++;
    el.setAttribute("data-field", `f-${state.counter}`);
    return;
  }

  for (const child of el.childNodes) {
    if (child.nodeType === 1) walk(child, state);
  }
}

for (const page of PAGES) {
  const filepath = path.join(__dirname, page);
  if (!fs.existsSync(filepath)) {
    console.warn(`skipping ${page} (not found)`);
    continue;
  }
  const content = fs.readFileSync(filepath, "utf8");
  const root = parse(content, { comment: true });
  const body = root.querySelector("body");
  if (!body) {
    console.warn(`skipping ${page} (no body)`);
    continue;
  }

  const state = { counter: 0 };
  walk(body, state);

  fs.writeFileSync(filepath, root.toString());
  console.log(`${page}: marked ${state.counter} fields`);
}
