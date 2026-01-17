<template>
    
   


    <!-- Hero Start -->
    <div class="container-fluid pt-5 bg-primary hero-header">
        <div class="container pt-5">
            <div class="row g-5 pt-5">
                <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                    <h1 class=" display-4 text-black mb-4 animated slideInRight headline word-hover">About Us</h1>
                </div>
                <div class="col-lg-6 align-self-end text-center text-lg-end">
                    <img class="img-fluid" src="frontend/img/pages/about.png" alt="fire-pumps" style="max-height: 300px;">
                </div>
            </div>
        </div>
    </div>
    <!-- Hero End -->
    <!-- Full Screen Search Start -->
    <div class="modal fade" id="searchModal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style="background: rgba(20, 24, 62, 0.7);">
                <div class="modal-header border-0">
                    <button type="button" class="btn btn-square bg-white btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex align-items-center justify-content-center">
                    <div class="input-group" style="max-width: 600px;">
                        <input type="text" class="form-control bg-transparent border-light p-3"
                            placeholder="Type search keyword">
                        <button class="btn btn-light px-4"><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Full Screen Search End -->
    <!-- About Start -->

  <div class="container py-5">
    <div class="row g-5 align-items-center">
      <!-- Image Section -->
      <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
        <div class="about-img position-relative overflow-hidden rounded">
          <img class="img-fluid w-100 rounded" src="https://www.naffco.com/media/catalog/category/Fire-Prevention-Services.jpg" alt="fire-pumps" style="transition: transform 0.4s;">
        </div>
      </div>

      <!-- Text Section -->
      <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
        <h1 class="mb-4 text-gradient">We specialize in fire system accessories & NFPA 25 maintenance</h1>
        <p class="mb-4 fs-5 text-muted">Our certified technicians provide comprehensive fire safety solutions tailored to your needs. We offer the following services:</p>

        <div class="row g-3">
          <div class="col-sm-6">
            <div class="service-point d-flex align-items-start">
              <i class="fa fa-check-circle text-primary fs-4 me-3 mt-1"></i>
              <span class="fw-semibold">Installation Support</span>
            </div>
            <div class="service-point d-flex align-items-start">
              <i class="fa fa-check-circle text-primary fs-4 me-3 mt-1"></i>
              <span class="fw-semibold">Genuine Spare Parts Supply</span>
            </div>
            <div class="service-point d-flex align-items-start">
              <i class="fa fa-check-circle text-primary fs-4 me-3 mt-1"></i>
              <span class="fw-semibold">Pre-Commissioning Support</span>
            </div>
            <div class="service-point d-flex align-items-start">
              <i class="fa fa-check-circle text-primary fs-4 me-3 mt-1"></i>
              <span class="fw-semibold">Emergency Breakdown Services</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- About End -->

    <!-- Feature Start -->
