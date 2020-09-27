const { generateTiles } = require('./tileGenerator');

describe('tileGenerator', () => {
  it('returns an array of objects with both true and false mine keys', () => {
    let partialExpected = [
      { revealed: false, mine: true, adjacentTileIDs: [] },
      { revealed: false, mine: false, danger: 0, adjacentTileIDs: [] },
    ];

    let result = generateTiles(5, 5);

    expect(result).toEqual(expect.arrayContaining(partialExpected));
    //expect(result).toContain({mine: true});
    //expect(result).toContain({mine: false});
  });

  it('returns an array containing the correct number of object with mines: true', () => {
    let mineCount = 5;
    let partialExpected = [];
    let result = generateTiles(3, mineCount);

    for (let i = mineCount; i > 0; i--) {
      partialExpected.push({ revealed: false, mine: true, adjacentTileIDs: []});
    }

    expect(result).toEqual(expect.arrayContaining(partialExpected));
  });

  it('returns the correct number of tiles to fill the game board', () => {
    const mineCount = 2;
    const boardWidth = 2;

    const result = generateTiles(boardWidth, mineCount);

    expect(result.length).toEqual(boardWidth ** 2);
  });

  it('should randomize the order of the tile data', () => {
    const mineCount = 2;
    const boardWidth = 4;

    const result1 = generateTiles(boardWidth, mineCount);
    const result2 = generateTiles(boardWidth, mineCount);

    expect(result1).not.toStrictEqual(result2);
  });

  it('should group the tiles into sub-arrays representing each row of the game board', () => {
    const boardWidth = 5;
  });
});
