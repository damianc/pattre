import { PatternWord } from '../pattern-word';

export class UCLatin extends PatternWord {
  constructor(occurs) {
    super('[A-Z]', occurs);
  }
}