import React, { memo, useState, useEffect, useCallback, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-util';
import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction
} from '../store'

import { Slider, message } from 'antd';
import CcPlayerPanel from '../app-player-panel'
import { 
  PlayerBarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';

export default memo(function CcPlayerBar() {
  // state
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  // redux hooks
  const {
    currentSong,
    sequence,
    playList,
    lyricList,
    currentLyricIndex
  } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong']),
    sequence: state.getIn(['player', 'sequence']),
    playList: state.getIn(['player', 'playList']),
    lyricList: state.getIn(['player', 'lyricList']),
    currentLyricIndex: state.getIn(['player', 'currentLyricIndex'])
  }), shallowEqual);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current.play().then(res => {
      setIsPlaying(true);
    }).catch(err => {
      setIsPlaying(false);
    });
    setDuration(currentSong.dt);
  }, [currentSong]);

  // other hooks
  const audioRef = useRef();


  // other handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");


  // handle function
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause(): audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(currentTime * 1000);
      setProgress(currentTime * 1000 / duration * 100);
    }

    // 获取歌词
    let i = 0
    for (; i < lyricList.length; i++) {
      if (currentTime * 1000 < lyricList[i].time) {
        break;
      }
    }
    if (currentLyricIndex !== i-1) {
      dispatch(changeCurrentLyricIndexAction(i - 1));
      // 显示歌词提示toast
      // message.open({
      //   key: 'lyric',
      //   duration: 0,
      //   className: 'lyric-message',
      //   content: lyricList[i-1] && lyricList[i-1].content
      // })
    } 
  }

  const sliderChange = useCallback((value) => {
    setIsChanging(true);
    setCurrentTime(value / 100 * duration)
    setProgress(value);
  }, [duration]);

  const sliderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000;
    audioRef.current.currentTime = currentTime;
    setIsChanging(false);

    if(!isPlaying) {
      playMusic();
    }
  }, [duration, isPlaying, playMusic]);

  const changeSequence = () => {
    let newSequence = sequence + 1; 
    dispatch(changeSequenceAction(newSequence < 3 ? newSequence : 0))
  }

  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag));
  }

  const handleMusicEnded = () => {
    if (sequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentIndexAndSongAction(1));
    }
  }

  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="prev sprite_player" onClick={() => changeMusic(-1)}></button>
          <button className="play sprite_player" onClick={() => playMusic()}></button>
          <button className="next sprite_player" onClick={() => changeMusic(-1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={0}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={() => changeSequence()}></button>
            <button className="sprite_player btn playlist" onClick={e => setShowPanel(!showPanel)}>{playList.length}</button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef}
        onTimeUpdate={e => timeUpdate(e)}
        onEnded={e => handleMusicEnded()}/>
        {showPanel && <CcPlayerPanel />}
    </PlayerBarWrapper>
  )
});
