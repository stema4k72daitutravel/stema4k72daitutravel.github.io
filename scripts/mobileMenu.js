document.addEventListener("DOMContentLoaded", () => {
  // --- Xử lý Toggle Menu ---
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconX = document.getElementById("icon-x");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.toggle("hidden");
      // Nếu menu mở (không hidden) -> Hiện X, Ẩn MenuIcon. Ngược lại.
      iconMenu?.classList.toggle("hidden", !isHidden);
      iconX?.classList.toggle("hidden", isHidden);
    });
  }

  // --- Xử lý Dropdown (Accordion) ---
  const dropdownHeaders = document.querySelectorAll(".mobile-dropdown-header");

  dropdownHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const arrow =
        header.querySelector('[data-lucide="chevron-down"]') ||
        header.querySelector("i");

      const isOpen = content.classList.contains("open");

      // 1. Đóng tất cả các dropdown khác đang mở
      document
        .querySelectorAll(".mobile-dropdown-content.open")
        .forEach((openContent) => {
          if (openContent !== content) {
            openContent.classList.remove("open");
            // Tìm header tương ứng để xoay mũi tên về lại
            const siblingHeader = openContent.previousElementSibling;
            const siblingArrow =
              siblingHeader?.querySelector('[data-lucide="chevron-down"]') ||
              siblingHeader?.querySelector("i");
            if (siblingArrow) siblingArrow.style.transform = "rotate(0deg)";
          }
        });

      // 2. Toggle dropdown hiện tại
      content.classList.toggle("open");
      if (arrow) {
        arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
      }
    });
  });
});
