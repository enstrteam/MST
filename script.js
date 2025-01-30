const menuToggle = document.getElementById("menu-toggle");
const navigationMenu = document.getElementById("navigation-menu");

menuToggle.addEventListener("click", () => {
  navigationMenu.classList.toggle("open");
  menuToggle.classList.toggle("open");
});


const form = document.getElementById("contactForm");
const modal = document.getElementById("successModal");
const closeModalBtn = document.getElementById("closeModal");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const privacyCheckbox = document.getElementById("privacy");
  if (!privacyCheckbox.checked) {
    alert("Please accept the Privacy policy.");
    return;
  }

  modal.showModal(); 
  form.reset(); 
});

closeModalBtn.addEventListener("click", () => {
  modal.close(); 
});
