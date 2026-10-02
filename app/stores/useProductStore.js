import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    searchQuery: '',
    selectedCategory: 'all',
    selectedProductForModal: null,

    categories: [
      { id: 'all', name: 'All Products' },
      { id: 'copper-wiring', name: 'Copper Wiring' },
      { id: 'submersible', name: 'Submersible Pump' },
      { id: 'iron-cables', name: 'Iron Cables & Leads' },
      { id: 'power-cords', name: 'Power Cords' }
    ],

    products: [
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
  }),

  getters: {
    allProducts: (state) => state.products,
    filteredProducts: (state) => {
      let result = state.products
      if (state.selectedCategory !== 'all') {
        result = result.filter(p => p.category === state.selectedCategory)
      }
      if (state.searchQuery.trim()) {
        const q = state.searchQuery.toLowerCase().trim()
        result = result.filter(p => 
          p.title.toLowerCase().includes(q) || 
          p.shortDesc.toLowerCase().includes(q)
        )
      }
      return result
    }
  },

  actions: {
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
    }
  }
})