<div class="container py-5">
  <div class="row g-5 align-items-center">
    <!-- Text Content -->
    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
      <span class="badge bg-gradient-primary px-3 py-2 mb-3 fs-6">Our Customers</span>
      <h2 class="fw-bold text-dark mb-3">Trusted by Leading Names Across India & Beyond</h2>
      <p class="text-muted mb-4 fst-italic">We proudly serve clients across diverse sectors:</p>

      <div class="client-group d-flex flex-column gap-3">
        <div class="client-item d-flex align-items-start">
          <div class="icon-circle bg-primary text-white me-3">
            <i class="fa fa-hotel"></i>
          </div>
          <div>
            <strong>Hotel Industry:</strong><br />JW Marriott, Hyatt, Hilton, Dan Hospitality, Express Inn, etc.
          </div>
        </div>

        <div class="client-item d-flex align-items-start">
          <div class="icon-circle bg-danger text-white me-3">
            <i class="fa fa-industry"></i>
          </div>
          <div>
            <strong>Petroleum Industry:</strong><br />CAIRN India, Indian Oil Corporation, ONGC, etc.
          </div>
        </div>

        <div class="client-item d-flex align-items-start">
          <div class="icon-circle bg-success text-white me-3">
            <i class="fa fa-car"></i>
          </div>
          <div>
            <strong>Automotive Organizations:</strong><br />Ford, TATA Motors, Tata Passenger Electric Mobility (TPEML), Renault-Nissan, Kia Motors, Bosch.
          </div>
        </div>

        <div class="client-item d-flex align-items-start">
          <div class="icon-circle bg-info text-white me-3">
            <i class="fa fa-university"></i>
          </div>
          <div>
            <strong>Government:</strong><br />AAI, Indian Army, Indian Air Force, Port Authority, etc.
          </div>
        </div>

        <div class="client-item d-flex align-items-start">
          <div class="icon-circle bg-warning text-white me-3">
            <i class="fa fa-heartbeat"></i>
          </div>
          <div>
            <strong>Healthcare:</strong><br />P&G, Reckitt Benkaiser, Gillette, Hindustan Uniliver.
          </div>
        </div>
      </div>
    </div>

    <!-- Image -->
    <div class="col-lg-6 text-center wow fadeIn" data-wow-delay="0.5s">
      <img
        class="img-fluid rounded  hover-zoom"
        src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1671306112565-Customer%20Satisfaction.jpg"
        alt="client-handshake"
      />
    </div>
  </div>
</div>
<!-- Feature End -->

<!-- Vision & Mission Start -->
<section class="container py-5">
  <div class="text-center mb-5">
    <span class="badge bg-gradient-primary px-4 py-2 fs-6 mb-3">Our Purpose</span>
    <h2 class="fw-bold text-dark">Vision & Mission</h2>
    <p class="text-muted">Driven by safety, quality, and long-term partnerships</p>
  </div>

  <div class="row g-4">
    <!-- Vision -->
    <div class="col-lg-6">
      <div class="vm-card vision-card h-100">
        <div class="vm-icon bg-primary">
          <i class="fa fa-eye"></i>
        </div>
        <h4 class="fw-bold mt-3">Our Vision</h4>
        <p class="text-muted">
         To become the leader in Indian Fire Pump Industry by providing the one stop Fire Pump room services to multinational customers who follow the Global fire and safety standards as per NFPA, FM and UL norms.
        </p>
      </div>
    </div>

    <!-- Mission -->
    <div class="col-lg-6">
      <div class="vm-card mission-card h-100">
        <div class="vm-icon bg-danger">
          <i class="fa fa-bullseye"></i>
        </div>
        <h4 class="fw-bold mt-3">Our Mission</h4>
        <p class="text-muted">
          Our mission is to become industry leader by providing world class Fire and Safety products and on time services that eliminates the fire pump house downtime and helps maintain safer environment for customers. We aim to achieve this by optimising the resources using world class FM approved and UL listed products.
        </p>
      </div>
    </div>
  </div>
