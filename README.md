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

* `Digit(n)`
* `Emoji(n)`

## Pseudo-Words

* `group(name, words)`

## Quantifiers

* exact number as _number_, like `2`
* exact number as _string_, like `'2'`
* minimum number with _plus sign_, like `'2+'` (two or more times)
* range with _dash sign_, like `'2-4'` (from two up to four times)
* minimum number with `min()` method, like `p.min(2)` (two or more times)
* range with `range()` method, like `p.range(2,4)` (from two up to four times)
* optional word - zero or one time, can be defined with `'?'` or `p.optional`
* for _any number of times_ but at least 1: `'+?'` or `p.oneOrMore`
* for _any number of times_ including 0: `'??'`, `'?+'` or `p.zeroOrMore`