import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import vWip from '~/directives/wip'
import Index from '~/pages/index.vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  routes: [
    {
      component: Index,
      path: '/',
      name: 'index',
    },
    ...routes,
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
})
app.use(router)
app.directive('wip', vWip)
app.mount('#app')
