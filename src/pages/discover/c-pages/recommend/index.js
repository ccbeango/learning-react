import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopBannersAction } from './store/actionCreators'

export default memo(function Recommend() {
  const recommend = useSelector((state) => {
    return state.recommend.banners
  }, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [ dispatch ]);

  return (
    <div>
      <h2>Recommend: {recommend.length}</h2>
    </div>
  )
})
