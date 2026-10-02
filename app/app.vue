<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '~/stores/useProductStore'

const productStore = useProductStore()

onMounted(() => {
  productStore.initStore()
})
</script>
