import {
  START_GAME,
  GAME_OVER,
  SET_VICTORY,
  RESET_BOARD,
} from '../actionTypes';

const gameStateReducer = function (state = 'initial', action) {
  switch (action.type) {
    case START_GAME: {
      return (state = 'active');
    }
    case GAME_OVER: {
      return (state = 'gameOver');
    }
    case SET_VICTORY: {
      return (state = 'victory');
    }
    case RESET_BOARD: {
      return (state = 'initial');
    }
    default:
      return state;
  }
};

export default gameStateReducer;
