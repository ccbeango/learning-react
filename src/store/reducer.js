import { combineReducers } from 'redux';
import { reducer as counterReducer } from './counter';
import { reducer as homeReducer } from './home';


// const reducer = (state = {}, action) => {
//   return {
//     counterInfo: counterReducer(state.counterInfo, action),
//     homeInfo: homeReducer(state.homeInfo, action)
//   };
// }

// 传入函数，内部执行
const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer
});

export default reducer;
