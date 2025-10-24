<template>
  <div class="min-h-screen bg-gradient-to-br p-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="bg-white shadow-sm rounded-2xl p-8 mb-6">
        <div class="flex justify-between items-center mb-2">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">My Plans</h1>
            <p class="text-gray-500 mt-1">Easily manage, edit, and organize all your training plans in one place</p>
          </div>
          <button
            @click="showCreateModal = true"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
          >
            <span class="text-xl">+</span>
            Create New Plan
          </button>
        </div>

        <!-- Search & Filter -->
        <div class="flex gap-4 mt-6">
          <div class="relative flex-1">
            <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search Plans.."
              class="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            v-model="filterStatus"
            class="px-6 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
          >
            <option value="All">All Plans</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      <!-- Table Section -->
      <div class="bg-white shadow-sm rounded-2xl overflow-hidden">
        <table class="w-full">
          <thead class="bg-blue-50 border-b-2 border-blue-100">
            <tr>
              <th class="text-left p-5 font-semibold text-gray-700">Plan Title</th>
              <th class="text-left p-5 font-semibold text-gray-700">Duration</th>
              <th class="text-left p-5 font-semibold text-gray-700">Clients</th>
              <th class="text-left p-5 font-semibold text-gray-700">Status</th>
              <th class="text-left p-5 font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="filteredPlans.length === 0">
              <td colspan="5" class="text-center p-12 text-gray-400 text-lg">
                No plans found
              </td>
            </tr>
            <tr
              v-for="plan in filteredPlans"
              :key="plan.id"
              class="border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <td class="p-5">
                <div class="flex items-center gap-3">
                  <div class="bg-blue-100 p-2 rounded-lg">
                    <span class="text-blue-600 text-xl">📋</span>
                  </div>
                  <span class="font-medium text-gray-800">{{ plan.title }}</span>
                </div>
              </td>
              <td class="p-5 text-gray-600">{{ plan.duration }}</td>
              <td class="p-5 text-gray-600">{{ plan.clientsCount || 0 }}</td>
              <td class="p-5">
                <span
                  :class="plan.status === 'Active'
                    ? 'text-green-600 bg-green-50'
                    : 'text-red-600 bg-red-50'"
                  class="px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ plan.status }}
                </span>
              </td>
              <td class="p-5">
                <button
                  @click="openManageModal(plan)"
                  class="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all"
                >
                  Manage Plans
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Create Plan Modal -->
    <div
      v-if="showCreateModal"
      class="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click.self="showCreateModal = false"
    >
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl animate-fadeIn">
        <!-- Modal Header -->
        <div class="flex justify-between items-center p-6 border-b">
          <div class="flex items-center gap-3">
            <div class="bg-blue-100 p-2 rounded-lg">
              <span class="text-blue-600 text-xl">📋</span>
            </div>
            <h2 class="text-xl font-bold text-gray-800">Create a New Plan</h2>
          </div>
        </div>

        <!-- Modal Body -->
        <div class="p-6 space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Title of The Plan</label>
              <input
                v-model="newPlan.title"
                type="text"
                placeholder="Enter the plan name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Status</label>
              <select
                v-model="newPlan.status"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Number of Sessions</label>
              <input
                v-model.number="newPlan.sessions"
                type="number"
                placeholder="24"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Duration</label>
              <select
                v-model="newPlan.duration"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>Select duration</option>
                <option value="3 weeks">3 weeks</option>
                <option value="6 weeks">6 weeks</option>
                <option value="8 weeks">8 weeks</option>
                <option value="12 weeks">12 weeks</option>
                <option value="20 weeks">20 weeks</option>
                <option value="30 weeks">30 weeks</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Price</label>
              <input
                v-model.number="newPlan.price"
                type="number"
                placeholder="$ 100"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-600 mb-2">Location</label>
            <div class="flex gap-2">
              <input
                v-model="newPlan.location"
                type="text"
                placeholder="Description"
                class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button class="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                📍
              </button>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="flex justify-end gap-3 p-6 border-t bg-gray-50">
          <button
            @click="showCreateModal = false"
            class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
          >
            Cancel
          </button>
          <button
            @click="createPlan"
            class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create a New Plan
          </button>
        </div>
      </div>
    </div>

    <!-- Manage Plan Modal -->
    <div
      v-if="showManageModal"
      class="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click.self="showManageModal = false"
    >
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl animate-fadeIn">
        <!-- Modal Header -->
        <div class="flex justify-between items-center p-6 border-b">
          <div class="flex items-center gap-3">
            <div class="bg-blue-100 p-2 rounded-lg">
              <span class="text-blue-600 text-xl">📋</span>
            </div>
            <h2 class="text-xl font-bold text-gray-800">Plan Details</h2>
          </div>
        </div>

        <!-- Modal Body -->
        <div class="p-6 space-y-4">
          <div class="grid grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Title of The Plan</label>
              <input
                v-model="selectedPlan.title"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Active Clients</label>
              <input
                :value="selectedPlan.clientsCount || 0"
                type="text"
                disabled
                class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Status</label>
              <select
                v-model="selectedPlan.status"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Number of Sessions</label>
              <input
                v-model.number="selectedPlan.sessions"
                type="number"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Duration</label>
              <select
                v-model="selectedPlan.duration"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="3 weeks">3 weeks</option>
                <option value="6 weeks">6 weeks</option>
                <option value="8 weeks">8 weeks</option>
                <option value="12 weeks">12 weeks</option>
                <option value="20 weeks">20 weeks</option>
                <option value="30 weeks">30 weeks</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-2">Price</label>
              <input
                v-model.number="selectedPlan.price"
                type="number"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-600 mb-2">Location</label>
            <input
              v-model="selectedPlan.location"
              type="text"
              placeholder="Description"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="flex justify-between p-6 border-t bg-gray-50">
          <button
            @click="confirmDelete"
            class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Delete Plan
          </button>
          <div class="flex gap-3">
            <button
              @click="showManageModal = false"
              class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
            >
              Discard Changes
            </button>
            <button
              @click="updatePlan"
              class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div
      v-if="showDeleteModal"
      class="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click.self="showDeleteModal = false"
    >
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-fadeIn text-center p-8">
        <div class="flex justify-center mb-4">
          <div class="bg-red-100 p-4 rounded-full">
            <span class="text-red-600 text-4xl">🗑️</span>
          </div>
        </div>
        <h2 class="text-xl font-bold text-gray-800 mb-2">Are you sure you want to delete this plan?</h2>
        <p class="text-gray-500 mb-6">This action cannot be undone.</p>
        <div class="flex gap-3 justify-center">
          <button
            @click="showDeleteModal = false"
            class="px-8 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Cancel
          </button>
          <button
            @click="deletePlan"
            class="px-8 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-fadeIn text-center p-8">
        <div class="flex justify-center mb-4">
          <div class="bg-green-100 p-4 rounded-full">
            <span class="text-green-600 text-5xl">✓</span>
          </div>
        </div>
        <h2 class="text-xl font-bold text-gray-800">{{ successMessage }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // ✅ إضافة auth
import { toast } from "vue3-toastify";

export default {
  name: "TrainerPlans",
  setup() {
    const db = getFirestore();
    const auth = getAuth(); // ✅ تعريف auth
    const trainerUid = ref(null); // ✅ بدل الثابت بمتغير reactive

    const plans = ref([]);
    const showCreateModal = ref(false);
    const showManageModal = ref(false);
    const showDeleteModal = ref(false);
    const showSuccessModal = ref(false);
    const successMessage = ref("");
    const searchQuery = ref("");
    const filterStatus = ref("All");
    const selectedPlan = ref(null);

    const newPlan = ref({
      title: "",
      status: "Active",
      location: "",
      sessions: 0,
      duration: "",
      price: 0,
    });

    // ✅ جلب الخطط بناءً على UID الحالي
    const fetchPlans = async () => {
      if (!trainerUid.value) return; // تأكد إن UID جاهز
      const plansRef = collection(db, "plans");
      const q = query(plansRef, where("trainer_uid", "==", trainerUid.value));
      const snapshot = await getDocs(q);
      plans.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    };

    const createPlan = async () => {
      if (!newPlan.value.title.trim()) {
        toast.error("Please enter a plan title", { position: "top-center", autoClose: 2000 });
        return;
      }
      if (!newPlan.value.duration) {
        toast.error("Please select a duration", { position: "top-center", autoClose: 2000 });
        return;
      }
      if (!newPlan.value.sessions || newPlan.value.sessions <= 0) {
        toast.error("Please enter number of sessions", { position: "top-center", autoClose: 2000 });
        return;
      }
      if (!newPlan.value.price || newPlan.value.price <= 0) {
        toast.error("Please enter a valid price", { position: "top-center", autoClose: 2000 });
        return;
      }

      try {
        if (!trainerUid.value) {
          toast.error("User not authenticated", { position: "top-center", autoClose: 2000 });
          return;
        }

        await addDoc(collection(db, "plans"), {
          ...newPlan.value,
          trainer_uid: trainerUid.value, // ✅ استخدام UID الديناميكي
          clientsCount: 0,
        });

        newPlan.value = {
          title: "",
          status: "Active",
          location: "",
          sessions: 0,
          duration: "",
          price: 0,
        };
        showCreateModal.value = false;
        showSuccess("The plan is created successfully");
        fetchPlans();
      } catch (err) {
        console.error("Error creating plan:", err);
        toast.error("Failed to create plan. Please try again.", { position: "top-center", autoClose: 2000 });
      }
    };

    const openManageModal = (plan) => {
      selectedPlan.value = { ...plan };
      showManageModal.value = true;
    };

    const updatePlan = async () => {
      if (!selectedPlan.value) return;
      if (!selectedPlan.value.title.trim()) {
        toast.error("Please enter a plan title", { position: "top-center", autoClose: 2000 });
        return;
      }

      try {
        const planRef = doc(db, "plans", selectedPlan.value.id);
        await updateDoc(planRef, {
          title: selectedPlan.value.title,
          status: selectedPlan.value.status,
          location: selectedPlan.value.location,
          sessions: selectedPlan.value.sessions,
          duration: selectedPlan.value.duration,
          price: selectedPlan.value.price,
        });

        showManageModal.value = false;
        showSuccess("The plan is updated successfully");
        fetchPlans();
      } catch (err) {
        console.error("Error updating plan:", err);
        toast.error("Failed to update plan. Please try again.", { position: "top-center", autoClose: 2000 });
      }
    };

    const confirmDelete = () => {
      showManageModal.value = false;
      showDeleteModal.value = true;
    };

    const deletePlan = async () => {
      if (!selectedPlan.value) return;

      await deleteDoc(doc(db, "plans", selectedPlan.value.id));
      showDeleteModal.value = false;
      showSuccess("The plan is deleted successfully");
      fetchPlans();
    };

    const showSuccess = (message) => {
      successMessage.value = message;
      showSuccessModal.value = true;
      setTimeout(() => {
        showSuccessModal.value = false;
      }, 2000);
    };

    const filteredPlans = computed(() => {
      return plans.value.filter((plan) => {
        const matchesSearch = plan.title
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());
        const matchesStatus =
          filterStatus.value === "All" || plan.status === filterStatus.value;
        return matchesSearch && matchesStatus;
      });
    });

    // ✅ التحقق من المستخدم الحالي عند التحميل
    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          trainerUid.value = user.uid;
          fetchPlans();
        } else {
          console.warn("No user logged in");
        }
      });
    });

    return {
      plans,
      newPlan,
      searchQuery,
      filterStatus,
      filteredPlans,
      showCreateModal,
      showManageModal,
      showDeleteModal,
      showSuccessModal,
      successMessage,
      selectedPlan,
      createPlan,
      openManageModal,
      updatePlan,
      confirmDelete,
      deletePlan,
    };
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}
</style>
