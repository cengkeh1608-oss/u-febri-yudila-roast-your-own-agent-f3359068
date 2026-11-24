import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// D8 won 25/25 over runner-up D2 (self-citing sources, 24/25): the invented-tool
// failure mode is the most agent-specific of the drafts, and the punch lands on
// the final word ("worked") with nothing wasted in between.
const TEXT = "My agent's favourite tool is the one it invented. It calls it constantly. It has never once worked.";

const outDir = process.argv[2] || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
