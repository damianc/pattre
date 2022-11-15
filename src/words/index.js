import { Letter } from '@words/letter';
import { LCLetter } from '@words/lc-letter';
import { UCLetter } from '@words/uc-letter';
import { Latin } from '@words/latin';
import { LCLatin } from '@words/lc-latin';
import { UCLatin } from '@words/uc-latin';
import { _String } from '@words/string';
import { Char } from '@words/char';
import { Digit } from '@words/digit';
import { Bin } from '@words/bin';
import { Hex } from '@words/hex';
import { AlphaNum } from '@words/alpha-num';
import { Any } from '@words/any';
import { Space } from '@words/space';
import { Tab } from '@words/tab';
import { NewLine } from '@words/new-line';
import { WhiteSpace } from '@words/white-space';
import { Emoji } from '@words/emoji';

/*
- Letter
- LCLetter / LC / Lowercase
- UCLetter / UC / Uppercase
- Latin / LatinLetter
- LCLatin / LCLatinLetter
- UCLatin / UCLatinLetter
- Char
- String
- AlphaNum

- Digit
- Bin
- Hex

- Currency / CurrencySymbol
- Emoji
- Any

- Space
- Tab
- Newline / NewLine / NL?
- Whitespace / WhiteSpace

- XHex
- UHex
- UnHex
- UnicodeEscape / Unicode

- Ref
- RegExp
- Pattern
*/


// const dictionary = {
//   Digit: '\\d',
//   Emoji: '\\p{Emoji}',
//   /**/
//   Letter: '\\p{L}',
//   LCLetter: '\\p{Ll}',
//   UCLetter: '\\p{Lu}',
//   Bin: '[01]',
//   Hex: '[0-9a-fA-F]',
//   Currency: '\\p{Sc}',
//   Space: '\\x20',
//   Tab: '\\t',
//   Newline: '\\n',
//   Whitespace: '\\s',
//   Any: '.'
// };

// LCLetter | lcLetter | Lowercase | LowerCase | LC
// UCLetter | ucLetter | Uppercase | UpperCase | UC
// Newline | NewLine
// Whitespace | WhiteSpace
// Currency | CurrencySymbol

/* aliases for LCLetter */
// dictionary.Lowercase = dictionary.LC = dictionary.LCLetter;
/* aliases for UCLetter */
// dictionary.Uppercase = dictionary.UC = dictionary.UCLetter;

// const api = Object.entries(dictionary).reduce((acc, [word, wordExpr]) => {
//   return {
//     ...acc,
//     [word]: n => new PatternWord(wordExpr, n)
//   };
// }, {});


const api = {
  Letter: n => new Letter(n),
  LCLetter: n => new LCLetter(n),
  UCLetter: n => new UCLetter(n),
  Latin: n => new Latin(n),
  LCLatin: n => new LCLatin(n),
  UCLatin: n => new UCLatin(n),
  String: (str, n) => new _String(str, n),
  Char: (char, n) => new Char(char, n),
  Digit: n => new Digit(n),
  Bin: n => new Bin(n),
  Hex: n => new Hex(n),
  AlphaNum: n => new AlphaNum(n),
  Any: n => new Any(n),
  Space: n => new Space(n),
  Tab: n => new Tab(n),
  NewLine: n => new NewLine(n),
  WhiteSpace: n => new WhiteSpace(n),
  Emoji: n => new Emoji(n)
};

/* aliases */
api.LC = api.Lowercase = api.LCLetter;
api.UC = api.Uppercase = api.UCLetter;
api.Newline = api.NewLine;
api.Whitespace = api.WhiteSpace;

export default api;