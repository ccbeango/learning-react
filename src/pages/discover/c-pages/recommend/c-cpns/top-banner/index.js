import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopBannersAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import { TopBannberWrapper, BannerLeft, BannerRight, BannerControl } from './style'

export default memo(function CCTopBanners() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);

  // 组件和redux关联
  const banners = useSelector((state) => {
    // return state.get('recommend').get('banners')
    return state.getIn(['recommend', 'banners'])
  }, shallowEqual);
  const dispatch = useDispatch();

  // 其它hooks
  const bannerRef = useRef();
  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [ dispatch ]);
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);
 
  // 其它业务逻辑
  const bgImage = banners[currentIndex] && `${banners[currentIndex].imageUrl}?imageView&blur=40x20`

  return (
    <TopBannberWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel ref={bannerRef} effect="fade" autoplay beforeChange={bannerChange}>
            {
              banners.map((item, index) => (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                </div>
              ))
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </TopBannberWrapper>
  )
})
