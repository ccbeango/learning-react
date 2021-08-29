import { applyMiddleware, createStore, compose } from '../lib/redux';
import thunkMiddleware from '../lib/reudx-thunk';
import reducer from './reducer';

const loggerMiddleware = (middlewareApi) => {
  return (next) => {
    console.log('logger init')
    return (action) => {
      console.log('action', action)
      next(action);
    }
  }
}

const enhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);

const store = createStore(reducer, enhancer);

export default store;