const menuIcon = document.querySelector(".mobile-menu-icon");
const mobMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
  mobMenu.classList.toggle("active");
});
