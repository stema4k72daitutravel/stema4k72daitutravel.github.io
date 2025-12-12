const mapModal = document.getElementById("map-modal");
const mapBtns = document.querySelectorAll(".btn-view-map");
const mapIframe = document.querySelector(".gmap_iframe");

function openMap() {
  if (mapModal) {
    mapModal.classList.remove("hidden");
    mapModal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }
}

function closeMap() {
  if (mapModal) {
    mapModal.classList.add("hidden");
    mapModal.classList.remove("flex");
    document.body.style.overflow = "";
  }
}

mapBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const mapSrc = btn.getAttribute("data-map-src");
    if (mapSrc && mapIframe) {
      mapIframe.src = mapSrc;
    }
    openMap();
  });
});

// === CONTENT DETAIL MODAL SCRIPT ===
// Dữ liệu nội dung (Có thể mở rộng thêm)
const contentData = {
  tra: {
    title: "Văn hoá Trà tại Hoàng Nông Farm",
    images: [
      "https://media.baothainguyen.vn/upload/2021/11/04/13/46/52e519c2-ab16-43f1-a128-46c59b20752d.jpg",
      "https://media.dulich24.com.vn/bai-viet/du-lich-moc-chau-trai-nghiem-nhung-dieu-thu-vi-46020241/du-lich-moc-chau-trai-nghiem-nhung-dieu-thu-vi.jpg",
      "https://hoangnongfarm.vn/wp-content/uploads/2023/10/trai-nghiem-hai-che-1.jpg",
    ],
    desc: `
                    <h4 class="font-bold text-lg text-primary mb-2">1. Không gian văn hóa trà độc đáo</h4>
                    <p>Đến với Hoàng Nông Farm, du khách không chỉ được ngắm nhìn những đồi chè xanh bát ngát trải dài tít tắp mà còn được trực tiếp tham gia vào quy trình sản xuất trà truyền thống của người dân Đại Từ. Đây là nơi hội tụ tinh hoa của vùng chè Thái Nguyên danh tiếng.</p>
                    
                    <h4 class="font-bold text-lg text-primary mb-2 mt-4">2. Trải nghiệm thực tế "Một ngày làm nông dân"</h4>
                    <p>Bạn sẽ được hóa thân thành những "nghệ nhân" hái chè thực thụ với gùi tre trên vai, học cách hái "một tôm hai lá" đúng chuẩn. Sau đó, dưới sự hướng dẫn của các nghệ nhân, bạn sẽ tự tay sao chè bằng chảo gang trên bếp củi truyền thống, cảm nhận hương thơm ngào ngạt lan tỏa trong không gian.</p>
                    
                    <h4 class="font-bold text-lg text-primary mb-2 mt-4">3. Thưởng trà và Check-in</h4>
                    <p>Cuối cùng là giây phút thư giãn nhất: tự tay pha và thưởng thức những ấm trà thơm ngon do chính mình làm ra. Ngoài ra, không gian tại đây cực kỳ thích hợp để check-in với những bộ ảnh mang phong cách nàng thơ, vintage giữa thiên nhiên hùng vĩ hay bên những ấm trà đạo cụ được sắp xếp tinh tế.</p>
                `,
  },
  mojen: {
    title: "Mojen Retreat - Chữa lành giữa thiên nhiên",
    images: [
      "https://mia.vn/media/uploads/blog-du-lich/mojen-retreat-thai-nguyen-06-1663044439.jpg",
      "https://mia.vn/media/uploads/blog-du-lich/mojen-retreat-thai-nguyen-01-1663044439.jpg",
      "https://thainguyentourism.vn/uploads/images/TinTuc/Nam2022/T9/mojen-retreat.jpg",
    ],
    desc: `
                    <h4 class="font-bold text-lg text-primary mb-2">1. Nơi trốn bình yên (Hideaway)</h4>
                    <p>Mojen Retreat nằm lọt thỏm giữa thung lũng xanh mát, tách biệt hoàn toàn với khói bụi thành phố. Bên cạnh là dòng suối róc rách chảy quanh năm tạo nên bản nhạc nền thư giãn tuyệt vời. Đây là mô hình nghỉ dưỡng kết hợp camping cao cấp (Glamping), nơi bạn có thể tận hưởng tiện nghi hiện đại nhưng vẫn hòa mình hoàn toàn vào thiên nhiên.</p>
                    
                    <h4 class="font-bold text-lg text-primary mb-2 mt-4">2. Hoạt động & Dịch vụ</h4>
                    <p>Tại đây phục vụ các set nướng BBQ ngoài trời cực "chill", đốt lửa trại vào ban đêm để mọi người cùng quây quần. Ban ngày, bạn có thể tắm suối tự nhiên với làn nước trong vắt.</p>
                    <p>Không gian được decor tỉ mỉ từng góc nhỏ với phong cách Rustic (mộc mạc), sử dụng nhiều vật liệu gỗ và đá, mang lại cảm giác ấm cúng và sang trọng, hứa hẹn cho ra đời hàng nghìn bức ảnh "sống ảo".</p>
                `,
  },
  namphuong: {
    title: "Nhà Sàn Nam Phương - Hồn dân tộc",
    images: [
      "https://reviewthainguyen.com/wp-content/uploads/2021/10/Nha-san-Nam-Phuong-3.jpg",
      "https://reviewthainguyen.com/wp-content/uploads/2021/10/Nha-san-Nam-Phuong-1.jpg",
      "https://vcdn-dulich.vnecdn.net/2020/06/05/lang-nha-san-thai-nguyen-2-2663-1591353683.jpg",
    ],
    desc: `
                    <h4 class="font-bold text-lg text-primary mb-2">1. Kiến trúc độc đáo</h4>
                    <p>Nhà sàn Nam Phương lưu giữ gần như nguyên vẹn kiến trúc nhà sàn cổ của đồng bào dân tộc tại Thái Nguyên. Mái lá cọ dày dặn, hệ thống cột gỗ lim chắc chắn và sàn tre tạo nên một không gian thoáng mát vào mùa hè, ấm áp vào mùa đông. Đây là nơi lưu giữ hồn cốt văn hóa của người dân bản địa.</p>
                    
                    <h4 class="font-bold text-lg text-primary mb-2 mt-4">2. Văn hóa và Ẩm thực</h4>
                    <p>Du khách đến đây sẽ được thưởng thức các món ăn đặc sản đậm chất núi rừng như: xôi ngũ sắc dẻo thơm, gà đồi nướng than hoa, cá suối chiên giòn, nộm hoa chuối...</p>
                    <p>Đặc biệt vào các dịp lễ hội hoặc theo yêu cầu, du khách còn được tham gia giao lưu văn nghệ, nghe hát Then, đàn Tính - di sản văn hóa phi vật thể quý báu của người Tày, Nùng.</p>
                `,
  },
};

