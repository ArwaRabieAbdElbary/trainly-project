<template>

    <!-- Welcome Header -->
  <!-- Welcome Header -->
<div class="bg-white p-6 rounded-2xl shadow-sm mb-8 flex items-center justify-between">
  <div class="flex items-center gap-4">
    <img
      :src="trainee.profilePicture || 'https://via.placeholder.com/122'"
      alt="profile"
      class="w-[122px] h-[122px] rounded-full object-cover"
    />
    <div>
      <h2 class="text-xl font-semibold text-gray-800">
        Welcome back, {{ trainee.firstName }} {{ trainee.lastName }}!
      </h2>
      <p class="text-sm text-gray-500">Need help? We're here for you.</p>
    </div>
  </div>
</div>


    <!-- Customer Service Section -->
    <section>
        <h2 class="text-2xl font-semibold text-gray-800 mb-1">Customer Services</h2>
        <p class="text-gray-500 mb-6">We're here to help you.</p>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Message Form -->
            <div class="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
                <h3 class="text-lg font-semibold mb-4 text-gray-800">Send us a message</h3>
                <p class="text-sm text-gray-500 mb-6">
                    Fill out the form below and we’ll get back to you soon.
                </p>
                <form class="space-y-4" @submit.prevent="sendReport">
                    <!-- Name -->
                    <div>
                        <label class="block text-sm text-gray-600 mb-1">Name</label>
                        <input v-model="form.name" type="text" placeholder="Your full name"
                            class="w-[500px] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
                    </div>

                    <!-- Email -->
                    <div>
                        <label class="block text-sm text-gray-600 mb-1">Email</label>
                        <input v-model="form.email" type="email" placeholder="Your email@example.com"
                            class="w-[500px] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
                    </div>

                    <!-- Message -->
                    <div>
                        <label class="block text-sm text-gray-600 mb-1">Message</label>
                        <textarea v-model="form.message" placeholder="How can we help you?"
                            class="w-[500px] h-[226px] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"></textarea>
                        <p v-if="errors.message" class="text-red-500 text-xs mt-1">{{ errors.message }}</p>
                    </div>

                    <button type="submit"
                        class="w-[500px] bg-[#00B0FF] text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition">
                        Send Message
                    </button>
                </form>



            </div>

            <!-- Contact Info -->
            <div class="flex flex-col w-[413px] h-[266px] gap-6">
                <div class="bg-white p-6 rounded-2xl shadow-md ">
                    <div class="flex flex-col items-start gap-3">
                        <img src="@/assets/images/wpf_message-outline.png" alt="email" class="w-[48px] h-[48px] " />

                        <div>
                            <h4 class="text-lg font-semibold text-gray-800 mb-2">Email Support</h4>
                            <p class="text-sm text-gray-500 mb-2">Get help via email</p>
                            <a href="mailto:support@trainly.com"
                                class="text-sm text-[#00B0FF] font-medium mt-1 mb-2 hover:underline">
                                support@trainly.com
                            </a>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-2xl shadow-sm w-[413px] h-[266px] gap-6">
                    <div class="flex flex-col items-start gap-3">
                        <img src="@/assets/images/Phone.png" alt="phone" class="w-[33px] h-[33px]" />
                        <div>
                            <h4 class="text-lg font-semibold text-gray-800 mb-2">Phone Support</h4>
                            <p class="text-sm text-gray-500 mb-2">Get help via phone</p>
                            <p class="text-sm text-[#00B0FF] font-medium mt-1 mb-2">1-800-0000</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- FAQ Section -->
    <section class="mt-10">
        <div class="bg-white p-6 rounded-2xl shadow-sm mb-8 flex flex-col items-start justify-between">

            <h3 class="text-lg font-semibold mb-4 text-gray-800">Frequently Asked Questions</h3>
            <p class="text-sm text-gray-500 mb-4">Quick answers to common questions</p>

            <div class="w-full">
                <div class="p-4 bg-[#FCFBFB] rounded-2xl shadow-md mb-2 w-full">
                    <h4 class="font-medium text-gray-800">How do I book a session with my trainer?</h4>
                    <p class="text-sm text-gray-500 mt-1">
                        Navigate to "My Trainers" section, select your trainer, and click on "Book Session". Choose your
                        preferred time slot and confirm your booking. </p>
                </div>

                <div class="p-4 bg-[#FCFBFB] rounded-2xl shadow-md mb-2">
                    <h4 class="font-medium text-gray-800">How do I contact my trainer directly?</h4>
                    <p class="text-sm text-gray-500 mt-1">
                        Use the "Inbox" section to send direct messages to your trainer. They typically respond within
                        24 hours during business days. </p>
                </div>

                <div class="p-4 bg-[#FCFBFB] rounded-2xl shadow-md mb-2">
                    <h4 class="font-medium text-gray-800">Can I update my profile information later?</h4>
                    <p class="text-sm text-gray-500 mt-1">
                        Absolutely, go to Settings → Profile to update your information or availability.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- Popup -->
    <!-- Success Popup -->
    <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
        <div class="bg-white p-6 rounded-2xl shadow-lg text-center w-[651px] h-[322px] animate-fadeIn">
            <img src="@/assets/images/done.png" alt="done" class="w-[114px] h-[114px] mx-auto mb-3" />

            <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                Your report has been sent successfully. <br />
                The admin will review it soon.
            </p>

            <button @click="showPopup = false"
                class="bg-[#00B0FF] text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                OK
            </button>
        </div>
    </div>


