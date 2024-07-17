document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.querySelector(".header-nav");

  navMenu.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});