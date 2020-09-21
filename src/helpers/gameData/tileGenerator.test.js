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

  it('returns an array containing the correct number of object with mines: true', () => {
    let mineCount = 5;
    let partialExpected = [];
    let firstResult = generateTiles(mineCount);

    for (let i = mineCount; i > 0; i--) {
      partialExpected.push({ revealed: false, bomb: true });
    }

    expect(firstResult).toEqual(expect.arrayContaining(partialExpected));

    mineCount = 2;
    partialExpected = [];
    let secondResult = generateTiles(mineCount);

    for (let i = mineCount; i > 0; i--) {
      partialExpected.push({ revealed: false, bomb: true });
    }

    expect(secondResult).toEqual(expect.arrayContaining(partialExpected));
  });

  it('returns the correct number of tiles to fill the game board', () => {
    let mineCount = 2;
    let boardWidth = 2;

    const result = generateTiles(mineCount, boardWidth);

    expect(result.length).toEqual(boardWidth ** 2);
  });
});
