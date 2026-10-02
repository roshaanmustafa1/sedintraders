<template>
  <div
    class="bg-card border border-border rounded-xl flex flex-col justify-between hover:shadow-xl hover:border-border/80 transition-all duration-300 group"
  >
    <!-- Image Box with enlarged dimensions -->
    <div
      class="w-full h-full sm:h-80 bg-muted/50 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
      @click="$emit('select', product)"
    >
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full h-full max-h-68 sm:max-h-76 object-contain group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>

    <!-- Content -->
    <div class="pt-4 flex flex-col flex-grow justify-between text-center">
      <h3
        class="text-base sm:text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-1 mb-4 cursor-pointer"
        @click="$emit('select', product)"
      >
        {{ product.title }}
      </h3>

      <!-- Action Button using semantic dynamic theme tokens -->
      <div>
        <button
          type="button"
          @click="$emit('select', product)"
          class="w-full py-2.5 px-4 rounded-md text-sm font-semibold border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
        >
          Read more
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

defineEmits(["select"]);
</script>
