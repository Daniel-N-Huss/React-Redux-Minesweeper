const { generateTiles } = require('./tileGenerator');
const { calculateDanger } = require('./calculateDanger')
const { formatData } = require('./formatData');

const setupGameBoard = function (boardWidth, mineCount) {
  const tiles = generateTiles(boardWidth, mineCount);
  const formatedTiles = formatData(tiles);
  const board = calculateDanger(formatedTiles);

  return board;
}

module.exports = { setupGameBoard }