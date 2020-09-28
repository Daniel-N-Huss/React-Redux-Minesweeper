import { combineReducers } from 'redux';
import gameStateReducer from './gameState';
import gameDataReducer from './gameData';
import flagCounterReducer from './flagCounter';
import timerReducer from './timer';

export default combineReducers({
  gameState: gameStateReducer,
  gameData: gameDataReducer,
  flagCount: flagCounterReducer,
  timer: timerReducer,
});
