<template>
  <div class="stage">
    <!-- Canvas for particle logo (background) -->
    <canvas ref="canvasEl"></canvas>

    <!-- Overlay content – attractive landing message -->
    <div class="overlay-content">
      

     
      

      <!-- "Get Started / Continue" button -->
      <router-link to="/home" class="cta-button">
        <span>Get Started</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>

      
    </div>

    <!-- small hint (optional) -->
    <div class="hint">{{ hint }}</div>

    <!-- error banner if something fails -->
    <div v-if="loadError" class="error-banner">{{ loadError }}</div>
  </div>
</template>

<script>
export default {
  name: 'ParticleLogo',

  props: {
    src: {
      type: String,
      required: true,
      default: '/logo.png'   // fallback – better to pass from parent
    },
    title: {
      type: String,
      default: 'Pioneer Pump'
    },
   
    // Tunable parameters (original demo defaults)
    sampleStep: { type: Number, default: 3 },
    whiteCutoff: { type: Number, default: 150 },
    fitRatio: { type: Number, default: 0.62 },
    repelRadius: { type: Number, default: 15 },
    maxPush: { type: Number, default: 152 },
    ease: { type: Number, default: 0.09 }
  },

  data() {
    return {
      loadError: null,
      // non-reactive internal state (kept outside data to avoid Vue reactivity overhead)
    }
  },

  // internal state (not reactive)
  created() {
    this.ctx = null
    this.W = 0
    this.H = 0
    this.particles = []
    this.rafId = null
    this.loadedImg = null
    this.mouse = { x: -99999, y: -99999, active: false }
  },

  mounted() {
    if (!this.src) {
      this.loadError =
        'No "src" prop passed to <ParticleLogo>. Provide an image path, e.g. :src="logoUrl".'
      console.error(this.loadError)
      return
    }

    const canvas = this.$refs.canvasEl
    this.ctx = canvas.getContext('2d')

    // --- event listeners ---
    canvas.addEventListener('mousemove', this.onMouseMove)
    canvas.addEventListener('mouseleave', this.clearMouse)
    canvas.addEventListener('touchmove', this.onTouchMove, { passive: false })
    canvas.addEventListener('touchend', this.clearMouse)
    canvas.addEventListener('touchcancel', this.clearMouse)
    window.addEventListener('resize', this.onResize)

    this.start()
  },

  beforeUnmount() {
    if (this.rafId) cancelAnimationFrame(this.rafId)
    const canvas = this.$refs.canvasEl
    if (canvas) {
      canvas.removeEventListener('mousemove', this.onMouseMove)
      canvas.removeEventListener('mouseleave', this.clearMouse)
      canvas.removeEventListener('touchmove', this.onTouchMove)
      canvas.removeEventListener('touchend', this.clearMouse)
      canvas.removeEventListener('touchcancel', this.clearMouse)
    }
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    resize() {
      const canvas = this.$refs.canvasEl
      const dpr = window.devicePixelRatio || 1
      this.W = window.innerWidth
      this.H = window.innerHeight
      canvas.width = this.W * dpr
      canvas.height = this.H * dpr
      canvas.style.width = this.W + 'px'
      canvas.style.height = this.H + 'px'
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    },

    buildParticles() {
      this.particles = []
      const img = this.loadedImg
      if (!img) return

      const off = document.createElement('canvas')
      off.width = img.naturalWidth
      off.height = img.naturalHeight
      const octx = off.getContext('2d')
      octx.drawImage(img, 0, 0)

      let data
      try {
        data = octx.getImageData(0, 0, off.width, off.height).data
      } catch (e) {
        this.loadError =
          'Cannot read pixel data – CORS or tainted canvas. ' +
          'Ensure the image server sends proper CORS headers.'
        console.error(this.loadError, e)
        return
      }

      const targetSize = Math.min(this.W, this.H) * this.fitRatio
      const scale = targetSize / Math.max(off.width, off.height)
      const offsetX = (this.W - off.width * scale) / 2
      const offsetY = (this.H - off.height * scale) / 2
      const dotSize = Math.max(1.1, scale * this.sampleStep * 0.55)

      for (let y = 0; y < off.height; y += this.sampleStep) {
        for (let x = 0; x < off.width; x += this.sampleStep) {
          const idx = (y * off.width + x) * 4
          const r = data[idx], g = data[idx + 1], b = data[idx + 2], a = data[idx + 3]
          if (a < 80) continue
          const brightness = (r + g + b) / 3
          if (brightness > this.whiteCutoff) continue

          const px = offsetX + x * scale
          const py = offsetY + y * scale
          this.particles.push({
            ox: px, oy: py,
            x: px, y: py,
            size: dotSize,
            color: `rgb(${r},${g},${b})`
          })
        }
      }
    },

    animate() {
      this.ctx.clearRect(0, 0, this.W, this.H)

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i]
        let targetX = p.ox
        let targetY = p.oy

        if (this.mouse.active) {
          const dx = p.ox - this.mouse.x
          const dy = p.oy - this.mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < this.repelRadius) {
            const closeness = 1 - dist / this.repelRadius
            const angle = Math.atan2(dy, dx)
            targetX = p.ox + Math.cos(angle) * this.maxPush * closeness
            targetY = p.oy + Math.sin(angle) * this.maxPush * closeness
          }
        }

        p.x += (targetX - p.x) * this.ease
        p.y += (targetY - p.y) * this.ease

        this.ctx.beginPath()
        this.ctx.fillStyle = p.color
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        this.ctx.fill()
      }

      this.rafId = requestAnimationFrame(this.animate)
    },

    setMouse(x, y) {
      this.mouse.x = x
      this.mouse.y = y
      this.mouse.active = true
    },
    clearMouse() {
      this.mouse.active = false
    },
    onMouseMove(e) {
      this.setMouse(e.clientX, e.clientY)
    },
    onTouchMove(e) {
      const t = e.touches[0]
      this.setMouse(t.clientX, t.clientY)
      e.preventDefault()
    },
    onResize() {
      this.resize()
      this.buildParticles()
    },

    loadImage() {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.onload = () => {
          if (img.decode) {
            img.decode().then(() => resolve(img)).catch(() => resolve(img))
          } else {
            resolve(img)
          }
        }
        img.onerror = () => {
          reject(new Error(`Failed to load image: "${this.src}". Check path & CORS.`))
        }
        img.src = this.src
      })
    },

    async start() {
      try {
        this.loadedImg = await this.loadImage()
      } catch (err) {
        this.loadError = err.message
        console.error(err)
        return
      }

      if (!this.loadedImg || this.loadedImg.naturalWidth === 0 || this.loadedImg.naturalHeight === 0) {
        this.loadError = `Image loaded but has zero dimensions – file may be corrupted.`
        console.error(this.loadError)
        return
      }

      this.resize()
      this.buildParticles()
      if (this.particles.length === 0) {
        console.warn('No particles generated. Try adjusting whiteCutoff or using a logo with darker areas.')
      }
      this.rafId = requestAnimationFrame(this.animate)
    }
  }
}
</script>

