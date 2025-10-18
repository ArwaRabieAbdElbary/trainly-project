<template>
  
<NavBar v-if="!['payment', 'failed', 'error','resetpassword','resetpassword2','forgetpassword1','forgetpassword2'].includes($route.name)" />
<router-view></router-view>
<FooterComp v-if="!['payment', 'failed', 'error'].includes($route.name)" />
  
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavBar from './components/NavBar.vue'



export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp
   
  }
}
</script>

<style></style>

