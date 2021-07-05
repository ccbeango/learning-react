import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT, CHANGE_BANNER, CHANGE_RECOMMEND, FETCH_HOME_MULTIDATA } from './constants';
import axios from 'axios';

export const addAction = (num) => {
  return {
    type: ADD_NUMBER,
    num
  };
}

export const subAction = (num) => {
  return {
    type: SUB_NUMBER,
    num
  };
}

export const increAction = () => {
  return { type: INCREMENT };
}

export const decreAction = () => {
  return { type: DECREMENT };
}

export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNER,
  banners
}) 

export const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMEND,
  recommends
})

// redux-thunk中定义的action函数
export const getHomeMultidataAction = () => {
  return (dispatch, getState) => {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const data = res.data.data;
      dispatch(changeBannersAction(data.banner.list));
      dispatch(changeRecommendsAction(data.recommend.list));
    })
  }
}

// redux-saga拦截的action
export const fetchHomeMultidataAction = () => {
  return {
    type: FETCH_HOME_MULTIDATA
  }
}