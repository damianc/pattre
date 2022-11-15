import { PatternWord } from '../pattern-word';
import { escapeChars } from '@utils/escape-chars';

export class _String extends PatternWord {
  constructor(str, occurs) {
    super(escapeChars('' + str), occurs);
  }
}