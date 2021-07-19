import * as ActionTypes from './constants';
import { Map } from 'immutable';

const initialState = Map({
  banners: [],
  hotRecommends: [],
  newAlbums: [],

  upRanking: {},
  newRanking: {},
  originRanking: {}
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_TOP_BANNERS:
      return state.set('banners', action.banners);
    case ActionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set('hotRecommends', action.hotRecommends);
    case ActionTypes.CHANGE_NEW_ALBUMS:
      return state.set('newAlbums', action.newAlbums);
    case ActionTypes.CHANGE_UP_RANKING:
      return state.set('upRanking', action.upRanking);
    case ActionTypes.CHANGE_NEW_RANKING:
      return state.set('newRanking', action.newRanking);
    case ActionTypes.CHANGE_ORIGIN_RANKING:
      return state.set('originRanking', action.originRanking);
    default:
      return state;
  }
}

export default reducer;