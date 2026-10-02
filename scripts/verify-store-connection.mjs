import { setActivePinia, createPinia } from 'pinia'
import { useProductStore } from '../app/stores/useProductStore.js'

// Setup mock window & localStorage for Node environment testing
const storage = new Map()
const listeners = []

globalThis.window = {
  addEventListener(event, callback) {
    if (event === 'storage') {
      listeners.push(callback)
    }
  },
  dispatchEvent(event) {
    listeners.forEach(cb => cb(event))
  }
}

globalThis.localStorage = {
  getItem(key) {
    return storage.get(key) || null
  },
  setItem(key, value) {
    storage.set(key, String(value))
    // Trigger storage event listeners as browser would
    window.dispatchEvent({ key, newValue: String(value) })
  },
  removeItem(key) {
    storage.delete(key)
    window.dispatchEvent({ key, newValue: null })
  },
  clear() {
    storage.clear()
  }
}

// Emulate client environment
globalThis.import = { meta: { client: true } }

console.log('=== STARTING COMPREHENSIVE STORE & FRONTEND CONNECTION TESTS ===\n')

// 1. Initialize Pinia and Store
setActivePinia(createPinia())
const store = useProductStore()
store.initStore()

console.log(`[PASS 1] Store initialized with ${store.categories.length} categories and ${store.products.length} default products.`)

// 2. Initial state verification
const initialLiveCount = store.publishedProducts.length
const initialDraftCount = store.draftProducts.length
const initialFrontendCount = store.filteredProducts.length

console.log(`[PASS 2] Initial State: Live=${initialLiveCount}, Drafts=${initialDraftCount}, Frontend Visible=${initialFrontendCount}`)
if (initialLiveCount !== initialFrontendCount) {
  throw new Error(`Mismatch: published count (${initialLiveCount}) !== filteredProducts count (${initialFrontendCount})`)
}

// 3. Test: Save as Draft
console.log('\n--- TEST CASE A: Adding a product as DRAFT ---')
const draftProduct = store.addProduct({
  title: 'Test Industrial Heavy Armored Cable',
  category: 'copper-wiring',
  shortDesc: 'A test armored cable saved directly as a draft.',
  status: 'draft',
  specs: [
    { label: 'Voltage', value: '1000V' },
    { label: 'Standard', value: 'IEC 60502' }
  ]
})

console.log(`Added Draft Product ID: ${draftProduct.id} (status: ${draftProduct.status})`)
console.log(`Dashboard draftProducts count: ${store.draftProducts.length} (expected: ${initialDraftCount + 1})`)
console.log(`Public frontend filteredProducts count: ${store.filteredProducts.length} (expected: ${initialFrontendCount})`)

if (store.draftProducts.length !== initialDraftCount + 1) {
  throw new Error('Draft was not added to draftProducts getter!')
}
if (store.filteredProducts.some(p => p.id === draftProduct.id)) {
  throw new Error('CRITICAL BUG: Draft product is visible on the public frontend!')
}
console.log('>>> [SUCCESS] Draft product is correctly hidden from public storefront!')

// 4. Test: Publish the Draft
console.log('\n--- TEST CASE B: Publishing the Draft product ---')
store.updateProduct(draftProduct.id, { status: 'published' })

console.log(`Published Product status: ${store.products.find(p => p.id === draftProduct.id).status}`)
console.log(`Dashboard draftProducts count: ${store.draftProducts.length} (expected: ${initialDraftCount})`)
console.log(`Public frontend filteredProducts count: ${store.filteredProducts.length} (expected: ${initialFrontendCount + 1})`)

if (store.filteredProducts.length !== initialFrontendCount + 1) {
  throw new Error('Published product did not appear in frontend filteredProducts!')
}
if (!store.filteredProducts.some(p => p.id === draftProduct.id)) {
  throw new Error('CRITICAL BUG: Published product missing from public frontend!')
}
console.log('>>> [SUCCESS] Published product is immediately visible on public storefront!')

// 5. Test: Category Filtering on Frontend
console.log('\n--- TEST CASE C: Category Filtering on Frontend ---')
store.setCategory('copper-wiring')
const copperWiringFiltered = store.filteredProducts
console.log(`Products in "copper-wiring": ${copperWiringFiltered.length}`)
for (const p of copperWiringFiltered) {
  if (p.category !== 'copper-wiring') {
    throw new Error(`Product ${p.id} with category ${p.category} found in copper-wiring filter!`)
  }
}
store.setCategory('all')
console.log('>>> [SUCCESS] Category filtering operates with 100% precision.')

// 6. Test: Adding a New Category in Dashboard
console.log('\n--- TEST CASE D: Adding a New Category in Dashboard ---')
const initialCatCount = store.categories.length
const newCat = store.addCategory({ name: 'Fiber Optic & Data Cables' })
console.log(`New Category created: id=${newCat.id}, name=${newCat.name}`)
console.log(`Store categories count: ${store.categories.length} (expected: ${initialCatCount + 1})`)

if (!store.categories.some(c => c.id === newCat.id)) {
  throw new Error('New category not found in categories list!')
}

// Add a published product to this new category
const fiberProd = store.addProduct({
  title: 'Single-Mode 12-Core Fiber Optic',
  category: newCat.id,
  status: 'published'
})

store.setCategory(newCat.id)
console.log(`Products under "${newCat.name}": ${store.filteredProducts.length}`)
if (store.filteredProducts.length !== 1 || store.filteredProducts[0].id !== fiberProd.id) {
  throw new Error('New category filtering does not match newly assigned product!')
}
console.log('>>> [SUCCESS] New category dynamically binds and filters correctly.')

// 7. Test: Deleting a Category in Dashboard (Graceful fallback)
console.log('\n--- TEST CASE E: Deleting Category with Fallback Reassignment ---')
store.setCategory('all')
store.deleteCategory(newCat.id)
console.log(`Store categories count after deletion: ${store.categories.length} (expected: ${initialCatCount})`)
const reassignedProd = store.products.find(p => p.id === fiberProd.id)
console.log(`Product fallback category: ${reassignedProd.category} (${reassignedProd.categoryLabel})`)

if (reassignedProd.category === newCat.id) {
  throw new Error('Product was not reassigned after its category was deleted!')
}
console.log('>>> [SUCCESS] Deleted category reassigns orphaned products gracefully.')

// 8. Test: Cross-Tab / localStorage Hydration
console.log('\n--- TEST CASE F: localStorage Persistence & Cross-Tab Sync ---')
const rawSavedProducts = localStorage.getItem('sedin_products')
const rawSavedCategories = localStorage.getItem('sedin_categories')

if (!rawSavedProducts || !rawSavedCategories) {
  throw new Error('localStorage items were not saved!')
}

const parsedProducts = JSON.parse(rawSavedProducts)
console.log(`Persisted products count in localStorage: ${parsedProducts.length}`)
if (!parsedProducts.some(p => p.id === fiberProd.id)) {
  throw new Error('fiberProd not found in saved localStorage!')
}

// Simulate another tab initializing:
setActivePinia(createPinia())
const secondTabStore = useProductStore()
secondTabStore.initStore()
console.log(`Second Tab Hydrated Products: ${secondTabStore.products.length}`)
if (secondTabStore.products.length !== store.products.length) {
  throw new Error('Second tab did not hydrate accurately from localStorage!')
}
console.log('>>> [SUCCESS] Full cross-tab localStorage hydration verified.')

console.log('\n=============================================================')
console.log('🎉 ALL TESTS PASSED: FRONTEND & DASHBOARD ARE 100% CONNECTED!')
console.log('=============================================================\n')