<style scoped>
/* ---------- global reset & stage ---------- */
.stage {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  background: radial-gradient(circle at 50% 40%, #bdc0c7 0%, #bdc0c7 80%, #bdc0c7 100%);
  z-index: 0;
}

canvas {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: auto;   /* mouse events on canvas */
  z-index: 1;
}

/* ---------- attractive overlay content ---------- */
.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;   /* allow clicks to pass to canvas, except button */
  z-index: 2;
  padding: 2rem;
  text-align: center;
}

/* but the button itself must be clickable */
.cta-button {
  pointer-events: auto;
  cursor: pointer;
}

.brand-badge {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #7f9cf5;
  background: rgba(15, 26, 46, 0.55);
  backdrop-filter: blur(4px);
  padding: 0.5rem 1.6rem;
  border-radius: 60px;
  border: 1px solid rgba(127, 156, 245, 0.2);
  margin-bottom: 2.2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.brand-badge i {
  font-size: 1.3rem;
  color: #f97316;
}

.main-headline {
  font-size: clamp(2.8rem, 10vw, 5.2rem);
  font-weight: 700;
  line-height: 1.1;
  max-width: 900px;
  margin-bottom: 0.5rem;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
  letter-spacing: -0.02em;
  color: #f0f4ff;
}


.sub-headline {
  font-size: clamp(1rem, 2.2vw, 1.4rem);
  font-weight: 300;
  color: #b9c8f0;
  letter-spacing: 1px;
  margin-bottom: 2.8rem;
  max-width: 600px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

/* ---- primary CTA button ---- */
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  background: linear-gradient(145deg, #010352, #080128);
  color: #fff;
  font-weight: 600;
  font-size: 1.3rem;
  margin-top: 30%;
  padding: 0.9rem 2.8rem;
  border-radius: 60px;
  border: none;
  box-shadow: 0 12px 40px rgba(58, 4, 120, 0.35);
  transition: all 0.25s ease;
  text-decoration: none;
  letter-spacing: 0.5px;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.cta-button i {
  transition: transform 0.25s ease;
  font-size: 1.1rem;
}

.cta-button:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 18px 50px rgba(52, 3, 121, 0.5);
  background: linear-gradient(145deg, #0507a3, #080128);
}

.cta-button:hover i {
  transform: translateX(6px);
}

.cta-button:active {
  transform: scale(0.97);
}

/* trust badge */
.trust-badge {
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: #8b9fd4;
  letter-spacing: 1px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  padding: 0.4rem 1.6rem;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.trust-badge i {
  color: #fbbf24;
  font-size: 0.9rem;
}

.hint {
  position: fixed;
  bottom: 28px;
  left: 0;
  width: 100%;
  text-align: center;
  color: #4d6088;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  pointer-events: none;
  opacity: 0.6;
  z-index: 3;
  transition: opacity 0.6s ease;
}

.error-banner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 480px;
  padding: 16px 20px;
  background: rgba(120, 20, 20, 0.92);
  color: #fff;
  font-size: 13px;
  line-height: 1.5;
  border-radius: 6px;
  text-align: left;
  pointer-events: none;
  z-index: 10;
}

/* small screen adjustments */
@media (max-width: 640px) {
  .brand-badge {
    font-size: 0.8rem;
    padding: 0.3rem 1.2rem;
    margin-bottom: 1.5rem;
  }
  .cta-button {
    font-size: 1rem;
    padding: 0.7rem 2rem;
  }
  .trust-badge {
    font-size: 0.7rem;
    padding: 0.3rem 1rem;
  }
}
</style>