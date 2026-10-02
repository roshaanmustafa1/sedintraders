import { defineStore } from 'pinia'

export const INITIAL_CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'copper-wiring', name: 'Copper Wiring' },
  { id: 'submersible', name: 'Submersible Pump' },
  { id: 'iron-cables', name: 'Iron Cables & Leads' },
  { id: 'power-cords', name: 'Power Cords' }
]

export const INITIAL_PRODUCTS = [
  {
    id: 'build-customize-cables',
    title: 'Build Customize Cables',
    category: 'copper-wiring',
    categoryLabel: 'Custom Cables',
    image: '/images/products/custom-cables.jpg',
    shortDesc: 'Custom industrial cables engineered according to client wire gauge specifications, strand thickness, custom lengths, and molded terminal ends.',
    specs: [
      { label: 'Conductor', value: '100% Pure Electrolytic Copper' },
      { label: 'Customization', value: 'Gauge, Length, Terminals, Molded Plugs' },
      { label: 'Application', value: 'Industrial Machinery & Custom OEM Wiring' }
    ]
  },
  {
    id: 'copper-35-76-blue',
    title: '35/76 Copper',
    category: 'copper-wiring',
    categoryLabel: 'Copper Wiring',
    image: '/images/products/copper-35-76-blue.jpg',
    shortDesc: 'Top-tier 35/76 pure copper building wire with high dielectric insulation for residential, commercial main lines, and high-amp distribution.',
    specs: [
      { label: 'Conductor', value: '99.9% Pure Annealed Copper' },
      { label: 'Rating', value: '450 / 750V Grade A PVC' },
      { label: 'Standard', value: 'Certified BSS / IEC Compliant' }
    ]
  },
  {
    id: 'copper-35-76-red',
    title: '35/76 Copper',
    category: 'copper-wiring',
    categoryLabel: 'Copper Wiring',
    image: '/images/products/copper-35-76-red.jpg',
    shortDesc: 'Heavy-duty 35/76 single core building wire in high-visibility red flame-retardant sheath, engineered for maximum power efficiency and safety.',
    specs: [
      { label: 'Conductor', value: '99.9% Electrolytic Copper' },
      { label: 'Insulation', value: 'Flame-Retardant Low-Smoke PVC' },
      { label: 'Application', value: 'Main breakers, ACs, and industrial sub-mains' }
    ]
  },
  {
    id: 'submersible-pump-4',
    title: 'Submersible Pump',
    category: 'submersible',
    categoryLabel: 'Submersible Pump',
    image: '/images/products/submersible-pump-4.jpg',
    shortDesc: 'Heavy-duty submersible motor cable designed for extreme continuous underwater conditions, agricultural tube wells, and high-head pump systems.',
    specs: [
      { label: 'Rating', value: 'Continuous Immersion IP68' },
      { label: 'Core Count', value: '3-Core Water-Sealed' },
      { label: 'Resistance', value: 'Oil, Saline, and Abrasion Proof' }
    ]
  },
  {
    id: 'submersible-pump-3',
    title: 'Submersible Pump',
    category: 'submersible',
    categoryLabel: 'Submersible Pump',
    image: '/images/products/submersible-pump-3.jpg',
    shortDesc: 'Flat 3-core submersible pump wire with specialized waterproof compound sheath for deep borehole agricultural and municipal water extraction.',
    specs: [
      { label: 'Type', value: 'Flat 3-Core Flexible' },
      { label: 'Conductor', value: 'Fine Bare Copper Strands' },
      { label: 'Voltage', value: '600 / 1100 V' }
    ]
  },
  {
    id: 'submersible-pump-2',
    title: 'Submersible Pump',
    category: 'submersible',
    categoryLabel: 'Submersible Pump',
    image: '/images/products/submersible-pump-2.jpg',
    shortDesc: 'Circular double-insulated submersible cable built to withstand high hydrostatic water pressure and fluctuating power supplies in deep wells.',
    specs: [
      { label: 'Outer Sheath', value: 'Tough Abrasion-Resistant PVC' },
      { label: 'Conductor', value: 'High Conductivity Copper Strands' },
      { label: 'Testing', value: 'Hydrostatic pressure tested' }
    ]
  },
  {
    id: 'submersible-pump-1',
    title: 'Submersible Pump',
    category: 'submersible',
    categoryLabel: 'Submersible Pump',
    image: '/images/products/submersible-pump-1.jpg',
    shortDesc: 'Standard certified submersible pump wire offering high flex life and low internal resistance for residential and commercial water pumps.',
    specs: [
      { label: 'Application', value: 'Domestic & Agricultural Pumps' },
      { label: 'Protection', value: 'Water, grease and heat resistant' }
    ]
  },
  {
    id: 'iron-cable-3m',
    title: '3M Iron Cable',
    category: 'iron-cables',
    categoryLabel: 'Iron Cables & Leads',
    image: '/images/products/iron-cable-3m.jpg',
    shortDesc: 'Extended 3-meter laundry electric iron lead with heavy-duty molded plug, textile heat-resistant braiding, and flexible copper interior.',
    specs: [
      { label: 'Length', value: '3.0 Meters' },
      { label: 'Braid', value: 'High-Temperature Yarn Braiding' },
      { label: 'Plug', value: 'Solid Molded Pin Terminal' }
    ]
  },
  {
    id: 'power-cord-5',
    title: 'Power Cord',
    category: 'power-cords',
    categoryLabel: 'Power Cords',
    image: '/images/products/power-cord-5.jpg',
    shortDesc: 'Standard industrial power cord fitted with molded safety plug and high-amperage pure copper wiring for machinery and heavy tools.',
    specs: [
      { label: 'Plug Type', value: 'Molded 2-Pin / 3-Pin' },
      { label: 'Conductor', value: '100% Pure Copper Wire' },
      { label: 'Jacket', value: 'Flexible PVC Jacket' }
    ]
  },
  {
    id: 'tape-lead',
    title: 'Tape Lead',
    category: 'iron-cables',
    categoryLabel: 'Iron Cables & Leads',
    image: '/images/products/tape-lead.jpg',
    shortDesc: 'Flexible electric iron tape lead cable engineered for garment steamers, commercial laundry irons, and home appliances.',
    specs: [
      { label: 'Type', value: 'Heat-Resistant Tape Cable Lead' },
      { label: 'Insulation', value: 'High Temperature Thermal Insulation' }
    ]
  },
  {
    id: 'power-cord-4',
    title: 'Power Cord',
    category: 'power-cords',
    categoryLabel: 'Power Cords',
    image: '/images/products/power-cord-4.jpg',
    shortDesc: 'High-durability power supply cord engineered for office workstations, commercial equipment, monitors, and kitchen electronics.',
    specs: [
      { label: 'Rating', value: '10A / 16A 250V' },
      { label: 'Durability', value: 'Strain-relief molded boots' }
    ]
  },
  {
    id: 'power-cord-3',
    title: 'Power Cord',
    category: 'power-cords',
    categoryLabel: 'Power Cords',
    image: '/images/products/power-cord-3.jpg',
    shortDesc: 'Precision-molded 3-pin equipment power cord ensuring stable electrical transmission and zero overheating under continuous runtimes.',
    specs: [
      { label: 'Termination', value: 'Right-Angle / Straight Molded' },
      { label: 'Conductor', value: 'Pure Copper Strands' }
    ]
  },
  {
    id: 'power-cord-2',
    title: 'Power Cord',
    category: 'power-cords',
    categoryLabel: 'Power Cords',
    image: '/images/products/power-cord-2.jpg',
    shortDesc: 'Compact 2-pin molded power cord with copper terminals for domestic electronics, audio systems, power adapters, and domestic gadgets.',
    specs: [
      { label: 'Pin Type', value: 'Solid Brass Pins with Nickel Plating' },
      { label: 'Flexibility', value: 'High Flex Lifetime' }
    ]
  },
  {
    id: 'iron-cable',
    title: 'Iron Cable',
    category: 'iron-cables',
    categoryLabel: 'Iron Cables & Leads',
    image: '/images/products/iron-cable.jpg',
    shortDesc: 'Standard electric laundry iron lead cable featuring premium yarn braiding that resists hot iron contact and prevents tangling.',
    specs: [
      { label: 'Exterior', value: 'Cotton Braided Protective Sleeve' },
      { label: 'Interior', value: 'Pure Copper Core' },
      { label: 'Use Case', value: 'Electric Dry Irons & Steam Irons' }
    ]
  },
  {
    id: 'power-cord-sedin',
    title: 'Sedin Power Cord',
    category: 'power-cords',
    categoryLabel: 'Power Cords',
    image: '/images/products/power-cord-sedin.jpg',
    shortDesc: 'Flagship Sedin branded industrial power cord with embossed Sedin seal, certified heavy copper conductors, and rugged outer jacket.',
    specs: [
      { label: 'Brand', value: 'Sedin Gold Certified' },
      { label: 'Features', value: 'Heavy Duty Pins, Anti-Snap Strain Relief' }
    ]
  }
]

