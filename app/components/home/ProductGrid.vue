<template>
  <section id="products" class="py-14 sm:py-20 bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title matching sedintraders.com -->
      <div class="mb-10 text-center sm:text-left">
        <h2 class="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          All Products
        </h2>
        <div class="w-16 h-1 bg-primary mt-3 mx-auto sm:mx-0"></div>
      </div>

      <!-- Category Filter Pills using dynamic theme tokens -->
      <div class="flex items-center flex-wrap gap-2 mb-8">
        <button
          v-for="cat in productStore.categories"
          :key="cat.id"
          @click="productStore.setCategory(cat.id)"
          type="button"
          class="px-4 py-2 rounded text-xs sm:text-sm font-medium transition-colors"
          :class="productStore.selectedCategory === cat.id 
            ? 'bg-brand-dark text-white shadow-xs' 
            : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'"
        >
          {{ cat.name }}
        </button>
      </div>

      <!-- 4-Column Product Grid with Large Images -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in productStore.filteredProducts"
          :key="product.id"
          :product="product"
          @select="openModal"
        />
      </div>

      <!-- Empty State -->
      <div v-if="productStore.filteredProducts.length === 0" class="text-center py-16">
        <p class="text-muted-foreground text-base">No products found in this category.</p>
        <button
          @click="productStore.setCategory('all')"
          class="mt-4 px-4 py-2 bg-primary text-primary-foreground hover:bg-brand-red-hover rounded text-sm font-medium transition-colors"
        >
          View All Products
        </button>
      </div>
    </div>

    <!-- Clean Product Details Modal with Large Image Display -->
    <Teleport to="body">
      <div
        v-if="activeProduct"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
        @click.self="closeModal"
      >
        <div
          class="bg-card text-card-foreground rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200 border border-border"
          role="dialog"
          aria-modal="true"
        >
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-4 right-4 w-9 h-9 rounded-full bg-muted hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close Modal"
          >
            <svg class="w-5 h-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <!-- Large Product Image in Modal -->
            <div class="bg-muted/60 rounded-xl p-6 flex items-center justify-center h-80 sm:h-96">
              <img
                :src="activeProduct.image"
                :alt="activeProduct.title"
                class="max-h-full max-w-full object-contain"
              />
            </div>

            <!-- Product Info -->
            <div class="flex flex-col justify-between">
              <div>
                <span class="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                  {{ activeProduct.categoryLabel }}
                </span>
                <h3 class="text-2xl sm:text-3xl font-bold text-card-foreground mb-3">
                  {{ activeProduct.title }}
                </h3>
                <p class="text-sm text-muted-foreground leading-relaxed mb-5">
                  {{ activeProduct.shortDesc }}
                </p>

                <!-- Technical Specs -->
                <div v-if="activeProduct.specs?.length" class="space-y-2 mb-6 border-t border-border pt-3">
                  <div
                    v-for="(spec, idx) in activeProduct.specs"
                    :key="idx"
                    class="flex items-center justify-between text-xs"
                  >
                    <span class="text-muted-foreground font-medium">{{ spec.label }}:</span>
                    <span class="text-card-foreground font-semibold">{{ spec.value }}</span>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="space-y-2.5 pt-2">
                <a
                  :href="`https://wa.me/923004268720?text=Hello%20Sedin%20Traders,%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(activeProduct.title)}.`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full bg-brand-whatsapp hover:brightness-95 text-white py-3 px-4 rounded text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 1024 1024">
                    <path d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706z"/>
                  </svg>
                  <span>Inquire on WhatsApp</span>
                </a>

                <NuxtLink
                  to="/contact"
                  @click="closeModal"
                  class="w-full bg-brand-dark hover:opacity-90 text-white py-3 px-4 rounded text-sm font-semibold text-center block transition-opacity"
                >
                  Request Official Quote
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useProductStore } from '~/stores/useProductStore'
import ProductCard from './ProductCard.vue'

const productStore = useProductStore()
const activeProduct = ref(null)

const openModal = (product) => {
  activeProduct.value = product
}

const closeModal = () => {
  activeProduct.value = null
}
</script>
