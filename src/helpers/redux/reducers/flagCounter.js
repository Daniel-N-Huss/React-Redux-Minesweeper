const flagCountReducer = function (state = 40, action) {
  switch (action.type) {
    case 'INCREMENT_FLAG': {
      return state + 1;
    }

    case 'DECREMENT_FLAG': {
      return state - 1;
    }

    default:
      return state;
  }
};

export default flagCountReducer;
