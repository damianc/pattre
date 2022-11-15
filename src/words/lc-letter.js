import { PatternWord } from '../pattern-word';

export class LCLetter extends PatternWord {
  constructor(occurs) {
    super('\\p{Ll}', occurs);
  }
}