const contentModal = document.getElementById("content-modal");
const modalTitle = document.getElementById("modal-content-title");
const modalGallery = document.getElementById("modal-content-gallery");
const modalDesc = document.getElementById("modal-content-desc");

function openContentModal(id) {
  const data = contentData[id];
  if (!data) return;

  // 1. Gán tiêu đề
  modalTitle.textContent = data.title;

  // 2. Gán nội dung
  modalDesc.innerHTML = data.desc;

  // 3. Tạo gallery ảnh
  modalGallery.innerHTML = ""; // Xóa ảnh cũ
  if (data.images && data.images.length > 0) {
    data.images.forEach((imgSrc) => {
      const imgDiv = document.createElement("div");
      imgDiv.className =
        "rounded-lg overflow-hidden shadow-md h-56 bg-gray-200";
      imgDiv.innerHTML = `<img src="${imgSrc}" loading="lazy" alt="Gallery Image" class="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer">`;
      modalGallery.appendChild(imgDiv);
    });
  }

  // 4. Hiển thị modal
  contentModal.classList.remove("hidden");
  contentModal.classList.add("flex");
  document.body.style.overflow = "hidden"; // Chặn cuộn trang chính
}

function closeContentModal() {
  contentModal.classList.add("hidden");
  contentModal.classList.remove("flex");
  document.body.style.overflow = ""; // Cho phép cuộn lại
}

// Đóng modal khi nhấn ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeContentModal();
    closeMap();
  }
});
