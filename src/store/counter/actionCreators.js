import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } from './constants';

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

export const increActionAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: INCREMENT });
    }, 1000);
  }
}

export const increActionAsync3 = () => {
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch({ type: INCREMENT });
        resolve('hello');
      }, 1000)
    })
  }
}

export const increActionAsync2 = () => {
  return async (dispatch) => {
    await increActionAsync3()(dispatch)
    setTimeout(() => {
      dispatch({ type: DECREMENT });
    }, 1000)
  }
}
