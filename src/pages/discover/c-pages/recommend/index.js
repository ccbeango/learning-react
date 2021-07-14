import React, { memo } from 'react'

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'
import CcTopBanner from './c-cpns/top-banner'
import CcHotRecommed from './c-cpns/hot-recommend'
import CcNewAlbum from './c-cpns/new-album'
import CcRanking from './c-cpns/ranking'

export default memo(function Recommend() {
  return (
    <RecommendWrapper>
      <CcTopBanner></CcTopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <CcHotRecommed/>
          <CcNewAlbum/>
          <CcRanking/>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})
