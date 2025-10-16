import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from './pages/LandingPage.vue'
import PaymentPage from './pages/PaymentPage.vue'
import FailedPage from './pages/FailedPage.vue'
import ErrorPage from './pages/ErrorPage.vue'


const routes = [
  { path: '/', name: 'landing', component: LandingPage },
  { path: '/payment', name: 'payment', component: PaymentPage },
  { path: '/failed', name: 'failed', component: FailedPage },
  { path: '/:pathMatch(.*)*', name: 'error', component: ErrorPage },
]





const router = createRouter({ history: createWebHistory(), routes });

createApp(App).use(router).mount("#app");