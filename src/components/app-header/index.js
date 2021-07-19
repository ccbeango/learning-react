import React, { memo } from 'react';

import { headerLinks } from '@/common/local-data'

import { NavLink } from 'react-router-dom';
import { HeaderWarpper, HeaderLeft, HeaderRight } from './style'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


export default memo(function HYAppHeader() {

  const showSelectItem = (item, index) => {
    if (index < 3) {
      return <NavLink to={item.link}>{item.title}</NavLink>
    } else {
      return <a href={item.link} target="_blank">{item.title}</a>
    }
  }

  return (
    <HeaderWarpper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">logo</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => (
                <div className="select-item" key={item.title}>
                  {showSelectItem(item, index)}
                </div>
              ))
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWarpper>
  )
})
