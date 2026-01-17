<template>
  <footer class="footer bg-dark text-white-50 pt-5">
    <div class="container">
      <div class="row g-5">
        <!-- Company Info -->
        <div class="col-md-6 col-lg-3">
          <a href="index" class="d-inline-block mb-3">
            <h1 class="text-white">Arch Enterprises</h1>
          </a>
          <p>Delivering top-quality Fire Pump products and services.</p>
        </div>

        <!-- Contact Info -->
        <div class="col-md-6 col-lg-3">
          <h5 class="text-white mb-4">Get In Touch</h5>
          <p><i class="fas fa-map-marker-alt me-2"></i>Plot No. 49, Prathamesh, Khutwadnagar, Kamathwade, Nashik, Maharashtra, India - 422 008.</p>
          <p><i class="fas fa-phone-alt me-2"></i>+91 8390704453</p>
          <p><i class="fas fa-envelope me-2"></i>contact@archenterprises.co.in</p>
          <p><i class="fas fa-envelope me-2"></i>amar@archenterprises.co.in</p>
          <div class="d-flex pt-2">
            <a class="btn btn-outline-light btn-social me-2" href="#"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-outline-light btn-social me-2" href="#"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-outline-light btn-social me-2" href="#"><i class="fab fa-youtube"></i></a>
            <a class="btn btn-outline-light btn-social me-2" href="#"><i class="fab fa-instagram"></i></a>
            <a class="btn btn-outline-light btn-social" href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <!-- Popular Links -->
        <div class="col-md-6 col-lg-3">
          <h5 class="text-white mb-4">Popular Links</h5>
          <a class="btn btn-link text-white-50" href="about">About Us</a>
          <a class="btn btn-link text-white-50" href="contact">Contact Us</a>
          <a class="btn btn-link text-white-50" href="#">Career</a>
        </div>

        <!-- Services -->
        <div class="col-md-6 col-lg-3">
          <h5 class="text-white mb-4">Our Services</h5>
          <ul class="list-unstyled text-white-50">
            <li>Installation Services</li>
            <li>Inspection & Testing</li>
            <li>Preventive Maintenance</li>
            <li>Emergency Repair Services</li>
            <li>Retrofitting & Upgrades</li>
          </ul>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="row mt-4 pt-4 border-top border-secondary">
        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
          &copy; <a class="text-white" href="#">Arch Enterprises</a>, All Rights Reserved 2025
          <br />
         
        </div>
        <div class="col-md-6 text-center text-md-end">
          <div class="footer-menu">
            <a href="index" class="text-white-50 me-3">Home</a>
            <a href="#" class="text-white-50 me-3">Cookies</a>
            <a href="contact" class="text-white-50 me-3">Help</a>
            <a href="faq" class="text-white-50">FAQs</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #111;
  a {
    transition: 0.3s ease;
    &:hover {
      color: #3712f3 !important;
      text-decoration: none;
    }
  }

  .btn-social {
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 16px;
    transition: 0.3s;
    &:hover {
      background-color: #fbfbfb;
      color: #000;
    }
  }

  .footer-menu a {
    margin-right: 15px;
    text-decoration: none;
    &:hover {
      color: #f39c12 !important;
    }
  }

  h5 {
    font-weight: 600;
  }

  ul {
    padding-left: 0;
    li {
      margin-bottom: 8px;
    }
  }
}
</style>
