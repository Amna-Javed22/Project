const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', function(e) {
  e.preventDefault();  // Form submit ko rok do jab tak validation complete na ho

  let valid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
    valid = false;
  } else {
    nameError.textContent = '';
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Valid email is required';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();  // Form clear kar do submit hone ke baad
  }
});
