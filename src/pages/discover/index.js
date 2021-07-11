import React, { memo, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { dicoverMenu } from '@/common/local-data'

import { DiscoverWrapper, TopMenu } from './style'

export default memo(function Discover(props) {

  return (
    <DiscoverWrapper>
      <TopMenu className="wrap-v1">
        {
          dicoverMenu.map(item => (
            <div className="item" key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          ))
        }
      </TopMenu>
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  )
})
