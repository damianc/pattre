import { isFirst } from '@anchors/is-first';
import { isLast } from '@anchors/is-last';
import { isWord } from '@anchors/is-word';
import { hasBefore } from '@anchors/has-before';
import { hasAfter } from '@anchors/has-after';
import { hasNotBefore } from '@anchors/has-not-before';
import { hasNotAfter } from '@anchors/has-not-after';
import { as } from '@anchors/as';

export class PatternWordAnchor {
  anchors = [];

  isFirst = isFirst.bind(this);
  isLast = isLast.bind(this);
  isWord = isWord.bind(this);
  hasBefore = hasBefore.bind(this);
  hasAfter = hasAfter.bind(this);
  hasNotBefore = hasNotBefore.bind(this);
  hasNotAfter = hasNotAfter.bind(this);
  as = as.bind(this);
}