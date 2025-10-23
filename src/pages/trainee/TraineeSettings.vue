<template>
  <div class="shadow-lg rounded-2xl mt-10 p-4 border border-gray-200 bg-white">
    <div class="flex">
      <div class="bg-[#D9EEFF] w-10 h-10 rounded-lg flex items-center justify-center mr-2 mt-1">
        <img src="../../assets/images/security.png" alt="" class="w-5 h-5" />
      </div>

      <div>
        <h2 class="text-xl font-[500] mb-1">Security</h2>
        <p class="mb-6 font-[400] text-[13px] text-gray-500">
          Manage your password and security settings
        </p>
      </div>
    </div>

    <form class="max-w-[75%] ps-[50px]" @submit.prevent="onSubmit">
      <!-- Current password -->
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Current Password</label>

        <div class="relative">
          <input
            :type="showCurrent ? 'text' : 'password'"
            id="password"
            v-model="form.current"
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
            required
            autocomplete="current-password"
          />

          <button
            type="button"
            @click="toggle('current')"
            :aria-pressed="showCurrent.toString()"
            :aria-label="showCurrent ? 'Hide current password' : 'Show current password'"
            class="absolute inset-y-0 right-2 flex items-center justify-center px-2"
          >
            <svg v-if="!showCurrent" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <!-- eye (show) -->
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>

            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <!-- eye-off (hide) -->
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.965 9.965 0 012.223-3.583M3 3l18 18" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.88 9.88a3 3 0 104.24 4.24" />
            </svg>
          </button>
        </div>
      </div>

      <!-- New password -->
      <div class="mb-5">
        <label for="new-password" class="block mb-2 text-sm font-medium text-gray-900">New Password</label>

        <div class="relative">
          <input
            :type="showNew ? 'text' : 'password'"
            id="new-password"
            v-model="form.new"
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
            required
            autocomplete="new-password"
            minlength="8"
          />

          <button
            type="button"
            @click="toggle('new')"
            :aria-pressed="showNew.toString()"
            :aria-label="showNew ? 'Hide new password' : 'Show new password'"
            class="absolute inset-y-0 right-2 flex items-center justify-center px-2"
          >
            <svg v-if="!showNew" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>

            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.965 9.965 0 012.223-3.583M3 3l18 18" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.88 9.88a3 3 0 104.24 4.24" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Repeat password -->
      <div class="mb-5">
        <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900">Repeat Password</label>

        <div class="relative">
          <input
            :type="showRepeat ? 'text' : 'password'"
            id="repeat-password"
            v-model="form.repeat"
            class="shadow-xs bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
            required
            autocomplete="new-password"
            minlength="8"
          />

          <button
            type="button"
            @click="toggle('repeat')"
            :aria-pressed="showRepeat.toString()"
            :aria-label="showRepeat ? 'Hide repeat password' : 'Show repeat password'"
            class="absolute inset-y-0 right-2 flex items-center justify-center px-2"
          >
            <svg v-if="!showRepeat" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>

            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.965 9.965 0 012.223-3.583M3 3l18 18" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.88 9.88a3 3 0 104.24 4.24" />
            </svg>
          </button>
        </div>
      </div>

      <button
        type="submit"
        class="text-white bg-[#00B0FF] hover:bg-[#36ace2] cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Update Password
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TraineeSettings",
  data() {
    return {
      showCurrent: false,
      showNew: false,
      showRepeat: false,
      form: {
        current: "",
        new: "",
        repeat: "",
      },
    };
  },
  methods: {
    toggle(field) {
      if (field === "current") this.showCurrent = !this.showCurrent;
      else if (field === "new") this.showNew = !this.showNew;
      else if (field === "repeat") this.showRepeat = !this.showRepeat;
    },
    onSubmit() {
      // مثال بسيط للتحقق قبل الإرسال
      if (this.form.new !== this.form.repeat) {
        alert("New password and repeat password do not match.");
        return;
      }

      // هنا تبعثي الداتا للسيرفر أو تشغلي الـ API call
      // مثال:
      console.log("Submitting", this.form);
      alert("Password updated (demo).");
    },
  },
};
</script>

<style scoped>
/* ما في حاجة خاصة لازم تضيفيها لكن ممكن تغيّري حجم الأيقونة لو حبّيتي */
</style>
