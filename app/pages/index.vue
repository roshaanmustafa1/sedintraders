<template>
  <div>
    <!-- Hero Section: Official Sedin Gold Hero Banner -->
    <HeroSection />

    <!-- All Products Section: Clean 4-Column Product Grid -->
    <ProductGrid />

    <!-- About Sedin Traders Section -->
    <AboutSection />
  </div>
</template>

<script setup>
import HeroSection from '~/components/home/HeroSection.vue'
import ProductGrid from '~/components/home/ProductGrid.vue'
import AboutSection from '~/components/home/AboutSection.vue'

useHead({
  title: 'Sedin Traders – Reliable. Strong. Sedin',
  meta: [
    {
      name: 'description',
      content: 'Sedin Traders - Lahore-based electrical manufacturing and distribution company specializing in high-quality cables, plugs, sockets, and extension solutions.'
    }
  ]
})
</script>
