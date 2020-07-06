import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: '登录页',
    component: () => import('views/login/index')
  },
  {
    path: '',
    name: 'Home',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: '首页',
        component: () => import('views/Home.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: Layout,
    children: [
      // {
      //   path: 'list',
      //   name: '列表',
      //   component:  () => import('')
      // }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
