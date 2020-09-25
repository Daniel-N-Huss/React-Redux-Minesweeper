const {setupGameBoard} = require('../../gameData/setupGameBoard');


const initialState = setupGameBoard(16, 40)

const GameBoardReducer = function (state = initialState, action) {
  switch (action.type){
    case 'RESET_BOARD':
      return setupGameBoard(16, 40)
    default:
      return state
  }
}

export default GameBoardReducer