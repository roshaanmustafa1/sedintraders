<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground">
    <!-- Top Bar (Header Row 1): White background with Logo and Contact Information -->
    <header class="bg-background border-b border-border py-3 sm:py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 focus:outline-none">
          <img
            src="/images/logo-black.png"
            alt="Sedin Traders"
            class="h-12 sm:h-14 md:h-16 w-auto object-contain"
          />
        </NuxtLink>

        <!-- Right Side: Contact Details with Icons -->
        <div class="hidden sm:flex items-center flex-wrap justify-center md:justify-end gap-6 lg:gap-8">
          <!-- Call Anytime -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 512 512">
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
              </svg>
            </div>
            <div>
              <p class="text-xs text-muted-foreground font-medium">Call Anytime</p>
              <a href="tel:+923004268720" class="text-sm font-bold text-foreground hover:text-primary transition-colors">
                0300-426-8720
              </a>
            </div>
          </div>

          <!-- Send Email -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <svg class="w-5 h-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <p class="text-xs text-muted-foreground font-medium">Send Email</p>
              <a href="mailto:info@sedintraders.com" class="text-sm font-bold text-foreground hover:text-primary transition-colors">
                info@sedintraders.com
              </a>
            </div>
          </div>

          <!-- Visit Us -->
          <div class="hidden lg:flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 384 512">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
              </svg>
            </div>
            <div>
              <p class="text-xs text-muted-foreground font-medium">Visit Us</p>
              <a href="https://maps.app.goo.gl/wTLEd7yk5JgjE8Ef6" target="_blank" rel="noopener noreferrer" class="text-sm font-bold text-foreground hover:text-primary transition-colors">
                Lahore, Pakistan
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Navigation Bar (Header Row 2): Dynamic bg-brand-dark with Menu and Quote Button -->
    <nav class="sticky top-0 z-40 bg-brand-dark text-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-14 sm:h-16">
          <!-- Desktop Menu Items -->
          <div class="hidden md:flex items-center space-x-1">
            <NuxtLink
              to="/"
              class="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
              :class="{ 'text-primary font-semibold': isCurrentRoute('/') }"
            >
              Home
            </NuxtLink>
            <a
              href="/#products"
              class="px-4 py-2 text-sm font-medium transition-colors hover:text-primary text-white"
            >
              All Products
            </a>
            <a
              href="/#about"
              class="px-4 py-2 text-sm font-medium transition-colors hover:text-primary text-white"
            >
              About Company
            </a>
            <NuxtLink
              to="/contact"
              class="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
              :class="{ 'text-primary font-semibold': isCurrentRoute('/contact') }"
            >
              Contact Us
            </NuxtLink>
            <NuxtLink
              to="/dashboard"
              class="ml-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded border border-white/20 text-white/90 hover:text-white hover:border-primary hover:bg-primary/10 transition-all inline-flex items-center gap-1.5"
              :class="{ '!border-primary text-primary bg-primary/15': isCurrentRoute('/dashboard') }"
            >
              <svg class="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1"></rect>
              </svg>
              <span>Dashboard</span>
            </NuxtLink>
          </div>

          <!-- Right Action: "Get a free quote" button using bg-primary -->
          <div class="hidden md:block">
            <NuxtLink
              to="/contact"
              class="bg-primary hover:bg-brand-red-hover text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded transition-all duration-200 shadow-xs inline-flex items-center gap-2"
            >
              <span>Get a free quote</span>
            </NuxtLink>
          </div>

          <!-- Mobile Branding & Hamburger Toggle -->
          <div class="flex md:hidden items-center justify-between w-full">
            <NuxtLink to="/" class="text-sm font-bold tracking-wide text-white">
              SEDIN TRADERS
            </NuxtLink>
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="p-2 text-white hover:text-primary focus:outline-none"
              aria-label="Toggle Navigation"
            >
              <svg v-if="!mobileMenuOpen" class="w-6 h-6 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg v-else class="w-6 h-6 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Dropdown Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden border-t border-white/10 py-3 space-y-1 bg-brand-dark">
          <NuxtLink
            to="/"
            @click="mobileMenuOpen = false"
            class="block px-3 py-2 rounded text-base font-medium text-white hover:bg-white/5 hover:text-primary"
          >
            Home
          </NuxtLink>
          <a
            href="/#products"
            @click="mobileMenuOpen = false"
            class="block px-3 py-2 rounded text-base font-medium text-white hover:bg-white/5 hover:text-primary"
          >
            All Products
          </a>
          <a
            href="/#about"
            @click="mobileMenuOpen = false"
            class="block px-3 py-2 rounded text-base font-medium text-white hover:bg-white/5 hover:text-primary"
          >
            About Company
          </a>
          <NuxtLink
            to="/contact"
            @click="mobileMenuOpen = false"
            class="block px-3 py-2 rounded text-base font-medium text-white hover:bg-white/5 hover:text-primary"
          >
            Contact Us
          </NuxtLink>
          <NuxtLink
            to="/dashboard"
            @click="mobileMenuOpen = false"
            class="flex items-center gap-2 px-3 py-2 rounded text-base font-medium text-white hover:bg-white/5 hover:text-primary"
            :class="{ 'text-primary font-semibold': isCurrentRoute('/dashboard') }"
          >
            <svg class="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7" rx="1"></rect>
              <rect x="14" y="3" width="7" height="7" rx="1"></rect>
              <rect x="14" y="14" width="7" height="7" rx="1"></rect>
              <rect x="3" y="14" width="7" height="7" rx="1"></rect>
            </svg>
            Dashboard
          </NuxtLink>
          <div class="pt-2 px-3">
            <NuxtLink
              to="/contact"
              @click="mobileMenuOpen = false"
              class="block w-full text-center bg-primary hover:bg-brand-red-hover text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded"
            >
              Get a free quote
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main View Slot -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer: Clean dynamic bg-brand-dark matching sedintraders.com -->
    <footer class="bg-brand-dark text-white pt-16 pb-8 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <!-- Column 1: Company Logo & Description -->
          <div class="md:col-span-6 lg:col-span-7">
            <img
              src="/images/logo-white.png"
              alt="Sedin Traders"
              class="h-12 sm:h-14 w-auto mb-6 object-contain"
            />
            <p class="text-sm text-gray-300 leading-relaxed pr-0 lg:pr-12">
              SedinTraders is a Lahore-based electrical manufacturing and distribution company specializing in high-quality cables, plugs, sockets, and extension solutions for residential, commercial, and industrial use. Since our establishment, we have focused on delivering safe, durable, and performance-driven electrical products that meet the growing needs of Pakistan’s infrastructure and development sectors.
            </p>
          </div>

          <!-- Column 2: Direct Contact List -->
          <div class="md:col-span-6 lg:col-span-5 flex flex-col justify-center space-y-4">
            <div class="flex items-center gap-3 text-gray-200">
              <div class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-primary flex-shrink-0">
                <svg class="w-4 h-4 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <a href="mailto:info@sedintraders.com" class="text-sm hover:text-primary transition-colors">
                info@sedintraders.com
              </a>
            </div>

            <div class="flex items-center gap-3 text-gray-200">
              <div class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-primary flex-shrink-0">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 512 512">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
                </svg>
              </div>
              <a href="tel:+923004268720" class="text-sm hover:text-primary transition-colors">
                +92 300 4268 720
              </a>
            </div>

            <div class="flex items-center gap-3 text-gray-200">
              <div class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-primary flex-shrink-0">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 512 512">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
                </svg>
              </div>
              <a href="tel:04237334344" class="text-sm hover:text-primary transition-colors">
                042 37334344
              </a>
            </div>

            <div class="flex items-center gap-3 text-gray-200">
              <div class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-primary flex-shrink-0">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 384 512">
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                </svg>
              </div>
              <span class="text-sm text-gray-300">
                Lahore, Pakistan
              </span>
            </div>
          </div>
        </div>

        <!-- Bottom Copyright & Social Bar -->
        <div class="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© Copyright 2026 by Sedin Traders. All Rights Reserved.</p>
          <div class="flex items-center space-x-4">
            <a href="#" class="hover:text-white transition-colors" aria-label="Twitter">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
            </a>
            <a href="#" class="hover:text-white transition-colors" aria-label="Facebook">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
            </a>
            <a href="#" class="hover:text-white transition-colors" aria-label="Instagram">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Floating WhatsApp Button (Fixed bottom-left matching sedintraders.com) -->
    <a
      href="https://wa.me/923004268720?text=Hello%20Sedin%20Traders,%20I%20am%20interested%20in%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-5 left-5 z-50 flex items-center group shadow-xl hover:scale-105 transition-transform duration-300"
      aria-label="WhatsApp Us"
    >
      <div class="hidden sm:flex items-center bg-brand-whatsapp text-white text-sm font-semibold px-3 py-1.5 rounded-lg shadow-sm mr-2">
        WhatsApp us
      </div>
      <div class="w-12 h-12 rounded-full bg-brand-whatsapp flex items-center justify-center text-white shadow-lg">
        <svg class="w-7 h-7 fill-current" viewBox="0 0 1024 1024">
          <path d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"/>
        </svg>
      </div>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const isCurrentRoute = (path) => {
  return route.path === path
}
</script>
