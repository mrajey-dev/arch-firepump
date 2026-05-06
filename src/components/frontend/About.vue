<template>
  <div class="container-fluid py-5 bg-light">
    <div class="container">
      <div class="row g-5 align-items-center bg-red p-4">
        <!-- Image Column -->
         
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div class="overflow-hidden rounded-4 fade-img-wrapper">
            <img
              class="img-fluid w-100 h-auto fade-hover"
              src="frontend/img/clr/clr11.webp"
              alt="fire-pumps"
            />
          </div>
        </div>

        <!-- Content Column -->
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <span class="badge bg-black-button text-black px-3 py-2 rounded-pill mb-3">About Us</span>
          <h1 class="mb-4 text-dark">Clarke Fire Products Dealer in {{ city }}</h1>
          <p class="mb-4 text-muted">
            We specialize in delivering high-quality fire pump products and services, ensuring reliability, safety,
            and customer satisfaction. Our commitment to excellence fosters long-term partnerships built on trust and
            performance.
          </p>

          <!-- Features -->
          <div class="row g-3">
            <div class="col-sm-6">
              <h6 class="mb-3">
                <i class="fa fa-check-circle text-success me-2"></i> Award Winning
              </h6>
              <h6>
                <i class="fa fa-check-circle text-success me-2"></i> Professional Staff
              </h6>
              <h6 class="mb-3">
                <i class="fa fa-check-circle text-success me-2"></i> 24/7 Support
              </h6>
              <h6>
                <i class="fa fa-check-circle text-success me-2"></i> Fair Prices
              </h6>
            </div>
          </div>

          <!-- Optional Call to Action -->
          <!-- <div class="d-flex align-items-center mt-4">
            <a href="contact" class="btn btn-primary btn-lg rounded-pill px-4">Get in Touch</a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
name: "SliderSection",

computed:{
city(){
const city = this.$route.params.city

if(city){
return city
.replace(/-/g,' ')
.replace(/\b\w/g,l=>l.toUpperCase())
}

return "India"
}
}

};
</script>
<style scoped>
/* Image Fade Hover */
.fade-img-wrapper {
  overflow: hidden;
  border-radius: 12px;
}

.fade-hover {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-hover:hover {
 
  transform: scale(1.02);
}

/* Text Styling */
.badge {
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

h1 {
  font-weight: 700;
}

h6 {
  font-weight: 500;
}

p {
  font-size: 1rem;
  line-height: 1.6;
}
</style>
