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

// console.log("dispatching:", addAction(5));
// store.dispatch(addAction(5));
// console.log("new state:", store.getState());

// console.log("dispatching:", addAction(10));
// store.dispatch(subAction(10));
// console.log("new state:", store.getState());

// function dispatchingAndLog(action) {
//     console.log("dispatching:", action);
//     store.dispatch(action);
//     console.log("new state:", store.getState());
// }

// dispatchingAndLog(addAction(5));
// dispatchingAndLog(subAction(10));


// function patchLogging(store) {
//   let next = store.dispatch;

//   function dispatchingAndLog(action) {
//     console.log('dispatching', action);
//     next(action);
//     console.log("new state:", store.getState());
//   }

//   store.dispatch = dispatchingAndLog;
// }

// // patchLogging(store);
// // store.dispatch(addAction(5));
// // store.dispatch(subAction(10));


// function patchThunk(store) {
//   let next = store.dispatch;

//   function dispatchAndThunk(action) {
//     if(typeof action === 'function') {
//       action(next, store.getState);
//     } else {
//       next(action);
//     }
//   }

//   store.dispatch = dispatchAndThunk;
// }


// patchLogging(store);
// patchThunk(store);
// store.dispatch(addAction(5));
// store.dispatch(subAction(10));




function patchLogging(store) {
  let next = store.dispatch;

  function dispatchingAndLog(action) {
    console.log('dispatching', action);
    next(action);
    console.log("new state:", store.getState());
  }

  return dispatchingAndLog;
}



function patchThunk(store) {
  let next = store.dispatch;

  function dispatchAndThunk(action) {
    if(typeof action === 'function') {
      action(next, store.getState);
    } else {
      next(action);
    }
  }

  return dispatchAndThunk;
}


function applyMiddleware(store, middlewares) {
  middlewares.forEach(middleware => {
    store.dispatch = middleware(store)
  })
}

applyMiddleware(store, [ patchLogging, patchThunk ]);


store.dispatch(addAction(5));
store.dispatch(subAction(10));