</template>

<script>
import emailjs from "emailjs-com";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/Firebase/firebaseConfig"; // ⚠️ make sure the “Firebase” folder name matches exactly

export default {
  name: "TraineeCustomerService",

  data() {
    return {
      showPopup: false,
      form: { name: "", email: "", message: "" },
      errors: { name: "", email: "", message: "" },
      trainee: {
        firstName: "",
        lastName: "",
        profilePicture: "https://via.placeholder.com/122",
      },
    };
  },

  methods: {
    // ✅ Fetch trainee info from Firestore
    async fetchTraineeData(uid) {
      try {
        const traineeRef = doc(db, "users", uid);
        const traineeSnap = await getDoc(traineeRef);

        if (traineeSnap.exists()) {
          const data = traineeSnap.data();

          // ✅ Only proceed if this user is a trainee
          if (data.role === "trainee") {
            this.trainee = data;

            // Optional: auto-fill the form
            this.form.name = `${data.firstName} ${data.lastName}`;
            this.form.email = data.email;
          } else {
            console.warn("User is not a trainee.");
          }
        } else {
          console.warn("Trainee not found in Firestore.");
        }
      } catch (error) {
        console.error("Error fetching trainee data:", error);
      }
    },

    // ✅ Send message via EmailJS
    async sendReport() {
      this.errors = { name: "", email: "", message: "" };
      let valid = true;

      if (!this.form.name.trim()) {
        this.errors.name = "Please enter your name.";
        valid = false;
      }
      if (!this.form.email.trim()) {
        this.errors.email = "Please enter your email.";
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.errors.email = "Please enter a valid email.";
        valid = false;
      }
      if (!this.form.message.trim()) {
        this.errors.message = "Please enter your message.";
        valid = false;
      }

      if (!valid) return;

      try {
        await emailjs.send(
          "service_wm84ejo", // your EmailJS service ID
          "template_cgk08e7", // your EmailJS template ID
          {
            name: this.form.name,
            email: this.form.email,
            message: this.form.message,
          },
          "37n0HAmFRsDDfRgJT" // your EmailJS public key
        );

        this.showPopup = true;
        this.form.message = "";
      } catch (error) {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again later.");
      }
    },
  },

  mounted() {
    // ✅ Detect logged-in trainee and load their Firestore data
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.fetchTraineeData(user.uid);
      } else {
        console.warn("No trainee logged in.");
      }
    });
  },
};
</script>



<style scoped>
/* Optional small enhancements */
</style>
