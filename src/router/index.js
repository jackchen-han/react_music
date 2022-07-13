import React from 'react';
import HYDiscover from "@/pages/discover";
import HYFriend from "@/pages/friend";
import HYMine from "@/pages/mine";
import { Redirect } from 'react-router-dom';
import HYRecommend from '@/pages/discover/c-pages/recommend';
import HYSongs from '@/pages/discover/c-pages/songs';
import HYRanking from '@/pages/discover/c-pages/ranking';
import HYDJRadio from '@/pages/discover/c-pages/djradio';
import HYArtist from '@/pages/discover/c-pages/artist';
import HYAlbum from '@/pages/discover/c-pages/album';

const routes = [
  {
    path:"/",
    exact:true,
    render: ()=>(
      <Redirect to="/discover"/>
    )
  },
  {
    path:"/discover",
    component: HYDiscover,
    routes:[
      {
        path:"/discover",
        exact:true,
        render:()=>(
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path:'/discover/recommend',
        component:HYRecommend
      },
      {
        path:'/discover/songs',
        component:HYSongs
      },
      {
        path:"/discover/ranking",
        component: HYRanking
      },
      {
        path:'/discover/djradio',
        component:HYDJRadio
      },
      {
        path:'/discover/artist',
        component:HYArtist
      },
      {
        path:'/discover/album',
        component:HYAlbum
      }
    ]
  },
  {
    path:"/friend",
    component:HYFriend
  },
  {
    path:"/mine",
    component:HYMine
  }

  

]

export default routes;