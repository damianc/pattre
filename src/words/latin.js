import { PatternWord } from '../pattern-word';

export class Latin extends PatternWord {
  constructor(occurs) {
    super('[a-zA-Z]', occurs);
  }
}