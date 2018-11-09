export interface Scramble {
  state: string;
  scramble_string: string | '';
}

export interface Seed {
  random: () => number;
}

interface Scrambler {
  version?: string;
  initialize: (randomSource: Seed) => Function | void;
  setRandomSource: (randomSource: Seed) => void;
  getRandomScramble: () => Scramble;
  setScrambleLength: (length: number) => void;
}

interface Scramblers {
  [key: string]: Scrambler
}

export let scramblers: Scramblers = {};
scramblers = require('./scramblers/NNN.js');
scramblers['222'] = require('./scramblers/222.js');
scramblers['333'] = require('./scramblers/333.js');
scramblers.clock = require('./scramblers/clock.js');
scramblers.minx = require('./scramblers/minx.js');
scramblers.pyram = require('./scramblers/pyram.js');
scramblers.sq1 = require('./scramblers/sq1.js');
scramblers.skewb = require('./scramblers/skewb.js');
