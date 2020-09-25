import { combineReducers } from 'redux';
import gameStateReducer from './gameState';
import revealedReducer from './revealed';
import gameBoardReducer from './gameBoard';

export default combineReducers({
  gameState: gameStateReducer,
  revealed: revealedReducer,
  gameBoard: gameBoardReducer,
});
