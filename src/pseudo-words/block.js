import { PatternWord } from '../pattern-word';

class Block extends PatternWord {
  constructor(chain, occurs) {
    super(chain, occurs);
  }
}

export function block(chain, occurs) {
  const
    groupStart = '(?:',
    groupEnd = ')';

  return new Block(
    groupStart + chain.join('') + groupEnd,
    occurs
  );
}