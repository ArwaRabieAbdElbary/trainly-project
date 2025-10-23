<template>
  <div class="mb-10">
    <h2 class="text-[24px] font-medium text-gray-900">Settings</h2>
    <p class="mt-2 text-[16px] text-gray-500">
      Manage your account settings and preferences here.
    </p>
  </div>

  <form
    class="max-w-5xl p-15 border border-gray-200 rounded-3xl shadow-xl bg-white flex flex-col items-center"
    @submit.prevent="updateTrainer"
  >
    <div class="w-full">
      <div class="flex items-center gap-3 mb-6">
        <img src="@/assets/images/page-1.png" alt="icon" class="w-6 h-6 " />
        <div>
          <h2 class="text-lg font-medium text-gray-900">
            Personal Information
          </h2>
          <p class="text-sm text-gray-500">Update your personal details</p>
        </div>
      </div>

      <div class="space-y-10 mx-15">
        <!-- Profile Photo -->
        <div class="flex flex-col items-center mb-10">
          <label
            for="profilePhoto"
            class="w-23 h-23 flex flex-col items-center justify-center rounded-full border-2 border-dashed border-gray-300 cursor-pointer hover:border-indigo-500 transition relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-gray-400 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
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

        <!-- Personal Info -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="first-name" class="block text-sm font-medium text-gray-900">First Name</label>
            <input
              id="first-name"
              type="text"
              v-model="formData.firstName"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-900">Last Name</label>
            <input
              id="last-name"
              type="text"
              v-model="formData.lastName"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
            <input
              id="email"
              type="email"
              v-model="formData.email"
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
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <!-- City / Country / Birthday -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label for="city" class="block text-sm font-medium text-gray-900">City</label>
            <input
              id="city"
              type="text"
              v-model="formData.city"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label for="country" class="block text-sm font-medium text-gray-900">Country</label>
            <input
              id="country"
              type="text"
              v-model="formData.country"
              class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label for="birthday" class="block text-sm font-medium text-gray-900">Birthday</label>
            <div class="mt-2 flex items-center border border-gray-300 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500 bg-gray-50">
              <input
                id="birthday"
                type="date"
                v-model="formData.birthdate"
                class="flex-1 bg-transparent focus:outline-none text-gray-700 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <!-- Experience -->
        <div>
          <label for="years-exp" class="block text-sm font-medium text-gray-900">Years of Experience</label>
          <input
            id="years-exp"
            type="number"
            v-model="formData.experience"
            class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <!-- Upload Certificate -->
        <h2 class="text-sm font-medium text-gray-900 mt-8">Upload Certificate</h2>
        <div class="flex text-center border-2 border-dashed border-gray-300 p-5 rounded-xl hover:border-indigo-400 transition mt-3">
          <div class="flex-1">
            <input
              id="certificate"
              type="file"
              class="hidden"
              @change="newCertificate = $event.target.files[0]"
            />
            <label
              for="certificate"
              class="cursor-pointer inline-block bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition text-sm"
            >
              Upload
            </label>
            <p class="text-xs text-gray-500 mt-2">PDF, JPG up to 10MB</p>

            <!-- عرض كل الشهادات -->
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
    </div>

    <!-- Buttons -->
    <div class="mt-10 flex-wrap md:flex justify-between items-center w-full">
      <button
        type="button"
        class="border-2 border-red-500 text-red-500 font-medium text-sm py-2 px-6 rounded-lg hover:bg-red-50 transition mx-15"
      >
        Delete Account
      </button>
      <button
        type="submit"
        class="bg-indigo-600 text-white font-medium text-sm py-2 px-6 rounded-lg hover:bg-indigo-500 transition mx-15"
      >
        Save Changes
      </button>
    </div>
  </form>
</template>

<script>
import { db, storage } from "@/Firebase/firebaseConfig.js";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  name: "TrainerSettings",
  data() {
    return {
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
    };
  },
  async mounted() {
    const docRef = doc(db, "users", "L1yCynH48ePK4w9Vy6FtYXJPcgF2");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      this.formData = docSnap.data();
    }
  },
  methods: {
    async uploadFile(file, type) {
      if (!file) return null;
      const fileRef = storageRef(storage, `users/${type}-${Date.now()}-${file.name}`);
      await uploadBytes(fileRef, file);
      return await getDownloadURL(fileRef);
    },
    async updateTrainer() {
      if (this.newProfilePhoto) {
        this.formData.profilePicture = await this.uploadFile(this.newProfilePhoto, "profilePhoto");
      }
      if (this.newCertificate) {
        const url = await this.uploadFile(this.newCertificate, "certificate");
        if (!this.formData.certifications) this.formData.certifications = [];
        this.formData.certifications.push(url);
      }

      const docRef = doc(db, "users", "L1yCynH48ePK4w9Vy6FtYXJPcgF2");
      await updateDoc(docRef, this.formData);
      alert("✅ Data updated successfully!");
    },
  },
};
</script>
