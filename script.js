let currentStep = 1;
const totalSteps = 3;
const form = document.getElementById('registration-form');

document.addEventListener('DOMContentLoaded', () => {
  updateStepIndicator(currentStep);
  setupEventListeners();
  toggleTrainerSection();
});

function setupEventListeners() {
  document.querySelectorAll('input[name="role"]').forEach(radio =>
    radio.addEventListener('change', toggleTrainerSection)
  );

  document.getElementById('profile-picture').addEventListener('change', handleProfilePictureUpload);
  document.getElementById('certifications').addEventListener('change', handleCertificationsUpload);
  document.getElementById('username').addEventListener('input', checkUsernameAvailability);
  document.querySelectorAll('.btn-next').forEach(btn => btn.addEventListener('click', handleNextClick));
  document.querySelectorAll('.btn-prev').forEach(btn => btn.addEventListener('click', handlePrevClick));
  document.querySelector('.btn-success').addEventListener('click', resetForm);
  form.addEventListener('submit', handleFormSubmit);
}

function updateStepIndicator(step) {
  document.querySelectorAll('.step').forEach((s, i) => s.classList.toggle('active', i < step));
  document.querySelectorAll('.step-line').forEach((l, i) => l.classList.toggle('active', i < step - 1));
}

function handleNextClick(e) {
  const current = parseInt(e.target.closest('.form-step').id.split('-')[1]);
  nextStep(current);
}

function handlePrevClick(e) {
  const current = parseInt(e.target.closest('.form-step').id.split('-')[1]);
  prevStep(current);
}

function nextStep(current) {
  const stepEl = document.getElementById(`step-${current}`);

  // Validate required fields
  for (let input of stepEl.querySelectorAll('input, select')) {
    if (input.type === 'file') continue;
    if (input.required && !input.value.trim()) {
      input.setCustomValidity('This field is required');
      input.reportValidity();
      return;
    }
    input.setCustomValidity('');
  }

  // Validate password on step 1
  if (current === 1 && !validatePassword()) return;

  // Validate certifications for trainers on step 2
  if (current === 2 && !validateCertifications()) return;

  // Move to next step
  stepEl.classList.remove('active');
  currentStep = current + 1;

  if (currentStep <= totalSteps) {
    document.getElementById(`step-${currentStep}`).classList.add('active');
    updateStepIndicator(currentStep);
  } else {
    form.requestSubmit();
  }
}

function validatePassword() {
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  const passwordVal = password.value.trim();
  const confirmVal = confirmPassword.value.trim();

  if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-]).{8,}$/.test(passwordVal)) {
    password.setCustomValidity('Password must be 8+ chars with letters, numbers, and symbols');
    password.reportValidity();
    return false;
  }

  if (passwordVal !== confirmVal) {
    confirmPassword.setCustomValidity('Passwords do not match');
    confirmPassword.reportValidity();
    return false;
  }

  password.setCustomValidity('');
  confirmPassword.setCustomValidity('');
  return true;
}

function validateCertifications() {
  const isTrainer = document.getElementById('trainer').checked;
  const certInput = document.getElementById('certifications');

  if (isTrainer && (!certInput.files || certInput.files.length === 0)) {
    showCertificationsError('Please upload at least one certification file');
    return false;
  }

  hideCertificationsError();
  return true;
}

function prevStep(current) {
  document.getElementById(`step-${current}`).classList.remove('active');
  currentStep = current - 1;
  document.getElementById(`step-${currentStep}`).classList.add('active');
  updateStepIndicator(currentStep);
}

function toggleTrainerSection() {
  const isTrainer = document.getElementById('trainer').checked;
  const trainerSection = document.getElementById('trainer-section');
  const trainerFields = ['sport', 'experience', 'certifications'];

  trainerSection.style.display = isTrainer ? 'block' : 'none';
  trainerFields.forEach(field => {
    document.getElementById(field).required = isTrainer;
  });

  if (!isTrainer) hideCertificationsError();
}

function showCertificationsError(message) {
  hideCertificationsError();
  const uploadLabel = document.getElementById('certifications').previousElementSibling;

  const errorElement = document.createElement('div');
  errorElement.className = 'certifications-error';
  errorElement.style.cssText = 'color: #e74c3c; font-size: 14px; margin-top: 5px;';
  errorElement.textContent = message;

  uploadLabel.parentNode.insertBefore(errorElement, uploadLabel.nextSibling);
  uploadLabel.style.borderColor = '#e74c3c';
  uploadLabel.style.color = '#e74c3c';
}

function hideCertificationsError() {
  const uploadLabel = document.getElementById('certifications').previousElementSibling;
  const existingError = uploadLabel.parentNode.querySelector('.certifications-error');

  if (existingError) existingError.remove();
  uploadLabel.style.borderColor = '';
  uploadLabel.style.color = '';
}

function handleProfilePictureUpload(e) {
  const file = e.target.files[0];
  const preview = document.getElementById('preview-image');
  const placeholder = document.getElementById('profile-preview').querySelector('.upload-placeholder');

  if (file && file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024) {
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.src = e.target.result;
      preview.style.display = 'block';
      placeholder.style.display = 'none';
    };
    reader.readAsDataURL(file);
  } else {
    preview.style.display = 'none';
    placeholder.style.display = 'flex';
    e.target.value = '';
  }
}

function handleCertificationsUpload(e) {
  const files = Array.from(e.target.files);
  const list = document.getElementById('certifications-list');

  hideCertificationsError();
  list.innerHTML = '';

  files.forEach((file, idx) => {
    const item = document.createElement('div');
    item.className = 'file-item';
    item.innerHTML = `<span class="file-name">${file.name}</span>
                     <button type="button" class="remove-file" data-index="${idx}">×</button>`;
    list.appendChild(item);
  });

  list.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-file')) {
      const idx = parseInt(event.target.dataset.index);
      files.splice(idx, 1);
      const dt = new DataTransfer();
      files.forEach(f => dt.items.add(f));
      e.target.files = dt.files;
      handleCertificationsUpload(e);
    }
  });
}

function checkUsernameAvailability() {
  const username = this.value.trim();
  const status = document.getElementById('username-status');

  if (username.length < 3) {
    status.textContent = '';
    status.className = 'username-availability';
    return;
  }

  setTimeout(() => {
    const taken = ['admin', 'user', 'test', 'trainer', 'trainee'];
    const isAvailable = !taken.includes(username.toLowerCase());

    status.textContent = isAvailable ? '✓ Username is available' : '✗ Username is already taken';
    status.className = `username-availability ${isAvailable ? 'available' : 'taken'}`;
  }, 500);
}

function handleFormSubmit(e) {
  e.preventDefault();

  if (!validateCertifications()) {
    // Go back to step 2 if certifications are missing
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep = 2;
    document.getElementById(`step-${currentStep}`).classList.add('active');
    updateStepIndicator(currentStep);
    return;
  }

  // Show success message
  document.getElementById(`step-${currentStep}`).classList.remove('active');
  document.getElementById('step-success').classList.add('active');
}

function resetForm() {
  form.reset();
  currentStep = 1;

  document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  document.getElementById('step-1').classList.add('active');
  updateStepIndicator(currentStep);

  // Reset UI elements
  document.getElementById('preview-image').style.display = 'none';
  document.getElementById('profile-preview').querySelector('.upload-placeholder').style.display = 'flex';
  document.getElementById('certifications-list').innerHTML = '';
  document.getElementById('username-status').textContent = '';

  toggleTrainerSection();
  hideCertificationsError();
}
