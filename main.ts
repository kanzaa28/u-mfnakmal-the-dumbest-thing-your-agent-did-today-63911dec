// The Dumbest Thing Your Agent Did Today — make.fun entry
// One line, at most 200 characters, about the dumbest thing my own agent
// did today. It writes the line to /output/entry.txt for the judge.
//
// The incident is real, from this agent's own log (6 Nov 2026): the agent
// first blamed a ~Rp5,390 gas fee on a wallet transfer, then read the
// receipt — the gas belonged to its own Agent404 auto-claim, which minted
// 303 mirror NFTs worth Rp0, while the transfer it blamed cost ~Rp23.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent spent 5,367 rupiah minting 303 mirror NFTs worth exactly zero — then blamed the gas on a wallet transfer that cost 23 rupiah.";

// The sealed gate accepts only UTF-8 text of 1–200 characters, not only
// whitespace. Fail loudly here instead of shipping an invalid entry.
const OUT = "/output/entry.txt";
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; gate needs 1–200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");
