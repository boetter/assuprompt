#!/usr/bin/env node
/**
 * Converts Prompt-bibliotek.txt → prompts.js (static data module).
 *
 * Run whenever the source file changes:
 *     node scripts/build-data.mjs
 *
 * The output file is loaded as a plain <script> before app.js and assigns
 * `window.PROMPTS_DATA`. This avoids any runtime parsing or HTML artefacts
 * in the shipped site.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = resolve(ROOT, "Prompt-bibliotek.txt");
const DST = resolve(ROOT, "prompts.js");

const SECTION_MARKERS = [
  "ROLLE:",
  "KONTEKST:",
  "METODE:",
  "KUNDENS SPØRGSMÅL:",
  "FORMÅL:",
  "BAGGRUND:",
  "OPGAVE:",
];

const CATEGORY_RE = /^#\s+(\d+)\\?\.\s+(.+)$/;
const HEADER_RE = /^\|\s*\*\*(.+?)\*\*\s*\|\s*$/;
const DIVIDER_RE = /^\|\s*-+\s*\|\s*$/;
const TITLE_RE = /^(\d+\.\d+)\s+(.*)$/;

function cleanBody(raw) {
  let t = (raw || "").trim();

  // `<br><br>` is the only markup in the source – each pair is a single
  // line break.
  t = t.replace(/<br><br>/g, "\n");
  // Any stray single <br> we haven't seen, defensively convert.
  t = t.replace(/<br\s*\/?>/gi, "\n");

  // Strip markdown escapes used in the source (\[ \] \. \- \*)
  t = t.replace(/\\([\[\]\.\-\*\(\)])/g, "$1");

  // Decode any HTML entities that might sneak in (none in current source).
  t = t
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  // Defensive: drop any other HTML tags.
  t = t.replace(/<[^>]+>/g, "");

  // Normalise whitespace.
  t = t.replace(/[ \t]+\n/g, "\n");
  t = t.replace(/\n[ \t]+/g, "\n");
  t = t.replace(/[ \t]{2,}/g, " ");

  // Re-introduce a blank line before section markers so the RKM structure
  // reads like three logical blocks.
  const markerAlt = SECTION_MARKERS.map((m) =>
    m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  ).join("|");
  t = t.replace(new RegExp(`\\n(${markerAlt})`, "g"), "\n\n$1");

  // LEVERANCE markers appear numbered – match separately.
  t = t.replace(/\n(LEVERANCE\s*\d+[^\n]*)/g, "\n\n$1");

  // Collapse 3+ blank lines to 2.
  t = t.replace(/\n{3,}/g, "\n\n");

  return t.trim();
}

function parse(text) {
  const lines = text.split(/\r?\n/);
  const categories = [];
  const prompts = [];
  let currentCat = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const cm = line.match(CATEGORY_RE);
    if (cm) {
      currentCat = { id: cm[1], name: cm[2].trim() };
      categories.push(currentCat);
      continue;
    }

    const hm = line.match(HEADER_RE);
    if (hm && currentCat) {
      const rawTitle = hm[1].trim();
      const tm = rawTitle.match(TITLE_RE);
      const id = tm ? tm[1] : null;
      const title = (tm ? tm[2] : rawTitle).trim();

      let j = i + 1;
      while (j < lines.length && DIVIDER_RE.test(lines[j])) j++;

      let bodyRow = "";
      if (j < lines.length && lines[j].startsWith("|")) {
        bodyRow = lines[j].replace(/^\|\s*/, "").replace(/\s*\|\s*$/, "");
        j++;
      }

      prompts.push({
        id,
        categoryId: currentCat.id,
        categoryName: currentCat.name,
        title,
        body: cleanBody(bodyRow),
      });
      i = j - 1;
    }
  }

  return { categories, prompts };
}

function validate(data) {
  const errors = [];
  if (data.prompts.length === 0) errors.push("No prompts parsed");
  const seen = new Set();
  for (const p of data.prompts) {
    if (!p.id) errors.push(`Prompt missing id: ${p.title}`);
    if (!p.body) errors.push(`Prompt missing body: ${p.id}`);
    if (seen.has(p.id)) errors.push(`Duplicate id: ${p.id}`);
    seen.add(p.id);
    // Catch any remaining HTML-ish fragments
    if (/<[a-z][^>]*>/i.test(p.body)) {
      errors.push(`Residual HTML in ${p.id}: ${p.body.match(/<[^>]+>/)[0]}`);
    }
    if (/\\[\[\]\.\-\*]/.test(p.body)) {
      errors.push(`Residual escape in ${p.id}`);
    }
  }
  return errors;
}

function emit(data) {
  const header = `/**
 * prompts.js – generated from Prompt-bibliotek.txt.
 * Do not edit by hand. Run \`node scripts/build-data.mjs\` to regenerate.
 *
 * Prompts: ${data.prompts.length} · Categories: ${data.categories.length}
 */
`;
  const payload = JSON.stringify(
    {
      categories: data.categories,
      prompts: data.prompts,
    },
    null,
    2
  );
  return `${header}window.PROMPTS_DATA = ${payload};\n`;
}

function main() {
  const src = readFileSync(SRC, "utf8");
  const data = parse(src);
  const errors = validate(data);
  if (errors.length) {
    console.error("Validation failed:");
    for (const e of errors) console.error("  -", e);
    process.exit(1);
  }
  writeFileSync(DST, emit(data), "utf8");
  console.log(
    `Wrote ${data.prompts.length} prompts across ${data.categories.length} categories → ${DST}`
  );
}

main();
