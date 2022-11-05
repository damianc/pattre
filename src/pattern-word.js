import { PatternWordAnchor } from './pattern-word-anchor';

export class PatternWord extends PatternWordAnchor {
  restr;

  constructor(word, occurs = 1) {
    super();
    let occs = '';
    if (occurs > 1) occs = `{${occurs}}`;
    this.restr = word + occs;
  }

  toString() {
    const anchs = this.anchors.sort(([a,], [b,]) => b - a);
    return anchs.reduce((acc, curr) => {
      return curr[1](acc);
    }, this.restr);
  }
}