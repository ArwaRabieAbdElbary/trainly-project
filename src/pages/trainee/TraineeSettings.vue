<template>
  <!-- Welcome Header -->
  <div
    class="w-full relative mb-10 bg-gradient-to-r from-[#D9EEFF] to-[#AEE2FF] rounded-2xl shadow-md p-6 flex items-center justify-between overflow-hidden"
  >
    <div class="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>

    <div class="flex items-center gap-5 relative z-10">
      <div class="bg-white shadow-sm p-3 rounded-full">
        <img src="../../assets/images/hand.png" alt="User icon" class="w-10 h-10" />
      </div>
      <div>
        <h2 class="text-2xl font-semibold text-gray-800">Welcome back, {{ userData.name }}!</h2>

        <p class="text-sm text-gray-600 mt-1">Ready to crush your fitness goals today? 💪</p>
      </div>
    </div>
  </div>

  <section class="w-full flex flex-col gap-10">
    <div class="">
      <h2 class="text-[24px] font-medium text-gray-900">Settings</h2>
      <p class="mt-2 text-[16px] text-gray-500">
        Manage your account settings and preferences here.
      </p>
    </div>

    <form
      @submit.prevent="handleSubmit"
      class="p-15 border border-gray-200 rounded-3xl shadow-xl bg-white flex flex-col items-center"
    >
      <div class="flex items-center gap-3 mb-6 self-start">
        <div class="bg-[#f4f8fc] w-10 h-10 rounded-lg flex items-center justify-center mr-2 mt-1">
          <img src="../../assets/images/page-1.png" alt="" class="w-5 h-5" />
        </div>
        <div>
          <h2 class="text-lg font-medium text-gray-900">Personal Information</h2>
          <p class="text-sm text-gray-500">Update your personal details</p>
        </div>
      </div>

      <!-- Upload Profile Photo -->
      <div class="flex flex-col items-center mb-10">
        <label
          for="profilePhoto"
          class="w-24 h-24 flex flex-col items-center justify-center rounded-full border-2 border-dashed border-gray-300 cursor-pointer hover:border-indigo-500 transition bg-gray-50 overflow-hidden"
        >
          <img
            v-if="previewImage"
            :src="previewImage"
            alt="Preview"
            class="w-full h-full object-cover rounded-full"
          />
          <div v-else class="flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-gray-400 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span class="text-xs text-gray-500">Upload your photo</span>
          </div>
          <input
            id="profilePhoto"
            type="file"
            class="hidden"
            accept="image/*"
            @change="handleFileUpload"
          />
        </label>
      </div>

      <!-- Personal Info -->
      <div class="w-full space-y-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-15">
          <div>
            <label for="first-name" class="block text-sm font-medium text-gray-900"
              >First Name</label
            >
            <input
              id="first-name"
              v-model="formData.firstName"
              type="text"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-900">Last Name</label>
            <input
              id="last-name"
              v-model="formData.lastName"
              type="text"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label for="gender" class="block text-sm font-medium text-gray-900">Gender</label>
            <select
              id="gender"
              v-model="formData.gender"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="">Select</option>
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
        </div>

        <!-- City / Country / Birthday -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mx-15">
          <div>
            <label for="city" class="block text-sm font-medium text-gray-900">City</label>
            <input
              id="city"
              v-model="formData.city"
              type="text"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label for="country" class="block text-sm font-medium text-gray-900">Country</label>
            <input
              id="country"
              v-model="formData.country"
              type="text"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label for="birthday" class="block text-sm font-medium text-gray-900">Birthday</label>
            <input
              id="birthday"
              v-model="formData.birthdate"
              type="date"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50"
            />
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex flex-col md:flex-row mt-10 flex-wrap justify-between items-center w-full">
        <button
          type="submit"
          class="text-white bg-[#00B0FF] hover:bg-[#36ace2] cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center mx-15 mb-2"
        >
          Save Changes
        </button>
        <button
          @click="deleteAccount"
          class="border-2 border-red-500 text-red-500 font-medium text-sm cursor-pointer py-2 px-6 rounded-lg hover:bg-red-50 transition mx-15"
        >
          Delete Account
        </button>
      </div>
    </form>

    <!-- ========= Security Section ========= -->
    <div class="w-full border border-gray-200 rounded-3xl shadow-xl bg-white p-10">
      <div class="flex mx-5">
        <div class="bg-[#f4f8fc] w-10 h-10 rounded-lg flex items-center justify-center mr-2 mt-1">
          <img src="../../assets/images/security.png" alt="" class="w-5 h-5" />
        </div>

        <div>
          <h2 class="text-xl font-[500] mb-1">Security</h2>
          <p class="mb-6 font-[400] text-[13px] text-gray-500">
            Manage your password and security settings
          </p>
        </div>
      </div>

      <form class="max-w-[95%] mx-17" @submit.prevent="onSubmit">
        <!-- Current password -->
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900">Current Password</label>
          <div class="relative">
            <input
              :type="showCurrent ? 'text' : 'password'"
              v-model="form.current"
              class="shadow-xs border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
              required
            />
            <button
              type="button"
              @click="toggle('current')"
              class="absolute inset-y-0 right-2 flex items-center justify-center px-2 text-gray-500"
            >
              <svg
                v-if="!showCurrent"
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274
                4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <svg
                v-else
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
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477
                0-8.268-2.943-9.542-7a9.965 9.965 0 012.223-3.583M3 3l18 18"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.88 9.88a3 3 0 104.24 4.24"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- New password -->
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900">New Password</label>
          <div class="relative">
            <input
              :type="showNew ? 'text' : 'password'"
              v-model="form.new"
              class="shadow-xs border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
              required
              minlength="8"
            />
            <button
              type="button"
              @click="toggle('new')"
              class="absolute inset-y-0 right-2 flex items-center justify-center px-2 text-gray-500"
            >
              <svg
                v-if="!showNew"
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477
                0 8.268 2.943 9.542 7-1.274 4.057-5.065
                7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <svg
                v-else
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
                  d="M13.875 18.825A10.05 10.05 0 0112
                19c-4.477 0-8.268-2.943-9.542-7a9.965
                9.965 0 012.223-3.583M3 3l18 18"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.88 9.88a3 3 0 104.24 4.24"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Repeat password -->
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
          <div class="relative">
            <input
              :type="showRepeat ? 'text' : 'password'"
              v-model="form.repeat"
              class="shadow-xs border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
              required
              minlength="8"
            />
            <button
              type="button"
              @click="toggle('repeat')"
              class="absolute inset-y-0 right-2 flex items-center justify-center px-2 text-gray-500"
            >
              <svg
                v-if="!showRepeat"
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12
                5c4.477 0 8.268 2.943 9.542 7-1.274
                4.057-5.065 7-9.542 7-4.477
                0-8.268-2.943-9.542-7z"
                />
              </svg>
              <svg
                v-else
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
                  d="M13.875 18.825A10.05 10.05 0 0112
                19c-4.477 0-8.268-2.943-9.542-7a9.965
                9.965 0 012.223-3.583M3 3l18 18"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.88 9.88a3 3 0 104.24 4.24"
                />
              </svg>
            </button>
          </div>
        </div>

        <button
          type="submit"
          class="text-white mt-5 bg-[#00B0FF] hover:bg-[#36ace2] cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto md:mx-0 block"
        >
          Update Password
        </button>

        <p v-if="message" class="text-sm mt-3 text-center" :class="messageColor">
          {{ message }}
        </p>
      </form>
    </div>
  </section>
