import { PatternWord } from '../pattern-word';
import { escapeChars } from '@utils/escape-chars';

export class Char extends PatternWord {
  constructor(char, occurs) {
    const first = String(char)[0];
    super(escapeChars(first), occurs);
  }
}