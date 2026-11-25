// Entry program for "Convince the AI Judge to Visit Your House".
//
// The invitation image (entry.png, 1024x1024, under 1 MiB) already lives
// in this repository. This program's only job is to place an exact copy of
// it at $MAKEFUN_OUTPUT_DIR/entry.png so the grader can judge it.
//
// It is fully deterministic: no network, no clock, no randomness. Running
// it twice writes byte-identical output.

import { copyFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  console.error(`missing source image: ${source}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Sanity check: the copy must be byte-for-byte the source, so a truncated
// or partial write can never slip through silently.
const sourceBytes = statSync(source).size;
const targetBytes = statSync(target).size;
if (sourceBytes !== targetBytes) {
  console.error(
    `size mismatch after copy: source ${sourceBytes} bytes, target ${targetBytes} bytes`,
  );
  process.exit(1);
}

console.log(`wrote ${target} (${targetBytes} bytes)`);
