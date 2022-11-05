# PattRe

Library that internally deals with regular expressions; facade that exposes simplified interface to define patterns.

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