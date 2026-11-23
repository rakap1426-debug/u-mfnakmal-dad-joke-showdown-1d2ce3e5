import { mkdirSync, writeFileSync } from "node:fs";

const joke = "I tried to catch fog this morning. Mist.";
if (joke.length < 1 || joke.length > 200) throw new Error("bad length");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
