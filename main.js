const mobileHembergar = document.querySelector(".mobile-manu");
const nav = document.querySelector("nav");
const sidebarBtn = document.querySelector(".sidebar-btn");
const closeIcon = document.querySelector(".close-icon");

mobileHembergar.addEventListener("click", startNav);
function startNav() {
  nav.classList.add("mobile-sidebar");
  nav.style.display = "block";
  sidebarBtn.style.display = "block";
  closeIcon.style.display = "block";
}
closeIcon.addEventListener("click", closeNav);
function closeNav() {
  nav.classList.remove("mobile-sidebar");
  nav.style.display = "block";
  sidebarBtn.style.display = "none";
  closeIcon.style.display = "none";
}
