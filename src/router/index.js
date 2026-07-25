import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Landing from '../components/Landing.vue'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router