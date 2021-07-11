import * as ActionTypes from './constants';

const initialState = {
  banners: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_TOP_BANNERS:
      return { ...state, banners: action.banners };
    default:
      return state;
  }
}

export default reducer;