import { mkdirSync, readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(root, "src/data/product-photos-b64");
const modDir = join(root, "src/data/photo-modules");
const outDir = join(root, "public/products");
const brandDir = join(root, "public/brand");
mkdirSync(outDir, { recursive: true });
mkdirSync(brandDir, { recursive: true });

function loadB64(stem) {
  const mjs =
    stem === "logo" || stem === "avatar"
      ? join(modDir, `${stem}.mjs`)
      : join(modDir, `photo${stem}.mjs`);
  if (existsSync(mjs)) {
    const txt = readFileSync(mjs, "utf8");
    const m = txt.match(/"([A-Za-z0-9+/=]+)"/);
    if (m) return m[1];
  }
  if (!existsSync(srcDir)) return null;
  const parts = readdirSync(srcDir)
    .filter((f) => f.startsWith(`${stem}.part`))
    .sort((a, b) => Number(a.split("part")[1]) - Number(b.split("part")[1]));
  if (parts.length > 0) {
    return parts.map((f) => readFileSync(join(srcDir, f), "utf8").trim()).join("");
  }
  const whole = join(srcDir, `${stem}.b64`);
  if (existsSync(whole)) return readFileSync(whole, "utf8").trim();
  return null;
}

const stems = new Set(["logo", "avatar"]);
for (let i = 1; i <= 12; i++) stems.add(String(i).padStart(2, "0"));

let wrote = 0;
for (const stem of stems) {
  const b64 = loadB64(stem);
  if (!b64 || b64.length < 100) continue;
  try {
    const buf = Buffer.from(b64, "base64");
    if (buf.length < 100) continue;
    if (stem === "logo") writeFileSync(join(brandDir, "logo.jpg"), buf);
    else if (stem === "avatar") writeFileSync(join(brandDir, "avatar.jpg"), buf);
    else writeFileSync(join(outDir, `${stem}.jpg`), buf);
    wrote++;
    console.log("wrote", stem, buf.length);
  } catch (e) {
    console.warn("skip", stem, e.message);
  }
}
console.log("write-product-photos done, wrote", wrote);
