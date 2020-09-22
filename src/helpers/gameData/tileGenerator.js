const generateTiles = function (boardWidth, mineCount) {
  const boardSize = boardWidth ** 2;

  let baseData = [];

  for (let i = mineCount; i > 0; i--) {
    baseData.push({ revealed: false, mine: true });
  }

  for (let x = boardSize - mineCount; x > 0; x--) {
    baseData.push({ revealed: false, mine: false });
  }

  let randomizedData = shuffleTiles(baseData);

  return randomizedData;
};

//Fisher-Yates shuffle, taken from https://bost.ocks.org/mike/shuffle/
const shuffleTiles = function (tiles) {
  let m = tiles.length,
    t,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = tiles[m];
    tiles[m] = tiles[i];
    tiles[i] = t;
  }

  return tiles;
};

module.exports = { generateTiles };
