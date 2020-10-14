const generateTiles = function (boardWidth, mineCount) {
  const baseData = seedTiles(boardWidth, mineCount);
  return shuffleTiles(baseData);
};

const seedTiles = function (boardWidth, mineCount) {
  const boardSize = boardWidth ** 2;
  let result = [];

  for (let i = mineCount; i > 0; i--) {
    result.push({ revealed: false, mine: true, adjacentTileIDs: [], flag: false });
  }
  for (let x = boardSize - mineCount; x > 0; x--) {
    result.push({ revealed: false, mine: false, danger: 0, adjacentTileIDs: [], flag: false });
  }
  return result;
};

//Fisher-Yates shuffle, taken from https://bost.ocks.org/mike/shuffle/
const shuffleTiles = function (tiles) {
  let m = tiles.length;
  let t;
  let i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = tiles[m];
    tiles[m] = tiles[i];
    tiles[i] = t;
  }

  return tiles;
};

export default generateTiles;