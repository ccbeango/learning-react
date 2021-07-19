import * as ActionTypes from "./constants";
import {
  getTopBanners,
  getHotRecommneds,
  getNewAlbums,
  getTopList
} from "@/services/recommend";

const changeTopBannerAction = (res) => ({
  type: ActionTypes.CHANGE_TOP_BANNERS,
  banners: res.banners,
});

const changeHotRecommendAction = (res) => ({
  type: ActionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result,
});

const changeNewAlbumAction = (res) => ({
  type: ActionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums
});

const changeUpRankingAction = (res) => ({
  type: ActionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
});

const changeNewRankingAction = (res) => ({
  type: ActionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
});

const changeOriginRankingAction = (res) => ({
  type: ActionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
});

export const getTopBannersAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

export const getHotRecommnedsAction = (limit = 8) => {
  return (dispatch) => {
    getHotRecommneds(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};

export const getNewAlbumsAction = (limit = 10) => {
  return (dispatch, getState) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};


export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch(idx) {
        case 0:
          dispatch(changeUpRankingAction(res));
          break;
        case 2:
          dispatch(changeNewRankingAction(res));
          break;
        case 3:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    });
  };
};
