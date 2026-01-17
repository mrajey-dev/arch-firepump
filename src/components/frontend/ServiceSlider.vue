<template>
  <section id="services" class="py-5 bg-light">
    <div class="container">
      <div class="text-center mb-4">
        <h2 class="fw-bold">Other Services</h2>
        <p class="text-muted">Explore what we offer</p>
      </div>

      <Swiper
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :autoplay="{ delay: 2500 }"
        :breakpoints="{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 }
        }"
        grabCursor
        class="service-swiper"
      >
        <SwiperSlide v-for="(service, index) in services" :key="index">
          <div class="service-card text-center p-4  rounded ">
            <div class="icon-wrapper mb-3">
              <i :class="service.icon" class="service-icon text-primary"></i>
            </div>
            <h5 class="fw-semibold mb-2">{{ service.title }}</h5>
            <p class="text-muted">{{ service.description }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'

import SwiperCore, { Autoplay } from 'swiper'
SwiperCore.use([Autoplay])

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      services: [
        {
          icon: 'fas fa-fire-extinguisher',
          title: 'Fire Protection',
          description: 'Top-tier fire safety system installation and service.',
        },
        {
          icon: 'fas fa-tools',
          title: 'Maintenance',
          description: 'Comprehensive maintenance for fire pumps and systems.',
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Safety Audits',
          description: 'Ensure your premises meet all safety regulations.',
        },
        {
          icon: 'fas fa-truck-moving',
          title: 'Emergency Services',
          description: 'Rapid on-site response for breakdowns and emergencies.',
        },
        {
          icon: 'fas fa-cogs',
          title: 'System Upgrades',
          description: 'Modernize your systems with the latest technology.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.service-card {
  transition: transform 0.3s ease;
}
.service-card:hover {
  transform: translateY(-8px);
}

.service-icon {
  font-size: 2.5rem;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
}
</style>
