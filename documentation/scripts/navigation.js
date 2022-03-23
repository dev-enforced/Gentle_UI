const resposiveNavbarToggle = document.querySelector("#navbar-hamburger");
const navbarResponsive = document.querySelector(
    ".gentle-navbar.gentle-responsive-navbar"
);
resposiveNavbarToggle.addEventListener("click", () => {
    navbarResponsive.classList.toggle("active");
});