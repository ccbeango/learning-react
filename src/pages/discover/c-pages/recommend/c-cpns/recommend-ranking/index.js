import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopListAction } from '../../store/actionCreators';

import CcThemeHeaderRcm from '@/components/theme-header-rcm';
import CcTopRanking from '@/components/top-ranking';
import { CcRecommendRankingWrapper } from './style';

export default memo(function CcRecommendRanking() {

  //  redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking'])
  }), shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch])


  return (
    <CcRecommendRankingWrapper>
      <CcThemeHeaderRcm title="榜单"/>
      <div className="tops">
        <CcTopRanking info={upRanking}/>
        <CcTopRanking info={newRanking}/>
        <CcTopRanking info={originRanking}/>
      </div>
    </CcRecommendRankingWrapper>
  )
})
