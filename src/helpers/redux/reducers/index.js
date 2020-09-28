import { combineReducers } from 'redux';
import gameStateReducer from './gameState';
import gameBoardReducer from './gameBoard';
import flagCounterReducer from './flagCounter';
import timerReducer from './timer';

export default combineReducers({
  gameState: gameStateReducer,
  gameBoard: gameBoardReducer,
  flagCount: flagCounterReducer,
  timer: timerReducer,
});
