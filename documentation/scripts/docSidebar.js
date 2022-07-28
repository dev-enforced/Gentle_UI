const toggleHeading = document.querySelector(".toggle-list");
const sidebarList = document.querySelector(".sidebar-components");
toggleHeading.addEventListener("click", () => {
  sidebarList.classList.toggle("sidebar-hidden");
  toggleHeading.classList.toggle("rotation");
});
