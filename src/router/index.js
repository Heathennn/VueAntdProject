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
        component: () => import('views/home/index.vue')
      }
    ]
  },
  {
    path: '/c2c',
    name: 'c2c',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'c2c首页',
        component:  () => import('views/C2C/index')
      }
    ]
  },
  {
    path: '/investment',
    name: '投资促进',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: '投资促进你',
        component:  () => import('views/investment/index')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
