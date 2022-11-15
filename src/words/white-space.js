import { PatternWord } from '../pattern-word';

export class WhiteSpace extends PatternWord {
  constructor(occurs) {
    super('\\s', occurs);
  }
}