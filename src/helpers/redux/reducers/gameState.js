import {
  START_GAME,
  GAME_OVER,
  SET_VICTORY,
  RESET_BOARD,
} from '../actionTypes';

const initialState = {
  gameStatus: 'initial',
  timer: {active: false, count: 0},
  flagCount: 40
};

const gameStateReducer = function (state = initialState, action) {
  switch (action.type) {
    case START_GAME: {
      return {
        ...state,
        gameStatus: 'active',
      };
    }
    case GAME_OVER: {
      return {
        ...state,
        gameStatus: 'gameOver',
      };
    }
    case SET_VICTORY: {
      return {
        ...state,
        gameStatus: 'victory',
      };
    }
    case RESET_BOARD: {
      return {
        ...state,
        gameStatus: 'initial',
      };
    }
    default:
      return state;
  }
}

export default gameStateReducer;