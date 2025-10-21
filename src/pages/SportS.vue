<template>
  <div class="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4 sm:px-8">
    <!-- Hero Section -->
    <div
      class="max-w-5xl w-full bg-[#E9F4FF] rounded-2xl shadow-sm p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between mb-12"
    >
      <!-- Left Text -->
      <div class="sm:w-1/2 text-center sm:text-left">
        <h2 class="text-2xl sm:text-3xl font-semibold mb-2">
          Explore Sports on
          <span class="bg-gradient-to-r from-[#00C853] to-[#00B0FF] bg-clip-text text-transparent"
            >Trainly</span
          >
        </h2>
        <p class="text-black font-semibold mb-4">Train Smarter. Play Better.</p>
        <p class="text-black text-sm sm:text-base leading-relaxed font-medium">
          Whether you're looking to build strength, improve your technique, or master one more
          sport, Trainly connects you with certified professionals ready to guide you every step of
          the way.
        </p>
      </div>

      <div class="sm:w-1/2 mt-6 sm:mt-0 flex justify-center">
        <img
          src="@/assets/images/sport.png"
          alt="Explore Sports"
          class="max-w-xs sm:max-w-sm w-full"
        />
      </div>
    </div>

    <!-- GYM & Fitness Section -->
    <div
      class="max-w-5xl w-full bg-white rounded-xl overflow-hidden shadow-md flex flex-col sm:flex-row mb-12"
    >
      <img
        src="@/assets/images/sport1.png"
        alt="Gym and Fitness"
        class="w-full sm:w-1/2 object-cover"
      />
      <div class="p-8 flex flex-col justify-center">
        <h3 class="text-xl font-bold mb-2">GYM & Fitness</h3>
        <p class="text-black font-semibold mb-3">Build Strength. Boost Confidence.</p>
        <p class="text-black font-medium text-sm leading-relaxed">
          At Trainly, we help you take your gym training to the next level with expert guidance and
          personalized workout plans. Whether your goal is to gain muscle, lose weight, or improve
          endurance, our certified trainers are here to design the right program for you.
        </p>
      </div>
    </div>

    <!-- Padel Section -->
    <div
      class="max-w-5xl w-full bg-white rounded-xl overflow-hidden shadow-md flex flex-col sm:flex-row mb-12 border border-gray-200"
    >
      <div class="p-8 flex flex-col justify-center sm:w-1/2">
        <h3 class="text-xl font-bold mb-2">Padel</h3>
        <p class="text-black font-semibold mb-3">Play Smart. Play Fast.</p>
        <p class="text-black font-medium text-sm leading-relaxed">
          Join the padel movement with Trainly’s certified padel trainers. Whether you’re learning
          the basics or sharpening your competitive edge, our experts will help you improve through
          fun, focused, and dynamic sessions.
        </p>
      </div>
      <img src="@/assets/images/sport2.png" alt="Padel" class="w-full sm:w-1/2 object-cover" />
    </div>

    <!-- Tennis Section -->
    <div
      class="max-w-5xl w-full bg-white rounded-xl overflow-hidden shadow-md flex flex-col sm:flex-row mb-12 border border-gray-200"
    >
      <img src="@/assets/images/sport3.png" alt="Tennis" class="w-full sm:w-1/2 object-cover" />
      <div class="p-8 flex flex-col justify-center">
        <h3 class="text-xl font-bold mb-2">Tennis</h3>
        <p class="text-black font-semibold mb-3">Master Every Swing.</p>
        <p class="text-black font-medium text-sm leading-relaxed">
          With Trainly, improving your tennis game has never been easier. Our professional tennis
          coaches focus on perfecting your techniques, strategy, and footwork, ensuring you play
          with confidence and precision.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SportS",
};
</script>

<style scoped>
img {
  transition: transform 0.4s ease;
}
img:hover {
  transform: scale(1.03);
}
</style>
