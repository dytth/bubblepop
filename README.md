# BubblePop 🫧

> **Infinite Bubble Wrap ASMR Simulator** — Màng xốp nilon bọc hàng vô tận 360°, âm thanh vật lý chân thực và đồ họa 3D xúc giác.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Pure Vanilla JS](https://img.shields.io/badge/Stack-Vanilla%20HTML5%20%2F%20Canvas%202D-orange)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
[![No Dependencies](https://img.shields.io/badge/Dependencies-Zero-brightgreen)](#)

---

## ✨ Điểm nổi bật (Features)

- 🌀 **Tấm xốp vô tận 360° (Infinite 2D Pan)**: Lướt ngang, dọc, chéo mượt mà tự do như Google Maps, hoàn toàn không bị giới hạn biên.
- 🎨 **5 Bộ màu bọc chống sốc thực tế (Real Packaging Themes)**:
  - 🌸 **Hồng ESD Shopee** *(Mặc định)*: Bọc chống sốc hồng cho đồ điện tử / hàng dễ vỡ.
  - 💎 **Xanh Khí Biển (Aqua Blue)**: Màng bọc xanh ngọc cao cấp.
  - 🌿 **Xanh Bạc Hà (Mint Green)**: Phong cách tươi sáng, dịu mắt.
  - 💜 **Tím Pha Lê (Lavender Amethyst)**: Độc đáo, hiện đại.
  - ⚪ **Trắng Trong Suốt (Crystal Studio)**: Màng PE thủy tinh phản chiếu ánh sáng mạnh.
- 🔊 **Âm thanh vật lý chân thực (Web Audio API Synthesizer)**:
  - Mô phỏng chính xác tiếng nổ "Tách - Bụp" của buồng khí nén nilon rách toạc.
  - Biến thiên cao độ (pitch variation) và tiếng sột soạt nilon co rúm tự nhiên sau khi vỡ.
  - Không tải bất kỳ file mp3 nặng nào — 100% âm thanh được tính toán bằng tần số sóng trong trình duyệt.
- ⚡ **Hiệu năng 60–120 FPS mượt mà**:
  - Tối ưu bằng HTML5 Canvas 2D với cơ chế **Pre-rendered 3D Offscreen Sprites** & **Viewport Culling**.
  - Không sinh rác DOM, tiêu thụ cực ít RAM và pin điện thoại.
- 🎯 **Cơ chế chống chạm nhầm thông minh**:
  - Vuốt / kéo màn hình (> 5px) = Di chuyển tấm nilon.
  - Chạm dứt khoát (Tap / Click) = Bóp nổ hạt bóng.
- 📱 **Hỗ trợ đa nền tảng**: Tối ưu hoàn hảo cho cả màn hình cảm ứng di động và chuột/bàn phím máy tính.

---

## 🚀 Cài đặt & Chạy cục bộ (Local Setup)

Dự án hoàn toàn là **Zero-Dependency Static Web**, không cần cài đặt `npm` hay thư viện ngoài.

```bash
# Clone repository
git clone https://github.com/dytth/bubblepop.git

# Mở thư mục
cd bubblepop

# Chạy server tĩnh (Python hoặc bất kỳ công cụ nào)
python -m http.server 8080

# Truy cập trình duyệt: http://localhost:8080
```

---

## 📂 Cấu trúc mã nguồn (Project Structure)

```
bubblepop/
├── index.html         # Giao diện chính, canvas và thanh công cụ đổi màu
├── css/
│   └── styles.css     # Định dạng phong cách toàn màn hình, nút bấm kính mờ
├── js/
│   ├── app.js         # Engine vẽ vô tận Canvas 2D, quản lý camera và cử chỉ kéo/chạm
│   └── audio.js       # Bộ tổng hợp âm thanh nổ vật lý Web Audio API
├── .gitignore
└── README.md
```

---

## 👤 Tác giả (Author)

Xây dựng bởi **dytth_young**
- Portfolio: [dytth.is-a.dev](https://dytth.is-a.dev)
- GitHub: [@dytth](https://github.com/dytth)

---

## 📄 Bản quyền (License)

Dự án phát hành theo giấy phép [MIT License](LICENSE).
