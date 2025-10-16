// ======= Multi-step form =======
let currentStep = 1;
const totalSteps = 3;

const form = document.getElementById('registration-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateStepIndicator(currentStep);
  setupEventListeners();
});

// ========== Event Listeners ==========
function setupEventListeners() {
  document.querySelectorAll('input[name="role"]').forEach((radio) => {
    radio.addEventListener('change', toggleTrainerSection);
  });

  document
    .getElementById('profile-picture')
    .addEventListener('change', handleProfilePictureUpload);
  document
    .getElementById('certifications')
    .addEventListener('change', handleCertificationsUpload);
  document
    .getElementById('username')
    .addEventListener('input', checkUsernameAvailability);

  document
    .querySelectorAll('.btn-next')
    .forEach((btn) => btn.addEventListener('click', handleNextClick));
  document
    .querySelectorAll('.btn-prev')
    .forEach((btn) => btn.addEventListener('click', handlePrevClick));
  document.querySelector('.btn-success').addEventListener('click', resetForm);

  // Form submit
  form.addEventListener('submit', handleFormSubmit);
}

// ======= Step Navigation =======
function updateStepIndicator(step) {
  const steps = document.querySelectorAll('.step');
  const stepLines = document.querySelectorAll('.step-line');

  steps.forEach((s, i) => s.classList.toggle('active', i < step));
  stepLines.forEach((l, i) => l.classList.toggle('active', i < step - 1));
}

function handleNextClick(e) {
  const currentStepNumber = parseInt(
    e.target.closest('.form-step').id.split('-')[1]
  );
  nextStep(currentStepNumber);
}

function handlePrevClick(e) {
  const currentStepNumber = parseInt(
    e.target.closest('.form-step').id.split('-')[1]
  );
  prevStep(currentStepNumber);
}

function nextStep(current) {
  const stepElement = document.getElementById(`step-${current}`);
  const passwordVal = password.value.trim();
  const confirmVal = confirmPassword.value.trim();

  // Reset validity messages
  password.setCustomValidity('');
  confirmPassword.setCustomValidity('');

  if (current === 1) {
    // Password required
    if (!passwordVal) {
      password.setCustomValidity('This field is required');
      password.reportValidity();
      return;
    }

    // Password strength check
    const strongPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-]).{8,}$/;
    if (!strongPassword.test(passwordVal)) {
      password.setCustomValidity(
        'Password must be at least 8 characters and include letters, numbers, and symbols'
      );
      password.reportValidity();
      return;
    }

    // Confirm required
    if (!confirmVal) {
      confirmPassword.setCustomValidity('This field is required');
      confirmPassword.reportValidity();
      return;
    }

    // Password match
    if (passwordVal !== confirmVal) {
      confirmPassword.setCustomValidity('Passwords do not match');
      confirmPassword.reportValidity();
      return;
    }
  }

  // Validate current step fields
  const inputs = stepElement.querySelectorAll('input, select, textarea');
  for (let input of inputs) {
    if (!input.checkValidity()) {
      input.reportValidity();
      return;
    }
  }

  document.getElementById(`step-${current}`).classList.remove('active');
  currentStep = current + 1;
  if (currentStep <= totalSteps) {
    document.getElementById(`step-${currentStep}`).classList.add('active');
    updateStepIndicator(currentStep);
  } else {
    form.requestSubmit();
  }
}

function prevStep(current) {
  document.getElementById(`step-${current}`).classList.remove('active');
  currentStep = current - 1;
  document.getElementById(`step-${currentStep}`).classList.add('active');
  updateStepIndicator(currentStep);
}

