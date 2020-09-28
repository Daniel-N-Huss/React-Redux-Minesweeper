import { START_GAME, GAME_OVER, SET_VICTORY, RESET_BOARD } from './actionTypes';

export const reset = function () {
  return {
    type: 'RESET_BOARD',
  };
};

export const revealTile = function (tileId) {
  return {
    type: 'REVEAL_TILE',
    payload: tileId,
  };
};

export const toggleFlag = function (tileId) {
  return {
    type: 'TOGGLE_FLAG',
    payload: tileId,
  };
};

export const gameOver = function () {
  return {
    type: GAME_OVER,
  };
};
