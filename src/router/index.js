import { createRouter, createWebHashHistory } from 'vue-router'

import Landing from '../components/Landing.vue'
import Home from '../components/Home.vue'
import Gallery from '../components/Gallery.vue'
import Events from '../components/Events.vue'
import OurTeam from '../components/OurTeam.vue'

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
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
  },
  {
    path: '/our-team',
    name: 'Our Team',
    component: OurTeam,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router