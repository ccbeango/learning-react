const { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } = require('./constants');

const addAction = (num) => {
  return {
    type: ADD_NUMBER,
    num
  };
}

const subAction = (num) => {
  return {
    type: SUB_NUMBER,
    num
  };
}

const increAction = () => {
  return { type: INCREMENT };
}

const decreAction = () => {
  return { type: DECREMENT };
}

module.exports = {
  addAction,
  subAction,
  increAction,
  decreAction
};