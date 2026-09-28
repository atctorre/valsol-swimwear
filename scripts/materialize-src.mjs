import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const p1 = join(dir, "materialize-src.part1.txt");
const p2 = join(dir, "materialize-src.part2.txt");
if (!existsSync(p1) || !existsSync(p2)) {
  console.error("materialize parts missing");
  process.exit(1);
}
const code = readFileSync(p1, "utf8") + readFileSync(p2, "utf8");
const out = join(dir, "_materialize-run.mjs");
writeFileSync(out, code);
await import(pathToFileURL(out).href);
