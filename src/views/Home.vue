<template>
  <slider-section />
  <AboutUs />
  <OurServices />
  <WhyChooseUs />
  <service-section />
  
  <staff-section />
  <faq-section />
</template>

<script>
import SliderSection from '@/components/frontend/Slider.vue';
import AboutUs from '@/components/frontend/About.vue';
import OurServices from '@/components/frontend/Services.vue';
import WhyChooseUs from '@/components/frontend/WhyChooseUs.vue';
import FaqSection from '@/components/frontend/Faq.vue';
import StaffSection from '@/components/frontend/Staff.vue';
import ServiceSection from '@/components/frontend/ServiceSlider.vue';

export default {
  name: "HomeView",
  components: {
    SliderSection,
    AboutUs,
    OurServices,
    WhyChooseUs,
    ServiceSection,
    StaffSection,
    FaqSection,
  },
};
</script>
