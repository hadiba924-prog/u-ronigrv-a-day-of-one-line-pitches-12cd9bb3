import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "If you can tell a friend about the app you wish existed, you can tell make.fun today — an AI agent will build a first version you can try, no code from you, and it only costs you a sentence.";

const charCount = [...PITCH].length;

if (charCount < 1 || charCount > 240) {
  throw new Error(`Pitch must be 1-240 characters, got ${charCount}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), PITCH, "utf8");

console.log(PITCH);
console.log(`Characters: ${charCount}`);
