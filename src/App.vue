<template>
<router-view />

</template>

<script>
// import Master from './views/pages/MasterLayout.vue'

export default {
  name: 'App',
  components: {
  
  }
}
</script>
  <style>
         .logo { margin-top: 0px!important; }
         .headline { font-size: 1.5rem!important; height: 22px!important; margin-top: 13%; }
         .font-family { margin-top: -1px!important; font-size: 20px!important; }
         .slider_size { height: 350px!important; }
         .carousel-img { position: absolute; top: 63px; left: 6%; width: 87%; height: 80%; object-fit: contain; border-radius: 7px; opacity: 1; background-color: #e0ebf800; }
         .display-4 { line-height: 1.8!important; }
         strong { color: rgb(255, 0, 0); font-weight: bold; }
         span { font-size: 18px!important; }
         .client { font-size: 14px!important; line-height: 1.8!important; }
         .py-5 { padding-top:3rem !important; margin-bottom: -155px; padding-bottom:10rem !important }
         .why_page { font-size: 20px!important; }
         .logo_clr { height: 30px; }
         .logo_arch { height: 33px; }
         @media (min-width: 768px) {
         .headline { font-size: 2.2rem!important; height: 0!important; margin-top: 0; }
         .slider_size { height: 520px!important; }
         .font-family { margin-top: 0px!important; font-size: 30px!important; }
         .carousel-img { position: absolute; top: 63px; left: 6%; width: 87%; height: 86%; object-fit: contain; border-radius: 7px; opacity: 1; background-color: #e0ebf800; }
         .why_page { font-size: 25px!important; }
         .logo_clr { height: 58px; }
         .logo_arch { height: 70px; }
         }
         /* Create the custom circle cursor */
         
      </style>
 
