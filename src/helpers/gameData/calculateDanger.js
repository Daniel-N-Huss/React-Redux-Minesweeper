/* 
This data structure of nested arrays allows me to map over components to deploy the game board as an
HTML table dynamically. I suspect there's a better data structure that would allow me to avoid
the O(N^M) inefficiency of nested loops.

There is also a fair amount of nested conditionals that make me suspect there's a more elegant solution to generating the contextual
data for handling some of the game functionality. 

This would be one place where I would ask for intermediate/senior input into my solution before implementing the project.
*/

const calculateDanger = function (tiles) {
  let currentId = 0;
  for (let tileRow = 0; tileRow < tiles.length; tileRow++) {
    for (let tile = 0; tile < tiles.length; tile++) {
      const currentTile = tiles[tileRow][tile];

      currentTile.id = currentId;
      currentId++;

      const currentRow = tiles[tileRow];
      const rowAbove = tiles[tileRow - 1];
      const rowBelow = tiles[tileRow + 1];

      /* 
      tile variables

        TopL  Top  TopR
        L     Tile    R
        BotL  Bot  BotR 
      */

      if (rowAbove) {
        const topL = rowAbove[tile - 1];
        const top = rowAbove[tile];
        const topR = rowAbove[tile + 1];

        giveContext(topL, currentTile);
        giveContext(top, currentTile);
        giveContext(topR, currentTile);
      }

      const L = currentRow[tile - 1];
      if (L) giveContext(L, currentTile);

      const R = currentRow[tile + 1];
      if (R) giveContext(R, currentTile);

      if (rowBelow) {
        const botL = rowBelow[tile - 1];
        const bot = rowBelow[tile];
        const botR = rowBelow[tile + 1];

        giveContext(botL, currentTile);
        giveContext(bot, currentTile);
        giveContext(botR, currentTile);
      }
    }
  }
  return tiles;
};

const giveContext = function (targetTile, currentTile) {
  if (targetTile) {
    targetTile.adjacentTileIDs.push(currentTile.id);

    if (currentTile.mine) {
      targetTile.danger++;
    }
  }
};

module.exports = { calculateDanger };
