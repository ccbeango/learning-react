import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT, CHANGE_BANNER, CHANGE_RECOMMEND } from './constants';

const initialState = {
  counter: 0,
  banners: [],
  recommends: []
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
    case CHANGE_BANNER:
      return { ...state, banners: action.banners };
    case CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

export default reducer;
