import { PatternWord } from '../pattern-word';

export class UCLetter extends PatternWord {
  constructor(occurs) {
    super('\\p{Lu}', occurs);
  }
}