<template>
    <section class="relative bg-white pb-[100px] overflow-hidden">
        <h2 class="text-3xl font-[600] mb-6 ps-[70px]">Features</h2>
        
        <div class="flex justify-evenly">
            <div class="features-card">
                <div class="flex flex-col items-center pb-10">
                    <img class="w-[175px] h-[168px] mb-2 mt-6" src="../../public/images/card-1.png" alt="card image"/>
                    <h5 class="mb-1 text-[20px] font-[700] text-[#1351CD] leading-[150%]">Personalized Planes</h5>
                    <p class="text-[17px] text-[#000000] font-[350] leading-[150%] text-center">Create training plans tailored to your <br> fitness goals.</p>
                </div>
            </div>
            <div class="features-card">
                <div class="flex flex-col items-center pb-10">
                    <img class="w-[175px] h-[168px] mb-2 mt-6" src="../../public/images/card-2.png" alt="card image"/>
                    <h5 class="mb-1 text-[20px] font-[700] text-[#1351CD] leading-[150%]">Expert trainers</h5>
                    <p class="text-[17px] text-[#000000] font-[350] leading-[150%] text-center">Get guidance from certified trainers in <br> various sports. </p>
                </div>
            </div>
            <div class="features-card">
                <div class="flex flex-col items-center pb-10">
                    <img class="w-[175px] h-[168px] mb-2 mt-6" src="../../public/images/card-3.png" alt="card image"/>
                    <h5 class="mb-1 text-[20px] font-[700] text-[#1351CD] leading-[150%]">Flexible scheduling </h5>
                    <p class="text-[17px] text-[#000000] font-[350] leading-[150%] text-center">Train at your convenience with our <br> flexible schedule options.</p>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="absolute top-[350px] left-0 w-full overflow-hidden">
          <img src="/images/Rectangle.svg" alt="curve" class="w-full block" />
        </div>
    </section>

  <section class="bg-[#8CDAFE99] w-full h-[795px] pt-[100px]">
    <h2 class="text-[45px] font-[600] text-center mb-17">How It Works</h2>

    <div class="relative flex flex-col items-center w-full mx-auto">

      <div class="absolute top-[-40px] bottom-[-40px] w-[4px] bg-gradient-to-b from-[#00C853F2] to-[#0D8BF2]"></div>

      <div class="relative flex items-center mb-17 w-full px-[10%]">
        <div class="w-1/2 text-right pr-12">
          <h3 class="text-xl font-semibold">1. Create Your Profile</h3>
          <p class="text-gray-700 leading-[150%] text-[17px]">
            Set up your profile with your fitness goals and <br> preferences.
          </p>
        </div>

        <div class="img-box">
          <img src="/images/user.png" alt="icon" />
        </div>

        <div class="w-1/2"></div>
      </div>

      <div class="relative flex items-center mb-17 w-full px-[10%]">
        <div class="w-1/2"></div>

        <div class="img-box">
          <img src="/images/search.png" alt="icon" />
        </div>

        <div class="w-1/2 pl-12">
          <h3 class="text-xl font-semibold">2. Browse Trainers</h3>
          <p class="text-gray-700 leading-[150%] text-[17px]">
            Explore our network of certified trainers and find the <br> perfect match.
          </p>
        </div>
      </div>

      <div class="relative flex items-center mb-17 w-full px-[10%]">
        <div class="w-1/2 text-right pr-12">
          <h3 class="text-xl font-semibold">3. Book Sessions</h3>
          <p class="text-gray-700 leading-[150%] text-[17px]">
            Schedule and book training sessions directly <br> through the app.
          </p>
        </div>

        <div class="img-box">
          <img src="/images/Vector.png" alt="icon" />
        </div>

        <div class="w-1/2"></div>
      </div>

      <div class="relative flex items-center w-full px-[10%]">
        <div class="w-1/2"></div>

        <div class="img-box">
          <img src="/images/cup.png" alt="icon" />
        </div>

        <div class="w-1/2 pl-12">
          <h3 class="text-xl font-semibold">4. Achieve Your Goals</h3>
          <p class="text-gray-700 leading-[150%] text-[17px]">
            Track your progress, stay motivated, and achieve your <br> fitness aspirations.
          </p>
        </div>
      </div>

    </div>
  </section>

  <section>
     <div class="flex flex-col justify-center items-center mt-20">
        <h5 class="font-[600] text-[30px] mb-3">Ready to Start Your Fitness Journey?</h5>
        <p class="font-[400] text-[16px] mb-8">Join us today and get in the best shape of your life with the help of professional trainers.</p>
        <button class="mb-10 rounded-3xl bg-primary text-white hover:opacity-90 transition text-xl font-medium w-60 h-15">Get Started Now</button>
     </div>
  </section>

  <footer-comp />
  
</template>

<script>
import FooterComp from '@/components/FooterComp.vue';

    export default {
        name:"LandingPage",
        components:{
            FooterComp
        }
        
    }
</script>

<style scoped>
</style>