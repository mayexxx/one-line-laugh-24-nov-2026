import { mkdirSync, writeFileSync } from 'node:fs';

const line = "My phone's screen time report just filed a restraining order against me.";
if (line.length < 1 || line.length > 200 || /[\r\n]/.test(line)) {
  throw new Error('The entry must be one line of 1–200 characters.');
}
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', `${line}\n`, 'utf8');
