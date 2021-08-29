const { createStore, combineReducers, applyMiddleware } = require('./src/lib/redux');

const initialState = { counter: 0, hello: 'hello' };
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT': 
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
}

const combineReducer = combineReducers({
  counterReducer
});

// applyMiddleWare
const loggerMiddleware = (middlewareApi) => {
  console.log('getLogMiddleware')
  return (next) => {
    console.log('logger init')
    return (action) => {
      next(action);
    }
  }
}


const thunkMiddleware  = ({dispatch,getState}) => {
  console.log('thunkMiddleware')
  return next => {
    console.log('thunk init')
    return action => {
      if(typeof action === 'function'){
        return action(dispatch, getState);
      }
      return next(action);
    }
  }
}
const enchancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const store = createStore(combineReducer, enchancer);

store.subscribe(() => {
  console.log('获取值', store.getState());
});

store.dispatch({ type: "INCREMENT" });

store.dispatch((dispatch, getstate) => {
  return setTimeout(() => {
    dispatch({ type: "INCREMENT" });
  }, 2000);
});

// 输出
// getLogMiddleware
// thunkMiddleware
// thunk init
// logger init
// 获取值 { counterReducer: { counter: 1, hello: 'hello' } }
// 获取值 { counterReducer: { counter: 2, hello: 'hello' } }
