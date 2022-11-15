import { PatternWord } from '../pattern-word';

export class Bin extends PatternWord {
  constructor(occurs) {
    super('[01]', occurs);
  }
}