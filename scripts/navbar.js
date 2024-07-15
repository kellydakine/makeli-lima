document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.querySelector(".nav-menu");

  navMenu.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});