import { combineReducers } from 'redux';
import gameStateReducer from './gameState';
import gameBoardReducer from './gameBoard';

export default combineReducers({
  gameState: gameStateReducer,
  gameBoard: gameBoardReducer,
});
