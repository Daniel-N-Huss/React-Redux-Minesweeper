const { setupGameBoard } = require('../../gameData/setupGameBoard');
const { revealSafeTiles } = require('../revealSafeTiles');
const { revealMines } = require('../revealMines');

const initGame = setupGameBoard(16, 40);

const initialState = { gameBoard: initGame, victoryTracker: initGame.flat() };

const gameDataReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'RESET_BOARD': {
      const newGame = setupGameBoard(16, 40);
      return { ...state, gameBoard: newGame, victoryTracker: newGame.flat() };
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
            revealSafeTiles(foundTile.adjacentTileIDs, shallowState);
          }
        }

        const updateVictoryTracker = shallowState.victoryTracker.filter(tile => (!tile.revealed && !tile.mine))

        shallowState.victoryTracker = updateVictoryTracker;

      }
      return shallowState;
    }
    case 'TOGGLE_FLAG': {
      const tileId = action.payload;
      let shallowState = { ...state };

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
