// Hàm xử lý Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const iconMenu = document.getElementById("icon-menu");
const iconX = document.getElementById("icon-x");

if (menuToggle && mobileMenu && iconMenu && iconX) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    iconMenu.classList.toggle("hidden");
    iconX.classList.toggle("hidden");
  });
}

// Hàm xử lý Mobile Dropdown (Accordion)
document.querySelectorAll(".mobile-dropdown-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector("i");

    // Đóng tất cả các dropdown khác
    document
      .querySelectorAll(".mobile-dropdown-content")
      .forEach((otherContent) => {
        const otherHeader = otherContent.previousElementSibling;
        const otherIcon = otherHeader ? otherHeader.querySelector("i") : null;

        if (
          otherContent !== content &&
          otherContent.classList.contains("open")
        ) {
          otherContent.classList.remove("open");
          if (otherIcon) {
            otherIcon.classList.remove("rotate-180");
          }
        }
      });

    // Mở/đóng dropdown hiện tại
    if (content) {
      content.classList.toggle("open");
    }
    if (icon) {
      icon.classList.toggle("rotate-180");
    }
  });
});

document.querySelectorAll(".mobile-dropdown-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('[data-lucide="chevron-down"]');

    content.classList.toggle("open");
    if (arrow) {
      arrow.style.transform = content.classList.contains("open")
        ? "rotate(180deg)"
        : "rotate(0deg)";
    }
  });
});
