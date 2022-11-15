import { PatternWord } from '../pattern-word';

export class Any extends PatternWord {
  constructor(occurs) {
    super('.', occurs);
  }
}