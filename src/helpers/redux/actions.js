import { START_GAME, GAME_OVER, SET_VICTORY, RESET_BOARD } from "./actionTypes";

export const reset = function () {
  return {
    type: "RESET_BOARD"
  }
}