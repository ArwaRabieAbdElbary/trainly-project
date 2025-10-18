<script>
export default {
  name: "FailedPage",
};
</script>

<template>
  <section
    class="flex flex-col items-center justify-center min-h-screen bg-white"
  >
    <div
      class="relative p-[4px] rounded-3xl bg-red-600 shadow-xl w-full max-w-2xl"
    >
      <div class="bg-white rounded-3xl p-12 text-center">
        <div class="flex justify-center mb-8">
          <img
            src="@/assets/credit icon fail.png"
            alt="Success"
            class="w-28 h-28"
          />
        </div>

        <h1 class="text-4xl font-bold text-red-600 mb-6">
          Your Payment Failed!
        </h1>
        <p class="text-gray-800 text-lg font-medium text-center">
          The payment was unsuccessful,
        </p>
        <p class="text-gray-800 mb-6 text-lg font-medium text-center mt-0">
          please check your card information and try again
        </p>

        <button
          class="px-8 py-4 rounded-4xl bg-red-600 text-white hover:opacity-90 transition text-xl font-semibold w-60 h-15 mt-4"
        >
          Try again
        </button>

        <p class="text-gray-500 text-base font-medium mt-3">
          Back To Home Page
        </p>
      </div>
    </div>
  </section>
</template>

<style>
:root {
  --primary: #00c853;
  --secondry: #00b0ffb2;
}
</style>