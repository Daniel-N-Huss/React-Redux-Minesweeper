const { setupGameBoard } = require('../../gameData/setupGameBoard');
const { revealSafeTiles } = require('../revealSafeTiles');
const { revealMines } = require('../revealMines');

const initialState = { gameBoard: setupGameBoard(16, 40), revealedTiles: [] };

const gameDataReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'RESET_BOARD': {
      return state.gameBoard = setupGameBoard(16, 40);
    }
    case 'REVEAL_TILE': {
      const tileId = action.payload;
      let shallowState = { ...state };

      for (const tileRow of shallowState.gameBoard) {
        let foundTile = tileRow.find((tile) => tile.id === tileId);

        if (foundTile) {
          foundTile.revealed = true;

          if (foundTile.mine) {
            revealMines(shallowState.gameBoard);
          }

          if (!foundTile.danger && !foundTile.mine) {
            revealSafeTiles(foundTile.adjacentTileIDs, shallowState.gameBoard);
          }
        }
      }
      return shallowState;
    }
    case 'TOGGLE_FLAG': {
      const tileId = action.payload;
      let shallowState = {...state};

      for (const tileRow of shallowState.gameBoard) {
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

export default gameDataReducer;
