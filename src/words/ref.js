import { PatternWord } from '../pattern-word';

export class Ref extends PatternWord {
  constructor(groupRef, occurs) {
    super('\\k<' + groupRef + '>', occurs);
  }
}