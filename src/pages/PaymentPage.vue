<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "PaymentPage",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const trainerId = ref(null);
    const sessionId = ref(null);

    onMounted(() => {
      // الحصول على trainer ID من query params أو localStorage
      trainerId.value = route.query.trainerId || localStorage.getItem('lastTrainerId');
      sessionId.value = route.query.session_id;
    });

    const goBackToTrainer = () => {
      if (trainerId.value) {
        router.push(`/viewtrainerprofile?uid=${trainerId.value}`);
      } else {
        router.push("/traineehome");
      }
    };

    return {
      trainerId,
      sessionId,
      goBackToTrainer,
    };
  },
};
</script>

<template>
  <section class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-sky-50">
    <div class="relative p-[4px] rounded-3xl bg-gradient-to-r from-green-500 to-sky-400 shadow-2xl w-full max-w-2xl animate-bounce-slow">
      <div class="bg-white rounded-3xl p-12 text-center">
        <div class="flex justify-center mb-8 animate-scale">
          <img src="@/assets/images/success icon.png" alt="Success" class="w-32 h-32" />
        </div>

        <div class="mb-6">
          <span class="inline-block px-6 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            ✅ Payment Successful
          </span>
        </div>

        <h1 class="text-5xl font-bold text-green-600 mb-4">تم الدفع بنجاح!</h1>
        <p class="text-gray-800 mb-3 text-lg font-medium">
          تم إتمام عملية الدفع بنجاح
        </p>
        <p class="text-gray-600 mb-8 text-base">
          شكراً لك! يمكنك الآن الاستفادة من خطة التدريب
        </p>

        <div class="flex flex-col gap-4 items-center">
          <button
            @click="goBackToTrainer"
            v-if="trainerId"
            class="cursor-pointer px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-sky-400 text-white hover:opacity-90 transition-all transform hover:scale-105 text-lg font-semibold w-full max-w-xs shadow-lg"
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
.animate-bounce-slow {
  animation: bounce 2s infinite;
}

.animate-scale {
  animation: scale 0.5s ease-out;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes scale {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
