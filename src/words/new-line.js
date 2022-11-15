import { PatternWord } from '../pattern-word';

export class NewLine extends PatternWord {
  constructor(occurs) {
    super('\\n', occurs);
  }
}