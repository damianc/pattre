import { PatternWord } from '../pattern-word';

export class AlphaNum extends PatternWord {
  constructor(occurs) {
    super('[a-zA-Z0-9]', occurs);
  }
}