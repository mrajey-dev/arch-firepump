<template>
    <!-- Hero Slider Start -->
    <div id="heroCarousel"
     class="carousel slide carousel-fade"
     data-bs-ride="carousel"
     data-bs-interval="4000"
     data-bs-pause="false"> <!-- This line is key -->

        <div class="carousel-inner">
            <!-- Slide 1 -->
            <div class="carousel-item active">
                <div class="container-fluid pt-5 bg-primary hero-header mb-5">
                    <div class="container pt-5">
                        <div class="row g-5 pt-5">
                            <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                                <h1 class="display-4 text-black mb-4 slideInRight headline">
                                    <strong>Authorised</strong> Master service dealer of Clarke Fire Engines in India
                                </h1>
                            </div>
                            <div class="col-lg-6 align-self-end text-center text-lg-end sparkle-container slider_size" style="font-size:1.5rem; padding: 10px; margin-bottom: 64px; position: relative; overflow: hidden;">
                                <img class="carousel-img" src="frontend/img/clr/clr.webp" alt="Slide 1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slide 2 -->
            <div class="carousel-item">
                <div class="container-fluid pt-5 bg-primary hero-header mb-5">
                    <div class="container pt-5">
                        <div class="row g-5 pt-5">
                            <div class="col-lg-6 align-self-center slideInRight text-center text-lg-start mb-lg-5">
                                <img src="https://www.clarkefire.com/images/default-source/default-album/clarke-logo_header_500x77_red.png?sfvrsn=7b362a13_4"
                         alt="Metron Logo"
                         style="max-width: 200px; height: auto; margin-bottom: 20px;">
                                <h1 class="display-4 text-black mb-4 slideInRight headline">Clarke Fire Pump Engine dealers in India</h1>
                            </div>
                            <div class="col-lg-6 align-self-end text-center text-lg-end sparkle-container slider_size" style="padding: 10px; margin-bottom: 64px; position: relative; overflow: hidden;">
                                <img class="carousel-img" src="frontend/img/clr/slide3.webp" alt="Slide 2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slide 3 -->
            <div class="carousel-item">
    <div class="container-fluid pt-5 bg-primary hero-header mb-5">
        <div class="container pt-5">
            <div class="row g-5 pt-5">
                <div class="col-lg-6 align-self-center slideInRight text-center text-lg-start mb-lg-5">
                    <!-- Logo above headline -->
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Hubbell.svg/2560px-Hubbell.svg.png"
                         alt="Metron Logo"
                         style="max-width: 200px; height: auto; margin-bottom: 20px;">
                    
                    <h1 class="display-4 text-black mb-4 slideInRight headline">
                        Metron Eledyne Fire Pump Controller in India
                    </h1>
                </div>
                <div class="col-lg-6 align-self-end text-center text-lg-end sparkle-container slider_size" style="padding: 10px; margin-bottom: 40px; position: relative; overflow: hidden;">
                    <img class="carousel-img" src="frontend/img/clr/metron.webp" alt="Slide 3">
                </div>
            </div>
        </div>
    </div>
</div>

            <!-- Slide 4 -->
            <div class="carousel-item">
                <div class="container-fluid pt-5 bg-primary hero-header mb-5">
                    <div class="container pt-5">
                        <div class="row g-5 pt-5">
                            <div class="col-lg-6 align-self-center slideInRight text-center text-lg-start mb-lg-5">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eaton_Corporation_logo.svg/1280px-Eaton_Corporation_logo.svg.png"
                         alt="Metron Logo"
                         style="max-width: 200px; height: auto; margin-bottom: 20px;">
            
                                <h1 class="display-4 text-black mb-4 slideInRight headline">Eaton Fire Pump Controller in India</h1>
                            </div>
                            <div class="col-lg-6 align-self-end text-center text-lg-end sparkle-container slider_size" style="padding: 10px; margin-bottom: 64px; position: relative; overflow: hidden;">
                                <img class="carousel-img" src="frontend/img/clr/eaton.webp" alt="Slide 4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slide 5 -->
            <div class="carousel-item">
                <div class="container-fluid pt-5 bg-primary hero-header mb-5">
                    <div class="container pt-5">
                        <div class="row g-5 pt-5">
                            <div class="col-lg-6 slideInRight align-self-center text-center text-lg-start mb-lg-5">
                                 <img src="https://www.aebpumps.com/wp-content/uploads/2021/09/tornatech4.png"
                         alt="Metron Logo"
                         style="max-width: 300px; height: auto; margin-bottom: 20px;">
                                <h1 class="display-4 text-black mb-4 slideInRight headline">Tornatech Fire Pump Controller</h1>
                            </div>
                            <div class="col-lg-6 align-self-end text-center text-lg-end sparkle-container slider_size" style="padding: 10px; margin-bottom: 64px; position: relative; overflow: hidden;">
                                <img class="carousel-img" src="frontend/img/clr/tornatech.webp" alt="Slide 5">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Controls -->
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
    </div>
    <!-- Hero Slider End -->
</template>
<script>
export default {
    name: "SliderSection",
};
</script>

<style lang="scss" scoped>
/* Reset any uppercase transformations */
h1, h2, h3, h4, h5, h6, .headline, .display-4 {
  text-transform: none !important;
}

/* Existing styles */
.carousel-fade .carousel-item {
  opacity: 0;
  transition: opacity 0s ease-in-out, transform 1s ease-in-out;
}

.carousel-fade .carousel-item.active {
  opacity: 1;
  z-index: 1;
}

.carousel-img {
  transition: transform 1.2s ease-in-out;
}

.carousel-item.active .carousel-img {
  transform: scale(1.05);
}

.slideInRight {
  animation: slideInRight 1s ease forwards;
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .font-family {
    margin-top: 0px !important;
    font-size: 50px !important;
  }
}
</style>
