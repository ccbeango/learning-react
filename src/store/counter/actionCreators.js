import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT, CHANGE_BANNER, CHANGE_RECOMMEND, FETCH_HOME_MULTIDATA } from './constants';

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
