const toggle = document.querySelector(".toggle");
const mobileMenu = document.querySelector(".drop");

toggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("drop");
  mobileMenu.classList.toggle("mob__menu");
  const isOpen = mobileMenu.classList.contains("drop");
  toggle.classList = isOpen ? "fa-solid fa-bars" : "fa-solid fa-xmark";
});
