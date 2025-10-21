<template>
  <div>
    <NavBar
      v-if="!['payment', 'failed', 'error', 'resetpassword', 'resetpassword2', 'forgetpassword1', 'forgetpassword2', 'login', 'signup', 'trainerclient'].includes($route.name)"
    />

    <SideBar
      v-if="!['landing',,'payment', 'failed', 'error', 'resetpassword', 'resetpassword2', 'forgetpassword1', 'forgetpassword2', 'login', 'signup', ].includes($route.name)"
    />

    <router-view />

    <FooterComp
      v-if="!['payment', 'failed', 'error', 'login', 'signup', 'trainerclient'].includes($route.name)"
    />
  </div>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp,
    SideBar,
  },
};
</script>

<style></style>
