import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enchancer = composeEnhancer(applyMiddleware(thunk));

const store = createStore(reducer, enchancer);

export default store;