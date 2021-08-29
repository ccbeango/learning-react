function createStore(reducer, enhancer) {
  // 执行中间件
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }

  let currentState = {};
  let currentListeners = [];

  const getState = () => currentState;
  const subscribe = (listener) => {
    currentListeners.push(listener);
    // unsubscribe
    return () => currentListeners = [];
  }
  const dispatch = (action) => {
    // store在dispatch时调用reducer
    currentState = reducer(currentState, action);
    // 执行所有的订阅监听
    for (const listener of currentListeners) {
      listener();
    }

    return action;
  }

  dispatch({ type:'@@INIT_REDUX' });

  const store = {
    getState,
    subscribe,
    dispatch
  };

  return store;
}


function applyMiddleware(...middlewares) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => store.dispatch(action, ...args)
    };

    const chain = middlewares.map(middleware => middleware(middlewareAPI));
    const dispatch = compose(...chain)(store.dispatch);
    // const composeFunc = compose(...chain);
    // const dispatch = composeFunc(store.dispatch);

    return {
      ...store,
      dispatch
    };
  }
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return funcs => funcs;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => {
    return (...args) => {
      return a(b(...args));
    }
  })
}

function bindActionCreator(creater, dispatch) {
  return (...args) => {
    return dispatch(creater(...args));
  }
}

function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};

  for (const key in actionCreators) {
    boundActionCreators[key] = bindActionCreator(actionCreators[key], dispatch);
  }
  return boundActionCreators;
}

function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = reducers;

  let hasChanged = false;
  const nextState = {};

  return function combination(state, action) {
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);

      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey; 
    }

    hasChanged = hasChanged || reducerKeys.length !== Object.keys(state).length;

    return hasChanged ? nextState : state;
  }
}

module.exports = {
  createStore,
  applyMiddleware,
  compose,
  bindActionCreators,
  combineReducers
};