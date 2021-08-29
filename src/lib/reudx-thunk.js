export default ({dispatch,getState}) => {
  return next => {
    return action => {
      if(typeof action === 'function'){
        return action(dispatch, getState);
      }
      return next(action);
    }
  }
}
