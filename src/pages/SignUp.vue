<template>
  <div
    class="min-h-screen flex items-center justify-start px-20 bg-cover bg-center bg-no-repeat"
    style="background-image: url(&quot;/src/assets/images/signup.png&quot;)"
  >
    <div class="w-full max-w-md bg-white bg-opacity-95 rounded-lg p-3">
      <div class="bg-white rounded-lg p-4">
        <!-- Brand -->
        <div class="mb-4">
          <span
            class="text-2xl font-bold bg-gradient-to-r from-[#00C853] to-[#00B0FF] bg-clip-text text-transparent"
          >
            Trainly
          </span>
        </div>

        <h2 class="text-xl font-semibold mb-5">Create Your Account</h2>

        <!-- Step Indicator -->
        <div class="flex justify-center items-center mb-4">
          <div v-for="step in 3" :key="step" class="flex items-center">
            <div
              class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
              :class="
                currentStep >= step
                  ? 'bg-gradient-to-r from-[#00C853] to-[#00B0FF] text-white scale-110'
                  : 'bg-gray-300 text-gray-500'
              "
            >
              {{ step }}
            </div>
            <div
              v-if="step < 3"
              class="w-10 h-0.5 mx-1 transition-all duration-300"
              :class="
                currentStep > step ? 'bg-gradient-to-r from-[#00C853] to-[#00B0FF]' : 'bg-gray-300'
              "
            ></div>
          </div>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit">
          <!-- Step 1 -->
          <div v-show="currentStep === 1" class="animate-fade-in">
            <!-- Role Selection -->
            <div class="mb-5">
              <div class="flex gap-2">
                <!-- Trainee -->
                <div class="flex-1">
                  <input
                    type="radio"
                    id="trainee"
                    v-model="formData.role"
                    value="trainee"
                    class="hidden"
                  />
                  <label
                    for="trainee"
                    class="flex flex-col items-center cursor-pointer text-center transition-all duration-300 rounded-md"
                    :class="
                      formData.role === 'trainee'
                        ? 'border-green-500 bg-green-50 transform -translate-y-1 scale-105 shadow-md'
                        : ''
                    "
                  >
                    <span
                      class="w-full p-3 text-lg rounded-md transition-all duration-300"
                      :class="
                        formData.role === 'trainee'
                          ? 'bg-gradient-to-r from-[#00C853] to-[#00B0FF] text-white'
                          : 'bg-[#E9F5EE] text-black'
                      "
                    >
                      I'm a Trainee
                    </span>
                  </label>
                </div>

                <!-- Trainer -->
                <div class="flex-1">
                  <input
                    type="radio"
                    id="trainer"
                    v-model="formData.role"
                    value="trainer"
                    class="hidden"
                  />
                  <label
                    for="trainer"
                    class="flex flex-col items-center cursor-pointer text-center transition-all duration-300 rounded-md"
                    :class="
                      formData.role === 'trainer'
                        ? 'border-green-500 bg-green-50 transform -translate-y-1 scale-105 shadow-md'
                        : ''
                    "
                  >
                    <span
                      class="w-full p-3 text-lg rounded-md transition-all duration-300"
                      :class="
                        formData.role === 'trainer'
                          ? 'bg-gradient-to-r from-[#00C853] to-[#00B0FF] text-white'
                          : 'bg-[#E9F5EE] text-black'
                      "
                    >
                      I'm a Trainer
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Name Fields -->
            <div class="flex gap-3 mb-4">
              <div class="flex-1">
                <label for="first-name" class="block text-sm mb-1">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  v-model="formData.firstName"
                  placeholder="Enter name"
                  class="w-full p-2 border rounded-md shadow-sm text-sm"
                  :class="errors.firstName ? 'border-red-500' : 'border-gray-300'"
                />
                <p v-if="errors.firstName" class="text-red-500 text-xs mt-1">
                  {{ errors.firstName }}
                </p>
              </div>
              <div class="flex-1">
                <label for="last-name" class="block text-sm mb-1">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  v-model="formData.lastName"
                  placeholder="Enter name"
                  class="w-full p-2 border rounded-md shadow-sm text-sm"
                  :class="errors.lastName ? 'border-red-500' : 'border-gray-300'"
                />
                <p v-if="errors.lastName" class="text-red-500 text-xs mt-1">
                  {{ errors.lastName }}
                </p>
              </div>
            </div>

            <!-- Birthday and Gender -->
            <div class="flex gap-3 mb-4">
              <div class="cursor-pointer flex-1">
                <label for="birthdate" class="block text-sm mb-1">Birthday</label>
                <input
                  type="date"
                  id="birthdate"
                  v-model="formData.birthdate"
                  class="w-full p-2 border rounded-md shadow-sm text-sm"
                  :class="errors.birthdate ? 'border-red-500' : 'border-gray-300'"
                />
                <p v-if="errors.birthdate" class="text-red-500 text-xs mt-1">
                  {{ errors.birthdate }}
                </p>
              </div>
              <div class="flex-1">
                <label for="gender" class="block text-sm mb-1">Gender</label>
                <select
                  id="gender"
                  v-model="formData.gender"
                  class="cursor-pointer w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
                  :class="errors.gender ? 'border-red-500' : 'border-gray-300'"
                >
                  >
                  <option value="" disabled selected>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <p v-if="errors.gender" class="text-red-500 text-xs mt-1">
                  {{ errors.gender }}
                </p>
              </div>
            </div>

            <!-- Email -->
            <div class="mb-4">
              <label for="email" class="block text-sm mb-1">Email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                placeholder="Enter email"
                class="w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
                :class="errors.email ? 'border-red-500' : 'border-gray-300'"
              />
              <p v-if="errors.email" class="text-red-500 text-xs mt-1">
                {{ errors.email }}
              </p>
            </div>

            <!-- Password -->
            <div class="flex gap-3 mb-2">
              <div class="flex-1">
                <label for="password" class="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  v-model="formData.password"
                  placeholder="Enter password"
                  class="w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
                  :class="errors.password ? 'border-red-500' : 'border-gray-300'"
                />
                <p v-if="errors.password" class="text-red-500 text-xs mt-1">
                  {{ errors.password }}
                </p>
              </div>
              <div class="flex-1">
                <label for="confirm-password" class="block text-sm mb-1">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  v-model="formData.confirmPassword"
                  placeholder="Enter password"
                  class="w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
                  :class="errors.confirmPassword ? 'border-red-500' : 'border-gray-300'"
                />
                <p v-if="errors.confirmPassword" class="text-red-500 text-xs mt-1">
                  {{ errors.confirmPassword }}
                </p>
              </div>
            </div>

            <p class="text-xs text-gray-600 mb-4">
              *At least 8 characters mixed between letters, numbers and symbols
            </p>

            <div class="text-sm mb-5">
              Already have an account?
              <router-link to="login" class="text-blue-500 underline">Log in</router-link>
            </div>

            <div class="flex gap-2 mt-4">
              <button
                type="button"
                @click="nextStep"
                class="cursor-pointer flex-1 p-2 bg-gradient-to-r from-[#00C853] to-[#00B0FF] text-white rounded-md transition-all duration-300 hover:opacity-90 transform hover:-translate-y-0.5"
              >
                Next
              </button>
            </div>
          </div>

          <!-- Step 2 -->
          <div v-show="currentStep === 2" class="animate-fade-in">
            <!-- Phone Number -->
            <div class="mb-4">
              <label for="phone" class="block text-sm mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                v-model="formData.phone"
                placeholder="Enter phone number"
                class="w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
                :class="errors.phone ? 'border-red-500' : 'border-gray-300'"
              />
              <p v-if="errors.phone" class="text-red-500 text-xs mt-1">
                {{ errors.phone }}
              </p>
            </div>

            <!-- City and Country -->
            <div class="flex gap-3 mb-4">
              <div class="flex-1">
                <label for="city" class="block text-sm mb-1">City</label>
                <input
                  type="text"
                  id="city"
                  v-model="formData.city"
                  placeholder="Enter a city"
                  class="w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
                  :class="errors.city ? 'border-red-500' : 'border-gray-300'"
                />
                <p v-if="errors.city" class="text-red-500 text-xs mt-1">
                  {{ errors.city }}
                </p>
              </div>
              <div class="flex-1">
                <label for="country" class="block text-sm mb-1">Country</label>
                <input
                  type="text"
                  id="country"
                  v-model="formData.country"
                  placeholder="Enter a country"
                  class="w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
                  :class="errors.country ? 'border-red-500' : 'border-gray-300'"
                />
                <p v-if="errors.country" class="text-red-500 text-xs mt-1">
                  {{ errors.country }}
                </p>
              </div>
            </div>

            <!-- Trainer Only Section -->
            <div
              v-if="formData.role === 'trainer'"
              class="border-t border-gray-300 pt-4 mt-4 animate-slide-down"
            >
              <div class="mb-4">
                <label for="sport" class="block text-sm mb-1">Sport</label>
                <select
                  id="sport"
                  v-model="formData.sport"
                  class="w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
                  :class="errors.sport ? 'border-red-500' : 'border-gray-300'"
                >
                  <option value="" disabled selected>Select your sport</option>
                  <option value="bodybuilding">Bodybuilding</option>
                  <option value="padel">Padel</option>
                  <option value="tennis">Tennis</option>
                </select>
                <p v-if="errors.sport" class="text-red-500 text-xs mt-1">
                  {{ errors.sport }}
                </p>
              </div>

              <div class="mb-4">
                <label for="experience" class="block text-sm mb-1">Years of Experience</label>
                <input
                  type="number"
                  id="experience"
                  v-model="formData.experience"
                  min="0"
                  max="50"
                  class="w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
                  :class="errors.experience ? 'border-red-500' : 'border-gray-300'"
                />
                <p v-if="errors.experience" class="text-red-500 text-xs mt-1">
                  {{ errors.experience }}
                </p>
              </div>

              <div class="mb-4">
                <label class="block text-sm mb-1">Upload Certifications</label>
                <label
                  for="certifications"
                  class="inline-block px-3 py-2 bg-gradient-to-r from-[#00C853] to-[#00B0FF] text-white text-sm rounded-md cursor-pointer transition-all duration-300 hover:opacity-90 transform hover:-translate-y-0.5"
                  :class="certificationsError ? 'border-red-500 text-red-500' : ''"
                >
                  Choose Files
                </label>
                <input
                  type="file"
                  id="certifications"
                  @change="handleCertificationsUpload"
                  multiple
                  class="hidden"
                />
                <div v-if="certificationsError" class="text-red-500 text-sm mt-1">
                  {{ certificationsError }}
                </div>
                <div class="mt-2">
                  <div
                    v-for="(file, index) in certifications"
                    :key="index"
                    class="flex items-center justify-between p-2 bg-gray-100 rounded-md text-sm mb-1"
                  >
                    <span class="flex-1">{{ file.name }}</span>
                    <button
                      type="button"
                      @click="removeCertification(index)"
                      class="text-red-500 text-lg"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex gap-2 mt-4">
              <button
                type="button"
                @click="prevStep"
                class="cursor-pointer flex-1 p-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md transition-all duration-300 hover:opacity-90 transform hover:-translate-y-0.5"
              >
                Previous
              </button>
              <button
                type="button"
                @click="nextStep"
                class="cursor-pointer flex-1 p-2 bg-gradient-to-r from-[#00C853] to-[#00B0FF] text-white rounded-md transition-all duration-300 hover:opacity-90 transform hover:-translate-y-0.5"
              >
                Next
              </button>
            </div>
          </div>

          <!-- Step 3 -->
          <div v-show="currentStep === 3" class="animate-fade-in">
            <!-- Profile Picture Upload -->
            <div class="text-center mb-6">
              <div class="mb-4">
                <div
                  class="w-30 h-30 rounded-full border-2 border-gray-300 mx-auto mb-4 overflow-hidden cursor-pointer transition-all duration-300 hover:border-green-500"
                  @click="$refs.profilePicture.click()"
                >
                  <div
                    v-if="!profilePicturePreview"
                    class="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-500"
                  >
                    <span class="text-xl">👤</span>
                  </div>
                  <img
                    v-else
                    :src="profilePicturePreview"
                    alt="Profile Preview"
                    class="w-full h-full object-cover"
                  />
                </div>
                <label
                  for="profile-picture"
                  class="inline-block px-3 py-2 bg-gradient-to-r from-[#00C853] to-[#00B0FF] text-white text-sm rounded-md cursor-pointer transition-all duration-300 hover:opacity-90 transform hover:-translate-y-0.5"
                >
                  Choose Profile Picture
                </label>
                <input
                  type="file"
                  id="profile-picture"
                  ref="profilePicture"
                  @change="handleProfilePictureUpload"
                  accept="image/*"
                  class="hidden"
                />
              </div>
            </div>

            <!-- Username -->
            <div class="mb-4">
              <label for="username" class="block text-sm mb-1">Username</label>
              <input
                type="text"
                id="username"
                v-model="formData.username"
                @input="checkUsernameAvailability"
                placeholder="Choose a username"
                class="w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
                :class="errors.username ? 'border-red-500' : 'border-gray-300'"
              />
              <p v-if="errors.username" class="text-red-500 text-xs mt-1">
                {{ errors.username }}
              </p>
              <div
                class="text-xs mt-1 min-h-4"
                :class="
                  usernameStatus === 'available'
                    ? 'text-green-500'
                    : usernameStatus === 'taken'
                      ? 'text-red-500'
                      : ''
                "
              >
                {{ usernameMessage }}
              </div>
              <p class="text-xs text-gray-600 mt-2">
                *Upload your profile picture and choose your username to complete your registration.
                Once you're done, your account will be reviewed by the admin — you'll be notified as
                soon as it's approved!
              </p>
            </div>

            <div class="flex gap-2 mt-4">
              <button
                type="button"
                @click="prevStep"
                class="cursor-pointer flex-1 p-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md transition-all duration-300 hover:opacity-90 transform hover:-translate-y-0.5"
              >
                Previous
              </button>
              <button
                type="button"
                @click="handleSubmit"
                class="cursor-pointer flex-1 p-2 bg-gradient-to-r from-[#00C853] to-[#00B0FF] text-white rounded-md transition-all duration-300 hover:opacity-90 transform hover:-translate-y-0.5"
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Success Popup -->
    <div
      v-if="showSuccess"
      class="fixed inset-0 flex items-center justify-center z-50 bg-blur animate-fade-in"
      style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh"
    >
      <div
        class="bg-white rounded-3xl p-8 max-w-md w-full mx-4 text-center shadow-2xl animate-scale-in border-4 border-blue-400"
      >
        <!-- Green Heart Icon -->
        <div
          class="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg class="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <h2 class="text-2xl font-bold text-green-600 mb-4">Thank you for signing up! 🎉</h2>

        <p class="text-gray-700 mb-2 leading-relaxed">
          Your information is currently being reviewed by our admin team.
        </p>
        <p class="text-gray-700 mb-2 leading-relaxed">
          If your details are valid, your account will be activated within 48 hours.
        </p>
        <p class="text-gray-600 mb-6 leading-relaxed">
          You'll receive an email once your account is approved.
        </p>

        <!-- OK Button -->
        <button
          @click="closeSuccessModal"
          class="cursor-pointer w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
        >
          Ok
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {
      currentStep: 1,
      totalSteps: 3,
      showSuccess: false,
      formData: {
        role: "trainee",
        firstName: "",
        lastName: "",
        birthdate: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        city: "",
        country: "",
        username: "",
        sport: "",
        experience: "",
      },
      errors: {},
      profilePicture: null,
      profilePicturePreview: null,
      certifications: [],
      certificationsError: "",
      usernameStatus: "",
      usernameMessage: "",
      usernameTimeout: null,
    };
  },
  methods: {
    nextStep() {
      if (!this.validateStep(this.currentStep)) {
        return;
      }

      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      } else {
        this.handleSubmit();
      }
    },
    prevStep() {
      if (this.currentStep > 1) this.currentStep--;
    },
    validateStep(step) {
      this.errors = {};
      switch (step) {
        case 1:
          return this.validateStep1();
        case 2:
          return this.validateStep2();
        case 3:
          return this.validateStep3();
        default:
          return true;
      }
    },
    validateStep1() {
      const required = [
        "firstName",
        "lastName",
        "birthdate",
        "gender",
        "email",
        "password",
        "confirmPassword",
      ];
      let valid = true;

      for (const field of required) {
        if (!this.formData[field]) {
          this.errors[field] = "This field is required";
          valid = false;
        }
      }

      if (!valid) return false;

      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-]).{8,}$/;
      if (!passwordRegex.test(this.formData.password)) {
        this.errors.password = "Password must be 8+ characters with letters, numbers, and symbols";
        return false;
      }

      if (this.formData.password !== this.formData.confirmPassword) {
        this.errors.confirmPassword = "Passwords do not match";
        return false;
      }

      return true;
    },
    validateStep2() {
      this.errors = {};
      const required = ["phone", "city", "country"];
      let valid = true;

      for (const field of required) {
        if (!this.formData[field]) {
          this.errors[field] = "This field is required";
          valid = false;
        }
      }

      // Validate trainer-specific fields
      if (this.formData.role === "trainer") {
        if (!this.formData.sport) {
          this.errors.sport = "This field is required";
          valid = false;
        }
        if (!this.formData.experience) {
          this.errors.experience = "This field is required";
          valid = false;
        }
        if (this.certifications.length === 0) {
          this.certificationsError = "Please upload at least one certification file";
          valid = false;
        } else {
          this.certificationsError = "";
        }
      }

      return valid;
    },
    validateStep3() {
      this.errors = {};
      if (!this.formData.username) {
        this.errors.username = "This field is required";
        return false;
      }
      if (this.usernameStatus !== "available") {
        this.errors.username = "Please choose an available username";
        return false;
      }
      return true;
    },
    handleProfilePictureUpload(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024) {
        this.profilePicture = file;
        const reader = new FileReader();
        reader.onload = (e) => (this.profilePicturePreview = e.target.result);
        reader.readAsDataURL(file);
      } else {
        this.errors.profilePicture = "Please select a valid image (max 5MB)";
        event.target.value = "";
        this.profilePicture = null;
        this.profilePicturePreview = null;
      }
    },
    handleCertificationsUpload(event) {
      this.certifications = Array.from(event.target.files);
      this.certificationsError = "";
    },
    removeCertification(index) {
      this.certifications.splice(index, 1);
      const dt = new DataTransfer();
      this.certifications.forEach((file) => dt.items.add(file));
      document.getElementById("certifications").files = dt.files;
    },
    checkUsernameAvailability() {
      if (this.usernameTimeout) clearTimeout(this.usernameTimeout);
      const username = this.formData.username.trim();
      if (username.length < 3) {
        this.usernameStatus = "";
        this.usernameMessage = "";
        return;
      }
      this.usernameTimeout = setTimeout(() => {
        const taken = ["admin", "user", "test", "trainer", "trainee"];
        const available = !taken.includes(username.toLowerCase());
        this.usernameStatus = available ? "available" : "taken";
        this.usernameMessage = available
          ? "✓ Username is available"
          : "✗ Username is already taken";
      }, 500);
    },
    handleSubmit() {
      if (!this.validateStep(this.currentStep)) return;

      if (this.formData.role === "trainer") {
        this.showSuccess = true;
      } else {
        window.location.href = "/";
      }
    },
    closeSuccessModal() {
      this.showSuccess = false;
      window.location.href = "/login";
    },
  },
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-scale-in {
  animation: scaleIn 0.3s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
