import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
    loading:'https://2url.cc/1OwrB'
})

Vue.config.productionTip = false

// // axios体验
// import axios from 'axios'
// // 配置域名
// axios.defaults.baseURL = "https://m.maizuo.com/";
// axios.interceptors.request.use(function(config){
//   config.headers = {
//       "X-Client-Info":
//           '{"a":"3000","ch":"1002","v":"5.0.4","e":"16006566672048699400193","bc":"110100"}',
//       "X-Host": "mall.film-ticket.film.list",
//   };
//   // 返回配置
//   return config
// },function(err) {
//   // 对错误的处理
// })
// axios.get(
//     "gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8632456"
// );

Vue.prototype.eventBus=new Vue();
import store from '@/store/vuex'

// 同步localStorage数据到vuex
let _token = localStorage.getItem('_token')
if(_token){
  store.commit('updateToken',_token)
}

let cityName = localStorage.getItem('cityName')
if(cityName){
  store.commit('setCity',cityName)
}

let cityId = localStorage.getItem('cityId')
if(cityId){
  store.commit('setCityId',cityId)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