</template>

<script>
import {
  getAuth,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { db, storage } from "@/Firebase/firebaseConfig.js";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "vue3-toastify";

export default {
  name: "TraineeSettings",

  data() {
    return {
      userId: null,
      previewImage: null,
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        city: "",
        country: "",
        birthdate: "",
        experience: "",
        profilePicture: null,
      },
      showCurrent: false,
      showNew: false,
      showRepeat: false,
      form: { current: "", new: "", repeat: "" },
      userData: {},
    };
  },

  mounted() {
    this.checkUserAndFetchData();
  },

  methods: {
    // ✅ التأكد من المستخدم والداتا بتاعته
    checkUserAndFetchData() {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          this.userId = user.uid;
          this.userData = {
            name: user.displayName || user.email?.split("@")[0] || "User",
            uid: user.uid,
            email: user.email,
            photo: user.photoURL,
          };
          await this.fetchUserData();
        } else {
          toast.error("Please login first");
          this.$router.push("/login");
        }
      });
    },

    // 🟢 جلب بيانات المستخدم من Firestore
    async fetchUserData() {
      try {
        if (!this.userId) return;

        const userRef = doc(db, "users", this.userId);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          this.formData = { ...this.formData, ...docSnap.data() };

          if (docSnap.data().profilePicture) {
            this.previewImage = docSnap.data().profilePicture;
          }

          const firstName = this.formData.firstName || "User";
          this.userData.name = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
        } else {
          console.log("No such user document found!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },

    // 🟢 تحميل الصورة الجديدة
    handleFileUpload(e) {
      const file = e.target.files[0];
      this.formData.profilePicture = file;
      this.previewImage = URL.createObjectURL(file);
    },

    // 🟢 تحديث بيانات المستخدم
    async handleSubmit() {
      try {
        if (!this.userId) {
          toast.error("No user logged in!");
          return;
        }

        const userRef = doc(db, "users", this.userId);
        let imageUrl = null;

        if (this.formData.profilePicture instanceof File) {
          const imageRef = ref(storage, `profilePictures/${this.userId}`);
          await uploadBytes(imageRef, this.formData.profilePicture);
          imageUrl = await getDownloadURL(imageRef);
        }

        await updateDoc(userRef, {
          firstName: this.formData.firstName,
          lastName: this.formData.lastName,
          email: this.formData.email,
          gender: this.formData.gender,
          city: this.formData.city,
          country: this.formData.country,
          birthdate: this.formData.birthdate,
          experience: this.formData.experience,
          ...(imageUrl && { profilePicture: imageUrl }),
        });

        toast.success("Data updated successfully ✅");
      } catch (error) {
        console.error("Error updating user:", error);
        toast.error("Failed to update data!");
      }
    },

    // 🟢 إظهار/إخفاء الباسورد
    toggle(field) {
      if (field === "current") this.showCurrent = !this.showCurrent;
      else if (field === "new") this.showNew = !this.showNew;
      else if (field === "repeat") this.showRepeat = !this.showRepeat;
    },

    // 🟢 تحديث كلمة السر (ما اتغيرش فيه حاجة)
    async onSubmit() {
      if (this.form.new !== this.form.repeat) {
        toast.error("New password and confirmation do not match!");
        return;
      }

      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        toast.error("No user is signed in!");
        return;
      }

      try {
        const credential = EmailAuthProvider.credential(user.email, this.form.current);
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, this.form.new);

        toast.success("Password updated successfully");
        this.form.current = this.form.new = this.form.repeat = "";
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    },

    // 🗑️ حذف الحساب بالكامل
    async deleteAccount() {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
          toast.error("No user is logged in!");
          return;
        }

        // حذف بيانات المستخدم من Firestore
        const userRef = doc(db, "users", user.uid);
        await deleteDoc(userRef);

        // حذف الحساب من Firebase Authentication
        await user.delete();

        toast.success("Account deleted successfully ✅");

        // تسجيل خروج وتحويل بعد ثانيتين
        setTimeout(async () => {
          await auth.signOut();
          this.$router.push("/login");
        }, 2000);
      } catch (error) {
        console.error("Error deleting account:", error);

        if (error.code === "auth/requires-recent-login") {
          toast.error("Please log in again before deleting your account.");
        } else {
          toast.error("Failed to delete account!");
        }
      }
    },
  },
};
</script>

<style scoped></style>
