/* 
This data structure of nested arrays allows me to map over components to deploy the game board as an
HTML table dynamically. I suspect there's a better data structure that would allow me to avoid
the O(N^M) inefficiency of nested loops.

This would be one place where I would ask for intermediate/senior input into my solution before implementing the project.
*/

const calculateDanger = function (tiles) {
  let currentId = 0
  for (let tileRow = 0; tileRow < tiles.length; tileRow++) {
    for (let tile = 0; tile < tiles.length; tile++) {
      const currentTile = tiles[tileRow][tile];

      currentTile.id = currentId;
      currentId++;

      const currentRow = tiles[tileRow];
      const rowAbove = tiles[tileRow - 1];
      const rowBelow = tiles[tileRow + 1];

      if (currentTile.mine) {
        if (rowAbove) {
          //Check for column to the left and right
          if (rowAbove[tile - 1]) rowAbove[tile - 1].danger++;
          rowAbove[tile].danger++;
          if (rowAbove[tile + 1]) rowAbove[tile + 1].danger++;
        }

        //Check for tiles horizontally left and right
        if (currentRow[tile - 1]) currentRow[tile - 1].danger++;
        if (currentRow[tile + 1]) currentRow[tile + 1].danger++;

        if (rowBelow) {
          //Check for column to the left and right
          if (rowBelow[tile - 1]) rowBelow[tile - 1].danger++;
          rowBelow[tile].danger++;
          if (rowBelow[tile + 1]) rowBelow[tile + 1].danger++;
        }
      }
    }
  }
  return tiles;
};

module.exports = { calculateDanger };