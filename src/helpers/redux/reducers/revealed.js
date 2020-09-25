// import { useSelector } from 'react-redux';

// const gameBoard = useSelector(state => state.gameBoard)
// const gameState = useSelector(state => state.gameState)
// const state = { gameBoard, gameState};


// const revealReducer = function (state = gameBoard, action) {


//   // Ok Daniel, you're working on how to grab the inidivdual tiles from a nested array. You're brain is headed down a path of 
//   // making a shallow copy of the game board state, using a nested .find(), like this: 
  
//   //const tile = shallowState.find(x => x.find(y.id === tileId))
//   //But that doesn't work in the repl. 

//   //You're trying to find a way to pass by reference to the shallow state, to you can snag the tile in a variable and mutate that variable
//   // and the variables of the tile id's that appear in the adjacent tile array to be revealed if (!currentTile.danger)
//   // and then return the shallow state from the reducer.
  
//   //Time to sleep and return.
  
  

//   switch(action.type){
    

//     default:
//       return state
//   }
// }

// export default revealReducer;