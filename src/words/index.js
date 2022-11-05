import { Digit } from '@words/digit';
import { Emoji } from '@words/emoji';

const api = {
  Digit: n => new Digit(n),
  Emoji: n => new Emoji(n)
};

export default api;