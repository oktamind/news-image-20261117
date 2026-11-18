// news-image-20261117 — one image summing up Tuesday 17 November 2026.
// The image is baked into this repo as entry.png (1024x1024, JPEG bytes,
// 201,163 bytes). This program copies it to the grader's output directory.
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = new URL("./entry.png", import.meta.url);
const dest = join(outDir, "entry.png");

copyFileSync(src, dest);
const size = statSync(dest).size;
// Gate cap: the entry must be at most 1 MiB. Fail loudly instead of
// submitting an oversize file.
if (size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB cap`);
}
console.log(`wrote ${dest} (${size} bytes)`);
