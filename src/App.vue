<template>
  <div>
    <router-view />
    
    <!-- Vertical Buttons in Right Corner -->
    <div class="right-corner-buttons">
      <!-- Call Button -->
      <a 
        href="tel:+918390704453" 
        class="corner-btn call-btn"
        aria-label="Call us"
      >
        <div class="btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </div>
        <span class="btn-tooltip">Call Now</span>
      </a>
      
      <!-- WhatsApp Button -->
      <a 
        href="https://wa.me/918390704453" 
        class="corner-btn whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <div class="btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.78.48 3.52 1.4 5.05L2 22l5.28-1.39c1.46.82 3.12 1.25 4.81 1.25 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm-.02 18.27c-1.5 0-2.98-.41-4.27-1.19l-.31-.18-3.14.83.84-3.06-.2-.33c-.86-1.41-1.31-3.02-1.31-4.68 0-4.62 3.76-8.38 8.39-8.38 4.62 0 8.38 3.76 8.38 8.38 0 4.63-3.76 8.39-8.38 8.39zm4.59-6.29c-.25-.13-1.48-.73-1.71-.81-.23-.09-.39-.13-.56.13-.16.26-.64.81-.78.98-.14.16-.29.18-.54.05-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.5.11-.11.25-.29.38-.44.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.44-.06-.13-.54-1.3-.74-1.78-.2-.47-.39-.4-.54-.41-.13-.01-.29-.01-.44-.01-.15 0-.39.06-.6.29-.2.23-.79.77-.79 1.88 0 1.11.81 2.18.92 2.33.11.16 1.59 2.43 3.86 3.41.54.23.96.37 1.29.47.54.17 1.03.15 1.42.09.43-.07 1.33-.54 1.52-1.07.19-.52.19-.97.13-1.06-.05-.09-.2-.14-.44-.27z"/>
          </svg>
        </div>
        <span class="btn-tooltip">WhatsApp</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* Your existing styles */
.logo { margin-top: 0px!important; }
.headline { font-size: 1.5rem!important; height: 22px!important; margin-top: 13%; }
.font-family { margin-top: -1px!important; font-size: 20px!important; }
.slider_size { height: 350px!important; }
.carousel-img { position: absolute; top: 63px; left: 6%; width: 87%; height: 80%; object-fit: contain; border-radius: 7px; opacity: 1; background-color: #e0ebf800; }
.display-4 { line-height: 1.8!important; }
strong { color: rgb(255, 0, 0); font-weight: bold; }
span { font-size: 18px!important; }
.client { font-size: 14px!important; line-height: 1.8!important; }
.py-5 { padding-top:3rem !important; margin-bottom: -155px; padding-bottom:10rem !important }
.why_page { font-size: 20px!important; }
.logo_clr { height: 30px; }
.logo_arch { height: 33px; }

/* Vertical Buttons Container - Right Corner */
.right-corner-buttons {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Individual Button Styles */
.corner-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  animation: fadeInRight 0.5s ease-out;
}

/* Call Button */
.call-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  animation-delay: 0.1s;
}

/* WhatsApp Button */
.whatsapp-btn {
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  animation-delay: 0.2s;
      bottom: 0px!important;
    right: 0px!important;
}

/* Circle Icon */
.btn-circle {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-circle svg {
  width: 100%;
  height: 100%;
  fill: white;
}

/* Tooltip Text */
.btn-tooltip {
  position: absolute;
  right: 70px;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 8px 15px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
  backdrop-filter: blur(5px);
  letter-spacing: 0.5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.btn-tooltip::after {
  content: '';
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid rgba(0, 0, 0, 0.85);
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
}

/* Hover Effects */
.corner-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.corner-btn:hover .btn-tooltip {
  opacity: 1;
  visibility: visible;
  right: 80px;
}

/* Active/Click Effect */
.corner-btn:active {
  transform: scale(0.95);
}

/* Animations */
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Ripple Effect on Click */
.corner-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s;
}

.corner-btn:active::after {
  width: 100%;
  height: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
  .right-corner-buttons {
    bottom: 20px;
    right: 20px;
    gap: 12px;
  }
  
  .corner-btn {
    width: 50px;
    height: 50px;
  }
  
  .btn-circle {
    width: 26px;
    height: 26px;
  }
  
  .btn-tooltip {
    font-size: 12px;
    padding: 6px 12px;
    right: 65px;
  }
  
  .corner-btn:hover .btn-tooltip {
    right: 70px;
  }
}

@media (max-width: 480px) {
  .right-corner-buttons {
    bottom: 15px;
    right: 15px;
    gap: 10px;
  }
  
  .corner-btn {
    width: 45px;
    height: 45px;
  }
  
  .btn-circle {
    width: 22px;
    height: 22px;
  }
  
  .btn-tooltip {
    font-size: 11px;
    padding: 5px 10px;
    right: 60px;
  }
  
  .corner-btn:hover .btn-tooltip {
    right: 65px;
  }
}

/* Tablet Devices */
@media (min-width: 769px) and (max-width: 1024px) {
  .right-corner-buttons {
    bottom: 25px;
    right: 25px;
    gap: 14px;
  }
  
  .corner-btn {
    width: 52px;
    height: 52px;
  }
}

/* Large Screens */
@media (min-width: 1200px) {
  .right-corner-buttons {
    bottom: 40px;
    right: 40px;
    gap: 20px;
  }
  
  .corner-btn {
    width: 60px;
    height: 60px;
  }
  
  .btn-circle {
    width: 32px;
    height: 32px;
  }
  
  .btn-tooltip {
    font-size: 15px;
    padding: 10px 18px;
    right: 80px;
  }
  
  .corner-btn:hover .btn-tooltip {
    right: 90px;
  }
}

/* Mobile Landscape */
@media (max-width: 768px) and (orientation: landscape) {
  .right-corner-buttons {
    bottom: 10px;
    right: 15px;
    gap: 8px;
  }
  
  .corner-btn {
    width: 40px;
    height: 40px;
  }
  
  .btn-circle {
    width: 20px;
    height: 20px;
  }
}

/* Touch Devices - No hover, just active */
@media (hover: none) {
  .btn-tooltip {
    display: none;
  }
  
  .corner-btn:active {
    transform: scale(0.95);
  }
}

/* Desktop Styles */
@media (min-width: 768px) {
  .headline { font-size: 2.2rem!important; height: 0!important; margin-top: 0; }
  .slider_size { height: 520px!important; }
  .font-family { margin-top: 0px!important; font-size: 30px!important; }
  .carousel-img { position: absolute; top: 63px; left: 6%; width: 87%; height: 86%; object-fit: contain; border-radius: 7px; opacity: 1; background-color: #e0ebf800; }
  .why_page { font-size: 25px!important; }
  .logo_clr { height: 58px; }
  .logo_arch { height: 70px; }
}
</style>  