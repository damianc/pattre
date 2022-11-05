const Pattern = require('../pattre');

beforeAll(() => {
  console.log('>>', Pattern);
});

describe('Digit(n) with replace()', () => {
  it('should replace digits with X', () => {
    const pattern = Pattern(p => [
      p.Digit()
    ]);

    expect(
      'AB12CD34'.replace(pattern, 'X')
    ).toEqual('ABXXCDXX');
  });
});