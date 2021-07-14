import * as ActionTypes from './constants';
import { Map } from 'immutable';

const initialState = Map({
  banners: [],
  hotRecommends: []
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_TOP_BANNERS:
      return state.set('banners', action.banners);
    case ActionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set('hotRecommends', action.hotRecommends);
    default:
      return state;
  }
}

export default reducer;