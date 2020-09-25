// Again my implementation is utilizing nested arrays loops to identify which other tiles are neighbors
// to reveal them when the currently clicked tile has a 0 danger rating.
// I'm uncomfortable with the implementation, but there is a hard limit - only a max of 8 neighbors exist for each tile,
// so the performance impacts of these nested loops is small though gets more impactful because of the recursion. 
//Finding a better data structure is a must-do in larger scale apps.

const revealSafeTiles = function (adjacentTileIDsArray, shallowStateGameBoard) {
  const shallowStateKeys = Object.keys(shallowStateGameBoard);

  adjacentTileIDsArray.forEach((id) => {
    for (const key of shallowStateKeys) {
      let foundTile = shallowStateGameBoard[key].find((tile) => tile.id === id);

      if (foundTile && !foundTile.revealed) {
        foundTile.revealed = true;
        if (!foundTile.danger) {
          revealSafeTiles(foundTile.adjacentTileIDs, shallowStateGameBoard)
        }
      }
    }
  });
};

module.exports = { revealSafeTiles };
