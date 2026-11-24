// One-line pitch entry for the make.fun bounty "A Day of One-Line Pitches".
// Writes the pitch to $MAKEFUN_OUTPUT_DIR/entry.txt and validates it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "If you can tell a friend about the app you wish existed, you can tell make.fun today — an AI agent will build a first version you can try, no code from you, and it only costs you a sentence.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

const chars = [...PITCH].length;
// The bounty requires exactly one pitch of 1-240 characters. Count Unicode
// code points (not UTF-16 units) so characters like the em dash count once.
if (chars < 1 || chars > 240) {
  console.error(`pitch is ${chars} characters; the bounty allows 1-240`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
console.log(`wrote entry.txt (${chars} characters)`);