// ======= Step Validation =======
function validateStep(step) {
  let isValid = true;
  const errors = [];

  if (step === 2) {
    const phone = document.getElementById('phone').value.trim();
    const city = document.getElementById('city').value.trim();
    const country = document.getElementById('country').value.trim();
    const sport = document.getElementById('sport').value;
    const experience = document.getElementById('experience').value;

    if (!phone) errors.push('Phone number is required');
    if (!city) errors.push('City is required');
    if (!country) errors.push('Country is required');
    if (!sport) errors.push('Sport is required');
    if (!experience && experience !== '0')
      errors.push('Years of experience is required');
    const phoneRegex = /^(010|011|012|015)\d{8}$/;
    if (phone && !phoneRegex.test(phone.replace(/[\s\-()]/g, '')))
      errors.push('Please enter a valid phone number');
  }

  if (step === 3) {
    const username = document.getElementById('username').value.trim();
    const terms = document.getElementById('terms').checked;
    if (!username) errors.push('Username is required');
    if (username && username.length < 3)
      errors.push('Username must be at least 3 characters');
    if (!terms) errors.push('You must agree to the terms');
  }

  if (errors.length) {
    alert('Please fix the following errors:\n' + errors.join('\n'));
    isValid = false;
  }

  return isValid;
}

// ======= Trainer Section =======
function toggleTrainerSection() {
  const trainerSection = document.getElementById('trainer-section');
  trainerSection.style.display = document.getElementById('trainer').checked
    ? 'block'
    : 'none';
}

// ======= Profile Picture =======
function handleProfilePictureUpload(e) {
  const file = e.target.files[0];
  const previewImage = document.getElementById('preview-image');
  const placeholder = document
    .getElementById('profile-preview')
    .querySelector('.upload-placeholder');

  if (file && file.type.match('image.*') && file.size <= 5 * 1024 * 1024) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.src = e.target.result;
      previewImage.style.display = 'block';
      placeholder.style.display = 'none';
    };
    reader.readAsDataURL(file);
  } else {
    previewImage.style.display = 'none';
    placeholder.style.display = 'flex';
    e.target.value = '';
  }
}

// ======= Certifications Upload =======
function handleCertificationsUpload(e) {
  const files = Array.from(e.target.files);
  const list = document.getElementById('certifications-list');
  list.innerHTML = '';

  files.forEach((file, idx) => {
    const item = document.createElement('div');
    item.className = 'file-item';
    item.innerHTML = `<span class="file-name">${file.name}</span><button type="button" class="remove-file" data-index="${idx}">×</button>`;
    list.appendChild(item);
  });

  document.querySelectorAll('.remove-file').forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.getAttribute('data-index'));
      files.splice(index, 1);
      const dt = new DataTransfer();
      files.forEach((f) => dt.items.add(f));
      e.target.files = dt.files;
      handleCertificationsUpload(e);
    });
  });
}

// ======= Username check (simulated) =======
function checkUsernameAvailability() {
  const username = this.value.trim();
  const statusElement = document.getElementById('username-status');

  if (username.length < 3) {
    statusElement.textContent = '';
    statusElement.className = 'username-availability';
    return;
  }

  setTimeout(() => {
    const taken = ['admin', 'user', 'test', 'trainer', 'trainee'];
    if (taken.includes(username.toLowerCase())) {
      statusElement.textContent = '✗ Username is already taken';
      statusElement.className = 'username-availability taken';
    } else {
      statusElement.textContent = '✓ Username is available';
      statusElement.className = 'username-availability available';
    }
  }, 500);
}

// ======= Form Submission =======
function handleFormSubmit(e) {
  e.preventDefault();
  if (validateStep(3)) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    document.getElementById('step-success').classList.add('active');
    console.log('Form submitted successfully');
  }
}

// ======= Reset Form =======
function resetForm() {
  form.reset();
  currentStep = 1;
  document
    .querySelectorAll('.form-step')
    .forEach((s) => s.classList.remove('active'));
  document.getElementById('step-1').classList.add('active');
  updateStepIndicator(currentStep);

  document.getElementById('preview-image').style.display = 'none';
  document
    .getElementById('profile-preview')
    .querySelector('.upload-placeholder').style.display = 'flex';
  document.getElementById('certifications-list').innerHTML = '';
  toggleTrainerSection();
  document.getElementById('username-status').textContent = '';
  confirmPassword.style.borderColor = '';
}
// ======= Password Validation (for reference) =======
if (!password || password.length < 8);

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-]).{8,}$/;
if (!passwordRegex.test(password)) if (password !== confirmPassword);
