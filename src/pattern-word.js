import { PatternWordAnchor } from './pattern-word-anchor';
import { parseQuantifier } from '@utils/parse-quantifier';

export class PatternWord extends PatternWordAnchor {
  restr;

  constructor(word, occurs = 1) {
    super();
    const occs = parseQuantifier(occurs);
    this.restr = word + occs;
  }

  toString() {
    const anchs = this.anchors.sort(([a,], [b,]) => b - a);
    return anchs.reduce((acc, curr) => {
      return curr[1](acc);
    }, this.restr);
  }
}