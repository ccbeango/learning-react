import * as ActionTypes from './constants';
import { getTopBanners } from '@/services/recommend';

const changeTopBannerAction = (res) => ({
  type: ActionTypes.CHANGE_TOP_BANNERS,
  banners: res.banners
});


export const getTopBannersAction = () => {
  return (dispatch) => {
    getTopBanners().then(res => {
      console.log(res)
      dispatch(changeTopBannerAction(res))
    });
  }
}