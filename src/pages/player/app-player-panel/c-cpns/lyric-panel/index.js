import React, { memo, useRef, useEffect, useCallback } from 'react'
import { useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { PannelWrapper } from './style';

export default memo(function CcLyricPanel() {
  const { lyricList, currentLyricIndex } = useSelector(state => ({
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
  }), shallowEqual);


  const panelRef = useRef();

  const scrollTo = useCallback( (element, to, duration) => {
    if (duration <= 0) return;
    let difference = to - element.scrollTop;
    let perTick = difference / duration * 10;
  
    setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
    }, 10);
  }, [])

  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex, scrollTo]);


  return (
    <PannelWrapper ref={panelRef}>
      <div className="lrc-content">
        {
          lyricList.map((item, index) => {
            return (
              <div key={item.time}
                className={classNames("lrc-item", { "active": index === currentLyricIndex })}>
                {item.content}
              </div>
            )
          })
        }
      </div>
    </PannelWrapper>
  )
})
