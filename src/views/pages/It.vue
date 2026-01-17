<template>
  <!-- Hero Section -->
  <div class="container-fluid pt-5 bg-primary hero-header">
    <div class="container pt-5">
      <div class="row g-5 pt-5">
        <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
          <h1 class="display-4 text-black mb-4 animated slideInRight headline">IT Services</h1>
        </div>
        <div class="col-lg-6 align-self-end text-center text-lg-end">
          <img class="img-fluid" src="https://asianetbroadband.in/wp-content/uploads/2023/09/internet-services.jpg" alt="IT services" style="max-height: 300px;">
        </div>
      </div>
    </div>
  </div>

  <!-- IT Services Section -->
  <section class="services section py-5 bg-light">
    <div class="container text-center">
      <h2 class="text-primary animate__animated animate__fadeInDown">Our IT Services</h2>
      <div class="underline mx-auto mt-2"></div>
      <p class="text-muted mt-3 fs-5">Explore our professional IT services tailored to your business needs.</p>

      <!-- Service Cards -->
      <div class="row gy-4 mt-4">
        <div
          v-for="(service, index) in itServices"
          :key="index"
          class="col-lg-4 col-md-6"
          :data-aos="'fade-up'"
          :data-aos-delay="100 * (index + 1)"
        >
          <div :class="`service-item ${service.colorClass} position-relative p-4 rounded shadow-sm`">
            <i :class="`bi ${service.icon} icon text-primary mb-3`"></i>
            <h5 class="fw-semibold mb-2">{{ service.title }}</h5>
            <p class="text-muted">{{ service.description }}</p>
            <a href="#" class="read-more stretched-link" @click.prevent="openModal(service)">
              <span>Read More</span> <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <div v-if="selectedService" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal">&times;</button>
      <img :src="selectedService.image" :alt="selectedService.title" class="modal-image" />
      <h2>{{ selectedService.title }}</h2>
      <p>{{ selectedService.fullDescription || selectedService.description }}</p>
      <ul class="service-points">
        <li v-for="(point, i) in selectedService.points" :key="i">{{ point }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ITServicesSection",
  data() {
    return {
      selectedService: null,
      itServices: [
        {
          title: "IT Consulting",
          icon: "bi-laptop",
          description: "Strategic IT consulting to streamline your business operations.",
          fullDescription: "Our IT experts provide consulting to improve efficiency, security, and innovation in your business.",
          colorClass: "item-indigo",
          image: "https://www.example.com/images/it-consulting.jpg",
          points: [
            "Technology assessment & strategy",
            "Infrastructure planning",
            "Cybersecurity recommendations",
            "Cloud adoption & optimization",
            "Business process automation",
          ],
        },
        {
          title: "Software Development",
          icon: "bi-code-slash",
          description: "Custom software solutions to fit your business needs.",
          fullDescription: "We develop web, mobile, and desktop applications tailored to your requirements.",
          colorClass: "item-teal",
          image: "https://www.example.com/images/software-development.jpg",
          points: [
            "Web & mobile app development",
            "API integration",
            "Enterprise software solutions",
            "User-friendly UI/UX design",
            "Maintenance & support",
          ],
        },
        {
          title: "IT Support & Maintenance",
          icon: "bi-headset",
          description: "Reliable support to keep your IT systems running smoothly.",
          fullDescription: "We provide monitoring, troubleshooting, and on-demand support for your IT infrastructure.",
          colorClass: "item-red",
          image: "https://www.example.com/images/it-support.jpg",
          points: [
            "24/7 helpdesk support",
            "System monitoring & alerts",
            "Regular software updates",
            "Hardware troubleshooting",
            "Network management",
          ],
        },
      ],
    };
  },
  methods: {
    openModal(service) {
      this.selectedService = service;
    },
    closeModal() {
      this.selectedService = null;
    },
  },
};
</script>

<style scoped>
.hero-header {
  color: #fff;
}

.underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #0d6efd, #6610f2);
  border-radius: 2px;
}

.service-item {
  background: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.service-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.icon {
  font-size: 2.5rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 2rem;
  max-width: 600px;
  width: 90%;
  border-radius: 1rem;
  position: relative;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
}
.close-btn {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
.modal-image {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  object-fit: cover;
}

.service-points {
  margin-top: 1.5rem;
  padding-left: 1.25rem;
  list-style-type: disc;
  color: #333;
}
.service-points li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-header h1 {
    font-size: 2rem;
  }
}
</style>
