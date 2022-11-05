const QuantifiersAPI = {
  optional: Symbol('[Pattern Quantifier]: Optional'),
  oneOrMore: Symbol('[Pattern Quantifier]: One or More'),
  zeroOrMore: Symbol('[Pattern Quantifier]: Zero or More'),
  min: n => n + '+',
  range: (min, max) => min + '-' + max
};

export default QuantifiersAPI;