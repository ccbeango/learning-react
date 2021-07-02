const { INCREMENT, DECREMENT, ADD_NUMBER, SUB_NUMBER } = require('./constants')

const initialState = {
  counter: 0
};


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NUMBER: 
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER: 
      return { ...state, counter: state.counter - action.num };
    case INCREMENT: 
      return { ...state, counter: state.counter + 1 };
    case DECREMENT: 
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

module.exports = reducer;