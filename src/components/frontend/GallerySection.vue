<template>
  <section class="gallery-section py-5">
    <div class="container">
      <h2 class="text-center mb-4">Photo Gallery</h2>

      <!-- Tabs -->
      <div class="d-flex justify-content-center mb-4 flex-wrap gap-2">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="['btn', selectedCategory === category ? 'btn-primary' : 'btn-outline-primary']"
        >
          {{ category }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="row g-3">
        <div
          v-for="(image, index) in filteredImages"
          :key="index"
          class="col-6 col-md-4 col-lg-3"
        >
          <img
            :src="image.url"
            :alt="'Image ' + (index + 1)"
            class="img-fluid rounded shadow-sm gallery-thumb"
            @click="openLightbox(index)"
            style="cursor: zoom-in;"
          />
        </div>
      </div>

      <!-- Lightbox -->
      <vue-easy-lightbox
        :visible="lightboxVisible"
        :imgs="filteredImages.map(i => i.url)"
        :index="lightboxIndex"
        @hide="lightboxVisible = false"
      />
    </div>
  </section>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
  name: 'GallerySection',
  components: { VueEasyLightbox },
  data() {
    return {
      selectedCategory: 'All',
      images: [
        { url: 'frontend/gallery/photo1.jpg', category: 'Events' },
        { url: 'frontend/gallery/photo2.jpg', category: 'Nature' },
        { url: 'frontend/gallery/photo3.jpg', category: 'Products' },
        { url: 'frontend/gallery/photo4.jpg', category: 'Nature' },
        { url: 'frontend/gallery/photo5.jpg', category: 'Events' },
        { url: 'frontend/gallery/photo6.jpg', category: 'Products' },
        { url: 'frontend/gallery/photo7.jpg', category: 'Nature' },
        { url: 'frontend/gallery/photo8.jpg', category: 'Events' },
        { url: 'frontend/gallery/photo9.jpg', category: 'Products' },
        { url: 'frontend/gallery/photo10.jpg', category: 'Nature' },
        { url: 'frontend/gallery/photo11.jpg', category: 'Products' },
        { url: 'frontend/gallery/photo12.jpg', category: 'Events' },
        { url: 'frontend/gallery/photo13.jpg', category: 'Nature' },
        { url: 'frontend/gallery/photo14.jpg', category: 'Products' },
        { url: 'frontend/gallery/photo15.jpg', category: 'Events' },
        { url: 'frontend/gallery/photo16.jpg', category: 'Nature' },
        { url: 'frontend/gallery/photo17.jpg', category: 'Products' },
        { url: 'frontend/gallery/photo18.jpg', category: 'Events' },
        { url: 'frontend/gallery/photo19.jpg', category: 'Nature' },
        { url: 'frontend/gallery/photo20.jpg', category: 'Products' }
      ],
      lightboxVisible: false,
      lightboxIndex: 0
    }
  },
  computed: {
    categories() {
      const uniqueCategories = [...new Set(this.images.map(img => img.category))]
      return ['All', ...uniqueCategories]
    },
    filteredImages() {
      if (this.selectedCategory === 'All') return this.images
      return this.images.filter(img => img.category === this.selectedCategory)
    }
  },
  methods: {
    openLightbox(index) {
      this.lightboxIndex = index
      this.lightboxVisible = true
    }
  }
}
</script>

<style scoped>
.gallery-thumb {
  transition: transform 0.3s ease;
}
.gallery-thumb:hover {
  transform: scale(1.05);
}
</style>
