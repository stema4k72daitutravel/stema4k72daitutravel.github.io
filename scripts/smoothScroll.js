document.addEventListener("click", (e) => {
  // Kiểm tra xem phần tử được click (hoặc cha của nó) có phải là thẻ <a> bắt đầu bằng # không
  const anchor = e.target.closest('a[href^="#"]');

  if (anchor) {
    const targetId = anchor.getAttribute("href").substring(1);
    // Bỏ qua nếu chỉ là link "#" hoặc rỗng
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault(); // Chỉ ngăn chặn hành vi mặc định nếu tìm thấy element đích

      const offset = 64; // Chiều cao Navbar
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Nếu đang ở mobile menu, tự động đóng menu sau khi click
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        document.getElementById("menu-toggle").click();
      }
    }
  }
});
