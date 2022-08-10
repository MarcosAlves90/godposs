import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import DarkStories from './views/dark-stories'
import Projetos from './views/projetos'
import Hysax from './views/hysax'
import DoomsdayGlock from './views/doomsday-glock'
import Incio from './views/incio'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Dark-Stories',
      path: '/dark-stories',
      component: DarkStories,
    },
    {
      name: 'Projetos',
      path: '/projetos',
      component: Projetos,
    },
    {
      name: 'Hysax',
      path: '/hysax',
      component: Hysax,
    },
    {
      name: 'Doomsday-Glock',
      path: '/doomsday-glock',
      component: DoomsdayGlock,
    },
    {
      name: 'Incio',
      path: '/',
      component: Incio,
    },
  ],
})
