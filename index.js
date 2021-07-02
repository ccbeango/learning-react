const store = require('./store');
const {
  addAction,
  subAction,
  increAction,
  decreAction
} = require('./store/actionCreators');



store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(addAction(10))
store.dispatch(increAction())
store.dispatch(subAction(3))
store.dispatch(decreAction())