import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

const redirectPath = sessionStorage.getItem('redirectPath')

if (redirectPath) {
  sessionStorage.removeItem('redirectPath')
  window.history.replaceState(null, '', redirectPath)
}

createApp(App).use(router).use(vuetify).mount('#app')
