<template>
  <div class="min-h-screen flex items-center justify-center">
    <!-- Loading State -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="text-xl text-gray-600">Loading...</div>
    </div>

    <!-- Error State -->
    <div v-else-if="!trainer" class="min-h-screen flex items-center justify-center">
      <div class="text-xl text-gray-600">Trainer not found</div>
    </div>

    <!-- Main Content -->
    <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Trainer Profile Card -->
      <div class="bg-white rounded-2xl shadow-xl p-6 mb-8 border-1 border-gray-300">
        <div class="flex flex-col md:flex-row items-start md:items-center gap-6">
          <img :src="trainer.image" :alt="trainer.name" class="w-40 h-40 rounded-xl object-cover" />
          <div class="flex-1">
            <div class="flex items-center gap-2">
              <h1 class="text-2xl font-semibold text-gray-900">{{ trainer.name }}</h1>

              <!-- verifcation sign-->
              <svg
                v-if="trainer.verified"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#00B0FF"
                class="w-7 h-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M22.5 12a5.5 5.5 0 01-5.5 5.5h-1.172l-.707.707A2 2 0 0113.5 19h-3a2 2 0 01-1.621-.793l-.707-.707H7a5.5 5.5 0 110-11h1.172l.707-.707A2 2 0 0110.5 5h3a2 2 0 011.621.793l.707.707H17a5.5 5.5 0 015.5 5.5zM10.75 13.69l4.72-4.72a.75.75 0 111.06 1.06l-5.25 5.25a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 111.06-1.06l1.72 1.72z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <p class="text-gray-600">{{ trainer.role }}</p>

            <div class="flex items-center gap-4 mt-3">
              <span
                class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {{ trainer.yearsExperience }} Years Experience
              </span>
              <span
                class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1"
              >
                <img src="/src/assets/images/location-map.png" alt="location" class="w-5 h-5" />
                {{ trainer.location }}
              </span>
            </div>
          </div>
          <button
            class="cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-2xl font-medium transition-colors"
          >
            Message
          </button>
        </div>
      </div>

      <!-- Plans Section -->
      <section class="mb-8">
        <h2 class="text-2xl font-medium text-gray-900 mb-4">Plans</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="plan in trainer.plans"
            :key="plan.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-md transition-shadow border-t-5 border-blue-500"
          >
            <img :src="plan.image" :alt="plan.title" class="w-full h-48 object-cover" />
            <div class="p-5">
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ plan.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ plan.description }}</p>
              <div class="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {{ plan.duration }}
                </span>
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {{ plan.sessions }}
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-xl font-bold text-gray-900">{{ plan.price }}</span>
                <button
                  class="cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-2xl text-sm font-medium transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Certificates Section -->
      <section class="mb-8">
        <h2 class="text-2xl font-medium text-gray-900 mb-4">Certificates</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="cert in trainer.certificates"
            :key="cert.id"
            class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer border-1 border-gray-300"
          >
            <img :src="cert.image" :alt="cert.title" class="w-full object-cover" />
            <div class="p-4">
              <p class="text-sm font-medium text-gray-900 text-center">{{ cert.title }}</p>
            </div>
          </div>
        </div>
      </section>
    <!-- Reviews Section -->
    <section>
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-3">
          <h2 class="text-2xl font-medium text-gray-900">Reviews</h2>
          <div class="flex items-center gap-2">
            <div class="flex items-center bg-amber-50 px-3 py-1 rounded-lg">
              <span class="text-xl font-medium text-gray-900">
                {{ trainer.averageRating.toFixed(1) }}
              </span>
              <svg class="w-5 h-5 text-amber-400 fill-amber-400 ml-1" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <span class="text-gray-600 text-sm font">
              ({{ trainer.totalReviews }} reviews)
            </span>
          </div>
        </div>
        <button
          @click="showReviewModal = true"
          class="cursor-pointer bg-[#00B0FF] hover:bg-[#007db7] text-white px-5 py-2 rounded-2xl font-medium transition-colors"
        >
          Write a Review
        </button>
      </div>

      <div class="space-y-4">
        <div
          v-for="review in trainer.reviews"
          :key="review.id"
          class="bg-white rounded-2xl shadow-xl p-5 border-1 border-gray-300"
        >
          <div class="flex items-start justify-between mb-2">
            <div class="flex items-center gap-3">
              <img
                :src="review.userImage || 'https://via.placeholder.com/40'"
                alt="User"
                class="w-10 h-10 rounded-full"
              />
              <div>
                <h4 class="font-semibold text-gray-900">{{ review.author }}</h4>
                <p class="text-sm text-gray-500">
                  {{ new Date(review.createdAt?.seconds * 1000).toLocaleDateString() || review.date }}
                </p>
              </div>
            </div>
            <div class="flex">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-4 h-4"
                :class="i <= review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
          </div>
          <p class="text-gray-700">{{ review.text }}</p>
        </div>
      </div>
    </section>

    <!-- Review Modal -->
    <div
      v-if="showReviewModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click.self="showReviewModal = false"
    >
      <div class="bg-white rounded-2xl max-w-md w-full p-6 min-h-[300px] shadow-lg">
        <h3 class="text-2xl font-bold text-gray-900 mb-2 text-center">Write Your Review</h3>
        <div class="flex justify-center mb-4">
          <img src="/src/assets/images/carbon_star-review.png" alt="review" class="w-16 h-16" />
        </div>
        <p class="text-center text-gray-600 mb-6">
          Share your experience with your trainer — your feedback helps them improve and helps others
          make better choices!
        </p>

        <div class="flex justify-center gap-2 mb-4">
          <button
            v-for="star in 5"
            :key="star"
            @click="rating = star"
            class="cursor-pointer focus:outline-none"
          >
            <svg
              class="w-8 h-8"
              :class="star <= rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </button>
        </div>

        <textarea
          v-model="reviewText"
          placeholder="Write your review here..."
          class="w-full border border-gray-300 rounded-lg p-3 mb-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
        ></textarea>

        <div class="flex gap-3">
          <button
            @click="showReviewModal = false"
            class="cursor-pointer flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            @click="handleSubmitReview"
            class="cursor-pointer flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-lg font-medium transition-colors"
          >
            Post Review
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/Firebase/firebaseConfig";

