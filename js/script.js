// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Appointment form validation (client-side only — no backend yet)
const form = document.getElementById('appointment-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const service = form.service.value;
  const date = form.date.value;

  const phonePattern = /^0\d{9}$/;

  if (!name || !phone || !service || !date) {
    showStatus('Please fill in every field before requesting a slot.', 'error');
    return;
  }

  if (!phonePattern.test(phone.replace(/\s+/g, ''))) {
    showStatus('Enter a valid Kenyan phone number, e.g. 0712345678.', 'error');
    return;
  }

  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    showStatus('Pick a date that has not already passed.', 'error');
    return;
  }

  showStatus(`Thanks ${name.split(' ')[0]} — we'll confirm your ${service} slot on ${date} by SMS.`, 'success');
  form.reset();
});

function showStatus(message, type) {
  status.textContent = message;
  status.className = `form-status ${type}`;
}
