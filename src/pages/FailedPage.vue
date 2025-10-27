<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "FailedPage",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const trainerId = ref(null);

    onMounted(() => {
      // الحصول على trainer ID من query params أو localStorage
      trainerId.value = route.query.trainerId || localStorage.getItem('lastTrainerId');
    });

    const goBackToTrainer = () => {
      if (trainerId.value) {
        router.push(`/viewtrainerprofile?uid=${trainerId.value}`);
      } else {
        router.push("/traineehome");
      }
    };

    const tryAgain = () => {
      if (trainerId.value) {
        router.push(`/viewtrainerprofile?uid=${trainerId.value}`);
      } else {
        router.push("/traineehome");
      }
    };

    return {
      trainerId,
      goBackToTrainer,
      tryAgain,
    };
  },
};
</script>

<template>
  <section class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
    <div class="relative p-[4px] rounded-3xl bg-gradient-to-r from-red-500 to-red-600 shadow-2xl w-full max-w-2xl">
      <div class="bg-white rounded-3xl p-12 text-center">
        <div class="flex justify-center mb-8">
          <img src="@/assets/images/credit icon fail.png" alt="Payment Failed" class="w-32 h-32" />
        </div>

        <div class="mb-6">
          <span class="inline-block px-6 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
            ❌ Payment Failed
          </span>
        </div>

        <h1 class="text-5xl font-bold text-red-600 mb-4">فشلت العملية!</h1>
        <p class="text-gray-800 text-lg font-medium mb-2">
          لم يتم إتمام عملية الدفع بنجاح
        </p>
        <p class="text-gray-600 text-base mb-8">
          يرجى المحاولة مرة أخرى
        </p>

        <div class="flex flex-col gap-4 items-center">
          <button
            @click="tryAgain"
            class="cursor-pointer px-8 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white hover:opacity-90 transition-all transform hover:scale-105 text-lg font-semibold w-full max-w-xs shadow-lg"
          >
            إعادة المحاولة
          </button>
          
          <button
            @click="goBackToTrainer"
            v-if="trainerId"
            class="cursor-pointer px-8 py-4 rounded-2xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition text-lg font-medium w-full max-w-xs"
          >
            العودة لصفحة المدرب
          </button>
          
          <router-link
            to="/traineehome"
            class="cursor-pointer px-8 py-4 rounded-2xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition text-lg font-medium w-full max-w-xs"
          >
            الصفحة الرئيسية
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