// 🔹 ثابت مؤقت — خده من route params بعدين
const trainerId = "trainer123";

// 🔹 بيانات المستخدم الحالي (ممكن تجيبها من Firebase Auth)
const currentUser = {
  id: "user789",
  name: "Bassam Khaled",
  image: "https://i.pravatar.cc/150?img=12",
};

// 🔹 البيانات الأساسية
const trainer = ref({
  name: "Ahmed Ali",
  role: "Gym Coach",
  reviews: [],
  totalReviews: 0,
  averageRating: 0,
});

const showReviewModal = ref(false);
const rating = ref(0);
const reviewText = ref("");

// 🟢 تحميل الريفيوهات بشكل Real-time
const fetchReviews = () => {
  const q = query(
    collection(db, "reviews"),
    where("trainerId", "==", trainerId),
    orderBy("createdAt", "desc")
  );

  onSnapshot(q, (snapshot) => {
    const reviewsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    trainer.value.reviews = reviewsData;
    trainer.value.totalReviews = reviewsData.length;
    trainer.value.averageRating =
      reviewsData.reduce((sum, r) => sum + (r.rating || 0), 0) /
        (reviewsData.length || 1);
  });
};

// 🟢 إضافة Review جديد
const handleSubmitReview = async () => {
  if (rating.value === 0 || !reviewText.value.trim()) {
    alert("Please rate and write your review");
    return;
  }

  try {
    await addDoc(collection(db, "reviews"), {
      trainerId,
      userId: currentUser.id,
      author: currentUser.name,
      userImage: currentUser.image,
      rating: rating.value,
      text: reviewText.value.trim(),
      createdAt: serverTimestamp(),
      date: new Date().toLocaleDateString(),
    });

    showReviewModal.value = false;
    rating.value = 0;
    reviewText.value = "";
    console.log("✅ Review added successfully");
  } catch (error) {
    console.error("❌ Error submitting review:", error);
    alert("Failed to submit review. Please try again.");
  }
};

onMounted(fetchReviews);
</script>


<style scoped>
/* Add any custom styles here if needed */
</style>
