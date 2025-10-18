import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from './pages/LandingPage.vue'
import PaymentPage from './pages/PaymentPage.vue'
import FailedPage from './pages/FailedPage.vue'
import ErrorPage from './pages/ErrorPage.vue'
import ResetPassword from './pages/ResetPassword.vue'
import ForgetPassword1 from './pages/ForgetPassword1.vue'
import ForgetPassword2 from './pages/ForgetPassword2.vue'
import ResetPassword2 from './pages/ResetPassword2.vue'



const routes = [
  { path: '/', name: 'landing', component: LandingPage },
  { path: '/payment', name: 'payment', component: PaymentPage },
  { path: '/failed', name: 'failed', component: FailedPage },
  { path: '/resetpassword', name: 'resetpassword', component:ResetPassword  },
  { path: '/resetpassword2', name: 'resetpassword2', component:ResetPassword2  },
  { path: '/forgetpassword1', name: 'forgetpassword1', component:ForgetPassword1},
  { path: '/forgetpassword2', name: 'forgetpassword2', component:ForgetPassword2},
  { path: '/:pathMatch(.*)*', name: 'error', component: ErrorPage },
]





const router = createRouter({ history: createWebHistory(), routes });

createApp(App).use(router).mount("#app");