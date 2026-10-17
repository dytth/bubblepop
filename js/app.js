import { audio } from './audio.js';

// CÁC BỘ MÀU THEME CHO MÀNG XỐP CHỐNG SỐC THỰC TẾ
export const THEMES = {
  pink: {
    id: 'pink',
    name: 'Hồng ESD Shopee',
    bg: {
      base: '#fff0f3',
      grad0: '#ffffff',
      grad1: '#ffe4ea',
      grad2: '#fecdd6',
      filmTint: 'rgba(255, 228, 235, 0.25)',
      seamColor: 'rgba(244, 63, 94, 0.09)'
    },
    shadow: 'rgba(159, 18, 57, 0.16)',
    sealRimFill: 'rgba(255, 228, 235, 0.35)',
    sealRimStroke: 'rgba(244, 63, 94, 0.28)',
    sealRimInner: 'rgba(255, 255, 255, 0.85)',
    domeGrad: [
      { stop: 0, color: 'rgba(255, 255, 255, 0.98)' },
      { stop: 0.15, color: 'rgba(255, 241, 242, 0.88)' },
      { stop: 0.35, color: 'rgba(254, 205, 211, 0.48)' },
      { stop: 0.70, color: 'rgba(251, 113, 133, 0.25)' },
      { stop: 0.88, color: 'rgba(244, 63, 94, 0.42)' },
      { stop: 1, color: 'rgba(225, 29, 72, 0.62)' }
    ],
    fresnelStroke: 'rgba(255, 255, 255, 0.92)',
    glintColor: '#ffffff',
    glintShadow: 'rgba(255, 255, 255, 0.95)',
    causticColor: 'rgba(255, 255, 255, 0.8)',
    poppedShadow: 'rgba(159, 18, 57, 0.08)',
    poppedCreaseDark: 'rgba(159, 18, 57, 0.28)',
    poppedCreaseLight: 'rgba(255, 255, 255, 0.95)',
    poppedHole: 'rgba(159, 18, 57, 0.32)'
  },
  blue: {
    id: 'blue',
    name: 'Xanh Khí Biển',
    bg: {
      base: '#f0f9ff',
      grad0: '#ffffff',
      grad1: '#e0f2fe',
      grad2: '#bae6fd',
      filmTint: 'rgba(224, 242, 254, 0.25)',
      seamColor: 'rgba(14, 165, 233, 0.09)'
    },
    shadow: 'rgba(12, 74, 110, 0.16)',
    sealRimFill: 'rgba(224, 242, 254, 0.35)',
    sealRimStroke: 'rgba(14, 165, 233, 0.28)',
    sealRimInner: 'rgba(255, 255, 255, 0.85)',
    domeGrad: [
      { stop: 0, color: 'rgba(255, 255, 255, 0.98)' },
      { stop: 0.15, color: 'rgba(240, 249, 255, 0.88)' },
      { stop: 0.35, color: 'rgba(186, 230, 253, 0.48)' },
      { stop: 0.70, color: 'rgba(56, 189, 248, 0.25)' },
      { stop: 0.88, color: 'rgba(14, 165, 233, 0.42)' },
      { stop: 1, color: 'rgba(2, 132, 199, 0.62)' }
    ],
    fresnelStroke: 'rgba(255, 255, 255, 0.92)',
    glintColor: '#ffffff',
    glintShadow: 'rgba(255, 255, 255, 0.95)',
    causticColor: 'rgba(255, 255, 255, 0.8)',
    poppedShadow: 'rgba(12, 74, 110, 0.08)',
    poppedCreaseDark: 'rgba(12, 74, 110, 0.28)',
    poppedCreaseLight: 'rgba(255, 255, 255, 0.95)',
    poppedHole: 'rgba(12, 74, 110, 0.32)'
  },
  mint: {
    id: 'mint',
    name: 'Xanh Bạc Hà',
    bg: {
      base: '#f0fdf4',
      grad0: '#ffffff',
      grad1: '#dcfce7',
      grad2: '#bbf7d0',
      filmTint: 'rgba(220, 252, 231, 0.25)',
      seamColor: 'rgba(16, 185, 129, 0.09)'
    },
    shadow: 'rgba(6, 78, 59, 0.16)',
    sealRimFill: 'rgba(220, 252, 231, 0.35)',
    sealRimStroke: 'rgba(16, 185, 129, 0.28)',
    sealRimInner: 'rgba(255, 255, 255, 0.85)',
    domeGrad: [
      { stop: 0, color: 'rgba(255, 255, 255, 0.98)' },
      { stop: 0.15, color: 'rgba(240, 253, 244, 0.88)' },
      { stop: 0.35, color: 'rgba(187, 247, 208, 0.48)' },
      { stop: 0.70, color: 'rgba(52, 211, 153, 0.25)' },
      { stop: 0.88, color: 'rgba(16, 185, 129, 0.42)' },
      { stop: 1, color: 'rgba(5, 150, 105, 0.62)' }
    ],
    fresnelStroke: 'rgba(255, 255, 255, 0.92)',
    glintColor: '#ffffff',
    glintShadow: 'rgba(255, 255, 255, 0.95)',
    causticColor: 'rgba(255, 255, 255, 0.8)',
    poppedShadow: 'rgba(6, 78, 59, 0.08)',
    poppedCreaseDark: 'rgba(6, 78, 59, 0.28)',
    poppedCreaseLight: 'rgba(255, 255, 255, 0.95)',
    poppedHole: 'rgba(6, 78, 59, 0.32)'
  },
  purple: {
    id: 'purple',
    name: 'Tím Pha Lê',
    bg: {
      base: '#faf5ff',
      grad0: '#ffffff',
      grad1: '#f3e8ff',
      grad2: '#e9d5ff',
      filmTint: 'rgba(243, 232, 255, 0.25)',
      seamColor: 'rgba(147, 51, 234, 0.09)'
    },
    shadow: 'rgba(88, 28, 135, 0.16)',
    sealRimFill: 'rgba(243, 232, 255, 0.35)',
    sealRimStroke: 'rgba(147, 51, 234, 0.28)',
    sealRimInner: 'rgba(255, 255, 255, 0.85)',
    domeGrad: [
      { stop: 0, color: 'rgba(255, 255, 255, 0.98)' },
      { stop: 0.15, color: 'rgba(250, 245, 255, 0.88)' },
      { stop: 0.35, color: 'rgba(233, 213, 255, 0.48)' },
      { stop: 0.70, color: 'rgba(192, 132, 252, 0.25)' },
      { stop: 0.88, color: 'rgba(168, 85, 247, 0.42)' },
      { stop: 1, color: 'rgba(147, 51, 234, 0.62)' }
    ],
    fresnelStroke: 'rgba(255, 255, 255, 0.92)',
    glintColor: '#ffffff',
    glintShadow: 'rgba(255, 255, 255, 0.95)',
    causticColor: 'rgba(255, 255, 255, 0.8)',
    poppedShadow: 'rgba(88, 28, 135, 0.08)',
    poppedCreaseDark: 'rgba(88, 28, 135, 0.28)',
    poppedCreaseLight: 'rgba(255, 255, 255, 0.95)',
    poppedHole: 'rgba(88, 28, 135, 0.32)'
  },
  crystal: {
    id: 'crystal',
    name: 'Trắng Trong Suốt',
    bg: {
      base: '#f8fafc',
      grad0: '#ffffff',
      grad1: '#f1f5f9',
      grad2: '#e2e8f0',
      filmTint: 'rgba(255, 255, 255, 0.32)',
      seamColor: 'rgba(100, 116, 139, 0.1)'
    },
    shadow: 'rgba(15, 23, 42, 0.16)',
    sealRimFill: 'rgba(255, 255, 255, 0.55)',
    sealRimStroke: 'rgba(148, 163, 184, 0.38)',
    sealRimInner: 'rgba(255, 255, 255, 0.95)',
    domeGrad: [
      { stop: 0, color: 'rgba(255, 255, 255, 0.99)' },
      { stop: 0.15, color: 'rgba(255, 255, 255, 0.88)' },
      { stop: 0.35, color: 'rgba(241, 245, 249, 0.45)' },
      { stop: 0.70, color: 'rgba(203, 213, 225, 0.22)' },
      { stop: 0.88, color: 'rgba(148, 163, 184, 0.38)' },
      { stop: 1, color: 'rgba(100, 116, 139, 0.52)' }
    ],
    fresnelStroke: 'rgba(255, 255, 255, 0.98)',
    glintColor: '#ffffff',
    glintShadow: 'rgba(255, 255, 255, 0.95)',
    causticColor: 'rgba(255, 255, 255, 0.88)',
    poppedShadow: 'rgba(15, 23, 42, 0.08)',
    poppedCreaseDark: 'rgba(15, 23, 42, 0.28)',
    poppedCreaseLight: 'rgba(255, 255, 255, 0.98)',
    poppedHole: 'rgba(15, 23, 42, 0.32)'
  }
};

