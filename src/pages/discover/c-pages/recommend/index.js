import React, { memo } from 'react'

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'
import CcTopBanner from './c-cpns/top-banner'
import CcHotRecommed from './c-cpns/hot-recommend'
import CcNewAlbum from './c-cpns/new-album'
import CcRecommendRanking from './c-cpns/recommend-ranking'
import CcUserLogin from './c-cpns/user-login';
import CcSettleSinger from './c-cpns/settle-singer';
import CcHotAnchor from './c-cpns/hot-anchor';

export default memo(function Recommend() {
  return (
    <RecommendWrapper>
      <CcTopBanner></CcTopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <CcHotRecommed/>
          <CcNewAlbum/>
          <CcRecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
          <CcUserLogin/>
          <CcSettleSinger/>
          <CcHotAnchor/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})
