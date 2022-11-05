import QuantifiersAPI from '@utils/quantifiers';

export function parseQuantifier(n = 1) {
  if (n == 1) return '';

  if (typeof n === 'number') {
    return '{' + n + '}';
  }

  if (typeof n === 'string') {
    if (/^\d+$/.test(n)) {
      return '{' + n + '}';
    }
    if (/\d+\+/.test(n)) {
      return '{' + n.slice(0, -1) + ',}';
    }
    if (/\d+\-\d+/.test(n)) {
      const [,min,max] = n.match(/(\d+)\-(\d+)/);
      return '{' + min + ',' + max + '}';
    }
    if (n === '?') return n;
    if (n === '??' || n === '?+') return '*';
    if (n === '+?') return '+';
  }

  if (typeof n === 'symbol') {
    switch (n) {
      case QuantifiersAPI.optional:
        return '?';
      case QuantifiersAPI.oneOrMore:
        return '+';
      case QuantifiersAPI.zeroOrMore:
        return '*';
    }
  }

  return '';
}