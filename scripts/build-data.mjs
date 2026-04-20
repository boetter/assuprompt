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
 *
 * This generator also:
 *   • Drops the source file's "9. Brancher" category and rehomes its
 *     prompts to category 6 (Risikovurdering og analyse) – the industry
 *     becomes a separate filter dimension.
 *   • Tags prompts with an industry when the title clearly identifies one.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = resolve(ROOT, "Prompt-bibliotek.txt");
const DST = resolve(ROOT, "prompts.js");

/* -------------------- Config -------------------- */

// Source-category IDs that should be merged into another category.
// key = source id, value = target id.
const CATEGORY_REMAP = { 9: 6 };

// Industry filter dimension. Detection order matters – first match wins.
const INDUSTRIES = [
  { id: "landbrug", name: "Landbrug", match: /(landbrug|landmand|landmands|landbrugs|besætning)/i },
  { id: "byggeri", name: "Byggeri", match: /(byggeri|byggefirma|byggeprojekt|bygge- og anlæg)/i },
  { id: "haandvaerk", name: "Håndværk", match: /håndværk/i },
  { id: "transport", name: "Transport og logistik", match: /(transport|logistik)/i },
  { id: "produktion", name: "Produktion", match: /(produktionsvirksomhed|fremstillingsvirksomhed)/i },
  { id: "detail", name: "Detailhandel", match: /(detailforretning|detailbutik|detailbranche)/i },
  { id: "ecommerce", name: "E-commerce", match: /e-?commerce/i },
  { id: "restauration", name: "Restauration", match: /(restaurant|restauration)/i },
  { id: "it", name: "IT og rådgivning", match: /(it- og konsulent|it-virksomhed|konsulenthus)/i },
  { id: "sundhed", name: "Sundhed", match: /(sundhedsklinik|tandlæge|fysioterapi|klinik)/i },
];

const SECTION_MARKERS = [
  "ROLLE:",
  "KONTEKST:",
  "METODE:",
  "KUNDENS SPØRGSMÅL:",
  "FORMÅL:",
  "BAGGRUND:",
  "OPGAVE:",
];

const CATEGORY_RE = /^#\s+(\d+)\\?\.\s+(.+?)\\?\.?\s*$/;
const HEADER_RE = /^\|\s*\*\*(.+?)\*\*\s*\|\s*$/;
const DIVIDER_RE = /^\|\s*-+\s*\|\s*$/;
const TITLE_RE = /^(\d+\.\d+)\s+(.*)$/;

/* -------------------- Body cleanup -------------------- */

function cleanBody(raw) {
  let t = (raw || "").trim();

  // `<br><br>` is the only markup in the source – each pair is a single
  // line break.
  t = t.replace(/<br><br>/g, "\n");
  t = t.replace(/<br\s*\/?>/gi, "\n");

  // Strip markdown escapes used in the source (\[ \] \. \- \* \( \))
  t = t.replace(/\\([\[\]\.\-\*\(\)])/g, "$1");

  // Decode any HTML entities that might sneak in.
  t = t
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  // Defensive: drop any remaining HTML tags.
  t = t.replace(/<[^>]+>/g, "");

  // Normalise whitespace.
  t = t.replace(/[ \t]+\n/g, "\n");
  t = t.replace(/\n[ \t]+/g, "\n");
  t = t.replace(/[ \t]{2,}/g, " ");

  // Re-introduce a blank line before the well-known section markers.
  const markerAlt = SECTION_MARKERS.map((m) =>
    m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  ).join("|");
  t = t.replace(new RegExp(`\\n(${markerAlt})`, "g"), "\n\n$1");
  t = t.replace(/\n(LEVERANCE\s*\d+[^\n]*)/g, "\n\n$1");

  // Collapse 3+ blank lines to 2.
  t = t.replace(/\n{3,}/g, "\n\n");

  return t.trim();
}

function detectIndustry(title) {
  // Match on the title only – body matches cause false positives (e.g. a
  // prompt about meeting notes that happens to mention "logistik").
  for (const ind of INDUSTRIES) {
    if (ind.match.test(title)) return ind;
  }
  return null;
}

/* -------------------- Parser -------------------- */

function parse(text) {
  const lines = text.split(/\r?\n/);
  const rawCategories = [];
  const prompts = [];
  let currentCat = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const cm = line.match(CATEGORY_RE);
    if (cm) {
      currentCat = { id: cm[1], name: cm[2].trim() };
      rawCategories.push(currentCat);
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
        sourceCategoryId: currentCat.id,
        title,
        body: cleanBody(bodyRow),
      });
      i = j - 1;
    }
  }

  // Apply category remap + industry detection.
  const categoryMap = new Map(rawCategories.map((c) => [c.id, c]));
  const finalCategories = rawCategories.filter(
    (c) => !Object.prototype.hasOwnProperty.call(CATEGORY_REMAP, c.id)
  );
  const usedIndustries = new Map();

  const finalPrompts = prompts.map((p) => {
    const targetCatId = CATEGORY_REMAP[p.sourceCategoryId] || p.sourceCategoryId;
    const cat = categoryMap.get(String(targetCatId)) || categoryMap.get(p.sourceCategoryId);
    const industry = detectIndustry(p.title);
    if (industry && !usedIndustries.has(industry.id)) {
      usedIndustries.set(industry.id, { id: industry.id, name: industry.name });
    }
    return {
      id: p.id,
      categoryId: cat.id,
      categoryName: cat.name,
      industryId: industry ? industry.id : null,
      industryName: industry ? industry.name : null,
      title: p.title,
      body: p.body,
    };
  });

  const industries = Array.from(usedIndustries.values()).sort((a, b) =>
    a.name.localeCompare(b.name, "da")
  );

  return { categories: finalCategories, industries, prompts: finalPrompts };
}

/* -------------------- Validate -------------------- */

function validate(data) {
  const errors = [];
  if (data.prompts.length === 0) errors.push("No prompts parsed");
  const seen = new Set();
  for (const p of data.prompts) {
    if (!p.id) errors.push(`Prompt missing id: ${p.title}`);
    if (!p.body) errors.push(`Prompt missing body: ${p.id}`);
    if (seen.has(p.id)) errors.push(`Duplicate id: ${p.id}`);
    seen.add(p.id);
    if (/<[a-z][^>]*>/i.test(p.body)) {
      errors.push(`Residual HTML in ${p.id}: ${p.body.match(/<[^>]+>/)[0]}`);
    }
    if (/\\[\[\]\.\-\*]/.test(p.body)) {
      errors.push(`Residual escape in ${p.id}`);
    }
    if (!data.categories.some((c) => c.id === p.categoryId)) {
      errors.push(`Orphan prompt ${p.id}: categoryId=${p.categoryId}`);
    }
  }
  return errors;
}

/* -------------------- Output -------------------- */

function emit(data) {
  const header = `/**
 * prompts.js – generated from Prompt-bibliotek.txt.
 * Do not edit by hand. Run \`node scripts/build-data.mjs\` to regenerate.
 *
 * Prompts: ${data.prompts.length} · Categories: ${data.categories.length} · Industries: ${data.industries.length}
 */
`;
  const payload = JSON.stringify(
    {
      categories: data.categories,
      industries: data.industries,
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
  const withIndustry = data.prompts.filter((p) => p.industryId).length;
  console.log(
    `Wrote ${data.prompts.length} prompts (${withIndustry} with industry tag) · ` +
      `${data.categories.length} categories · ${data.industries.length} industries`
  );
}

main();
