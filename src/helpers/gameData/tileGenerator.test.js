const { generateTiles } = require('./tileGenerator');
const { formatData } = require('./formatData')

describe('tileGenerator', () => {
  it('returns an array of objects with both true and false mine keys', () => {
    let result = generateTiles(5, 5);

    let mine = result.find((element) => (element.mine = true));
    let noMine = result.find((element) => !element.mine);

    expect(mine).toBeDefined();
    expect(noMine).toBeDefined();
  });

  it('returns an array containing the correct number of object with mines: true', () => {
    let mineCount = 5;
    let result = generateTiles(3, mineCount);

    let onlyMines = result.filter((element) => element.mine);
    let noMine = onlyMines.find((element) => !element.mine);

    expect(onlyMines.length).toBe(5);

    expect(noMine).not.toBeDefined();
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
    
    

    const result1 = formatData(generateTiles(5, 5));
    const result2 = formatData(generateTiles(10, 10));

    expect(result1.length).toBe(5)
    expect(result1[0].length).toBe(5)
    
    expect(result2.length).toBe(10)
    expect(result2[0].length).toBe(10)

  });
});
