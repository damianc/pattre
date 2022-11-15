import { PatternWord } from '../pattern-word';

export class Letter extends PatternWord {
  constructor(occurs) {
    super('\\p{L}', occurs);
  }
}