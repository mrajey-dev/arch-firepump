<template>
  <header-section></header-section>
  <main>
    <router-view /> <!-- This is where the actual page content will go -->
  </main>
  <footer-section></footer-section>
</template>

<script>
import HeaderSection from '@/components/frontend/Header.vue';
import FooterSection from '@/components/frontend/Footer.vue';

export default {
  name: "MasterLayout",
  components: {
    HeaderSection,
    FooterSection,
  },
};
</script>
