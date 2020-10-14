import generateTiles from './tileGenerator';
import calculateDanger from './calculateDanger';
import formatData from './formatData';

const setupGameBoard = function (boardWidth, mineCount) {
  const tiles = generateTiles(boardWidth, mineCount);
  const formatedTiles = formatData(tiles);
  const board = calculateDanger(formatedTiles);

  return board;
}

export default setupGameBoard;