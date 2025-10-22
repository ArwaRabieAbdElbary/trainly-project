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

      // 🟢 تغيير الخط حسب اللغة
      document.body.style.fontFamily =
        newLocale === "ar" ? "'Tajawal', sans-serif" : "'Poppins', sans-serif";
    },
  },
  mounted() {
    // ضبط الاتجاه حسب اللغة المحفوظة
    document.dir = this.$i18n.locale === "ar" ? "rtl" : "ltr";
  },
};
</script>

<template>
  <nav
    class="flex justify-between items-center px-[50px] md:px-[70px] h-20 bg-white shadow-sm relative"
  >
    <!-- 🔹 اللوجو -->
    <img
      src="@/assets/images/Project LOGO.png"
      alt="Logo"
      class="w-[140px] h-auto"
    />

    <!-- 🔹 روابط التنقل -->
    <ul
      class="hidden md:flex items-center justify-center md:space-x-10 lg:space-x-16 font-[500] md:text-[85%] lg:text-[100%]"
    >
      <router-link to="/">
        <li><a href="#" class="btn-primary">{{ $t("home") }}</a></li>
      </router-link>

      <router-link to="aboutus">
        <li><a href="#" class="btn-primary">{{ $t("about") }}</a></li>
      </router-link>

      <router-link to="sports">
        <li><a href="#" class="btn-primary">{{ $t("sports") }}</a></li>
      </router-link>

      <router-link to="contactus">
        <li><a href="#" class="btn-primary">{{ $t("contact") }}</a></li>
      </router-link>
    </ul>

    <!-- 🔹 الأزرار وتبديل اللغة -->
    <div class="hidden md:flex items-center gap-3">
      <button
        @click="$router.push('/login')"
        class="min-w-[130px] lg:min-w-[150px] px-4 rounded-3xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition h-10 lg:h-11 text-[14px] lg:text-[17px] cursor-pointer"
      >
        {{ $t("login") }}
      </button>
      <button
        @click="$router.push('/signup')"
        class="min-w-[130px] lg:min-w-[150px] px-4 rounded-3xl bg-primary text-white hover:opacity-90 transition h-10 lg:h-11 text-[14px] lg:text-[17px] cursor-pointer"
      >
        {{ $t("get_started") }}
      </button>
      <img
        src="@/assets/images/language switch(1)(1).png"
        alt="Language"
        class="w-[40px] cursor-pointer transition-transform duration-500 hover:rotate-180"
        @click="switchLang"
      />
    </div>

    <!-- 🔹 أيقونة الموبايل -->
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

    <!-- 🔹 القائمة المنسدلة للموبايل -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="absolute top-[80px] left-0 w-full bg-white shadow-md flex flex-col items-center space-y-6 py-6 z-50 md:hidden"
      >
        <a
          href="#"
          class="text-gray-800 font-[500] text-[17px] btn-primary"
          @click="isOpen = false"
          >{{ $t("home") }}</a
        >
        <a
          href="#"
          class="text-gray-800 font-[500] text-[17px] btn-primary"
          @click="isOpen = false"
          >{{ $t("sports") }}</a
        >
        <a
          href="#"
          class="text-gray-800 font-[500] text-[17px] btn-primary"
          @click="isOpen = false"
          >{{ $t("about") }}</a
        >
        <a
          href="#"
          class="text-gray-800 font-[500] text-[17px] btn-primary"
          @click="isOpen = false"
          >{{ $t("contact") }}</a
        >

        <div class="flex flex-col gap-4 w-[80%] items-center">
          <button
            class="w-[60%] rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition h-11 text-[17px] cursor-pointer"
          >
            {{ $t("login") }}
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
