<template>
  <section class="max-w-5xl mx-auto flex flex-col gap-12">
    <div class="">
      <h2 class="text-[24px] font-medium text-gray-900">Settings</h2>
      <p class="mt-2 text-[16px] text-gray-500">
        Manage your account settings and preferences here.
      </p>
    </div>
    <!-- ========= Personal Info Section ========= -->
    <div class="w-full border border-gray-200 rounded-3xl shadow-xl bg-white p-7">
      <div class="flex items-center gap-3 mb-6">
        <div class="bg-[#D9EEFF] w-10 h-10 rounded-lg flex items-center justify-center mr-2 mt-1">
          <img src="../../assets/images/page-1.png" alt="" class="w-5 h-5" />
        </div>
        <div>
          <h2 class="text-lg font-medium text-gray-900">Personal Information</h2>
          <p class="text-sm text-gray-500">Update your personal details</p>
        </div>
      </div>

      <form class="space-y-10 mx-15" @submit.prevent="updateTrainer">
        <!-- Profile Photo -->
        <div class="flex flex-col items-center mb-10">
          <label
            for="profilePhoto"
            class="w-23 h-23 flex flex-col items-center justify-center rounded-full border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-500 transition relative"
          >
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
            <input
              id="profilePhoto"
              type="file"
              class="hidden"
              @change="newProfilePhoto = $event.target.files[0]"
            />

            <img
              v-if="formData.profilePicture"
              :src="formData.profilePicture"
              class="absolute top-0 left-0 w-full h-full rounded-full object-cover"
            />
          </label>
          <span class="text-sm text-gray-500">Upload your photo</span>
        </div>

        <!-- Inputs -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-900">First Name</label>
            <input
              v-model="formData.firstName"
              type="text"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-900">Last Name</label>
            <input
              v-model="formData.lastName"
              type="text"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-900">Email</label>
            <input
              v-model="formData.email"
              type="email"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-900">Gender</label>
            <select
              v-model="formData.gender"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <!-- City / Country / Birthday -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-900">City</label>
            <input
              v-model="formData.city"
              type="text"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-900">Country</label>
            <input
              v-model="formData.country"
              type="text"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-900">Birthday</label>
            <input
              v-model="formData.birthdate"
              type="date"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
            />
          </div>
        </div>

        <!-- Experience -->
        <div>
          <label class="block text-sm font-medium text-gray-900">Years of Experience</label>
          <input
            v-model="formData.experience"
            type="number"
            class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <!-- Upload Certificate -->
        <div>
          <h2 class="text-sm font-medium text-gray-900 mt-8">Upload Certificate</h2>
          <div
            class="flex text-center border-2 border-dashed border-gray-300 p-5 rounded-xl hover:border-blue-400 transition mt-3"
          >
            <div class="flex-1">
              <input
                id="certificate"
                type="file"
                class="hidden"
                @change="newCertificate = $event.target.files[0]"
              />
              <label
                for="certificate"
                class="cursor-pointer inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition text-sm"
              >
                Upload
              </label>
              <p class="text-xs text-gray-500 mt-2">PDF, JPG up to 10MB</p>

              <div v-if="formData.certifications && formData.certifications.length">
                <a
                  v-for="(cert, index) in formData.certifications"
                  :key="index"
                  :href="cert"
                  target="_blank"
                  class="text-blue-500 mt-2 inline-block ml-4"
                >
                  View Certificate {{ index + 1 }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col md:flex-row mt-10 justify-between w-full gap-4 md:gap-0">
          <button
            type="submit"
            class="text-white bg-[#00B0FF] hover:bg-[#36ace2] cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm py-2 px-6 rounded-lg transition mx-auto md:mx-0"
          >
            Save Changes
          </button>
          <button
            type="button"
            @click="deleteAccount"
            class="border-2 border-red-500 text-red-500 font-medium text-sm cursor-pointer py-2 px-6 rounded-lg hover:bg-red-50 transition mx-auto md:mx-0"
          >
            Delete Account
          </button>
        </div>
      </form>
    </div>

    <!-- ========= Security Section ========= -->
    <div class="w-full border border-gray-200 rounded-3xl shadow-xl bg-white p-7">
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

      <form class="max-w-[95%] ps-[50px]" @submit.prevent="onSubmit">
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
import { db, storage } from "@/Firebase/firebaseConfig.js";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getAuth,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  onAuthStateChanged,
  deleteUser,
} from "firebase/auth";
import { toast } from "vue3-toastify";

export default {
  name: "TrainerSettings",

  data() {
    return {
      userId: null,
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        city: "",
        country: "",
        birthdate: "",
        experience: "",
        profilePicture: "",
        certifications: [],
        phone: "",
        sport: "",
        role: "",
        status: "",
        username: "",
      },
      newProfilePhoto: null,
      newCertificate: null,

      // بيانات الباسورد
      form: { current: "", new: "", repeat: "" },
      showCurrent: false,
      showNew: false,
      showRepeat: false,
    };
  },

  mounted() {
    this.checkUserAndFetchData();
  },

  methods: {
    // ✅ التأكد من تسجيل الدخول
    async checkUserAndFetchData() {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          this.userId = user.uid;
          await this.fetchTrainerData();
        } else {
          toast.error("Please login first");
          this.$router.push("/login");
        }
      });
    },

    // 🟢 جلب بيانات المستخدم
    async fetchTrainerData() {
      try {
        if (!this.userId) return;
        const docRef = doc(db, "users", this.userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          this.formData = docSnap.data();
        }
      } catch (error) {
        console.error("Error fetching trainer data:", error);
      }
    },

    // 🟢 رفع الملفات
    async uploadFile(file, type) {
      if (!file) return null;
      const fileRef = storageRef(
        storage,
        `users/${this.userId}/${type}-${Date.now()}-${file.name}`,
      );
      await uploadBytes(fileRef, file);
      return await getDownloadURL(fileRef);
    },

    // 🟢 تحديث بيانات المستخدم
    async updateTrainer() {
      try {
        if (!this.userId) {
          toast.error("No user logged in!");
          return;
        }

        if (this.newProfilePhoto) {
          this.formData.profilePicture = await this.uploadFile(
            this.newProfilePhoto,
            "profilePhoto",
          );
        }

        if (this.newCertificate) {
          const url = await this.uploadFile(this.newCertificate, "certificate");
          if (!this.formData.certifications) this.formData.certifications = [];
          this.formData.certifications.push(url);
        }

        const docRef = doc(db, "users", this.userId);
        await updateDoc(docRef, this.formData);

        toast.success("Data updated successfully");
      } catch (error) {
        console.error("Error updating trainer data:", error);
        toast.error("Failed to update data!");
      }
    },

    // 🟢 إظهار أو إخفاء كلمة السر
    toggle(field) {
      if (field === "current") this.showCurrent = !this.showCurrent;
      else if (field === "new") this.showNew = !this.showNew;
      else if (field === "repeat") this.showRepeat = !this.showRepeat;
    },

    // 🟢 تحديث كلمة السر
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

        if (!user || !this.userId) {
          toast.error("No user logged in!");
          return;
        }

        // حذف من Firestore
        await deleteDoc(doc(db, "users", this.userId));

        // حذف من Auth
        await deleteUser(user);

        toast.success("Account deleted successfully");
        this.$router.push("/login");
      } catch (error) {
        console.error("Error deleting account:", error);
        toast.error("Failed to delete account!");
      }
    },
  },
};
</script>
