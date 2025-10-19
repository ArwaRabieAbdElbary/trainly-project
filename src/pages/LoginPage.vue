<template>
  <div
    class="bg-[url('/src/assets/images/couple-training-together-gym.jpg')] bg-cover bg-no-repeat bg-[position-x:100%] w-full h-screen flex items-center justify-start pl-20 max-[768px]:pl-0 max-[768px]:justify-center"
  >
    <div
      class="w-[480px] max-w-[calc(100%-40px)] mx-0 rounded-[10px] bg-white/95 p-3 flex items-start justify-center relative animate-slideUp"
    >
      <div
        class="w-[446px] h-[546px] bg-white p-9 rounded-lg flex flex-col justify-center shadow-[0_0_10px_rgba(0,0,0,0.1)]"
      >
        <h2 class="mb-5 text-[22px] font-semibold">
          Welcome back To
          <span
            class="bg-gradient-to-r from-[#00C853] to-[#00B0FF] bg-clip-text text-transparent"
          >
            Trainly
          </span>
        </h2>

        <form @submit.prevent="handleLogin" class="w-full">
          <!-- Email -->
          <label for="email" class="text-sm block mt-2 mb-1">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter email"
            required
            class="w-full p-3 mb-2 border border-gray-300 rounded-md shadow-[0_0_6px_rgba(0,0,0,0.1)]"
          />

          <!-- Password -->
          <div class="relative">
            <label for="password" class="text-sm block mt-2 mb-1">Password</label>
            <input
              :type="passwordFieldType"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
              class="w-full p-3 mb-2 border border-gray-300 rounded-md shadow-[0_0_6px_rgba(0,0,0,0.1)]"
            />
            <button
              type="button"
              class="absolute right-4 top-1/2 translate-y-[10%] w-5 h-auto cursor-pointer bg-transparent border-0"
              @click="togglePasswordVisibility"
            >
              <img
                :src="passwordVisible ? '/src/assets/images/eye off.png' : '/src/assets/images/Eye.png'"
                alt="Show/Hide"
                class="w-full h-auto"
              />
            </button>
          </div>

          <!-- Forgot Password -->
          <a
            href="#"
            class="text-xs text-[#2d8fff] hover:underline block text-right mb-4 cursor-pointer"
          >
            Forgot Password?
          </a>

          <!-- Login Button -->
          <button
            type="submit"
            class="w-full p-3 text-white text-lg rounded-md cursor-pointer mb-4 bg-gradient-to-r from-[#00C853] to-[#00b0ff]"
          >
            Log In
          </button>

          <!-- Google Button -->
          <button
            type="button"
            class="flex items-center justify-center gap-2 border border-gray-300 p-2 cursor-pointer rounded-md bg-white w-full"
          >
            <img src="/src/assets/images/g-logo.png" alt="google" class="w-5 h-5" />
            Continue with Google
          </button>

          <!-- Sign Up Link -->
          <p class="text-left text-sm mt-7">
            Don't have an account?
            <a href="sign up.html" class="text-[#2d8fff] hover:underline">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      passwordVisible: false,
    };
  },
  computed: {
    passwordFieldType() {
      return this.passwordVisible ? 'text' : 'password';
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    handleLogin() {
      console.log('Login attempt with:', {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideUp {
  animation: slideUp 0.6s ease-in-out;
}
</style>
