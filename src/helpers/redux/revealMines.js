const revealMines = function (shallowStateGameBoard) {
  const result = shallowStateGameBoard.forEach((tileRow) => {
    tileRow.forEach((tile) => {
      if (tile.mine) {
        tile.revealed = true;
      }
    });
  });
  return result;
};

module.exports = { revealMines };