</section>
<!-- Vision & Mission End -->
<!-- Core Values Start -->
<section class="container py-5">
  <div class="text-center mb-5">
    <span class="badge bg-gradient-primary px-4 py-2 fs-6 mb-3">What Drives Us</span>
    <h2 class="fw-bold text-dark">Our Core Values</h2>
    <p class="text-muted">
      The principles that guide every decision, solution, and relationship we build
    </p>
  </div>

  <div class="row g-4">
    <!-- Value 1 -->
    <div class="col-lg-3 col-md-6">
    <div class="value-card">
      <div class="value-icon bg-danger">
        <i class="fa fa-shield-alt"></i>
      </div>
      <h5>Safety First</h5>
      <p>
        Every action and decision is guided by the commitment to protect lives,
        property, and the environment.
      </p>
    </div>
  </div>

    <!-- Value 2 -->
    <div class="col-lg-3 col-md-6">
      <div class="value-card">
        <div class="value-icon bg-primary">
          <i class="fa fa-balance-scale"></i>
        </div>
        <h5>Integrity & Accountability</h5>
        <p>
          We operate with complete honesty, transparency, and responsibility —
          earning the trust of clients, employees, and communities.
        </p>
      </div>
    </div>

    <!-- Value 3 -->
    <div class="col-lg-3 col-md-6">
      <div class="value-card">
        <div class="value-icon bg-success">
          <i class="fa fa-award"></i>
        </div>
        <h5>Excellence in Service</h5>
        <p>
          We strive for precision and quality in every solution delivered,
          ensuring compliance with the highest industry standards.
        </p>
      </div>
    </div>

    <!-- Value 4 -->
    <div class="col-lg-3 col-md-6">
      <div class="value-card">
        <div class="value-icon bg-warning">
          <i class="fa fa-lightbulb"></i>
        </div>
        <h5>Innovation & Improvement</h5>
        <p>
          We continuously adopt new technologies and smarter systems to stay ahead
          in safeguarding our clients’ assets.
        </p>
      </div>
    </div>

    <!-- Value 5 -->
    <div class="col-lg-3 col-md-6">
      <div class="value-card">
        <div class="value-icon bg-info">
          <i class="fa fa-clipboard-check"></i>
        </div>
        <h5>Commitment to Compliance</h5>
        <p>
          We strictly adhere to national and international fire safety codes,
          ensuring every solution meets or exceeds regulatory standards.
        </p>
      </div>
    </div>

    <!-- Value 6 -->
    <div class="col-lg-3 col-md-6">
      <div class="value-card">
        <div class="value-icon bg-secondary">
          <i class="fa fa-users"></i>
        </div>
        <h5>Customer Focus</h5>
        <p>
          We build long-term relationships by listening, understanding, and delivering
          customized fire safety solutions.
        </p>
      </div>
    </div>

    <!-- Value 7 -->
    <div class="col-lg-3 col-md-6">
      <div class="value-card">
        <div class="value-icon bg-dark">
          <i class="fa fa-people-carry"></i>
        </div>
        <h5>Teamwork & Collaboration</h5>
        <p>
          We combine diverse expertise and teamwork to deliver reliable,
          effective, and timely safety solutions.
        </p>
      </div>
    </div>

    <!-- Value 8 -->
    <div class="col-lg-3 col-md-6">
      <div class="value-card">
        <div class="value-icon bg-success">
          <i class="fa fa-leaf"></i>
        </div>
        <h5>Sustainability & Responsibility</h5>
        <p>
          We design fire protection systems that save lives while minimizing
          environmental impact and promoting sustainability.
        </p>
      </div>
    </div>
  </div>
</section>
<!-- Core Values End -->

<br><br>
  <section id="staff" class="py-5 bg-light">
    <div class="container">
      <div class="text-center mb-4">
        <h2 class="fw-bold">Meet Our Team</h2>
        <p class="text-muted">The experts behind our success and dedication</p>
      </div>

  <img 
    src="frontend/img/chart.png" 
    alt="Team Chart"
    style="width:100%; height:100%; object-fit:contain; display:block;"
  />
    </div>
  </section>

