import Vue from 'vue'
import VueRouter from 'vue-router'

import centerRouter from '@/router/routes/center'
import cinemaRouter from '@/router/routes/cinema'
import filmRouter from '@/router/routes/film'
import detailRouter from '@/router/routes/detail'
import cityRouter from '@/router/routes/city'
import vuexRouter from '@/router/routes/vuex'
import authRouter from '@/router/routes/auth'
import cinemaDetailRouter from '@/router/routes/cinemaDetail'


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/film",
  },
  centerRouter,
  cinemaRouter,
  filmRouter,
  detailRouter,
  cityRouter,
  vuexRouter,
  ...authRouter,
  cinemaDetailRouter,
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
