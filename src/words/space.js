import { PatternWord } from '../pattern-word';

export class Space extends PatternWord {
  constructor(occurs) {
    super('\\x20', occurs);
  }
}