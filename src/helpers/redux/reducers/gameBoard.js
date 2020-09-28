const { setupGameBoard } = require('../../gameData/setupGameBoard');
const { revealSafeTiles } = require('../revealSafeTiles');
const { revealMines } = require('../revealMines');

const initialState = setupGameBoard(16, 40);

const GameBoardReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'RESET_BOARD': {
      return setupGameBoard(16, 40);
    }
    case 'REVEAL_TILE': {
      const tileId = action.payload;
      let shallowState = [...state];

      for (const tileRow of shallowState) {
        let foundTile = tileRow.find((tile) => tile.id === tileId);

        if (foundTile) {
          foundTile.revealed = true;

          if (foundTile.mine) {
            revealMines(shallowState);
          }

          if (!foundTile.danger && !foundTile.mine) {
            revealSafeTiles(foundTile.adjacentTileIDs, shallowState);
          }
        }
      }
      return shallowState;
    }
    case 'TOGGLE_FLAG': {
      const tileId = action.payload;
      let shallowState = [...state];

      for (const tileRow of shallowState) {
        let foundTile = tileRow.find((tile) => tile.id === tileId);

        if (foundTile) {
          foundTile.flag = !foundTile.flag;
        }
      }
      return shallowState;
    }

    default:
      return state;
  }
};

export default GameBoardReducer;
