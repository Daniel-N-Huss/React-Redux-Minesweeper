const { generateTiles } = require('./tileGenerator');

describe('tileGenerator', () => {
  it('returns an array of objects', () => {
    let partialExpected = [
      { revealed: false, bomb: true },
      { revealed: false, bomb: false },
    ];

    let result = generateTiles();

    expect(result).toEqual(expect.arrayContaining(partialExpected));
  });

  it('is an array containing the correct number of object with bombs: true', () => {
    
    let bombCount = 5;
    let partialExpected = [];
    let firstResult = generateTiles(bombCount);

    for (let i = bombCount; i > 0; i--) {
      partialExpected.push({ revealed: false, bomb: true });
    }

    expect(firstResult).toEqual(expect.arrayContaining(partialExpected));

    bombCount = 2;
    partialExpected = [];
    let secondResult = generateTiles(bombCount);

    for (let i = bombCount; i > 0; i--) {
      partialExpected.push({ revealed: false, bomb: true });
    }

    expect(secondResult).toEqual(expect.arrayContaining(partialExpected));
  });
});
