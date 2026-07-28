import { createRouter, createWebHistory } from 'vue-router'

import Landing from '../components/Landing.vue'
import Home from '../components/Home.vue'
import Gallery from '../components/Gallery.vue'

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
  },,
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router