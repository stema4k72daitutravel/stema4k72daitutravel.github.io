// smart_navbar.js

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  // Bắt đầu với vị trí cuộn dọc hiện tại
  let lastScrollY = window.scrollY;

  // Ngưỡng cuộn tối thiểu trước khi bắt đầu ẩn (ví dụ: 100px)
  const hideThreshold = 100;

  function handleSmartScroll() {
    const currentScrollY = window.scrollY;

    // 1. Nếu cuộn lên (người dùng đang cuộn về đầu trang)
    if (currentScrollY < lastScrollY) {
      // Hiển thị thanh điều hướng (xóa class ẩn)
      navbar.classList.remove("navbar-hidden");

      // 2. Nếu cuộn xuống
    } else if (currentScrollY > lastScrollY) {
      // Đảm bảo người dùng cuộn xuống đủ xa trước khi ẩn
      if (currentScrollY > hideThreshold) {
        // Ẩn thanh điều hướng (thêm class ẩn)
        navbar.classList.add("navbar-hidden");
      }
    }

    // 3. Cập nhật vị trí cuộn trước đó cho lần kiểm tra tiếp theo
    lastScrollY = currentScrollY;
  }

  // Gắn hàm xử lý vào sự kiện 'scroll'
  window.addEventListener("scroll", handleSmartScroll);
});
