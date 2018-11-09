import cli from 'commander';
import { ICAScrambo } from './ICAScrambo';
import { Scramble } from './scramblers';
const packageVersion = require('../package.json').version;

cli
  .version(packageVersion)
  .option('-n, --number [num]', 'set amount of scrambles to generate')
  .option('-t, --type [string]', 'set the scramble type', '333')
  .option('-s, --seed [num]', 'set seed')
  .option('-l, --length [num]', 'set scramble length')
  .parse(process.argv);

const out = new ICAScrambo();
let scrambles: Array<Scramble>;

out.setType(cli.type);
if (cli.seed) {
  out.setSeed(cli.seed);
}
if (cli.length) {
  out.setLength(cli.length);
}
if (cli.number) {
  scrambles = out.get(cli.number);
} else {
  scrambles = out.get();
}

console.log(scrambles.map(s => s.scramble_string).join('\n'));
