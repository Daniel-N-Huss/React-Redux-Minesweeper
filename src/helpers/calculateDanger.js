const calculateDanger = function (tiles) {
console.log("calculateDanger -> tiles START", tiles)
  
  for (let tileRow = 0; tileRow < tiles.length; tileRow++) {
    console.log('Tile Row Index', tileRow);
    console.log(tiles[tileRow])
    for (let tile = 0; tile < tileRow.length; tile++) {
      console.log('TILE index', tile);
      const currentTile = tiles[tileRow][tile];
      const rowAbove = tiles[tileRow - 1];
      const rowBelow = tiles[tileRow + 1];

      if (currentTile.mine) {
        if (rowAbove) {
          console.log("calculateDanger -> rowAbove", rowAbove)
          //Check for column to the left and right
          if (rowAbove[tile - 1]) rowAbove[tile - 1].danger++;
          rowAbove[tile].danger++;
          if (rowAbove[tile + 1]) rowAbove[tile + 1].danger++;
        }

        //Check for tiles horizontally left and right
        if (tiles[tileRow][tile - 1]) tiles[tileRow][tile - 1].danger++;
        if (tiles[tileRow][tile - 1]) tiles[tileRow][tile - 1].danger++;

        //Check for row below current row
        if (rowBelow) {
          console.log("calculateDanger -> rowBelow", rowBelow)
          //Check for column to the left and right
          if (rowBelow[tile - 1]) rowBelow[tile - 1].danger++;
          rowBelow[tile].danger++;
          if (rowBelow[tile + 1]) rowBelow[tile + 1].danger++;
        }
      }
    }
  }


  console.log("calculateDanger -> tiles", tiles)
  return tiles;
};

module.exports = { calculateDanger };

/*
// based on mines
// for tileRow of tiles
// for tile of tileRow
// if (tile.mine) {

  tiles[tileRow - 1][tile - 1]. mine ? : tiles[tileRow - 1][tile - 1].danger ++
  tiles[tileRow - 1].danger ++
  tiles[tileRow - 1][tile + 1].danger ++

  tiles[tileRow][tile + 1].danger ++
  tiles[tileRow][tile - 1].danger ++

  tiles[tileRow + 1][tile - 1].danger ++
  tiles[tileRow + 1][tile].danger ++
  tiles[tileRow + 1][tile + 1].danger ++
  


}


*/
