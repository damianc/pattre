import WordsAPI from '@words';
import PseudoWordsAPI from '@pseudo-words';
import QuantifiersAPI from '@utils/quantifiers';

const API = {
  ...WordsAPI,
  ...PseudoWordsAPI,
  ...QuantifiersAPI
};

export default function Pattern(factory) {
  const reWordsArr = factory(API);

  const reChain = reWordsArr.join('');
  const re = new RegExp(reChain, 'gu');
  console.log('RE', re);

  return {
    // flags: 'iug', // ??
    [Symbol.replace](input, replacer) {
      if (typeof replacer === 'function') {
        const rec = new RegExp(re);
        let ex, i = input;
        while (ex = rec.exec(i)) {
          const matchedSubstr = ex[0];
          // console.log('>>',ex);
          const replaced = replacer(matchedSubstr, ex.groups);
          i = i.slice(0, ex.index) + replaced  + i.slice(ex.index + matchedSubstr.length);
        }
        return i;
      } else {
        return input.replace(re, replacer);
      }
    },
    [Symbol.search](input) {
      const rec = new RegExp(re);
      return input.search(rec);
    }
  };
}