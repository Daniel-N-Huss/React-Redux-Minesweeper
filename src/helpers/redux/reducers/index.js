import { combineReducers } from 'redux';
import gameStateReducer from './gameState';
import gameBoardReducer from './gameBoard';
import flagCounterReducer from './flagCounter';

export default combineReducers({
  gameState: gameStateReducer,
  gameBoard: gameBoardReducer,
  flagCount: flagCounterReducer,
});
