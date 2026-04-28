const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const year = document.getElementById("year");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}
