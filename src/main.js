import { createApp } from 'vue'
import App from './App.vue'
import '../src/style.css'
import LandingPage from './pages/LandingPage.vue'
import { createRouter, createWebHistory } from 'vue-router'




const routes = [
    {path:"/" , component:LandingPage }
]

const router = createRouter({history:createWebHistory() , routes});
createApp(App).use(router).mount('#app')