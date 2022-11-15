import { PatternWord } from '../pattern-word';

export class Hex extends PatternWord {
  constructor(occurs) {
    super('[0-9a-fA-F]', occurs);
  }
}