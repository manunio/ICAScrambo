import { hashCode } from './util';
import { scramblers, Scramble, Seed } from './scramblers';

export class ICAScrambo {
  type = '333';
  length = 20;
  seed: Seed = Math;

  constructor(type?: string, length?: number) {
    this.setLength(length || this.length);
    this.setType(type || this.type);
  }

  init() {
    if (!scramblers.hasOwnProperty(this.type)) {
      throw new Error(`Invalid scrambler, allowed: ${Object.keys(scramblers).join(', ')}`)
    }

    scramblers[this.type].initialize(this.seed);
  }

  get(num: number = 1) {
    let stack = Array<Scramble>(num);
    for (let i = 0; i < num; i++) {
      let scramble = {
        state: scramblers[this.type].getRandomScramble().state.slice(),
        scramble_string: scramblers[this.type].getRandomScramble().scramble_string
      };
      stack[i] = scramble;
    }
    return stack;
  }

  setType(type: string) {
    if (!arguments.length) {
      return this;
    }

    this.type = type;

    this.init();

    return this;
  }

  setSeed(seed: number) {
    if (!arguments.length) {
      return this;
    }

    const seedStr = seed.toString();
    let hash = hashCode(seedStr);

    this.seed = {
      random() {
        const x = Math.sin(hash++) * 10000;
        return x - Math.floor(x);
      }
    }

    this.init();

    return this;
  }

  setLength(length: number) {
    if (!arguments.length) {
      return this;
    }

    this.length = length;

    scramblers[this.type].setScrambleLength(this.length);

    return this;
  }
}
