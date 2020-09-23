const { generateTiles } = require('./tileGenerator');
const { formatData } = require('./formatData');

const setupGameBoard = function (boardWidth, mineCount) {
  const tiles = generateTiles(boardWidth, mineCount);
  const board = formatData(tiles);

  return board;
}

module.exports = { setupGameBoard }