export const PRESET_IMAGES = [
  { label: 'Copper 35/76 (Blue)', url: '/images/products/copper-35-76-blue.jpg' },
  { label: 'Copper 35/76 (Red)', url: '/images/products/copper-35-76-red.jpg' },
  { label: 'Custom Industrial Cables', url: '/images/products/custom-cables.jpg' },
  { label: 'Submersible Pump Cable #1', url: '/images/products/submersible-pump-1.jpg' },
  { label: 'Submersible Pump Cable #2', url: '/images/products/submersible-pump-2.jpg' },
  { label: 'Submersible Pump Cable #3', url: '/images/products/submersible-pump-3.jpg' },
  { label: 'Submersible Pump Cable #4', url: '/images/products/submersible-pump-4.jpg' },
  { label: '3M Electric Iron Cable', url: '/images/products/iron-cable-3m.jpg' },
  { label: 'Standard Iron Cable', url: '/images/products/iron-cable.jpg' },
  { label: 'Heat-Resistant Tape Lead', url: '/images/products/tape-lead.jpg' },
  { label: 'Sedin Power Cord (Flagship)', url: '/images/products/power-cord-sedin.jpg' },
  { label: 'Molded Power Cord #2', url: '/images/products/power-cord-2.jpg' },
  { label: 'Molded Power Cord #3', url: '/images/products/power-cord-3.jpg' },
  { label: 'Molded Power Cord #4', url: '/images/products/power-cord-4.jpg' },
  { label: 'Molded Power Cord #5', url: '/images/products/power-cord-5.jpg' }
]

