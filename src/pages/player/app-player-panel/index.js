import React, { memo } from 'react';

import CcPlayHeader from './c-cpns/player-header';
// import HYPlayList from './c-cpns/play-list';
import CcLyricPanel from './c-cpns/lyric-panel';
import { PanelWrapper } from './style';

export default memo(function CcPlayerPanel() {
  return (
    <PanelWrapper>
      <CcPlayHeader/>
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        {/* <HYPlayList/> */}
         <CcLyricPanel/>
      </div>
    </PanelWrapper>
  )
})
