import React from 'react';
import { Redirect } from 'react-router-dom';

import CcDiscover from '@/pages/discover';
import CcFriend from '@/pages/friend';
import CcMine from '@/pages/mine';
import CcPlayer from '@/pages/player';

import CcAlbum from '@/pages/discover/c-pages/album';
import CcArtist from '@/pages/discover/c-pages/artist';
import CcDjRadio from '@/pages/discover/c-pages/djradio';
import CcRanking from '@/pages/discover/c-pages/ranking';
import CcRecommend from '@/pages/discover/c-pages/recommend';
import CcSongs from '@/pages/discover/c-pages/songs';

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover"/>
  },
  {
    path: '/discover',
    component: CcDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        component: CcRecommend
      },
      {
        path: "/discover/ranking",
        component: CcRanking
      },
      {
        path: "/discover/songs",
        component: CcSongs
      },
      {
        path: "/discover/djradio",
        component: CcDjRadio
      },
      {
        path: "/discover/artist",
        component: CcArtist
      },
      {
        path: "/discover/album",
        component: CcAlbum
      },
      {
        path: "/discover/player",
        component: CcPlayer
      }
    ]
  },
  {
    path: '/friend',
    component: CcFriend
  },
  {
    path: '/mine',
    component: CcMine
  }
];

export default routes;