// SPRITE FACTORY: TẠO SPRITE 3D CHO TỪNG THEME VỚI CHI TIẾT VẬT LÝ CAO CẤP
class BubbleSpriteFactory {
  static createSprites(size = 160, theme = THEMES.pink) {
    return {
      unpopped: [
        this.render3DBubble(size, 0, theme),
        this.render3DBubble(size, 1, theme),
        this.render3DBubble(size, 2, theme)
      ],
      popped: [
        this.renderPoppedBubble(size, 0, theme),
        this.renderPoppedBubble(size, 1, theme)
      ]
    };
  }

  static render3DBubble(size, variant, theme) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.38;

    // Biến thiên hình dạng màng nilon dập nhiệt tự nhiên (không tròn xoe cứng nhắc)
    const rx = r * (variant === 0 ? 0.98 : variant === 1 ? 1.025 : 0.99);
    const ry = r * (variant === 0 ? 1.02 : variant === 1 ? 0.975 : 1.01);
    const rot = variant === 0 ? -0.06 : variant === 1 ? 0.10 : -0.03;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rot);

    // 1. ĐỔ BÓNG TIẾP XÚC 3D MỀM MẠI (Ambient Occlusion + Translucent Drop Shadow)
    ctx.beginPath();
    ctx.ellipse(1.5, 5.5, rx * 1.02, ry * 0.97, 0, 0, Math.PI * 2);
    ctx.fillStyle = theme.shadow;
    ctx.filter = 'blur(4px)';
    ctx.fill();
    ctx.filter = 'none';

    // 2. VÀNH ÉP NHIỆT PHẲNG QUANH CHÂN BÓNG (Flat Heat-Sealed Flange Rim)
    // Vành ngoài
    ctx.beginPath();
    ctx.ellipse(0, 0, rx * 1.15, ry * 1.15, 0, 0, Math.PI * 2);
    ctx.fillStyle = theme.sealRimFill;
    ctx.fill();
    ctx.strokeStyle = theme.sealRimStroke;
    ctx.lineWidth = 1.6;
    ctx.stroke();

    // Rãnh gờ ép nhiệt bên trong
    ctx.beginPath();
    ctx.ellipse(0, 0, rx * 1.06, ry * 1.06, 0, 0, Math.PI * 2);
    ctx.strokeStyle = theme.sealRimInner;
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // 3. THỂ TÍCH BÁN CẦU 3D CĂNG TRÒN (Bulging Translucent PE Dome)
    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);

    // Tâm sáng lệch góc trên bên trái (-0.35 * rx, -0.35 * ry)
    const domeGrad = ctx.createRadialGradient(
      -rx * 0.35, -ry * 0.35, rx * 0.04,
      0, 0, rx * 1.02
    );
    theme.domeGrad.forEach(item => {
      domeGrad.addColorStop(item.stop, item.color);
    });
    ctx.fillStyle = domeGrad;
    ctx.fill();

    // 4. VIỀN SÁNG PHẢN QUANG FRESNEL 360 ĐỘ (Vành màng nilon căng bóng)
    ctx.strokeStyle = theme.fresnelStroke;
    ctx.lineWidth = 1.8;
    ctx.stroke();

    // 5. VỆT SÁNG CHÓI LÓA ĐỈNH BÓNG (Curved Specular Glint)
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(-rx * 0.32, -ry * 0.32, rx * 0.38, ry * 0.18, -0.65, 0, Math.PI * 2);
    ctx.fillStyle = theme.glintColor;
    ctx.shadowColor = theme.glintShadow;
    ctx.shadowBlur = 6;
    ctx.fill();
    ctx.restore();

    // Điểm sáng hạt lựu phụ
    ctx.beginPath();
    ctx.ellipse(-rx * 0.50, -ry * 0.14, rx * 0.12, ry * 0.06, -0.85, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.88)';
    ctx.fill();

    // 6. ÁNH SÁNG HẮT DƯỚI ĐÁY BÓNG (Caustic Light Bounce)
    ctx.beginPath();
    ctx.ellipse(rx * 0.28, ry * 0.28, rx * 0.34, ry * 0.16, -0.45, 0, Math.PI * 2);
    ctx.fillStyle = theme.causticColor;
    ctx.fill();

    ctx.restore();
    return canvas;
  }

  static renderPoppedBubble(size, variant, theme) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.38;
    const rx = r * 0.98;
    const ry = r * 0.98;

    ctx.save();
    ctx.translate(cx, cy);

    // 1. Vành ép nhiệt phẳng còn nguyên
    ctx.beginPath();
    ctx.ellipse(0, 0, rx * 1.15, ry * 1.15, 0, 0, Math.PI * 2);
    ctx.strokeStyle = theme.sealRimStroke;
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // 2. Màng nilon xẹp dẹp trũng phẳng xuống sàn
    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = theme.poppedShadow;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

    // 3. Nếp nhăn nilon co rúm rách rưới (Wrinkles & folds)
    const rot = variant === 0 ? 0.35 : -0.45;
    ctx.rotate(rot);

    // Nếp nhăn chính: có rãnh bóng tối + gờ ánh sáng trắng đối xứng
    ctx.lineWidth = 1.8;
    ctx.strokeStyle = theme.poppedCreaseLight;
    ctx.beginPath();
    ctx.moveTo(-rx * 0.72, -ry * 0.26);
    ctx.quadraticCurveTo(-rx * 0.1, 0, rx * 0.68, ry * 0.24);
    ctx.stroke();

    ctx.lineWidth = 1.3;
    ctx.strokeStyle = theme.poppedCreaseDark;
    ctx.beginPath();
    ctx.moveTo(-rx * 0.72, -ry * 0.22);
    ctx.quadraticCurveTo(-rx * 0.1, 2.5, rx * 0.68, ry * 0.28);
    ctx.stroke();

    // Các nếp nhăn phụ đan chéo
    ctx.strokeStyle = theme.poppedCreaseLight;
    ctx.lineWidth = 1.3;
    ctx.beginPath();
    ctx.moveTo(-rx * 0.3, ry * 0.62);
    ctx.lineTo(rx * 0.38, -ry * 0.52);
    ctx.stroke();

    ctx.strokeStyle = theme.poppedCreaseDark;
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    ctx.moveTo(-rx * 0.28, ry * 0.65);
    ctx.lineTo(rx * 0.40, -ry * 0.49);
    ctx.stroke();

    // Nếp nhăn ngang
    ctx.strokeStyle = theme.poppedCreaseLight;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(-rx * 0.55, ry * 0.18);
    ctx.lineTo(rx * 0.48, -ry * 0.18);
    ctx.stroke();

    // 4. Lỗ thủng thoát khí ở tâm với viền màng nhựa co quắp
    ctx.beginPath();
    ctx.ellipse(0, 0, 4, 2.8, 0.4, 0, Math.PI * 2);
    ctx.fillStyle = theme.poppedHole;
    ctx.fill();
    ctx.strokeStyle = theme.poppedCreaseLight;
    ctx.lineWidth = 0.9;
    ctx.stroke();

    ctx.restore();
    return canvas;
  }
}

