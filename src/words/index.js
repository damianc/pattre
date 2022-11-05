// import { Digit } from '@words/digit';
// import { Emoji } from '@words/emoji';

import { PatternWord } from '../pattern-word';

const dictionary = {
  Digit: '\\d',
  Emoji: '\\p{Emoji}'
};

const api = Object.entries(dictionary).reduce((acc, [word, wordExpr]) => {
  return {
    ...acc,
    [word]: n => new PatternWord(wordExpr, n)
  };
}, {});


// const api = {
//   Digit: n => new Digit(n),
//   Emoji: n => new Emoji(n)
// };

export default api;