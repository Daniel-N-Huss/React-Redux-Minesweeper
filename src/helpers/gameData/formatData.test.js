const { formatData } = require('./formatData');

describe('formatData', () => {
  it('should take a flat array, and return a square 2d array', () => {
    const seed = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const expected = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = formatData(seed);

    expect(result).toEqual(expected);
  });
});
