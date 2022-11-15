import { PatternWord } from '../pattern-word';

export class LCLatin extends PatternWord {
  constructor(occurs) {
    super('[a-z]', occurs);
  }
}