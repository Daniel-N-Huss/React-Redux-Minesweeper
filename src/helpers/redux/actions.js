import { START_GAME, GAME_OVER, SET_VICTORY, RESET_BOARD } from './actionTypes';

export const reset = function () {
  return {
    type: RESET_BOARD,
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

export const startGame = function () {
  return {
    type: START_GAME,
  };
};

export const gameOver = function () {
  return {
    type: GAME_OVER,
  };
};

export const victory = function () {
  return {
    type: SET_VICTORY,
  };
};

export const decrementFlagCount = function () {
  return {
    type: 'DECREMENT_FLAG',
  };
};

export const incrementFlagCount = function () {
  return {
    type: 'INCREMENT_FLAG',
  };
};