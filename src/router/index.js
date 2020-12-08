import Vue from 'vue'
import Router from 'vue-router'
import logIn from '../pages/logIn'
import summary from '../pages/summary'
import map from '../pages/map'
import ito from '../pages/ito'
import '../index'
import code from '../components/code'
import zujian from '../components/zujian'
import fault from '../components/wulian/fault'
import offline from '../components/offline'
import on_line from '../components/on_line'
import all from '../components/all'
import road from '../components/road'
import centre from '../pages/centre'
import simall from '../components/wulian/all'
import online from '../components/wulian/online'
import off_line from '../components/wulian/off_line'
import shebe_online from '../components/wulian/shebe_online'
import shebie_offline from '../components/wulian/shebie_offline'
import bind from '../components/wulian/bind'
import unbound from '../components/wulian/unbound'
import news from '../components/centre/news'
import now from '../components/centre/now'
import carCharging from '../pages/carCharging'
import carAll from '../components/car/all'
import DC from '../components/car/DC'
import AC from '../components/car/AC'
import charge from '../components/car/charge'




// import echa from '../pages/echa'
const HAS_LOGINED = true

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: logIn },
    { path: '/map', component: map },
    {
      path: '/summary/carCharging', component: carCharging,
      children: [
        {
          path: '/',
          component: carAll
        },
        {
          path: '/DC',
          component: DC
        },
        {
          path: '/AC',
          component: AC
        },
        {
          path: '/charge',
          component: charge
        },
      ]
    },
    { path: '/summary', component: summary },
    {
      path: '/centre', component: centre,
      children: [
        {
          path: '/',
          component: now
        },
        {
          path: '/centre/news',
          component: news
        },
      ],
    },
    {
      path: '/summary/ito', component: ito,
      children: [
        {
          path: '/',
          component: road
        }, {
          path: '/bind',
          component: bind
        }, {
          path: '/unbound',
          component: unbound
        },
        {
          path: '/simall',
          component: simall
        },
        {
          path: '/online',
          component: online
        },
        {
          path: '/shebie_offline',
          component: shebie_offline
        },

        {
          path: '/off_line',
          component: off_line
        },
        {
          path: '/shebe_online',
          component: shebe_online
        },
        {
          path: '/code',
          component: code

        }, {
          path: '/fault',
          component: fault

        }, {
          path: '/offline',
          component: offline

        },
        {
          path: '/on_line',
          component: on_line

        },
        {
          path: '/all',
          component: all

        },

      ]
    },
    // {path: '/summary/ito/code',component: code},



    { path: '*', component: summary }
  ]
})