export const useProductStore = defineStore('product', {
  state: () => ({
    searchQuery: '',
    selectedCategory: 'all',
    selectedProductForModal: null,
    isInitialized: false,

    categories: JSON.parse(JSON.stringify(INITIAL_CATEGORIES)),
    products: JSON.parse(JSON.stringify(INITIAL_PRODUCTS))
  }),

  getters: {
    allProducts: (state) => state.products,
    publishedProducts: (state) => state.products.filter(p => p.status !== 'draft'),
    draftProducts: (state) => state.products.filter(p => p.status === 'draft'),
    allCategories: (state) => state.categories,
    manageableCategories: (state) => state.categories.filter(c => c.id !== 'all'),
    
    filteredProducts: (state) => {
      let result = state.products.filter(p => p.status !== 'draft')
      if (state.selectedCategory !== 'all') {
        result = result.filter(p => p.category === state.selectedCategory)
      }
      if (state.searchQuery && state.searchQuery.trim()) {
        const q = state.searchQuery.toLowerCase().trim()
        result = result.filter(p => 
          (p.title && p.title.toLowerCase().includes(q)) || 
          (p.shortDesc && p.shortDesc.toLowerCase().includes(q)) ||
          (p.categoryLabel && p.categoryLabel.toLowerCase().includes(q))
        )
      }
      return result
    },

    getProductCountByCategory: (state) => (catId, includeDrafts = true) => {
      const list = includeDrafts ? state.products : state.products.filter(p => p.status !== 'draft')
      if (catId === 'all') return list.length
      return list.filter(p => p.category === catId).length
    }
  },

  actions: {
    hydrateCategoriesFromStorage() {
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') return
      try {
        const savedCategories = localStorage.getItem('sedin_categories')
        if (savedCategories) {
          const parsed = JSON.parse(savedCategories)
          if (Array.isArray(parsed) && parsed.length > 0) {
            this.categories = parsed
          }
        }
      } catch (e) {
        console.error('Error hydrating categories from localStorage:', e)
      }
    },

    hydrateProductsFromStorage() {
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') return
      try {
        const savedProducts = localStorage.getItem('sedin_products')
        if (savedProducts) {
          const parsed = JSON.parse(savedProducts)
          if (Array.isArray(parsed) && parsed.length > 0) {
            this.products = parsed
          }
        }
      } catch (e) {
        console.error('Error hydrating products from localStorage:', e)
      }
    },

    hydrateFromStorage() {
      this.hydrateCategoriesFromStorage()
      this.hydrateProductsFromStorage()
    },

    initStore() {
      if (typeof window !== 'undefined' && !this.isInitialized) {
        this.hydrateFromStorage()

        // Real-time synchronization across browser tabs
        window.addEventListener('storage', (event) => {
          if (event.key === 'sedin_products') {
            this.hydrateProductsFromStorage()
          } else if (event.key === 'sedin_categories') {
            this.hydrateCategoriesFromStorage()
          }
        })

        this.isInitialized = true
      }
    },

    saveProductsToStorage() {
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        try {
          localStorage.setItem('sedin_products', JSON.stringify(this.products))
        } catch (e) {
          console.error('Error saving products to localStorage:', e)
        }
      }
    },

    saveCategoriesToStorage() {
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        try {
          localStorage.setItem('sedin_categories', JSON.stringify(this.categories))
        } catch (e) {
          console.error('Error saving categories to localStorage:', e)
        }
      }
    },

    saveToStorage() {
      this.saveCategoriesToStorage()
      this.saveProductsToStorage()
    },

    setCategory(categoryId) {
      this.selectedCategory = categoryId
    },

    setSearchQuery(q) {
      this.searchQuery = q
    },

    openProductModal(product) {
      this.selectedProductForModal = product
    },

    closeProductModal() {
      this.selectedProductForModal = null
    },

    addProduct(productData) {
      const generatedId = productData.id && productData.id.trim()
        ? productData.id.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-')
        : (productData.title || 'product')
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString().slice(-4)

      // Find matching category label if not provided
      let categoryLabel = productData.categoryLabel
      if (!categoryLabel) {
        const cat = this.categories.find(c => c.id === productData.category)
        categoryLabel = cat ? cat.name : 'General'
      }

      const newProduct = {
        id: generatedId,
        title: productData.title.trim(),
        category: productData.category,
        categoryLabel: categoryLabel,
        image: productData.image || '/images/products/custom-cables.jpg',
        shortDesc: productData.shortDesc ? productData.shortDesc.trim() : '',
        specs: Array.isArray(productData.specs)
          ? productData.specs.filter(s => s && s.label && s.label.trim())
          : [],
        status: productData.status || 'published', // 'published' | 'draft'
        createdAt: new Date().toISOString()
      }

      // Prepend so new products show at the top
      this.products.unshift(newProduct)
      this.saveProductsToStorage()
      return newProduct
    },

    updateProduct(id, updatedData) {
      const index = this.products.findIndex(p => p.id === id)
      if (index === -1) return null

      let categoryLabel = updatedData.categoryLabel
      if (!categoryLabel && updatedData.category) {
        const cat = this.categories.find(c => c.id === updatedData.category)
        categoryLabel = cat ? cat.name : this.products[index].categoryLabel
      }

      this.products[index] = {
        ...this.products[index],
        ...updatedData,
        categoryLabel: categoryLabel || this.products[index].categoryLabel,
        specs: Array.isArray(updatedData.specs)
          ? updatedData.specs.filter(s => s && s.label && s.label.trim())
          : this.products[index].specs,
        status: updatedData.status !== undefined ? updatedData.status : (this.products[index].status || 'published'),
        updatedAt: new Date().toISOString()
      }

      this.saveProductsToStorage()
      return this.products[index]
    },

    deleteProduct(id) {
      const index = this.products.findIndex(p => p.id === id)
      if (index !== -1) {
        const deleted = this.products.splice(index, 1)[0]
        this.saveProductsToStorage()
        return deleted
      }
      return null
    },

    addCategory({ name, id }) {
      const trimmedName = name.trim()
      const slug = id && id.trim()
        ? id.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-')
        : trimmedName.toLowerCase().replace(/[^a-z0-9]+/g, '-')

      if (!slug || slug === 'all') return null

      const exists = this.categories.some(c => c.id === slug)
      if (exists) {
        return null // Category already exists
      }

      const newCat = {
        id: slug,
        name: trimmedName
      }
      this.categories.push(newCat)
      this.saveCategoriesToStorage()
      return newCat
    },

    updateCategory(id, { name }) {
      if (id === 'all') return null
      const cat = this.categories.find(c => c.id === id)
      if (!cat) return null

      cat.name = name.trim()
      // Update matching products categoryLabel
      this.products.forEach(p => {
        if (p.category === id) {
          p.categoryLabel = cat.name
        }
      })

      this.saveToStorage()
      return cat
    },

    deleteCategory(id) {
      if (id === 'all') return false
      const index = this.categories.findIndex(c => c.id === id)
      if (index === -1) return false

      this.categories.splice(index, 1)

      // Move any products that belonged to this category into 'copper-wiring' or 'all'
      const fallbackCat = this.categories.find(c => c.id !== 'all')
      const fallbackId = fallbackCat ? fallbackCat.id : 'all'
      const fallbackName = fallbackCat ? fallbackCat.name : 'General'

      this.products.forEach(p => {
        if (p.category === id) {
          p.category = fallbackId
          p.categoryLabel = fallbackName
        }
      })

      if (this.selectedCategory === id) {
        this.selectedCategory = 'all'
      }

      this.saveToStorage()
      return true
    },

    resetToDefaults() {
      this.categories = JSON.parse(JSON.stringify(INITIAL_CATEGORIES))
      this.products = JSON.parse(JSON.stringify(INITIAL_PRODUCTS))
      this.selectedCategory = 'all'
      this.searchQuery = ''
      this.saveToStorage()
    }
  }
})
