const form = document.getElementById("contactForm");

if (form) {

  const statusBox = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    clearErrors();
    statusBox.className = "form-status";
    statusBox.style.display = "none";

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    if (name.value.trim() === "") {
      showError(name, "Name is required");
      valid = false;
    }

    if (!validateEmail(email.value)) {
      showError(email, "Enter a valid email");
      valid = false;
    }

    if (phone.value.trim().length < 10) {
      showError(phone, "Enter valid phone number");
      valid = false;
    }

    if (!valid) return;

    // Simulate Submission (Replace with real backend later)
    submitBtn.classList.add("loading");
    submitBtn.innerText = "Submitting...";

    setTimeout(() => {

      statusBox.innerHTML = "✅ Your message has been successfully submitted! We will contact you shortly.";
      statusBox.classList.add("success");

      form.reset();

      submitBtn.classList.remove("loading");
      submitBtn.innerText = "Submit";

      // Auto hide after 5 seconds
      setTimeout(() => {
        statusBox.style.display = "none";
      }, 5000);

    }, 1500);
  });
}

function showError(input, message) {
  const error = input.nextElementSibling;
  error.innerText = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(el => el.innerText = "");
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

if (slides.length > 0) {
  setInterval(changeSlide, 4000);
}