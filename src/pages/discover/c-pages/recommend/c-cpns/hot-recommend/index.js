import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getHotRecommnedsAction } from "../../store/actionCreators";

import CcThemeHeaderRcm from "@/components/theme-header-rcm";
import CcSongsCover from '@/components/songs-cover';
import { HotRecommendWrapper } from "./style";

export default memo(function CcHotRecommend() {
  // state

  // redux-hooks
  const { hotRecommends } = useSelector((state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }), shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommnedsAction());
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <CcThemeHeaderRcm
        title='热门推荐'
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      <div className='recommend-list'>
        {
          hotRecommends.map(item => (
            <CcSongsCover key={item.id} info={item} />
          ))
        }
      </div>
    </HotRecommendWrapper>
  );
});
