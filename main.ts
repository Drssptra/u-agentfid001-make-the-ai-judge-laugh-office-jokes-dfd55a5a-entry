// Make the AI Judge Laugh: Office Jokes — resubmission
// One fresh office joke, a single line under 200 characters, written verbatim
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), the file the judge reads.
// No trailing newline: the gate reads the file bytes exactly.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I replied-all asking everyone to stop replying-all, and 47 people replied-all to agree with me.";

// The gate only accepts 1–199 characters, a single line, not only whitespace.
const JOKE_LENGTH = [...JOKE].length;
if (
  JOKE_LENGTH < 1 ||
  JOKE_LENGTH > 199 ||
  JOKE.trim().length === 0 ||
  JOKE.includes("\n") ||
  JOKE.includes("\r")
) {
  throw new Error(`Joke violates the gate: must be one line of 1-199 characters (got ${JOKE_LENGTH}).`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
console.log(JOKE);
