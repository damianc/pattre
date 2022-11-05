import { PatternWord } from '../pattern-word';

export class Digit extends PatternWord {
  constructor(occurs) {
    super('\\d', occurs);
  }
}