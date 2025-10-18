<template>
  <section
    class="relative w-full h-[450px] md:h-[600px] lg:h-[796px] max-w-full mx-auto overflow-visible mt-1 bg-sec1-sm md:bg-sec1-md lg:bg-sec1"
  >
    <div class="flex md:px-[70px] h-full justify-between">
      <div
        class="flex-1 pt-8 flex flex-col items-center md:items-start md:justify-start relative z-10 mt-13"
      >
        <h1 class="text-3xl lg:text-5xl font-bold mt-0 lg:mt-10">
          Welcome To <span class="text-gradient">Trainly</span>
        </h1>
        <h2 class="text-xl lg:text-2xl tracking-wide lg:tracking-widest mt-3">
          Your fitness journey starts here!
        </h2>
        <br />
        <h2 class="text-2xl lg:text-4xl font-medium mt-0 md:mt-3 text-gradient">
          Find Your Perfect Trainer
        </h2>
        <p class="text-sm text-center md:text-left lg:text-xl mt-3 mb-2">
          Connect with certified personal trainer in various <br />
          sports. Achieve your fitness goal with personalized <br />
          guidance and support.
        </p>
        <button
          class="mt-6 px-6 py-1 lg:py-1 cursor-pointer rounded-3xl bg-primary text-white hover:opacity-90 transition text-lg md:text-2xl font-light lg:font-medium md:w-60 md:h-12 w-[40%]"
        >
          Start journey
        </button>
      </div>

      <div class="hidden md:flex relative overflow-hidden md:flex-1 md:mt-[225px]">
        <div class="absolute"></div>
        <img
          src="@/assets/images/pic1.png"
          alt="Trainer Image"
          class="w-full h-full object-contain relative z-10"
        />
      </div>
    </div>

    <div class="hidden absolute bottom-0 left-0 w-full lg:flex justify-center z-30">
      <img
        src="@/assets/images/Rectangle1.png"
        alt=""
        class="w-full object-cover translate-y-1/2"
      />
    </div>
  </section>

  <br />

  <section
    class="relative max-w-full pb-10 md:pb-0 h-auto md:h-[650px] lg:h-[796px] mx-auto overflow-hidden mt-0 lg:mt-10 bg-sec2-sm md:bg-sec2"
  >
    <div class="flex h-full">
      <div class="hidden lg:flex flex-1 relative">
        <div class="absolute inset-0"></div>
        <img
          src="@/assets/images/pic2.png"
          alt="Trainer Image"
          class="w-full h-full object-cover relative z-10"
        />
      </div>
      <div
        class="flex-1 px-[10px] pt-10 flex flex-col items-center relative z-10 mt-0 lg:mt-10 mx-auto"
      >
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mt-1 md:mt-10">
          Why choose <span class="text-gradient">Trainly</span> ?
        </h1>
        <p class="text-sm text-center lg:text-xl mt-4 mb-7">
          Trainly connects you with top personal trainers,offering <br />
          expert guidance tailored to your fitness goals.
        </p>

        <img src="@/assets/images/cards section.png" alt="" class="w-[70%] md:w-[60%]" />
      </div>
    </div>
    <div class="hidden absolute -bottom-13 pt-[300px] left-0 w-full lg:flex justify-center z-30">
      <img
        src="@/assets/images/Rectangle2.png"
        alt=""
        class="w-full object-cover translate-y-1/2"
      />
    </div>
  </section>

  <section class="relative bg-white pb-[30px] lg:pb-[100px] pt-20 overflow-hidden">
    <h2 class="text-3xl font-[600] mb-6 lg:ps-[70px] text-center lg:text-left">Features</h2>

    <div
      class="flex flex-wrap justify-center md:justify-evenly items-center gap-5 text-center mx-auto"
    >
      <div class="features-card">
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-[35%] h-[15%] mb-2 mt-6"
            src="@/assets/images/card-1.png"
            alt="card image"
          />
          <h5 class="mb-1 text-[15px] md:text-[20px] font-[700] text-[#1351CD] leading-[150%]">
            Personalized Planes
          </h5>
          <p
            class="text-[15px] lg:text-[17px] text-[#000000] font-[350] leading-[150%] text-center"
          >
            Create training plans tailored to your <br />
            fitness goals.
          </p>
        </div>
      </div>
      <div class="features-card">
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-[35%] h-[15%] mb-2 mt-6"
            src="@/assets/images/card-2.png"
            alt="card image"
          />
          <h5 class="mb-1 text-[15px] md:text-[20px] font-[700] text-[#1351CD] leading-[150%]">
            Expert trainers
          </h5>
          <p
            class="text-[15px] lg:text-[17px] text-[#000000] font-[350] leading-[150%] text-center"
          >
            Get guidance from certified trainers in <br />
            various sports.
          </p>
        </div>
      </div>
      <div class="features-card">
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-[35%] h-[15%] mb-2 mt-6"
            src="@/assets/images/card-3.png"
            alt="card image"
          />
          <h5 class="mb-1 text-[15px] md:text-[20px] font-[700] text-[#1351CD] leading-[150%]">
            Flexible scheduling
          </h5>
          <p
            class="text-[15px] lg:text-[17px] text-[#000000] font-[350] leading-[150%] text-center"
          >
            Train at your convenience with our <br />
            flexible schedule options.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="relative md:pt-[90px] lg:pt-[70px]">
    <div class="hidden lg:block absolute top-[-100px] left-0 w-full z-10">
      <img src="@/assets/images/Rectangle1.png" alt="curve" class="w-full block" />
    </div>

    <div
      class="bg-[#8CDAFE99] w-full h-[550px] md:h-[772px] lg:h-[795px] md:pt-[20px] lg:pt-[100px]"
    >
      <h2 class="text-[30px] lg:text-[45px] font-[600] text-center mb-17 pt-10 md:pt-0">
        How It Works
      </h2>

      <div class="relative flex flex-col items-center w-full mx-auto">
        <div
          class="absolute top-[-40px] bottom-[-40px] w-[4px] bg-gradient-to-b from-[#00C853F2] to-[#0D8BF2] h-[437px] md:h-[680px] lg:h-[600px]"
        ></div>

        <div class="relative flex items-center md:mb-17 mb-2 w-full px-[5%] md:px-[10%]">
          <div class="w-1/2 text-right md:pr-12 pr-8">
            <h3 class="text-md md:text-xl font-semibold">1. Create Your Profile</h3>
            <p class="text-gray-700 leading-[150%] text-[13px] md:text-[17px]">
              Set up your profile with your fitness goals and <br />
              preferences.
            </p>
          </div>

          <div class="img-box">
            <img src="@/assets/images/user.png" alt="icon" />
          </div>

          <div class="w-1/2"></div>
        </div>

        <div class="relative flex items-center md:mb-17 mb-2 w-full px-[5%] md:px-[10%]">
          <div class="w-1/2"></div>

          <div class="img-box">
            <img src="@/assets/images/search.png" alt="icon" />
          </div>

          <div class="w-1/2 pl-7 md:pl-12">
            <h3 class="text-md md:text-xl font-semibold">2. Browse Trainers</h3>
            <p class="text-gray-700 leading-[150%] text-[13px] md:text-[17px]">
              Explore our network of certified trainers and find the <br />
              perfect match.
            </p>
          </div>
        </div>

        <div class="relative flex items-center md:mb-17 mb-2 w-full px-[5%] md:px-[10%]">
          <div class="w-1/2 text-right md:pr-12 pr-8">
            <h3 class="text-md md:text-xl font-semibold">3. Book Sessions</h3>
            <p class="text-gray-700 leading-[150%] text-[13px] md:text-[17px]">
              Schedule and book training sessions directly <br />
              through the app.
            </p>
          </div>

          <div class="img-box">
            <img src="@/assets/images/Vector.png" alt="icon" />
          </div>

          <div class="w-1/2"></div>
        </div>

        <div class="relative flex items-center w-full px-[3%] md:px-[10%]">
          <div class="w-1/2"></div>

          <div class="img-box">
            <img src="@/assets/images/cup.png" alt="icon" />
          </div>

          <div class="w-1/2 pl-8 md:pl-12">
            <h3 class="text-md md:text-xl font-semibold">4. Achieve Your Goals</h3>
            <p class="text-gray-700 leading-[150%] text-[13px] md:text-[17px]">
              Track your progress, stay motivated, and achieve your <br />
              fitness aspirations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col justify-center items-center mt-20">
      <h5 class="font-[600] text-[20px] md:text-[30px] mb-3">
        Ready to Start Your Fitness Journey?
      </h5>
      <p class="font-[400] text-[14px] md:text-[16px] mb-8 md:text-left text-center">
        Join us today and get in the best shape of your life with the help of professional trainers.
      </p>
      <button
        class="mb-10 rounded-3xl bg-primary text-white hover:opacity-90 transition md:text-xl font-medium w-[40%] h-10 md:w-60 md:h-15 cursor-pointer"
      >
        Get Started Now
      </button>
    </div>
  </section>
</template>

<style>
:root {
  --primary: #00c853;
  --secondry: #00b0ffb2;
  --third: #ffffff;
  --fourth: #7ae2a5f2;
}

.bg-primary {
  background: linear-gradient(to right, var(--primary), var(--secondry));
}

.bg-sec1 {
  background-image: linear-gradient(
    to left,
    var(--secondry) 0%,
    var(--secondry) 20%,
    var(--third) 60%
  );
}
.bg-sec1-sm {
  background-image: linear-gradient(
    to left,
    var(--secondry) 0%,
    var(--secondry) 20%,
    var(--third) 60%
  );
}
.bg-sec1-md {
  background-image: linear-gradient(
    to left,
    var(--secondry) 0%,
    var(--secondry) 20%,
    var(--third) 60%
  );
}

.bg-sec2 {
  background: linear-gradient(to right, var(--fourth) 0%, var(--fourth) 20%, var(--third) 60%);
}
.bg-sec2-sm {
  background: linear-gradient(to top, var(--fourth) 0%, var(--fourth) 5%, var(--third) 50%);
}

.text-gradient {
  background: linear-gradient(to right, var(--primary), var(--secondry));
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

<script>
export default {
  name: "LandingPage",
};
</script>
