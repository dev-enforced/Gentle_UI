const toggleActionGenerator = document.querySelector(".toggle-holder");
const sidebarListedComponents = document.querySelector(".sidebar-components");
toggleActionGenerator.addEventListener("click", () => {
  toggleActionGenerator.classList.toggle("rotate");
  sidebarListedComponents.classList.toggle("sidebar-hidden");
});