// BỘ ENGINE VẼ VÔ TẬN 360 ĐỘ TRÊN CANVAS 2D
class CanvasBubbleWrap {
  constructor() {
    this.canvas = document.getElementById('bubbleCanvas');
    this.ctx = this.canvas.getContext('2d', { alpha: false });

    // Khởi tạo theme (Mặc định: Hồng ESD Shopee)
    this.activeThemeId = localStorage.getItem('bubble_theme') || 'pink';
    if (!THEMES[this.activeThemeId]) this.activeThemeId = 'pink';
    this.currentTheme = THEMES[this.activeThemeId];

    // Bộ nhớ cache sprites theo từng theme để chuyển đổi tức thì
    this.themeSprites = {};
    this.themeSprites[this.activeThemeId] = BubbleSpriteFactory.createSprites(160, this.currentTheme);

    this.cameraX = 0;
    this.cameraY = 0;
    this.poppedSet = new Set();

    this.isDown = false;
    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;
    this.lastX = 0;
    this.lastY = 0;

    this.renderScheduled = false;

    this.init();
  }

  init() {
    this.setTheme(this.activeThemeId, false);
    this.resize();
    this.bindEvents();
    this.bindPaletteEvents();

    try {
      const saved = localStorage.getItem('canvas_bubble_popped');
      if (saved) {
        JSON.parse(saved).forEach(key => this.poppedSet.add(key));
      }
    } catch (e) {}

    this.requestRender();
  }

