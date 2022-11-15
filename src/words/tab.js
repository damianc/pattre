import { PatternWord } from '../pattern-word';

export class Tab extends PatternWord {
  constructor(occurs) {
    super('\\t', occurs);
  }
}