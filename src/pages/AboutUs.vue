<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section - About Trainly -->
    <section class="max-w-6xl mx-auto py-16">
      <div
        class="grid md:grid-cols-2 gap-5 items-center border-2 border-[#0D8BF2] rounded-3xl p-6 bg-gradient-to-br from-cyan-50 to-white"
      >
        <div>
          <h1 class="text-4xl font-bold mb-4">
            About
            <span class="bg-gradient-to-r from-[#00C853] to-[#00B0FF] bg-clip-text text-transparent"
              >Trainly</span
            >
          </h1>
          <p class="text-lg font-semibold mb-4">Empowering Fitness Through Connection</p>
          <p class="text-gray-600 mb-4">
            At Trainly, we believe that fitness is more than a routine, it's a journey.
          </p>
          <p class="text-gray-600 mb-4">
            Our mission is to make that journey simpler, smarter, and more personal by connecting
            you with certified trainers across a variety of sports and disciplines, including gym
            training, tennis, and padel.
          </p>
          <p class="text-gray-600">
            Whether you're a beginner taking your first step or an athlete aiming to reach new
            heights, Trainly helps you find the right trainer, build custom plans, and track your
            progress, all in one place.
          </p>
        </div>
        <div class="rounded-2xl overflow-hidden">
          <img
            src="@/assets/images/about1.png"
            alt="Fitness trainer"
            class="max-w-xs sm:max-w-sm w-full transform translate-x-4 sm:translate-x-28"
          />
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="max-w-6xl mx-auto py-16">
      <div
        class="grid md:grid-cols-2 gap-8 items-center border-2 border-[#00C853F2] rounded-3xl p-8 bg-gradient-to-br from-green-50 to-white"
      >
        <div class="rounded-2xl overflow-hidden">
          <img
            src="@/assets/images/about2.png"
            alt="Tennis players"
            class="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 class="text-4xl font-bold mb-6">Our Vision</h2>
          <p class="text-gray-700 mb-4 text-lg">
            To make fitness personal, connected, and inspiring.
          </p>
          <p class="text-gray-600">
            To become the leading platform that bridges the gap between trainers and trainees,
            offering personalized fitness experiences accessible anytime, anywhere.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <h2 class="text-4xl font-bold text-center mb-12">Our Mission</h2>
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <!-- For Trainees -->
        <div class="bg-blue-50 rounded-2xl p-8">
          <img
            src="@/assets/images/about3.png"
            alt="For Trainees"
            class="w-[227] h-[151] rounded-full mx-auto mb-4"
          />
          <h3 class="text-xl font-bold mb-2 text-cyan-500">For Trainees</h3>
          <p class="text-gray-600">
            To help users discover expert trainers that fit their goals and style.
          </p>
        </div>

        <!-- For Trainers -->
        <div class="bg-blue-50 rounded-2xl p-8">
          <img
            src="@/assets/images/about4.png"
            alt="For Trainers"
            class="w-[227] h-[151] rounded-full mx-auto mb-4"
          />
          <h3 class="text-xl font-bold mb-2 text-cyan-500">For Trainers</h3>
          <p class="text-gray-600">
            To give trainers a digital space to showcase their expertise and grow their business.
          </p>
        </div>

        <!-- Overall -->
        <div class="bg-blue-50 rounded-2xl p-8">
          <img
            src="@/assets/images/about5.png"
            alt="Community"
            class="w-[227] h-[151] rounded-full mx-auto mb-4"
          />
          <h3 class="text-xl font-bold mb-2 text-cyan-500">Overall</h3>
          <p class="text-gray-600">
            To promote a community built on motivation, progress, and trust.
          </p>
        </div>
      </div>
    </section>

    <!-- What We Offer -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <h2 class="text-4xl font-bold text-center mb-12">What We Offer</h2>
      <div class="grid md:grid-cols-4 gap-6">
        <div class="bg-green-100 rounded-2xl p-6 text-center">
          <img
            src="@/assets/images/about6.png"
            alt="For Trainers"
            class="w-12 h-12 rounded-full mx-auto mb-4"
          />
          <h3 class="font-bold mb-2">Personalized Training Plans</h3>
          <p class="text-sm text-gray-700">
            Custom tailored training plans made by certified trainers.
          </p>
        </div>

        <div class="bg-green-100 rounded-2xl p-6 text-center">
          <img
            src="@/assets/images/about7.png"
            alt="For Trainers"
            class="w-12 h-12 rounded-full mx-auto mb-4"
          />
          <h3 class="font-bold mb-2">Direct Communication</h3>
          <p class="text-sm text-gray-700">Direct communication through in-app messaging.</p>
        </div>

        <div class="bg-green-100 rounded-2xl p-6 text-center">
          <img
            src="@/assets/images/about8.png"
            alt="For Trainers"
            class="w-12 h-12 rounded-full mx-auto mb-4"
          />
          <h3 class="font-bold mb-2">Multi-sport Support</h3>
          <p class="text-sm text-gray-700">Multi-sport support for gym, tennis, padel, and more.</p>
        </div>

        <div class="bg-green-100 rounded-2xl p-6 text-center">
          <img
            src="@/assets/images/about9.png"
            alt="For Trainers"
            class="w-12 h-12 rounded-full mx-auto mb-4"
          />
          <h3 class="font-bold mb-2">Secure Platform</h3>
          <p class="text-sm text-gray-700">
            Secure platform with verified trainers and safe payments.
          </p>
        </div>
      </div>
    </section>

    <!-- For Trainees & Trainers -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-blue-50 rounded-2xl p-12 text-center">
          <h2 class="text-3xl font-bold mb-6">For Trainees</h2>
          <p class="text-gray-700 mb-4">
            Find your perfect trainer, follow your plan, and achieve your goals at your own pace.
          </p>
          <p class="text-gray-600">
            Trainly makes your fitness journey organized, flexible, and motivating.
          </p>
        </div>

        <div class="bg-blue-50 rounded-2xl p-12 text-center">
          <h2 class="text-3xl font-bold mb-6">For Trainers</h2>
          <p class="text-gray-700 mb-4">
            Showcase your expertise, connect with clients, and manage your plans effortlessly.
          </p>
          <p class="text-gray-600">
            Trainly helps you grow your personal brand while focusing on what matters most — helping
            others get stronger.
          </p>
        </div>
      </div>
    </section>

    <!-- Join Community -->
    <section class="max-w-4xl mx-auto px-6 py-16 text-center">
      <h2 class="text-4xl font-bold mb-6">
        Join the
        <span class="bg-gradient-to-r from-[#00C853] to-[#00B0FF] bg-clip-text text-transparent"
          >Trainly</span
        >
        Community
      </h2>
      <p class="text-gray-700 mb-2">Together, we're redefining how people train.</p>
      <p class="text-gray-600 mb-8">
        Start your journey with Trainly today — where every goal has a plan, and every plan has a
        trainer.
      </p>
      <button
        class="px-8 py-3 text-white bg-gradient-to-r from-[#00C853] to-[#00B0FF] rounded-full text-lg font-semibold hover:shadow-xl transition-shadow cursor-pointer"
      >
        Get Started Now
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "TrainlyAbout",
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
