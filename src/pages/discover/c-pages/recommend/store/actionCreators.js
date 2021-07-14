import * as ActionTypes from './constants';
import { getTopBanners, getHotRecommneds } from '@/services/recommend';

const changeTopBannerAction = (res) => ({
  type: ActionTypes.CHANGE_TOP_BANNERS,
  banners: res.banners
});

const changeHotRecommendAction = (res) => ({
  type: ActionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result
});


export const getTopBannersAction = () => {
  return (dispatch) => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res));
    });
  }
}

export const getHotRecommnedsAction = (limit = 8) => {
  return (dispatch) => {
    getHotRecommneds(limit).then(res => {
      dispatch(changeHotRecommendAction(res));
    })
  }
}