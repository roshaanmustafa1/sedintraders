<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      @click.self="close"
    >
      <div
        class="bg-card text-card-foreground border border-border rounded-xl shadow-2xl max-w-md w-full p-6 relative animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <!-- Close Button -->
        <button
          type="button"
          @click="close"
          class="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <svg class="w-4 h-4 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div class="mb-5">
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
            </svg>
            <span>Category Manager</span>
          </div>
          <h3 class="text-xl font-bold text-foreground">
            {{ isEdit ? 'Edit Category' : 'Create New Category' }}
          </h3>
          <p class="text-xs text-muted-foreground mt-1">
            {{ isEdit ? 'Update the category title across all linked products.' : 'Add a new product category to organize your catalog and filter tabs.' }}
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Error alert -->
          <div v-if="errorMessage" class="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-xs">
            {{ errorMessage }}
          </div>

          <!-- Category Name -->
          <div>
            <label class="block text-xs font-semibold text-foreground mb-1.5">
              Category Name <span class="text-primary">*</span>
            </label>
            <input
              v-model="name"
              @input="handleNameInput"
              type="text"
              required
              placeholder="e.g., Solar Cables & Leads"
              class="w-full px-3.5 py-2.5 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          <!-- Category Slug / ID -->
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="block text-xs font-semibold text-foreground">
                Category ID (Slug) <span class="text-primary">*</span>
              </label>
              <button
                v-if="!isEdit"
                type="button"
                @click="autoSlug = !autoSlug"
                class="text-[11px] text-primary hover:underline"
              >
                {{ autoSlug ? 'Manual Edit' : 'Auto-Generate' }}
              </button>
            </div>
            <input
              v-model="slug"
              :disabled="isEdit || autoSlug"
              type="text"
              required
              placeholder="e.g., solar-cables-leads"
              class="w-full px-3.5 py-2.5 text-sm font-mono rounded-lg border border-input bg-muted/60 text-foreground disabled:opacity-75 focus:outline-none focus:border-primary transition-all"
            />
            <p class="text-[11px] text-muted-foreground mt-1">
              {{ isEdit ? 'Category ID is permanent to maintain product links.' : 'Used in internal routing and product association.' }}
            </p>
          </div>

          <!-- Actions -->
          <div class="flex items-center justify-end gap-3 pt-3 border-t border-border">
            <button
              type="button"
              @click="close"
              class="px-4 py-2 text-xs font-semibold rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 text-xs font-semibold rounded-lg bg-primary hover:bg-brand-red-hover text-primary-foreground transition-all shadow-xs inline-flex items-center gap-1.5"
            >
              <span>{{ isEdit ? 'Save Changes' : 'Create Category' }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useProductStore } from '~/stores/useProductStore'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  category: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close', 'saved'])

const productStore = useProductStore()

const isEdit = ref(false)
const name = ref('')
const slug = ref('')
const autoSlug = ref(true)
const errorMessage = ref('')

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

const handleNameInput = () => {
  if (autoSlug.value && !isEdit.value) {
    slug.value = slugify(name.value)
  }
}

watch(
  () => props.isOpen,
  (open) => {
    errorMessage.value = ''
    if (open) {
      if (props.category) {
        isEdit.value = true
        name.value = props.category.name || ''
        slug.value = props.category.id || ''
        autoSlug.value = false
      } else {
        isEdit.value = false
        name.value = ''
        slug.value = ''
        autoSlug.value = true
      }
    }
  }
)

const close = () => {
  emit('close')
}

const handleSubmit = () => {
  errorMessage.value = ''
  if (!name.value.trim()) {
    errorMessage.value = 'Please enter a category name.'
    return
  }

  if (isEdit.value) {
    const updated = productStore.updateCategory(slug.value, { name: name.value.trim() })
    if (updated) {
      emit('saved', updated)
      close()
    } else {
      errorMessage.value = 'Failed to update category.'
    }
  } else {
    const finalSlug = slug.value.trim() || slugify(name.value)
    if (!finalSlug || finalSlug === 'all') {
      errorMessage.value = 'Invalid category ID. Please choose a different name.'
      return
    }

    if (productStore.categories.some(c => c.id === finalSlug)) {
      errorMessage.value = 'A category with this ID already exists. Please choose a different name.'
      return
    }

    const created = productStore.addCategory({
      name: name.value.trim(),
      id: finalSlug
    })

    if (created) {
      emit('saved', created)
      close()
    } else {
      errorMessage.value = 'Could not create category.'
    }
  }
}
</script>
