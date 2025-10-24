<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="relative h-[400px] md:h-[500px] flex flex-col justify-center items-center text-center text-white"
      :style="{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative z-10 max-w-3xl px-4">
        <h1 class="text-3xl md:text-5xl font-bold mb-4">
          Achieve Your Fitness Goals with Top Trainers
        </h1>
        <p class="text-lg md:text-xl mb-8">
          Connect with expert coaches in gym, tennis, and padel — all in one platform.
        </p>

        <!-- Search Bar -->
        <div class="max-w-2xl mx-auto bg-white rounded-full shadow-lg flex items-center px-4 py-2">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search here..."
            class="flex-1 px-4 py-2 text-gray-800 outline-none rounded-full"
          />
          <button class="bg-blue-500 hover:bg-blue-600 p-2 rounded-full transition-colors">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Trainers Sections -->
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <div v-for="(group, sport) in trainers" :key="sport">
        <!-- Section Header -->
        <div
          :class="[
            'text-white text-center py-3 rounded-xl font-bold text-xl mb-8',
            sport === 'gym'
              ? 'bg-gradient-to-l from-[#166534] to-[#00C853]'
              : sport === 'tennis'
                ? 'bg-gradient-to-l from-[#B76908] to-[#FF9209]'
                : 'bg-gradient-to-l from-[#076DBF] to-[#00B0FF]',
          ]"
        >
          {{ formatTitle(sport) }}
        </div>

        <!-- Scrollable Trainer Cards -->
        <div class="relative">
          <!-- Left Arrow -->
          <button
            @click="scrollLeft(sport)"
            class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Cards Container -->
          <div
            :ref="(el) => (scrollRefs[sport] = el)"
            class="flex overflow-x-auto overflow-y-hidden scrollbar-hide space-x-6 scroll-smooth px-10"
          >
            <div
              v-for="trainer in group"
              :key="trainer.id"
              class="w-[340px] h-[424px] flex-shrink-0 bg-white rounded-[25px] border-2 border-gray-100 shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.03]"
            >
              <img :src="trainer.image" :alt="trainer.name" class="w-full h-[230px] object-cover" />

              <div class="flex-1 flex flex-col justify-between p-5 text-left">
                <div>
                  <h3 class="text-[20px] font-semibold text-gray-800 mb-1">
                    {{ trainer.name }}
                  </h3>
                  <p class="text-blue-600 text-sm font-medium mb-3">
                    {{ trainer.specialty }}
                  </p>

                  <div class="flex items-center text-yellow-500 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.785.57-1.84-.197-1.54-1.118l1.287-3.951a1 1 0 00-.364-1.118L2.075 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z"
                      />
                    </svg>
                    <span class="text-gray-700 font-medium">{{ trainer.rating }}</span>
                  </div>

                  <p class="text-gray-500 text-sm">{{ trainer.location }}</p>
                </div>

                <button
                  @click="handleBook(trainer)"
                  class="mt-4 w-full bg-[#00B0FF] hover:bg-blue-600 text-white font-medium py-2 rounded-[15px] transition cursor-pointer"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>

          <!-- Right Arrow -->
          <button
            @click="scrollRight(sport)"
            class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const bgImage = new URL("@/assets/images/homepage.png", import.meta.url).href;

const searchQuery = ref("");
const scrollRefs = ref({});

const scrollLeft = (sport) => {
  const el = scrollRefs.value[sport];
  if (el) el.scrollBy({ left: -350, behavior: "smooth" });
};

const scrollRight = (sport) => {
  const el = scrollRefs.value[sport];
  if (el) el.scrollBy({ left: 350, behavior: "smooth" });
};

const trainers = ref({
  gym: [
    { id: 1, name: "Ahmed Ali", specialty: "Gym Trainer", rating: 4.6, location: "Cairo, EG", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=200&fit=crop" },
    { id: 2, name: "Malek Amgad", specialty: "Gym Trainer", rating: 4.4, location: "Cairo, EG", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=300&h=200&fit=crop" },
    { id: 3, name: "Emad Omar", specialty: "Gym Trainer", rating: 4.8, location: "Cairo, EG", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=200&fit=crop" },
    { id: 3, name: "Emad Omar", specialty: "Gym Trainer", rating: 4.8, location: "Cairo, EG", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=200&fit=crop" },
    { id: 3, name: "Emad Omar", specialty: "Gym Trainer", rating: 4.8, location: "Cairo, EG", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=200&fit=crop" },
    { id: 3, name: "Emad Omar", specialty: "Gym Trainer", rating: 4.8, location: "Cairo, EG", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=200&fit=crop" },

  ],
  tennis: [
    { id: 4, name: "Mohammed", specialty: "Tennis Trainer", rating: 4.6, location: "Cairo, EG", image: "https://images.unsplash.com/photo-1595274817406-f8ff634b1b9e?w=300&h=200&fit=crop" },
    { id: 5, name: "Mamdouh", specialty: "Tennis Trainer", rating: 4.5, location: "Cairo, EG", image: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=300&h=200&fit=crop" },
    { id: 6, name: "Wael", specialty: "Tennis Trainer", rating: 4.7, location: "Cairo, EG", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
  ],
  padel: [
    { id: 7, name: "Maged", specialty: "Padel Trainer", rating: 4.5, location: "Cairo, EG", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=300&h=200&fit=crop" },
    { id: 8, name: "Yasser", specialty: "Padel Trainer", rating: 4.8, location: "Cairo, EG", image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=300&h=200&fit=crop" },
    { id: 9, name: "Alaa", specialty: "Padel Trainer", rating: 4.9, location: "Cairo, EG", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=200&fit=crop" },
  ],
});

const handleBook = (trainer) => {
  alert(`Viewing profile of ${trainer.name}`);
};

const formatTitle = (key) => {
  const titles = { gym: "Gym & Fitness", tennis: "Tennis", padel: "Padel" };
  return titles[key] || key;
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
