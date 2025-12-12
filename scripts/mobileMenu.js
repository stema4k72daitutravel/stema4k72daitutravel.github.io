document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const dropdowns = document.querySelectorAll(".mobile-dropdown-header");

  // Toggle menu chính
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  // Toggle các menu con (dropdown)
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      const content = dropdown.nextElementSibling;
      const icon = dropdown.querySelector("i");
      if (content) {
        content.classList.toggle("hidden");
        if (icon) icon.classList.toggle("rotate-180");
      }
    });
  });
});
