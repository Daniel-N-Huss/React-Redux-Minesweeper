const revealedReducer = function (state = false, action) {

  switch(action.type){
    case 'REVEAL': 
      return true
    default:
      return state
  }
}

export default revealedReducer;