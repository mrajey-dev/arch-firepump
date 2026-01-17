<template>
  <!-- Services Section -->
  <section id="services" class="services section py-5 bg-light">
    <!-- Section Title -->
    <div class="container section-title1 text-center mb-5" data-aos="fade-down">
      <h2 class="display-4 fw-bold">Check Our Services</h2>
      <p class="lead text-muted">Explore the wide range of services we offer for your fire pump needs.</p>
    </div>

    <div class="container">
      <div class="row gy-4">
        <div
          v-for="(service, index) in visibleServices"
          :key="index"
          class="col-lg-4 col-md-6"
          :data-aos="'fade-up'"
          :data-aos-delay="100 * (index + 1)"
        >
          <div :class="`service-item ${service.colorClass} position-relative shadow-lg`">
            <div class="icon-wrapper">
              <i :class="`bi ${service.icon} icon`"></i>
            </div>
            <h3 class="mt-3">{{ service.title }}</h3>
            <p class="text-muted">{{ service.description }}</p>
            <a href="#" class="read-more stretched-link" @click.prevent="openModal(service)">
              <span>Read More</span> <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="text-center mt-5" data-aos="fade-up" data-aos-delay="300">
        <button class="btn show-more-btn" @click="toggleServices">
          <span>{{ showAll ? 'Show Less Services' : 'Show More Services' }}</span>
          <i :class="['bi', showAll ? 'bi-chevron-up' : 'bi-chevron-down']"></i>
        </button>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <div v-if="selectedService" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content animate__animated animate__fadeInDown">
      <button class="close-btn" @click="closeModal">&times;</button>

      <!-- Image -->
      <img
        :src="selectedService.image"
        :alt="selectedService.title"
        class="modal-image animate__animated animate__zoomIn"
      />

      <!-- Title and Description -->
      <h2 class="mt-3">{{ selectedService.title }}</h2>
      <p>{{ selectedService.fullDescription || selectedService.description }}</p>

      <!-- Bullet Points -->
      <ul class="service-points">
        <li v-for="(point, idx) in selectedService.points" :key="idx">
          {{ point }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAll: false,
      selectedService: null,
      services: [
        {
          title: 'Installation Services',
          icon: 'bi-tools',
          description: 'Seamless installation for optimal performance.',
          fullDescription: 'Full-scale installation including system design, testing, and certification.',
          colorClass: 'item-cyan',
          image: 'https://totalenergysolutions.com/wp-content/uploads/2025/08/Fire-Pump-1.jpg',
          points: [
            'Site inspection and assessment',
            'Fire pump selection and sizing',
            'Proper mounting and alignment',
            'Piping and electrical connections',
            'Compliance with NFPA 20 and local fire codes',
          ],
        },
        {
          title: 'Inspection & Testing',
          icon: 'bi-search',
          description: 'Ensure your fire pump operates reliably.',
          fullDescription: 'Thorough inspections and tests to ensure all systems function optimally.',
          colorClass: 'item-orange',
          image: 'https://www.jfahern.com/sites/default/files/styles/hero/public/field/image/fire_protection_tech_mar2017_01e.jpg?itok=lSpaCFVS',
          points: [
            'Comprehensive system analysis',
            'Flow and pressure testing',
            'Electrical and mechanical inspections',
            'Fire department connection checks',
            'Detailed compliance reporting',
          ],
        },
        {
          title: 'Preventive Maintenance',
          icon: 'bi-easel',
          description: 'Keep your fire pump in peak condition.',
          fullDescription: 'Regular maintenance schedules extend equipment life and minimize downtime.',
          colorClass: 'item-teal',
          image: 'https://firesystems.net/wp-content/uploads/2018/09/Real-Fire-Pump-AdobeStock_89746396-1024x683.jpeg',
          points: [
            'Routine lubrication and adjustments',
            'Replacement of worn-out components',
            'Testing battery and control panel',
            'Periodic motor and pump servicing',
            'Maintaining compliance with NFPA standards',
          ],
        },
        {
          title: 'Emergency Repair Services',
          icon: 'bi-bounding-box-circles',
          description: 'Immediate response for critical situations.',
          fullDescription: '24/7 emergency response and repairs to restore full functionality quickly.',
          colorClass: 'item-red',
          image: 'https://www.duthiepower.com/wp-content/uploads/2021/05/GeneratorTechnician_blog.jpg',
          points: [
            '24/7 emergency response',
            'Quick diagnostics and troubleshooting',
            'On-site component repairs',
            'Pump and motor replacement',
            'Ensuring minimal downtime',
          ],
        },
        {
          title: 'Retrofitting & Upgrades',
          icon: 'bi-calendar4-week',
          description: 'Modernize your fire pump system.',
          fullDescription: 'Improved systems with updated components, automation, and efficiency upgrades.',
          colorClass: 'item-indigo',
          image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/KO/IU/DU/50780910/fire-pump-room.png',
          points: [
            'Upgrading control systems',
            'Replacing old fire pump units',
            'Integration with building automation',
            'Increasing system efficiency',
            'Ensuring compliance with new regulations',
          ],
        },
        {
          title: 'Overhaul Services',
          icon: 'bi-chat-square-text',
          description: 'Comprehensive inspection and restoration.',
          fullDescription: 'Deep diagnostics, part replacement, and restoring performance to like-new condition.',
          colorClass: 'item-pink',
          image: 'https://www.frontlinem.com/wp-content/uploads/2024/02/firepump-frontline-1024x683.jpg',
          points: [
            'Complete Disassembly & Inspection',
            'Replacement of Worn-Out Parts',
            'Refurbishment & Reconditioning',
            'Calibration & Alignment',
            'Testing & Quality Control',
          ],
        },
      ],
    };
  },
  computed: {
    visibleServices() {
      return this.showAll ? this.services : this.services.slice(0, 3);
    },
  },
  methods: {
    toggleServices() {
      this.showAll = !this.showAll;
    },
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
/* Card Styles */
.service-item {
  background: white;
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  overflow: hidden;
}

.service-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.icon-wrapper {
  font-size: 3rem;
  color: white;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto 1rem;
  transition: transform 0.4s ease;
}

.service-item:hover .icon-wrapper {
  transform: rotate(15deg) scale(1.2);
}

.item-cyan .icon-wrapper { background: #0dcaf0; }
.item-orange .icon-wrapper { background: #fd7e14; }
.item-teal .icon-wrapper { background: #20c997; }
.item-red .icon-wrapper { background: #d42b3c; }
.item-indigo .icon-wrapper { background: #6610f2; }
.item-pink .icon-wrapper { background: #ef388c; }

.service-item h3 {
  font-weight: 600;
  margin-top: 1rem;
}

.service-item p {
  color: #6c757d;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.read-more {
  color: #0d6efd;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.read-more i {
  transition: transform 0.3s ease;
}

.read-more:hover i {
  transform: translateX(5px);
}

/* Show More Button */
.show-more-btn {
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  color: #fff;
  font-weight: 600;
  border-radius: 50px;
  padding: 0.7rem 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.show-more-btn:hover {
  background: linear-gradient(135deg, #6610f2, #0d6efd);
  transform: scale(1.05);
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.modal-content {
  background: white;
  padding: 2rem;
  max-width: 650px;
  width: 95%;
  height: 85%;

  border-radius: 1rem;
  position: relative;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.4);
  animation: fadeInUp 0.5s;
}

@keyframes fadeInUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.close-btn {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
}

.modal-image {
  width: 41%;
  align-self: center;
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.modal-image:hover {
  transform: scale(1.05);
}

.service-points {
  margin-top: 1rem;
  padding-left: 1.25rem;
  list-style-type: disc;
  color: #333;
}

.service-points li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.6;
}
</style>
