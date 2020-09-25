import { combineReducers } from 'redux';
import gameStateReducer from './gameState';
import revealReducer from './revealed';
import gameBoardReducer from './gameBoard';

export default combineReducers({
  gameState: gameStateReducer,
  reveal: revealReducer,
  gameBoard: gameBoardReducer,
});
