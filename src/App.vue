<template>
 <!--  <NavBar /> -->
  
<NavBar v-if="!['payment', 'failed', 'error'].includes($route.name)" />
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue'



export default {
  name: 'App',
  components: {
    NavBar,
   
  }
}
</script>

<style ></style>

