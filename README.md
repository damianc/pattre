# PattRe

Library that internally deals with regular expressions; facade that exposes simplified interface to define patterns.

## Replacing Stuff with the `replace()` Method

```
let patt = Pattern(p => [
  p.Digit().isLast()
]);

let str = 'AB12CD34';

str.replace(patt, 'X')
// 'AB12CD3X'
```

```
let patt = Pattern(p => [
  p.Digit().as('st'),
  p.Digit().as('nd')
]);

str = 'AB12CD34';

str.replace(
  patt,
  (_, { st, nd }) => nd + '' + st
)
// 'AB21CD43'
```

```
let patt = Pattern(p => [
  p.Digit().as('st'),
  p.group('restDigs', [
    p.Digit(p.min(1))
  ])
]);

str = 'AB1234CD5678';

str.replace(
  patt,
  (_, { st, restDigs }) => restDigs + st
)
// 'AB2341CD6785'
```

## Words

| Word | Aliases | Matched stuff |
|--|--|--|
| `Letter()` | | any letter from any alphabet |
| `LCLetter()` | `Lowercase()`, `LC()` | lowercase letter from any alphabet |
| `UCLetter()` | `Uppercase()`, `UC()` | uppercase letter from any alphabet |
| `Latin()` | | a-z and A-Z |
| `LCLatin()` | | a-z |
| `UCLatin()` | | A-Z |
| `AlphaNum()` | | a-z, A-Z and 0-9 |
| `Char(ch)` | | given character |
| `Digit()` | | 0-9 |
| `Bin()` | | 0 and 1 |
| `Hex()` | | 0-9 and a-f/A-F |
| `Any()` | | any character |
| `Emoji()` | | emoji |
| `Space()` | | space |
| `Tab()` | | tab |
| `NewLine()` | `Newline()` | new line |
| `WhiteSpace()` | `Whitespace()` | white space like space or tab |

## Pseudo-Words

| Pseudo-Word | Description |
|--|--|
| `group()` | capture a named group of words for latter use |
| `oneOf()` | match one of words |

## Specifiers (Word Anchors)

| Specifier | Description |
|--|--|
| `hasBefore(otherWord)` | word is preceded by another word |
| `hasAfter(otherWord)` | word precedes other word |
| `isFirst()` | word is very first word in given chain |
| `isLast()` | word is very last word in given chain |
| `isWord()` | word is a literal, entire word |
| `as(name)` | capture word for latter use |

## Quantifiers

| Quantifier | Description | Example | |
|--|--|--|--|
| `n` or `'n'` | exactly `n` times | `2` or `'2'` | 2 times |
| `'n+'` | `n` times or more | `'2+'` | at least 2 times |
| `'n-p'` | between `n` and `p` times | `'2-4'` | 2, 3 or 4 times |
| `'?'` | 1 or 0 times | `'?'` | word is optional |
| `'??'` | 0 times or more | `'??'` | 0, 1, 2 or more times |
| `'?+'` | _as above_ | `'?+'` | _as above_ |
| `'+?'` | 1 time or more | `'+?'` | at least 1 time |
| `optional` | like `'?'` | | |
| `oneOrMore` | like `'+?'` | | |
| `zeroOrMore` | like `'??'` | | |
| `min(n)` | `n` times or more | `min(2)` | at least 2 times |
| `range(n,p)` | between `n` and `p` times | `range(2,4)` | 2,3 or 4 times |