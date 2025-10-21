<script>
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    switchLang() {
      const newLocale = this.$i18n.locale === "en" ? "ar" : "en";
      this.$i18n.locale = newLocale;
      localStorage.setItem("lang", newLocale);
      document.dir = newLocale === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = newLocale;

      // 🟢 السطر السحري لتحديث الخط مباشرة:
      document.body.style.fontFamily =
        newLocale === "ar" ? "'Tajawal', sans-serif" : "'Poppins', sans-serif";
    },
  },
  mounted() {
    // لما الصفحة تفتح، نضبط الاتجاه حسب اللغة المحفوظة
    document.dir = this.$i18n.locale === "ar" ? "rtl" : "ltr";
  },
};
</script>

<template>
  <nav
    class="flex justify-between items-center px-[25px] md:px-[40px] lg:px-[90px] h-20 bg-white shadow-sm relative"
  >
    <img src="@/assets/images/Project LOGO.png" alt="Logo" class="w-[110px] h-auto md:w-[12%]" />

    <ul
      class="hidden sm:hidden md:flex lg:flex lg:items-center justify-center md:space-x-10 lg:space-x-16 text-gray-800 font-[500] md:text-[85%] lg:text-[100%] w-[50%]"
    >
      <ul class="flex space-x-18">
        <li>
          <router-link to="/" class="btn-primary">
            {{ $t("home") }}
          </router-link>
        </li>
        <li>
          <router-link to="/aboutus" class="btn-primary">
            {{ $t("about") }}
          </router-link>
        </li>
        <li>
          <router-link to="/sports" class="btn-primary">
            {{ $t("sports") }}
          </router-link>
        </li>
        <li>
          <router-link to="/contactus" class="btn-primary">
            {{ $t("contact") }}
          </router-link>
        </li>
      </ul>
    </ul>

    <div class="hidden sm:hidden md:flex lg:flex gap-3 lg:gap-4 items-center">
      <router-link
        to="/login"
        class="px-3 md:px-3.5 lg:px-4 rounded-3xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition md:w-[40%] lg:min-w-[46%] h-10 lg:h-11 text-[14px] lg:text-[17px] cursor-pointer flex justify-center items-center"
      >
        {{ $t("login") }}
      </router-link>

      <router-link
        to="/signup"
        class="px-3 md:px-3.5 lg:px-4 rounded-3xl bg-primary text-white hover:opacity-90 transition md:w-[40%] lg:min-w-[46%] h-10 lg:h-11 text-[12px] lg:text-[17px] cursor-pointer flex justify-center items-center"
      >
        {{ $t("get_started") }}
      </router-link>

      <img
        src="@/assets/images/language switch(1)(1).png"
        alt="Language"
        class="w-[35px] h-[35px] md:w-[40px] lg:w-[50px] cursor-pointer transition-transform duration-500 hover:rotate-180"
        @click="switchLang"
      />
    </div>

    <div
      class="flex md:hidden flex-col justify-center items-center cursor-pointer space-y-1"
      @click="isOpen = !isOpen"
    >
      <span
        class="block w-6 h-[3px] bg-gray-800 rounded transition-all duration-300"
        :class="{ 'rotate-45 translate-y-[8px]': isOpen }"
      ></span>
      <span
        class="block w-6 h-[3px] bg-gray-800 rounded transition-all duration-300"
        :class="{ 'opacity-0': isOpen }"
      ></span>
      <span
        class="block w-6 h-[3px] bg-gray-800 rounded transition-all duration-300"
        :class="{ '-rotate-45 -translate-y-[8px]': isOpen }"
      ></span>
    </div>

    <transition name="fade">
      <div
        v-if="isOpen"
        class="absolute top-[80px] left-0 w-full bg-white shadow-md flex flex-col items-center space-y-6 py-6 z-50 md:hidden"
      >
        <a href="#" class="text-gray-800 font-[500] text-[17px] btn-primary" @click="isOpen = false"
          >Home</a
        >
        <a href="#" class="text-gray-800 font-[500] text-[17px] btn-primary" @click="isOpen = false"
          >Sports</a
        >
        <a href="#" class="text-gray-800 font-[500] text-[17px] btn-primary" @click="isOpen = false"
          >About</a
        >
        <a href="#" class="text-gray-800 font-[500] text-[17px] btn-primary" @click="isOpen = false"
          >Contact Us</a
        >
        <div class="flex flex-col gap-4 w-[80%] items-center">
          <button
            class="w-[50%] rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition h-11 text-[17px] cursor-pointer"
          >
            Login
          </button>
          <button
            class="hidden md:block w-full rounded-3xl bg-primary text-white hover:opacity-90 transition h-11 text-[17px]"
          >
            Get Started
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.text-primary {
  color: var(--primary);
}
.bg-primary {
  background: linear-gradient(to right, var(--primary), var(--secondry));
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
