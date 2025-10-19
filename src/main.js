import { createApp } from 'vue'
// import App from './App.vue'
import router from './router'
import './style.css'
import Signup from './SignUp.vue'
// import LoginPage from './LoginPage.vue'
// import LoginPage from './LoginPage.vue'

createApp(Signup)
.mount('#app')
.use(router)
