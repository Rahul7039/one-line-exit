// The One-Line Exit — writes one funny one-line resignation letter to /output/entry.txt.
// The letter: a resignation that reads like a real sendable line, with the joke
// landing on the last word — the employee is already so invisible at work that
// becoming a full-time ghost is a promotion their performance reviews endorse.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I am leaving the company to become a full-time ghost, a role for which my last three performance reviews say I am already overqualified.";

mkdirSync("/output", { recursive: true });
// Deterministic: the same single line, byte for byte, on every run.
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