</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      staff: [
        { name: "Prasad", role: "Founder & CEO", image: "https://www.shutterstock.com/image-vector/male-user-icon-long-shadow-260nw-209320204.jpg", social: { linkedin: "#", twitter: "#" } },
        { name: "Amar", role: "Operations Manager", image: "https://www.shutterstock.com/image-vector/male-user-icon-long-shadow-260nw-209320204.jpg", social: { linkedin: "#" } },
        { name: "Aviraj", role: "Senior Technician", image: "https://www.shutterstock.com/image-vector/male-user-icon-long-shadow-260nw-209320204.jpg", social: { facebook: "#" } },
        { name: "Dipesh", role: "Accountant", image: "https://www.shutterstock.com/image-vector/male-user-icon-long-shadow-260nw-209320204.jpg", social: { facebook: "#" } },
        { name: "Ajay", role: "Software Engineer", image: "https://www.shutterstock.com/image-vector/male-user-icon-long-shadow-260nw-209320204.jpg", social: { facebook: "#", linkedin: "#" } },
        { name: "Ahamad", role: "Customer Relations", image: "https://www.shutterstock.com/image-vector/male-user-icon-long-shadow-260nw-209320204.jpg", social: { facebook: "#" } },
        { name: "Pranav", role: "Customer Relations", image: "https://www.shutterstock.com/image-vector/male-user-icon-long-shadow-260nw-209320204.jpg", social: { facebook: "#" } },
        { name: "Saurabh", role: "Customer Relations", image: "https://www.shutterstock.com/image-vector/male-user-icon-long-shadow-260nw-209320204.jpg", social: { facebook: "#" } },
        { name: "Pradip", role: "Customer Relations", image: "https://www.shutterstock.com/image-vector/male-user-icon-long-shadow-260nw-209320204.jpg", social: { facebook: "#" } },
      ],
    };
  },
};
</script>
<style scoped>
                        .small-icon {
                            font-size: 20px !important; /* Decreased icon size */
                        }
                    
                        .small-text {
                            font-size: 13px; /* Decreased text size */
                        }
                    
                        .small-btn {
                            width: 30px; /* Decreased button size */
                            height: 30px;
                        }
                        .bg-gradient-primary {
  background: linear-gradient(to right, #6610f2, #0d6efd);
  color: #fff;
  border-radius: 30px;
}

.icon-circle {
  width: 48px;
  height: 48px;
  font-size: 1.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
}

.client-item:hover .icon-circle {
  transform: scale(1.1);
}

.hover-zoom {
  transition: transform 0.4s ease;
}

.hover-zoom:hover {
  transform: scale(1.05);
}
                        .badge-title {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #e2e8f0;
  color: #222;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
}

.client-group {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.client-item {
  display: flex;
  align-items: flex-start;
  background: #ffffff;
  padding: 1rem;
  border-left: 4px solid #0d6efd;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.client-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
}

.client-icon {
  font-size: 1.5rem;
  color: #0d6efd;
  margin-right: 0.75rem;
  margin-top: 0.2rem;
}
span{
    font-size: 15px!important;
}
.text-gradient {
  background: linear-gradient(to right, #dc3545, #fd7e14);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-img:hover img {
  transform: scale(1.05);
}

.service-point {
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.service-point:hover {
  transform: translateX(5px);
  color: #0d6efd;
}
.staff-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 1px solid #0d6efd;
}

.staff-card {
  transition: transform 0.3s ease;
  height: 100%;
}

.staff-card:hover {
  transform: translateY(-10px);
}

.social-icons a {
  font-size: 1.1rem;
  color: #0d6efd;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #6610f2;
}

/* Hide navigation arrows */
.swiper-button-next,
.swiper-button-prev {
  display: none !important;
}
.vm-card {
  background: #ffffff;
  border-radius: 18px;
  padding: 2.2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
}

.vm-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(13,110,253,0.08), rgba(220,53,69,0.08));
  opacity: 0;
  transition: opacity 0.35s ease;
}

.vm-card:hover::before {
  opacity: 1;
}

.vm-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.08);
}

.vm-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  color: #fff;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
}

.vision-card h4 {
  color: #0d6efd;
}

.mission-card h4 {
  color: #dc3545;
}
.value-card {
  background: #fff;
  border-radius: 16px;
  padding: 2rem 1.8rem;
  height: 100%;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
  transition: all 0.35s ease;
  position: relative;
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
}

.value-icon {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  color: #fff;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto auto 1rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
}

.value-card h5 {
  font-weight: 700;
  margin-bottom: 0.6rem;
}

.value-card p {
  font-size: 14.5px;
  color: #6c757d;
  line-height: 1.6;
}

</style>
