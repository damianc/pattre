import { PatternWord } from '../pattern-word';

export class Emoji extends PatternWord {
  constructor(occurs) {
    super('\\p{Emoji}', occurs);
  }
}