  setTheme(themeId, shouldRender = true) {
    if (!THEMES[themeId]) return;
    this.activeThemeId = themeId;
    this.currentTheme = THEMES[themeId];

    // Cập nhật class body cho background đồng bộ
    document.body.className = `theme-${themeId}`;

    // Tạo sprite nếu chưa có trong cache
    if (!this.themeSprites[themeId]) {
      this.themeSprites[themeId] = BubbleSpriteFactory.createSprites(160, this.currentTheme);
    }

    // Cập nhật trạng thái nút chọn màu
    const buttons = document.querySelectorAll('.palette-btn');
    buttons.forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-theme') === themeId);
    });

    try {
      localStorage.setItem('bubble_theme', themeId);
    } catch (e) {}

    if (shouldRender) {
      this.requestRender();
    }
  }

  bindPaletteEvents() {
    const bar = document.getElementById('paletteBar');
    if (!bar) return;

    bar.addEventListener('click', (e) => {
      const btn = e.target.closest('.palette-btn');
      if (!btn) return;
      const theme = btn.getAttribute('data-theme');
      if (theme && theme !== this.activeThemeId) {
        this.setTheme(theme);
        if ('vibrate' in navigator) {
          try { navigator.vibrate(12); } catch (err) {}
        }
      }
    });
  }

  resize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.canvas.width = Math.floor(this.width * this.dpr);
    this.canvas.height = Math.floor(this.height * this.dpr);

    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(this.dpr, this.dpr);

    const isMobile = this.width <= 640;
    this.bubbleRadius = isMobile ? 26 : 32;
    this.renderSize = this.bubbleRadius * 2 * 1.35;
    this.colSpacing = this.bubbleRadius * 2 + (isMobile ? 5 : 7);
    this.rowSpacing = this.colSpacing * 0.88;

    this.requestRender();
  }

  requestRender() {
    if (!this.renderScheduled) {
      this.renderScheduled = true;
      requestAnimationFrame(() => {
        this.renderScheduled = false;
        this.render();
      });
    }
  }

  render() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const theme = this.currentTheme;

    // 1. Phủ màu nền theo theme
    ctx.fillStyle = theme.bg.base;
    ctx.fillRect(0, 0, w, h);

    const ambientGrad = ctx.createRadialGradient(w / 2, h * 0.25, 80, w / 2, h * 0.5, Math.max(w, h));
    ambientGrad.addColorStop(0, theme.bg.grad0);
    ambientGrad.addColorStop(0.55, theme.bg.grad1);
    ambientGrad.addColorStop(1, theme.bg.grad2);
    ctx.fillStyle = ambientGrad;
    ctx.fillRect(0, 0, w, h);

    // Màng nilon tổng thể
    ctx.fillStyle = theme.bg.filmTint;
    ctx.fillRect(0, 0, w, h);

    // VIEWPORT CULLING: VẼ CÁC BÓNG HIỆN HỮU TRÊN MÀN HÌNH (0% LAG)
    const minRow = Math.floor((-this.cameraY - this.colSpacing * 2) / this.rowSpacing);
    const maxRow = Math.ceil((h - this.cameraY + this.colSpacing * 2) / this.rowSpacing);
    const minCol = Math.floor((-this.cameraX - this.colSpacing * 2) / this.colSpacing);
    const maxCol = Math.ceil((w - this.cameraX + this.colSpacing * 2) / this.colSpacing);

    // VẼ CÁC ĐƯỜNG DẬP NHIỆT KẾT NỐI (Heat-Sealed Matrix Grid)
    ctx.save();
    ctx.strokeStyle = theme.bg.seamColor;
    ctx.lineWidth = 1;
    for (let r = minRow; r <= maxRow; r++) {
      const isOffset = Math.abs(r) % 2 === 1;
      const rowOffset = isOffset ? this.colSpacing / 2 : 0;
      const cy = r * this.rowSpacing + this.cameraY;

      // Đường hàn nhiệt ngang
      ctx.beginPath();
      ctx.moveTo(minCol * this.colSpacing + rowOffset + this.cameraX, cy);
      ctx.lineTo(maxCol * this.colSpacing + rowOffset + this.cameraX, cy);
      ctx.stroke();
    }
    ctx.restore();

    const halfSize = this.renderSize / 2;
    const sprites = this.themeSprites[this.activeThemeId];

    for (let r = minRow; r <= maxRow; r++) {
      const isOffset = Math.abs(r) % 2 === 1;
      const rowOffset = isOffset ? this.colSpacing / 2 : 0;
      const cy = r * this.rowSpacing + this.cameraY;

      for (let c = minCol; c <= maxCol; c++) {
        const cx = c * this.colSpacing + rowOffset + this.cameraX;
        const key = `${c},${r}`;
        const isPopped = this.poppedSet.has(key);

        if (!isPopped) {
          const variantIdx = Math.abs(c * 3 + r * 7) % 3;
          const sprite = sprites.unpopped[variantIdx];
          ctx.drawImage(sprite, cx - halfSize, cy - halfSize, this.renderSize, this.renderSize);
        } else {
          const variantIdx = Math.abs(c * 2 + r * 5) % 2;
          const sprite = sprites.popped[variantIdx];
          ctx.drawImage(sprite, cx - halfSize, cy - halfSize, this.renderSize, this.renderSize);
        }
      }
    }
  }

  findBubbleAt(screenX, screenY) {
    const wx = screenX - this.cameraX;
    const wy = screenY - this.cameraY;

    const baseRow = Math.round(wy / this.rowSpacing);

    let closest = null;
    let minDist = Infinity;

    for (let r = baseRow - 1; r <= baseRow + 1; r++) {
      const isOffset = Math.abs(r) % 2 === 1;
      const rowOffset = isOffset ? this.colSpacing / 2 : 0;
      const c = Math.round((wx - rowOffset) / this.colSpacing);

      const bx = c * this.colSpacing + rowOffset;
      const by = r * this.rowSpacing;
      const dist = Math.hypot(wx - bx, wy - by);

      if (dist <= this.bubbleRadius * 1.15 && dist < minDist) {
        minDist = dist;
        closest = { col: c, row: r };
      }
    }

    return closest;
  }

  bindEvents() {
    const handlePointerDown = (e) => {
      // Bỏ qua nếu chạm vào thanh đổi màu hoặc huy hiệu tác giả
      if (e.target.closest && (e.target.closest('.palette-bar') || e.target.closest('.badge-author'))) {
        return;
      }
      if (e.pointerType === 'mouse' && e.button !== 0) return;

      this.isDown = true;
      this.isDragging = false;
      this.startX = e.clientX;
      this.startY = e.clientY;
      this.lastX = e.clientX;
      this.lastY = e.clientY;
    };

    const handlePointerMove = (e) => {
      if (!this.isDown) return;

      const dx = e.clientX - this.lastX;
      const dy = e.clientY - this.lastY;
      const dist = Math.hypot(e.clientX - this.startX, e.clientY - this.startY);

      // Ngưỡng di chuyển > 5px được tính là kéo (Drag/Pan)
      if (dist > 5) {
        this.isDragging = true;
        document.body.classList.add('is-panning');

        this.cameraX += dx;
        this.cameraY += dy;
        this.lastX = e.clientX;
        this.lastY = e.clientY;
        this.requestRender();
      }
    };

    const handlePointerEnd = (e) => {
      if (!this.isDown) return;
      this.isDown = false;
      document.body.classList.remove('is-panning');

      // Chỉ nổ bóng khi người dùng click/tap chủ đích (không phải kéo/lướt)
      if (!this.isDragging) {
        const hit = this.findBubbleAt(this.startX, this.startY);
        if (hit) {
          const key = `${hit.col},${hit.row}`;
          if (!this.poppedSet.has(key)) {
            this.poppedSet.add(key);

            // Giữ tối đa 800 bóng vỡ để tối ưu bộ nhớ
            if (this.poppedSet.size > 800) {
              const firstKey = this.poppedSet.values().next().value;
              this.poppedSet.delete(firstKey);
            }
            try {
              localStorage.setItem('canvas_bubble_popped', JSON.stringify([...this.poppedSet]));
            } catch (err) {}

            // Phát âm thanh nổ vật lý
            audio.playPop();

            // Rung phản hồi haptic
            if ('vibrate' in navigator) {
              try { navigator.vibrate(18); } catch (v) {}
            }

            this.requestRender();
          }
        }
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerEnd);
    window.addEventListener('pointercancel', handlePointerEnd);

    // Cuộn chuột tự do trên PC (lăn chuột theo cả trục Y và X)
    window.addEventListener('wheel', (e) => {
      this.cameraY -= e.deltaY;
      this.cameraX -= (e.deltaX || 0);
      this.requestRender();
    }, { passive: true });

    window.addEventListener('resize', () => {
      this.resize();
    });
  }
}

// Khởi chạy khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
  new CanvasBubbleWrap();
});
