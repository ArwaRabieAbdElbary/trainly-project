<script>
export default {
  name: "LandingPage",
};
</script>

<template>
  <section
    class="relative w-full h-[796px] max-w-[1445px] mx-auto overflow-visible mt-1 bg-sec1"
  >
    <div class="flex h-full">
      <div
        class="flex-1 p-11 flex flex-col justify-start max-w-xl relative z-10 mt-13"
      >
        <h1 class="text-5xl font-bold mt-10">
          Welcome To <span class="text-blue-400">Trainly</span>
        </h1>
        <h2 class="text-2xl tracking-widest mt-3">
          Your fitness journey starts here!
        </h2>
        <br />
        <h2 class="text-4xl font-medium mt-3 text-gradient">
          Find Your Perfect Trainer
        </h2>
        <p class="text-xl mt-3 mb-2">
          Connect with certified personal trainer in various sports. Achieve
          your fitness goal with personalized guidance and support.
        </p>
        <button
          class="mt-6 px-6 py-3 rounded-3xl bg-primary text-white hover:opacity-90 transition text-2xl font-medium w-60 h-18"
        >
          Start journey
        </button>
      </div>

      <div class="flex-1 relative overflow-hidden">
        <div class="absolute inset-0"></div>
        <img
          src="@/assets/pic1.png"
          alt="Trainer Image"
          class="w-full h-full object-cover relative z-10"
        />
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full flex justify-center z-30">
      <img
        src="@/assets/Rectangle 11.png"
        alt=""
        class="w-full object-cover translate-y-1/2"
      />
    </div>
  </section>

  <br />

  <section
    class="relative w-full h-[796px] max-w-[1445px] mx-auto overflow-hidden mt-10 bg-sec2"
  >
    <div class="flex h-full">
      <div class="flex-1 relative">
        <div class="absolute inset-0"></div>
        <img
          src="@/assets/pic2.png"
          alt="Trainer Image"
          class="w-full h-full object-cover relative z-10"
        />
      </div>
      <div
        class="flex-1 p-11 flex flex-col justify-start max-w-xl relative z-10 mt-10"
      >
        <h1 class="text-5xl font-bold mt-10">
          Why choose <span class="text-gradient">Trainly</span>?
        </h1>
        <p class="text-xl mt-4 mb-7 text-center">
          Trainly connects you with top personal trainers,offering expert
          guidance tailored to your fitness goals.
        </p>

        <img src="@/assets/cards section.png" alt="" />
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full flex justify-center z-30">
      <img
        src="@/assets/Rectangle 12.png"
        alt=""
        class="w-full object-cover translate-y-1/2"
      />
    </div>
  </section>
</template>

<style >
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
  background: linear-gradient(
    to left,
    var(--secondry) 0%,
    var(--secondry) 20%,
    var(--third) 60%
     
  );
}

.bg-sec2 {
  background: linear-gradient(
    to right,
    var(--fourth) 0%,
     var(--fourth) 20%,
     var(--third) 60%
     
  );
}

.text-gradient {
  background: linear-gradient(to right, var(--primary), var(--secondry));
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
