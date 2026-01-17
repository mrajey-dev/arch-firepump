<template>
  <!-- Feature Section -->
  
    <div class="container py-5 servicesbox">
      <div class="row g-5 align-items-center">
        <!-- Text Section -->
        <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.3s">
          <div class="badge-title mb-3">Why Choose Arch Enterprises ?</div>
          <h2 class="text-dark display-6 fw-bold why_page">
            We're leaders in the Fire Safety Industry with 12+ years of experience
          </h2>

          <div class="features-list mt-4">
            <div class="feature-item animated-text delay-1">
              <i class="fas fa-tools feature-icon"></i>
              <span>Regular maintenance of fire safety equipment</span>
            </div>
            <div class="feature-item animated-text delay-2">
              <i class="fas fa-bell feature-icon"></i>
              <span>Installation of fire alarms and suppression systems</span>
            </div>
            <div class="feature-item animated-text delay-3">
              <i class="fas fa-fire-extinguisher feature-icon"></i>
              <span>FM/UL-listed fire pumps and controllers</span>
            </div>
          </div>
        </div>

        <!-- Image Section -->
        <div class="col-lg-6 text-center wow fadeInRight" data-wow-delay="0.5s">
          <div class="img-wrapper">
            <img class="img-fluid rounded-4" src="https://www.johnolivant.com/wp-content/uploads/2022/06/Next-Level-New-Logo-e1656427733314.png" alt="Fire Pump">
          </div>
        </div>
      </div>
    </div>
  
</template>
<script>
export default {
  name: "WhyChooseUs",
};
</script>
<style scoped lang="scss">
@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.badge-title {
  display: inline-block;
  padding: 0.4rem 1.2rem;
  background: linear-gradient(135deg, #ff8c00, #ff2e63);
  color: #fff;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
}

.why_page {
  font-size: 2rem;
  line-height: 1.4;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #333;
  opacity: 0;
  animation: slideInLeft 0.7s ease forwards;
}

.feature-icon {
  font-size: 1.5rem;
  color: #ff2e63;
  margin-right: 1rem;
  transition: transform 0.3s ease;
}

.feature-icon:hover {
  transform: scale(1.2);
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }

.img-wrapper img {
  max-width: 100%;
  height: auto;
  border-radius: 16px;
//   box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}
</style>
