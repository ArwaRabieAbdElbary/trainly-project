let currentStep = 1;
const totalSteps = 3;

const form = document.getElementById('registration-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

document.addEventListener('DOMContentLoaded', () => {
  updateStepIndicator(currentStep);
  setupEventListeners();
});

function setupEventListeners() {
  document
    .querySelectorAll('input[name="role"]')
    .forEach((radio) => radio.addEventListener('change', toggleTrainerSection));

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

  form.addEventListener('submit', handleFormSubmit);
}

function updateStepIndicator(step) {
  const steps = document.querySelectorAll('.step');
  const stepLines = document.querySelectorAll('.step-line');
  steps.forEach((s, i) => s.classList.toggle('active', i < step));
  stepLines.forEach((l, i) => l.classList.toggle('active', i < step - 1));
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
  const passwordVal = password.value.trim();
  const confirmVal = confirmPassword.value.trim();

  password.setCustomValidity('');
  confirmPassword.setCustomValidity('');

  if (current === 1) {
    if (!passwordVal) {
      password.setCustomValidity('Required');
      password.reportValidity();
      return;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-]).{8,}$/.test(passwordVal)) {
      password.setCustomValidity(
        'Password must be 8+ chars with letters, numbers, symbols'
      );
      password.reportValidity();
      return;
    }
    if (!confirmVal) {
      confirmPassword.setCustomValidity('Required');
      confirmPassword.reportValidity();
      return;
    }
    if (passwordVal !== confirmVal) {
      confirmPassword.setCustomValidity('Passwords do not match');
      confirmPassword.reportValidity();
      return;
    }
  }

  const inputs = stepEl.querySelectorAll('input, select, textarea');
  for (let input of inputs) {
    if (!input.checkValidity()) {
      input.reportValidity();
      return;
    }
  }

  stepEl.classList.remove('active');
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

function toggleTrainerSection() {
  const trainerSection = document.getElementById('trainer-section');
  trainerSection.style.display = document.getElementById('trainer').checked
    ? 'block'
    : 'none';
}

function handleProfilePictureUpload(e) {
  const file = e.target.files[0];
  const preview = document.getElementById('preview-image');
  const placeholder = document
    .getElementById('profile-preview')
    .querySelector('.upload-placeholder');
  if (file && file.type.match('image.*') && file.size <= 5 * 1024 * 1024) {
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
  list.innerHTML = '';
  files.forEach((file, idx) => {
    const item = document.createElement('div');
    item.className = 'file-item';
    item.innerHTML = `<span class="file-name">${file.name}</span><button type="button" class="remove-file" data-index="${idx}">×</button>`;
    list.appendChild(item);
  });
  list.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-file')) {
      const idx = parseInt(event.target.dataset.index);
      files.splice(idx, 1);
      const dt = new DataTransfer();
      files.forEach((f) => dt.items.add(f));
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
    if (taken.includes(username.toLowerCase())) {
      status.textContent = '✗ Username is already taken';
      status.className = 'username-availability taken';
    } else {
      status.textContent = '✓ Username is available';
      status.className = 'username-availability available';
    }
  }, 500);
}

function handleFormSubmit(e) {
  e.preventDefault();
  document.getElementById(`step-${currentStep}`).classList.remove('active');
  document.getElementById('step-success').classList.add('active');
}

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
}
