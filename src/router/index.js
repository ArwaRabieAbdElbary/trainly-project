import { createRouter, createWebHistory } from 'vue-router'
// import SignUp from '../signup.vue'
import Login from '../pages/LoginPage.vue'

const routes = [
  { path: '/', redirect: '/signup' },
  // { path: '/signup', component: SignUp },
  { path: '/loginPage', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
