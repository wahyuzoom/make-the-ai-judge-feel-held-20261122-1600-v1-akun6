import * as fs from 'node:fs';
import * as path from 'node:path';

const text =
  'The kettle has gone quiet. Late light lies on the kitchen floor, the color of honey held up to a window. The dog sleeps with one ear up. Nothing is waiting for you. The afternoon folds itself small, like a letter, and stays.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), text, 'utf8');
process.stderr.write(`held: wrote entry.txt (${[...text].length} chars)\n`);
