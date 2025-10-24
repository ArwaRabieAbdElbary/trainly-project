<template>
  <div>
    <NavBar
      v-if="!['payment', 'failed', 'error', 'resetpassword', 'resetpassword2', 'forgetpassword1', 'forgetpassword2', 'login', 'signup', 'trainerclient','trainer','trainerreviews','trainersettings' , 'traineesettings' , 'trainee' ,'trainerplans','trainercustomerservice','traineecustomerservice' , 'trainerhome' , 'home' , 'search' , 'trainerprofile'].includes($route.name)"
    />

    <SideBar
      v-if="!['landing', 'payment', 'failed', 'error', 'resetpassword', 'resetpassword2', 'forgetpassword1', 'forgetpassword2', 'login', 'signup', 'aboutus' , 'sports' , 'contactus' , 'traineesettings','trainee','home', 'search', 'trainerprofile' , 'traineecustomerservice'].includes($route.name)"
    />

    <SideBarTrainee
       v-if="!['landing', 'payment', 'failed', 'error', 'resetpassword', 'resetpassword2', 'forgetpassword1', 'forgetpassword2', 'login', 'signup', 'aboutus' , 'sports' , 'contactus' , 'trainerclient' , 'trainerreviews' ,'trainersettings' , 'trainer' , 'trainerplans','trainerhome' , 'trainercustomerservice','traineecustomerservice' ,'home' , 'search' , 'trainerprofile'].includes($route.name)"
    />

    <router-view />

    <FooterComp
      v-if="!['payment', 'failed', 'error', 'login', 'signup', 'trainerclient' , 'trainer' , 'trainerreviews','trainersettings' , 'traineesettings' , 'trainer' , 'trainee' ,'trainerplans','traineecustomerservice','trainercustomerservice' , 'trainerhome' , 'search'].includes($route.name)"
    />
  </div>
</template>

<script>
import FooterComp from "./components/FooterComp.vue";
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
import SideBarTrainee from './components/SideBarTrainee.vue';

export default {
  name: "App",
  components: {
    NavBar,
    FooterComp,
    SideBar,
    SideBarTrainee
  },
};
</script>

<style></style>
