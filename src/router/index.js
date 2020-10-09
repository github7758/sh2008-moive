import Vue from 'vue'
import VueRouter from 'vue-router'

import centerRouter from '@/router/routes/center'
import cinemaRouter from '@/router/routes/cinema'
import filmRouter from '@/router/routes/film'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/film",
  },
  centerRouter,
  cinemaRouter,
  filmRouter,
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
