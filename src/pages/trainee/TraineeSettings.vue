<template>
  <div class="mb-10">
    <h2 class="text-[24px] font-medium text-gray-900">Settings</h2>
    <p class="mt-2 text-[16px] text-gray-500">
      Manage your account settings and preferences here.
    </p>
  </div>
  

  <form
    @submit.prevent="handleSubmit"
    class="max-w-5xl p-15 border border-gray-200 rounded-3xl shadow-xl bg-white flex flex-col items-center"
  >
    
      <div class="flex items-center gap-3 mb-6 self-start">
        <img src="@/assets/images/page-1.png" alt="icon" class="w-6 h-6" />
        <div>
          <h2 class="text-lg font-medium text-gray-900">
            Personal Information
          </h2>
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
          <label
            for="first-name"
            class="block text-sm font-medium text-gray-900"
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
          <label for="last-name" class="block text-sm font-medium text-gray-900"
            >Last Name</label
          >
          <input
            id="last-name"
            v-model="formData.lastName"
            type="text"
            class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-900"
            >Email</label
          >
          <input
            id="email"
            v-model="formData.email"
            type="email"
            class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label for="gender" class="block text-sm font-medium text-gray-900"
            >Gender</label
          >
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
          <label for="city" class="block text-sm font-medium text-gray-900"
            >City</label
          >
          <input
            id="city"
            v-model="formData.city"
            type="text"
            class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label for="country" class="block text-sm font-medium text-gray-900"
            >Country</label
          >
          <input
            id="country"
            v-model="formData.country"
            type="text"
            class="mt-2 w-full rounded-xl border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label for="birthday" class="block text-sm font-medium text-gray-900"
            >Birthday</label
          >
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
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  name: "TrainerSettings",
  data() {
    return {
      userId: "RLNUgZtNdpfu2SSqBPyMyRqvGCO2",
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
    };
  },
  async mounted() {
    await this.fetchUserData(); // جلب البيانات عند فتح الصفحة
  },
  methods: {
    async fetchUserData() {
      try {
        const userRef = doc(db, "users", this.userId);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          this.formData = { ...this.formData, ...docSnap.data() };
          if (docSnap.data().profilePicture) {
            this.previewImage = docSnap.data().profilePicture;
          }
        } else {
          console.log("No such user!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },

    handleFileUpload(e) {
      const file = e.target.files[0];
      this.formData.profilePicture = file;
      this.previewImage = URL.createObjectURL(file);
    },

    async handleSubmit() {
      try {
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

        alert("✅ Data updated successfully!");
      } catch (error) {
        console.error("❌ Error updating user:", error);
        alert("Failed to update data!");
      }
    },
  },
};
</script>

<style scoped></style>
