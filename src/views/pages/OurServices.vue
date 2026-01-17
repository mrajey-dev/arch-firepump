<template>
  <!-- Hero Section -->
  <div class="container-fluid pt-5 bg-primary hero-header">
    <div class="container pt-5">
      <div class="row g-5 pt-5">
        <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
          <h1 class="display-4 text-black mb-4 animated slideInRight headline">Our Services</h1>
        </div>
        <div class="col-lg-6 align-self-end text-center text-lg-end">
          <img class="img-fluid" src="frontend/img/pages/services.png" alt="services" style="max-height: 300px;">
        </div>
      </div>
    </div>
  </div>

  <!-- Section Title -->
  <section class="services section py-5 bg-light">
    <div class="container text-center">
      <h2 class="text-primary animate__animated animate__fadeInDown">Explore Our Diesel Engine Services</h2>
      <div class="underline mx-auto mt-2"></div>
      <p class="text-muted mt-3 fs-5">Discover our wide range of professional diesel engine services tailored to your needs.</p>

      <!-- Service Cards -->
      <div class="row gy-4 mt-4">
        <div
          v-for="(service, index) in dieselServices"
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
  name: "DieselServicesSection",
  data() {
    return {
      selectedService: null,
      dieselServices: [
        {
          title: "Installation Services",
          icon: "bi-tools",
          description: "Our expert team ensures seamless installation for optimal performance.",
          fullDescription: "Our team offers full-scale installation including system design, testing, and certification...",
          colorClass: "item-cyan",
          image: "https://archenterprises.co.in/img/ser/Vanguard-Citgo-2019-256.jpg",
          points: [
            "Site inspection and assessment",
            "Fire pump selection and sizing",
            "Proper mounting and alignment",
            "Piping and electrical connections",
            "Compliance with NFPA 20 and local fire codes",
          ],
        },
        {
          title: "Inspection & Testing",
          icon: "bi-search",
          description: "Ensure your fire pump operates reliably with our expert inspections.",
          fullDescription: "We conduct thorough inspections and tests...",
          colorClass: "item-orange",
          image: "https://www.jfahern.com/sites/default/files/styles/hero/public/field/image/fire_protection_tech_mar2017_01e.jpg?itok=lSpaCFVS",
          points: [
            "Comprehensive system analysis",
            "Flow and pressure testing",
            "Electrical and mechanical inspections",
            "Fire department connection checks",
            "Detailed compliance reporting",
          ],
        },
        {
          title: "Preventive Maintenance",
          icon: "bi-easel",
          description: "Keep your fire pump in peak condition with regular maintenance.",
          fullDescription: "Regular maintenance schedules extend equipment life...",
          colorClass: "item-teal",
          image: "https://archenterprises.co.in/img/ser/man-red-machine-p84j6r9modjxyhghn62t4oeqckj996k5gin3722zl2.jpg",
          points: [
            "Routine lubrication and adjustments",
            "Replacement of worn-out components",
            "Testing battery and control panel",
            "Periodic motor and pump servicing",
            "Maintaining compliance with NFPA standards",
          ],
        },
        {
          title: "Emergency Repair Services",
          icon: "bi-bounding-box-circles",
          description: "Immediate response and repair services for critical situations.",
          fullDescription: "We provide 24/7 emergency response...",
          colorClass: "item-red",
          image: "https://archenterprises.co.in/img/ser/fire-pump-maintenance-service.jpg",
          points: [
            "24/7 emergency response",
            "Quick diagnostics and troubleshooting",
            "On-site component repairs",
            "Pump and motor replacement",
            "Ensuring minimal downtime",
          ],
        },
        {
          title: "Retrofitting & Upgrades",
          icon: "bi-calendar4-week",
          description: "Enhance your fire pump system with modern upgrades.",
          fullDescription: "We help improve your existing fire system...",
          colorClass: "item-indigo",
          image: "https://5.imimg.com/data5/SELLER/Default/2022/11/KO/IU/DU/50780910/fire-pump-room.png",
          points: [
            "Upgrading control systems",
            "Replacing old fire pump units",
            "Integration with building automation",
            "Increasing system efficiency",
            "Ensuring compliance with new regulations",
          ],
        },
        {
          title: "Overhaul Services",
          icon: "bi-chat-square-text",
          description: "Overhaul services involve comprehensive inspection and restoration.",
          fullDescription: "Our overhaul includes deep system diagnostics...",
          colorClass: "item-pink",
          image: "https://archenterprises.co.in/img/ser/Vanguard-Citgo-2019-48-1080x675.jpg",
          points: [
            "Complete Disassembly & Inspection",
            "Replacement of Worn-Out Parts",
            "Refurbishment & Reconditioning",
            "Calibration & Alignment",
            "Testing & Quality Control",
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
