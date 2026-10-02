<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      @click.self="close"
    >
      <div
        class="bg-card text-card-foreground border border-border rounded-xl shadow-2xl max-w-4xl w-full my-auto overflow-hidden relative animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <!-- Modal Header -->
        <div class="px-6 py-4 border-b border-border flex items-center justify-between bg-muted/40">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-foreground">
                {{ isEdit ? 'Edit Product Details' : 'Add New Product to Catalog' }}
              </h3>
              <p class="text-xs text-muted-foreground">
                {{ isEdit ? 'Update product specifications, category, and visual representation.' : 'Create a new product item that immediately displays across your storefront.' }}
              </p>
            </div>
          </div>

          <button
            type="button"
            @click="close"
            class="w-8 h-8 rounded-full bg-muted hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <svg class="w-4 h-4 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Form Body -->
        <form @submit.prevent="handleSubmit" class="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          <!-- Error alert -->
          <div v-if="errorMessage" class="p-3.5 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-xs flex items-center gap-2">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke-width="2"></circle>
              <line x1="12" y1="8" x2="12" y2="12" stroke-width="2"></line>
              <line x1="12" y1="16" x2="12.01" y2="16" stroke-width="2"></line>
            </svg>
            <span>{{ errorMessage }}</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <!-- Left Column: Primary Details -->
            <div class="lg:col-span-7 space-y-4">
              <!-- Title -->
              <div>
                <label class="block text-xs font-semibold text-foreground mb-1.5">
                  Product Title <span class="text-primary">*</span>
                </label>
                <input
                  v-model="form.title"
                  type="text"
                  required
                  placeholder="e.g., 35/76 High Voltage Copper Wire"
                  class="w-full px-3.5 py-2.5 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <!-- Category & Label Selection -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <label class="block text-xs font-semibold text-foreground">
                      Category <span class="text-primary">*</span>
                    </label>
                    <button
                      type="button"
                      @click="$emit('open-add-category')"
                      class="text-[11px] text-primary hover:underline font-medium inline-flex items-center gap-0.5"
                    >
                      <span>+ New Category</span>
                    </button>
                  </div>
                  <select
                    v-model="form.category"
                    @change="onCategoryChange"
                    required
                    class="w-full px-3.5 py-2.5 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:border-primary transition-all cursor-pointer"
                  >
                    <option
                      v-for="cat in availableCategories"
                      :key="cat.id"
                      :value="cat.id"
                    >
                      {{ cat.name }}
                    </option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-foreground mb-1.5">
                    Category Display Badge
                  </label>
                  <input
                    v-model="form.categoryLabel"
                    type="text"
                    placeholder="e.g., Copper Wiring"
                    class="w-full px-3.5 py-2.5 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:border-primary transition-all"
                  />
                </div>
              </div>

              <!-- Short Description -->
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <label class="block text-xs font-semibold text-foreground">
                    Short Description <span class="text-primary">*</span>
                  </label>
                  <span class="text-[10px] text-muted-foreground">{{ form.shortDesc.length }} characters</span>
                </div>
                <textarea
                  v-model="form.shortDesc"
                  rows="3"
                  required
                  placeholder="Provide a clear, technical description of the product, conductor purity, usage and application..."
                  class="w-full px-3.5 py-2.5 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:border-primary transition-all leading-relaxed"
                ></textarea>
              </div>

              <!-- Technical Specifications -->
              <div class="pt-2 border-t border-border">
                <div class="flex items-center justify-between mb-2.5">
                  <div>
                    <label class="block text-xs font-bold text-foreground">
                      Technical Specifications
                    </label>
                    <p class="text-[11px] text-muted-foreground">Add key technical attributes shown in the product modal.</p>
                  </div>
                  <button
                    type="button"
                    @click="addSpec"
                    class="px-2.5 py-1 text-xs font-medium rounded border border-border hover:bg-muted text-foreground inline-flex items-center gap-1 transition-colors"
                  >
                    <svg class="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    <span>Add Spec</span>
                  </button>
                </div>

                <div class="space-y-2">
                  <div
                    v-for="(spec, index) in form.specs"
                    :key="index"
                    class="flex items-center gap-2"
                  >
                    <input
                      v-model="spec.label"
                      type="text"
                      placeholder="Label (e.g., Conductor)"
                      class="w-1/3 px-3 py-1.5 text-xs rounded-md border border-input bg-background text-foreground focus:outline-none focus:border-primary"
                    />
                    <input
                      v-model="spec.value"
                      type="text"
                      placeholder="Value (e.g., 99.9% Pure Copper)"
                      class="flex-1 px-3 py-1.5 text-xs rounded-md border border-input bg-background text-foreground focus:outline-none focus:border-primary"
                    />
                    <button
                      type="button"
                      @click="removeSpec(index)"
                      class="w-7 h-7 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive flex items-center justify-center transition-colors"
                      title="Remove Spec"
                    >
                      <svg class="w-3.5 h-3.5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column: Image Selection & Live Preview -->
            <div class="lg:col-span-5 space-y-4">
              <div>
                <label class="block text-xs font-semibold text-foreground mb-1.5">
                  Product Image <span class="text-primary">*</span>
                </label>

                <!-- Image Source Method Tabs -->
                <div class="flex items-center gap-1 p-1 bg-muted rounded-lg mb-3">
                  <button
                    type="button"
                    @click="imageMode = 'preset'"
                    class="flex-1 py-1 text-xs font-medium rounded-md transition-all"
                    :class="imageMode === 'preset' ? 'bg-background shadow-xs text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'"
                  >
                    Presets (15)
                  </button>
                  <button
                    type="button"
                    @click="imageMode = 'upload'"
                    class="flex-1 py-1 text-xs font-medium rounded-md transition-all"
                    :class="imageMode === 'upload' ? 'bg-background shadow-xs text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'"
                  >
                    Upload File
                  </button>
                  <button
                    type="button"
                    @click="imageMode = 'url'"
                    class="flex-1 py-1 text-xs font-medium rounded-md transition-all"
                    :class="imageMode === 'url' ? 'bg-background shadow-xs text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'"
                  >
                    Custom URL
                  </button>
                </div>

                <!-- Tab 1: Presets -->
                <div v-if="imageMode === 'preset'" class="space-y-2">
                  <p class="text-[11px] text-muted-foreground">Select from genuine Sedin product photography:</p>
                  <div class="grid grid-cols-4 gap-2 max-h-44 overflow-y-auto p-1 border border-border rounded-lg bg-background">
                    <button
                      v-for="(img, idx) in presetImages"
                      :key="idx"
                      type="button"
                      @click="form.image = img.url"
                      class="relative aspect-square rounded-md overflow-hidden border-2 transition-all p-1 bg-muted/30 hover:opacity-90"
                      :class="form.image === img.url ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-border'"
                      :title="img.label"
                    >
                      <img :src="img.url" :alt="img.label" class="w-full h-full object-contain" />
                    </button>
                  </div>
                </div>

                <!-- Tab 2: Upload -->
                <div v-else-if="imageMode === 'upload'" class="space-y-2">
                  <label class="block border-2 border-dashed border-border hover:border-primary/50 rounded-lg p-4 text-center cursor-pointer transition-colors bg-muted/20">
                    <input
                      type="file"
                      accept="image/*"
                      @change="handleFileUpload"
                      class="hidden"
                    />
                    <div class="flex flex-col items-center justify-center gap-1.5 text-muted-foreground">
                      <svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                      </svg>
                      <p class="text-xs font-semibold text-foreground">Click to upload image</p>
                      <p class="text-[11px] text-muted-foreground">JPG, PNG, WEBP supported (auto stored)</p>
                    </div>
                  </label>
                </div>

                <!-- Tab 3: Custom URL -->
                <div v-else-if="imageMode === 'url'" class="space-y-2">
                  <input
                    v-model="form.image"
                    type="url"
                    placeholder="https://example.com/product.jpg"
                    class="w-full px-3.5 py-2 text-xs rounded-lg border border-input bg-background text-foreground focus:outline-none focus:border-primary transition-all font-mono"
                  />
                  <p class="text-[11px] text-muted-foreground">Enter an absolute image URL or local path (/images/...).</p>
                </div>
              </div>

              <!-- Live Card Preview -->
              <div class="border border-border rounded-xl p-4 bg-muted/30">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Storefront Card Preview</span>
                  <span class="text-[10px] text-primary font-semibold">Live Preview</span>
                </div>

                <div class="bg-card border border-border rounded-lg p-3 shadow-xs">
                  <div class="w-full h-36 bg-muted/50 rounded flex items-center justify-center overflow-hidden mb-3">
                    <img
                      v-if="form.image"
                      :src="form.image"
                      :alt="form.title || 'Product'"
                      class="max-h-full max-w-full object-contain"
                    />
                    <div v-else class="text-xs text-muted-foreground">No image selected</div>
                  </div>
                  <div>
                    <span class="inline-block text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                      {{ form.categoryLabel || 'Category' }}
                    </span>
                    <h4 class="text-xs font-bold text-card-foreground line-clamp-1">
                      {{ form.title || 'Product Title' }}
                    </h4>
                    <p class="text-[11px] text-muted-foreground line-clamp-2 mt-1">
                      {{ form.shortDesc || 'Short technical description will appear here...' }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Footer Actions -->
          <div class="flex items-center justify-end gap-3 pt-4 border-t border-border">
            <button
              type="button"
              @click="close"
              class="px-4 py-2.5 text-xs font-semibold rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-6 py-2.5 text-xs font-semibold rounded-lg bg-primary hover:bg-brand-red-hover text-primary-foreground transition-all shadow-xs inline-flex items-center gap-2"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{{ isEdit ? 'Update Product' : 'Add to Catalog' }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useProductStore, PRESET_IMAGES } from '~/stores/useProductStore'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  product: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close', 'saved', 'open-add-category'])

const productStore = useProductStore()
const presetImages = PRESET_IMAGES
const isEdit = computed(() => !!props.product)

const imageMode = ref('preset')
const errorMessage = ref('')

const availableCategories = computed(() => {
  return productStore.categories.filter(c => c.id !== 'all')
})

const form = reactive({
  id: '',
  title: '',
  category: 'copper-wiring',
  categoryLabel: 'Copper Wiring',
  image: '/images/products/copper-35-76-blue.jpg',
  shortDesc: '',
  specs: [
    { label: 'Conductor', value: '100% Pure Electrolytic Copper' },
    { label: 'Standard', value: 'Certified BSS / IEC Compliant' },
    { label: 'Rating', value: '450 / 750V Grade A' }
  ]
})

const onCategoryChange = () => {
  const match = productStore.categories.find(c => c.id === form.category)
  if (match) {
    form.categoryLabel = match.name
  }
}

const addSpec = () => {
  form.specs.push({ label: '', value: '' })
}

const removeSpec = (index) => {
  form.specs.splice(index, 1)
}

const handleFileUpload = (event) => {
  const file = event.target.files?.[0]
  if (!file) return

  if (!file.type.startsWith('image/')) {
    errorMessage.value = 'Please select a valid image file (PNG, JPG, WEBP).'
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    form.image = e.target.result
    errorMessage.value = ''
  }
  reader.readAsDataURL(file)
}

const resetForm = () => {
  const defaultCategory = availableCategories.value[0]?.id || 'copper-wiring'
  const defaultCatName = availableCategories.value[0]?.name || 'Copper Wiring'

  form.id = ''
  form.title = ''
  form.category = defaultCategory
  form.categoryLabel = defaultCatName
  form.image = '/images/products/copper-35-76-blue.jpg'
  form.shortDesc = ''
  form.specs = [
    { label: 'Conductor', value: '100% Pure Electrolytic Copper' },
    { label: 'Standard', value: 'Certified BSS / IEC Compliant' },
    { label: 'Rating', value: '450 / 750V Grade A' }
  ]
  errorMessage.value = ''
  imageMode.value = 'preset'
}

watch(
  () => props.isOpen,
  (open) => {
    errorMessage.value = ''
    if (open) {
      if (props.product) {
        form.id = props.product.id
        form.title = props.product.title || ''
        form.category = props.product.category || 'copper-wiring'
        form.categoryLabel = props.product.categoryLabel || ''
        form.image = props.product.image || '/images/products/copper-35-76-blue.jpg'
        form.shortDesc = props.product.shortDesc || ''
        form.specs = Array.isArray(props.product.specs)
          ? JSON.parse(JSON.stringify(props.product.specs))
          : []

        // If custom image url or base64, adjust tab
        if (form.image.startsWith('data:')) {
          imageMode.value = 'upload'
        } else if (presetImages.some(p => p.url === form.image)) {
          imageMode.value = 'preset'
        } else {
          imageMode.value = 'url'
        }
      } else {
        resetForm()
      }
    }
  }
)

const close = () => {
  emit('close')
}

const handleSubmit = () => {
  errorMessage.value = ''

  if (!form.title.trim()) {
    errorMessage.value = 'Product title is required.'
    return
  }

  if (!form.category) {
    errorMessage.value = 'Please select a category.'
    return
  }

  if (!form.shortDesc.trim()) {
    errorMessage.value = 'Product short description is required.'
    return
  }

  if (!form.image) {
    errorMessage.value = 'Please select or upload a product image.'
    return
  }

  const cleanSpecs = form.specs.filter(s => s.label && s.label.trim() && s.value && s.value.trim())

  const payload = {
    title: form.title.trim(),
    category: form.category,
    categoryLabel: form.categoryLabel.trim() || 'General',
    image: form.image,
    shortDesc: form.shortDesc.trim(),
    specs: cleanSpecs
  }

  if (isEdit.value && form.id) {
    const updated = productStore.updateProduct(form.id, payload)
    if (updated) {
      emit('saved', updated)
      close()
    } else {
      errorMessage.value = 'Failed to update product.'
    }
  } else {
    const created = productStore.addProduct(payload)
    if (created) {
      emit('saved', created)
      close()
    } else {
      errorMessage.value = 'Failed to create product.'
    }
  }
}
</script>
