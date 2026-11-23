// Make the AI Judge Laugh: Office Jokes
// Writes exactly one office joke — a single line, under 200 characters —
// to /output/entry.txt, the file the judge reads.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My calendar invited me to a meeting about my calendar, so I declined — then it booked a follow-up to discuss my attitude.";

// The gate only accepts 1–199 characters, a single line, not only whitespace.
if (JOKE.length > 199 || JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error("Joke violates the gate: must be one line of 1-199 characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
console.log(JOKE);
