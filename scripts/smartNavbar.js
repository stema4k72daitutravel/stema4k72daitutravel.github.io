document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  let lastScrollY = window.scrollY;
  const hideThreshold = 100;
  let ticking = false; // Biến cờ để kiểm soát requestAnimationFrame

  function updateNavbar() {
    const currentScrollY = window.scrollY;

    // Chỉ xử lý khi cuộn đủ xa để tránh rung lắc
    if (Math.abs(currentScrollY - lastScrollY) < 5) {
      ticking = false;
      return;
    }

    if (currentScrollY < lastScrollY) {
      // Cuộn lên -> Hiện
      navbar.classList.remove("navbar-hidden");
    } else if (currentScrollY > lastScrollY && currentScrollY > hideThreshold) {
      // Cuộn xuống & qua ngưỡng -> Ẩn
      navbar.classList.add("navbar-hidden");
    }

    lastScrollY = currentScrollY;
    ticking = false; // Reset cờ sau khi vẽ xong
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  });
});
