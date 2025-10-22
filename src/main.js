// ⬆️ ضيفي ده في أول سطرين في main.js (قبل أي import)
const savedLocale = localStorage.getItem('lang') || 'en';
document.documentElement.lang = savedLocale;
document.dir = savedLocale === 'ar' ? 'rtl' : 'ltr';

// بعد كده تبدأي الاستيرادات
import { createApp } from "vue";
import App from "./App.vue"
import './Firebase/firebaseConfig.js';
import { createRouter, createWebHistory } from "vue-router";
import i18n from "./i18n"; // ✅ ملف اللغة
import "../src/style.css";

import LandingPage from "./pages/LandingPage.vue";
import PaymentPage from "./pages/PaymentPage.vue";
import FailedPage from "./pages/FailedPage.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import ResetPassword from "./pages/ResetPassword.vue";
import ForgetPassword1 from "./pages/ForgetPassword1.vue";
import ForgetPassword2 from "./pages/ForgetPassword2.vue";
import ResetPassword2 from "./pages/ResetPassword2.vue";
import Signup from "./pages/SignUp.vue";
import LoginPage from "./pages/LoginPage.vue";
import AboutUs from "./pages/AboutUs.vue";
import SportS from "./pages/SportS.vue";
import ContactUs from "./pages/ContactUs.vue";
import TrainerClient from "./pages/TrainerClient.vue";

const routes = [
  { path: "/", name: "landing", component: LandingPage },
  { path: "/payment", name: "payment", component: PaymentPage },
  { path: "/failed", name: "failed", component: FailedPage },
  { path: "/resetpassword", name: "resetpassword", component: ResetPassword },
  { path: "/resetpassword2", name: "resetpassword2", component: ResetPassword2 },
  { path: "/forgetpassword1", name: "forgetpassword1", component: ForgetPassword1 },
  { path: "/forgetpassword2", name: "forgetpassword2", component: ForgetPassword2 },
  { path: "/trainerclient", name: "trainerclient", component: TrainerClient },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: LoginPage },
  {path: "/aboutus", name: "aboutus", component: AboutUs },
  {path: "/sports", name: "sports", component: SportS },
  {path: "/contactus", name: "contactus", component: ContactUs },
  { path: "/:pathMatch(.*)*", name: "error", component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ✅ تفعيل التطبيق
createApp(App).use(router).use(i18n).mount("#app");
