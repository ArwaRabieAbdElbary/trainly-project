<template>
  <div class="min-h-screen flex bg-gray-50">
    <!-- Sidebar Filters -->
    <aside class="w-64 bg-white rounded-xl m-4 p-6 border-[#0D8BF2] border-2 h-fit">
      <h2 class="font-semibold text-lg mb-4">Filter By</h2>

      <!-- Sports -->
      <div class="mb-6">
        <h3 class="text-blue-600 font-semibold mb-2">Sports</h3>
        <div class="space-y-2">
          <label class="flex items-center gap-2">
            <input type="radio" value="Gym" v-model="filters.sport" />
            Gym & Fitness
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" value="Tennis" v-model="filters.sport" />
            Tennis
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" value="Padel" v-model="filters.sport" />
            Padel
          </label>
        </div>
      </div>

      <!-- City -->
      <div class="mb-6">
        <h3 class="text-blue-600 font-semibold mb-2">City</h3>
        <label class="flex items-center gap-2">
          <input type="radio" value="Cairo" v-model="filters.city" /> Cairo
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" value="Giza" v-model="filters.city" /> Giza
        </label>
      </div>

      <!-- Ratings -->
      <div>
        <h3 class="text-blue-600 font-semibold mb-2">Ratings</h3>
        <div class="space-y-1">
          <label v-for="n in 5" :key="n" class="flex items-center gap-1">
            <input type="radio" :value="n" v-model="filters.rating" />
            <span class="flex items-center text-yellow-500">
              <span v-for="i in n" :key="i">★</span>
            </span>
          </label>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6 justify-center mb-8">
      <!-- Search Bar -->
      <div class="flex justify-center mb-8">
        <div
          class="max-w-xl w-full flex items-center border rounded-full px-4 py-2 bg-white shadow-sm"
        >
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search here..."
            class="flex-1 outline-none px-2"
          />
          <button @click="fetchTrainers">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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

      <h2 class="font-semibold text-lg mb-4 flex justify-center">
        Search Results of “{{ searchQuery || filters.sport }}”
      </h2>

      <!-- Trainers Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="trainer in filteredTrainers"
          :key="trainer.id"
          class="bg-white rounded-xl shadow-md overflow-hidden border"
        >
          <img :src="trainer.image" alt="trainer" class="h-48 w-full object-cover" />
          <div class="p-4">
            <h3 class="font-semibold text-lg">{{ trainer.name }}</h3>
            <p class="text-blue-500 text-sm">{{ trainer.speciality }}</p>
            <div class="flex items-center text-yellow-500 text-sm">★ {{ trainer.rating }}</div>
            <p class="text-gray-500 text-sm mb-3">{{ trainer.city }}</p>
            <button class="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 text-sm">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { db } from "@/Firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const trainers = ref([]);
const searchQuery = ref("");
const filters = ref({
  sport: "",
  city: "",
  rating: "",
});

// Fetch trainers from Firebase
const fetchTrainers = async () => {
  const querySnapshot = await getDocs(collection(db, "trainers"));
  trainers.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

onMounted(fetchTrainers);

// Apply filters + search
const filteredTrainers = computed(() => {
  return trainers.value.filter((trainer) => {
    const matchesSearch = trainer.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesSport = !filters.value.sport || trainer.sport === filters.value.sport;
    const matchesCity = !filters.value.city || trainer.city === filters.value.city;
    const matchesRating = !filters.value.rating || trainer.rating >= filters.value.rating;
    return matchesSearch && matchesSport && matchesCity && matchesRating;
  });
});
</script>

<style scoped>
input[type="radio"] {
  accent-color: #3b82f6;
}
</style>
