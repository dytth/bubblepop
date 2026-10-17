// Bộ âm thanh vật lý mô phỏng tiếng nổ túi xốp bọc hàng Shopee (Acoustic Bubble Snap)
// Tạo ra tiếng "Tách - Bụp" đanh, giòn, dứt khoát như màng nilon thật ngoài đời

class RealBubbleAudio {
  constructor() {
    this.ctx = null;
    this.buffers = [];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    // Biến thiên độ cao độ ngẫu nhiên giữa các hạt bóng
    const pitch = 0.92 + Math.random() * 0.22;

    // 1. Tiếng TÁCH cực đanh (Màng nilon đạt giới hạn áp suất và rách toạc tức thì - 0.005s)
    const snapOsc = this.ctx.createOscillator();
    const snapGain = this.ctx.createGain();
    const snapFilter = this.ctx.createBiquadFilter();

    snapOsc.type = 'sawtooth';
    snapOsc.frequency.setValueAtTime(3200 * pitch, t);
    snapOsc.frequency.exponentialRampToValueAtTime(180, t + 0.008);

    snapFilter.type = 'highpass';
    snapFilter.frequency.setValueAtTime(1400, t);

    snapGain.gain.setValueAtTime(0.95, t);
    snapGain.gain.exponentialRampToValueAtTime(0.001, t + 0.01);

    snapOsc.connect(snapFilter);
    snapFilter.connect(snapGain);
    snapGain.connect(this.ctx.destination);

    snapOsc.start(t);
    snapOsc.stop(t + 0.01);

    // 2. Tiếng BỤP rỗng của buồng khí nén nổ bung (Damped resonance thump - 0.02s)
    const thumpOsc = this.ctx.createOscillator();
    const thumpGain = this.ctx.createGain();
    const baseFreq = (180 + Math.random() * 60) * pitch;

    thumpOsc.type = 'sine';
    thumpOsc.frequency.setValueAtTime(baseFreq * 2.5, t);
    thumpOsc.frequency.exponentialRampToValueAtTime(baseFreq * 0.6, t + 0.025);

    thumpGain.gain.setValueAtTime(0.85, t);
    thumpGain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);

    thumpOsc.connect(thumpGain);
    thumpGain.connect(this.ctx.destination);

    thumpOsc.start(t);
    thumpOsc.stop(t + 0.03);

    // 3. Tiếng xì khí nén nilon (Air burst noise)
    const bufferSize = Math.floor(this.ctx.sampleRate * 0.018);
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(3600 * pitch, t);
    noiseFilter.Q.setValueAtTime(3.5, t);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.55, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.018);

    whiteNoise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);

    whiteNoise.start(t);
    whiteNoise.stop(t + 0.018);

    // 4. Tiếng sột soạt nilon co rúm lại (Crinkle pop)
    const crinkleTime = t + 0.006 + Math.random() * 0.005;
    const crinkleOsc = this.ctx.createOscillator();
    const crinkleGain = this.ctx.createGain();

    crinkleOsc.type = 'triangle';
    crinkleOsc.frequency.setValueAtTime(2200 * pitch, crinkleTime);

    crinkleGain.gain.setValueAtTime(0.3, crinkleTime);
    crinkleGain.gain.exponentialRampToValueAtTime(0.001, crinkleTime + 0.008);

    crinkleOsc.connect(crinkleGain);
    crinkleGain.connect(this.ctx.destination);

    crinkleOsc.start(crinkleTime);
    crinkleOsc.stop(crinkleTime + 0.008);
  }
}

export const audio = new RealBubbleAudio();
