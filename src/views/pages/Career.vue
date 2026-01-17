<template>
    
   


    <!-- Hero Start -->
    <div class="container-fluid pt-5 bg-primary hero-header">
        <div class="container pt-5">
            <div class="row g-5 pt-5">
                <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                    <h1 class=" display-4 text-black mb-4 animated slideInRight headline word-hover">Careers at Arch Enterprises</h1>
                </div>
                <div class="col-lg-6 align-self-end text-center text-lg-end">
                    <img class="img-fluid" src="https://recruiseindia.com/assets/images/blog/single/how-asking-for-feedback-can-power-your-career-growth.jpg" alt="fire-pumps" style="max-height: 300px;">
                </div>
            </div>
        </div>
    </div>
    <div class="career-wrapper container">

    <!-- About Careers -->
      <div class="career-card">
        <h2>Why Work With Us?</h2>
        <p>
          At Arch Enterprises, we believe safety saves lives. We provide end-to-end
          fire protection and safety solutions across industries. Our team is driven
          by innovation, integrity, and responsibility.
        </p>
        <ul>
          <li>Opportunity to work on real-world fire & safety projects</li>
          <li>Professional growth and skill development</li>
          <li>Supportive and ethical work culture</li>
          <li>Exposure to industrial, commercial & residential safety systems</li>
        </ul>
      </div>

      <!-- Open Positions -->
      <div class="career-card">
        <h2>Current Openings</h2>
        <ul class="job-list">
          <li>
            <strong>Fire & Safety Engineer</strong>
            <span>Experience: 1–5 Years</span>
          </li>
          <li>
            <strong>Site Supervisor (Fire Systems)</strong>
            <span>Experience: 2–6 Years</span>
          </li>
          <li>
            <strong>Sales & Marketing Executive</strong>
            <span>Experience: 1–4 Years</span>
          </li>
          <li>
            <strong>Technician – Fire Alarm & Suppression Systems</strong>
            <span>Experience: Fresher / Experienced</span>
          </li>
        </ul>
      </div>

      <!-- How to Apply -->
      <div class="career-card apply-card">
        <h2>How to Apply</h2>
        <p>
          Interested candidates can send their resume with the subject line
          <strong style="color: yellow;">“Application for [Job Title]”</strong>.
        </p>
        <p class="apply-email">
          📧 careers@archenterprises.co.in
        </p>
      </div>
</div>
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
.career-section {
  background: #f8f9fa;
  padding: 60px 20px;
  font-family: Arial, sans-serif;
}

.career-container {
  max-width: 1100px;
  margin: auto;
}

.career-header {
  text-align: center;
  margin-bottom: 40px;
}

.career-header h1 {
  font-size: 36px;
  color: #c62828;
  margin-bottom: 10px;
}

.career-header p {
  color: #555;
  font-size: 16px;
}

.career-card {
  background: #fff;
  padding: 25px;
  margin-bottom: 25px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.career-card h2 {
  color: #222;
  margin-bottom: 15px;
  font-size: 22px;
}

.career-card p {
  color: #555;
  line-height: 1.6;
}

.career-card ul {
  padding-left: 20px;
  margin-top: 10px;
}

.career-card ul li {
  margin-bottom: 8px;
  color: #444;
}

.job-list li {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.job-list span {
  font-size: 14px;
  color: #777;
}

.apply-card {
  text-align: center;
  background: #c62828;
  color: #fff;
}

.apply-card h2,
.apply-card p {
  color: #fff;
}

.apply-email {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}
/* HERO */
.hero-header {
  background: linear-gradient(
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.55)
    ),
    url("https://recruiseindia.com/assets/images/blog/single/how-asking-for-feedback-can-power-your-career-growth.jpg")
      center/cover no-repeat;
  min-height: 420px;
  display: flex;
  align-items: center;
}

.hero-header h1 {
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #fff !important;
}

.hero-header img {
  display: none; /* cleaner hero */
}

/* PAGE WRAPPER */
.career-wrapper {
  max-width: 1100px;
  margin: -80px auto 60px;
  position: relative;
  z-index: 2;
}

/* CAREER CARDS */
.career-card {
  background: #ffffff;
  padding: 35px;
  margin-bottom: 30px;
  border-radius: 14px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.35s ease;
}

.career-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.12);
}

/* HEADINGS */
.career-card h2 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 18px;
  position: relative;
}

.career-card h2::after {
  content: "";
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, #c62828, #ff7043);
  display: block;
  margin-top: 8px;
  border-radius: 10px;
}

/* TEXT */
.career-card p {
  font-size: 15.5px;
  color: #555;
  line-height: 1.75;
}

/* LISTS */
.career-card ul {
  margin-top: 18px;
  padding-left: 0;
  list-style: none;
}

.career-card ul li {
  padding-left: 28px;
  margin-bottom: 12px;
  position: relative;
  font-size: 15px;
}

.career-card ul li::before {
  /* content: "✔"; */
  color: #c62828;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
}

/* JOB LIST */
.job-list li {
  background: #f9fafb;
  padding: 18px 22px;
  border-radius: 10px;
  margin-bottom: 16px;
  border-left: 5px solid #c62828;
  transition: all 0.3s ease;
}

.job-list li:hover {
  background: #fff;
  transform: translateX(5px);
}

.job-list strong {
  font-size: 17px;
  color: #222;
}

.job-list span {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}

/* APPLY CARD */
.apply-card {
  background: linear-gradient(135deg, #c62828, #ff7043);
  color: #fff;
  text-align: center;
}

.apply-card h2 {
  color: #fff;
  place-items: center;
}

.apply-card h2::after {
  background: rgba(255, 255, 255, 0.7);
}

.apply-card p {
  color: #fcecec;
}

.apply-email {
  font-size: 20px;
  font-weight: 700;
  margin-top: 14px;
  background: rgba(255, 255, 255, 0.15);
  display: inline-block;
  padding: 10px 22px;
  border-radius: 30px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .career-wrapper {
    margin-top: -40px;
    padding: 0 15px;
  }

  .hero-header {
    text-align: center;
  }

  .career-card {
    padding: 25px;
  }
}

</style>
