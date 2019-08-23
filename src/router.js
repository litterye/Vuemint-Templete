import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // 按需加载路由
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]

export default new Router({
  routes 
})
