import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "v1.4.7: fixed bug where the brain replayed your most embarrassing moment from 2009 on loop at 3 a.m. instead of sleeping.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
