import { CHANGE_BANNER, CHANGE_RECOMMEND } from './constants';

const initialHomeState = {
  banners: [],
  recommends: []
};

export default function homeReducer(state = initialHomeState, action) {
  switch(action.type) {
    case CHANGE_BANNER:
      return { ...state, banners: action.banners };
    case CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}
