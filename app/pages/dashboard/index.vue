<template>
  <!-- Full Screen Viewport Wrapper -->
  <div class="w-screen h-screen overflow-hidden bg-[#111215] text-[#111215] font-sans antialiased selection:bg-primary selection:text-white">
    
    <!-- ============================================== -->
    <!-- 1. LOGIN SCREEN (Shown if not authenticated)  -->
    <!-- ============================================== -->
    <div
      v-if="!isAuthenticated"
      class="w-full h-full flex items-center justify-center p-4 bg-[#111215] relative overflow-hidden"
    >
      <!-- Background Ambient Glow -->
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-[#8EC5FC]/10 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Login Card -->
      <div class="bg-white rounded-[32px] p-8 sm:p-10 max-w-md w-full shadow-2xl relative z-10 border border-white/10 animate-in fade-in zoom-in-95 duration-200">
        <!-- Brand Header with Official Sedin Logo -->
        <div class="text-center mb-7">
          <img
            src="/images/logo-black.png"
            alt="Sedin Traders"
            class="h-12 w-auto mx-auto mb-3 object-contain"
          />
          <h2 class="text-2xl font-extrabold text-[#111215] tracking-tight">
            Dashboard Sign In
          </h2>
          <p class="text-xs text-gray-500 mt-1">
            Sedin Traders Electrical Management Portal
          </p>
        </div>

        <!-- Error Alert -->
        <div v-if="loginError" class="mb-5 p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke-width="2"></circle>
            <line x1="12" y1="8" x2="12" y2="12" stroke-width="2"></line>
            <line x1="12" y1="16" x2="12.01" y2="16" stroke-width="2"></line>
          </svg>
          <span>{{ loginError }}</span>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-gray-700 mb-1.5">
              Username or Email
            </label>
            <input
              v-model="loginForm.username"
              type="text"
              required
              placeholder="admin"
              class="w-full px-4 py-3 text-xs sm:text-sm rounded-2xl bg-[#F5F6F8] border border-gray-200 text-gray-900 focus:outline-none focus:border-black transition-all"
            />
          </div>

          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="block text-xs font-bold text-gray-700">
                Password
              </label>
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="text-[11px] text-gray-500 hover:text-black font-medium"
              >
                {{ showPassword ? 'Hide' : 'Show' }}
              </button>
            </div>
            <input
              v-model="loginForm.password"
              :type="showPassword ? 'text' : 'password'"
              required
              placeholder="••••••••"
              class="w-full px-4 py-3 text-xs sm:text-sm rounded-2xl bg-[#F5F6F8] border border-gray-200 text-gray-900 focus:outline-none focus:border-black transition-all"
            />
          </div>

          <div class="flex items-center justify-between pt-1">
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                v-model="loginForm.remember"
                type="checkbox"
                class="w-4 h-4 rounded text-black focus:ring-black border-gray-300 cursor-pointer"
              />
              <span class="text-xs text-gray-600 font-medium">Keep me signed in</span>
            </label>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full mt-4 bg-[#111215] hover:bg-black text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-2xl transition-all shadow-md hover:scale-[1.01]"
          >
            Sign In to Dashboard
          </button>
        </form>

        <div class="text-center mt-6 pt-4 border-t border-gray-100">
          <NuxtLink to="/" class="text-xs text-gray-500 hover:text-black transition-colors font-medium">
            ← Return to public website
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- ============================================== -->
    <!-- 2. AUTHENTICATED DASHBOARD                     -->
    <!-- Full Width & Height, Sticky Sidebar, Content   -->
    <!-- ============================================== -->
    <div v-else class="w-full h-full flex flex-col md:flex-row overflow-hidden">
      
      <!-- STICKY FIXED LEFT SIDEBAR -->
      <aside class="w-full md:w-64 lg:w-72 bg-[#111215] border-r border-white/5 flex flex-col justify-between h-auto md:h-full flex-shrink-0 z-30 select-none">
        
        <!-- Sidebar Brand Information with Official White Logo -->
        <div class="p-6 border-b border-white/5">
          <button type="button" @click="currentView = 'overview'" class="flex items-center focus:outline-none">
            <img
              src="/images/logo-white.png"
              alt="Sedin Traders"
              class="h-9 sm:h-10 w-auto object-contain"
            />
          </button>
        </div>

        <!-- Sidebar Navigation Tabs with ICONS and NAMES -->
        <div class="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          <div class="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 px-3 mb-2">
            Navigation
          </div>

          <!-- Tab 1: Overview -->
          <button
            type="button"
            @click="currentView = 'overview'"
            class="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-xs font-bold transition-all duration-200"
            :class="currentView === 'overview'
              ? 'bg-white text-[#111215] shadow-md'
              : 'text-gray-400 hover:text-white hover:bg-white/5'"
          >
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
              </svg>
              <span>Overview</span>
            </div>
            <span v-if="currentView === 'overview'" class="w-2 h-2 rounded-full bg-primary"></span>
          </button>

          <!-- Tab 2: Products Catalog -->
          <button
            type="button"
            @click="currentView = 'products'"
            class="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-xs font-bold transition-all duration-200"
            :class="currentView === 'products'
              ? 'bg-white text-[#111215] shadow-md'
              : 'text-gray-400 hover:text-white hover:bg-white/5'"
          >
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
              </svg>
              <span>Products</span>
            </div>
            <span
              class="px-2 py-0.5 text-[10px] rounded-full font-bold"
              :class="currentView === 'products' ? 'bg-gray-100 text-gray-800' : 'bg-white/10 text-gray-300'"
            >
              {{ productStore.allProducts.length }}
            </span>
          </button>

          <!-- Tab 3: Categories -->
          <button
            type="button"
            @click="currentView = 'categories'"
            class="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-xs font-bold transition-all duration-200"
            :class="currentView === 'categories'
              ? 'bg-white text-[#111215] shadow-md'
              : 'text-gray-400 hover:text-white hover:bg-white/5'"
          >
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 20V10M12 20V4M6 20v-6"/>
              </svg>
              <span>Categories</span>
            </div>
            <span
              class="px-2 py-0.5 text-[10px] rounded-full font-bold"
              :class="currentView === 'categories' ? 'bg-gray-100 text-gray-800' : 'bg-white/10 text-gray-300'"
            >
              {{ productStore.manageableCategories.length }}
            </span>
          </button>

          <!-- Tab 4: Add Product (Dedicated Page View - NO MODAL) -->
          <button
            type="button"
            @click="navigateToAddProduct"
            class="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-xs font-bold transition-all duration-200"
            :class="currentView === 'add-product'
              ? 'bg-white text-[#111215] shadow-md'
              : 'text-gray-400 hover:text-white hover:bg-white/5'"
          >
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
              <span>Add Product</span>
            </div>
            <span v-if="currentView === 'add-product'" class="w-2 h-2 rounded-full bg-primary"></span>
            <span v-else class="text-xs text-primary font-bold">+</span>
          </button>

          <!-- Tab 5: Admin Profile -->
          <button
            type="button"
            @click="currentView = 'profile'"
            class="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-xs font-bold transition-all duration-200"
            :class="currentView === 'profile'
              ? 'bg-white text-[#111215] shadow-md'
              : 'text-gray-400 hover:text-white hover:bg-white/5'"
          >
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              <span>Admin Profile</span>
            </div>
            <span v-if="currentView === 'profile'" class="w-2 h-2 rounded-full bg-primary"></span>
          </button>
        </div>

        <!-- Sidebar Bottom: Admin Card & Sign Out -->
        <div class="p-4 border-t border-white/5 space-y-2">
          <div
            @click="currentView = 'profile'"
            class="flex items-center justify-between px-3 py-2 bg-white/5 hover:bg-white/10 rounded-2xl cursor-pointer transition-colors"
          >
            <div class="flex items-center gap-2.5 overflow-hidden">
              <img
                v-if="adminProfile.avatar"
                :src="adminProfile.avatar"
                alt="Admin"
                class="w-8 h-8 rounded-full object-cover flex-shrink-0 border border-white/20"
              />
              <div v-else class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs flex-shrink-0">
                {{ adminProfile.name.charAt(0) }}
              </div>
              <div class="overflow-hidden">
                <p class="text-xs font-bold text-white truncate">{{ adminProfile.name }}</p>
                <p class="text-[10px] text-gray-400 truncate">{{ adminProfile.email }}</p>
              </div>
            </div>
            <button
              type="button"
              @click.stop="handleLogout"
              class="text-gray-400 hover:text-red-400 p-1.5 transition-colors"
              title="Sign Out"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
              </svg>
            </button>
          </div>
        </div>
      </aside>

      <!-- MAIN CONTENT CANVAS: Fills full width & height with independent scrolling -->
      <main class="flex-1 h-full overflow-y-auto bg-[#F7F8FA] p-3 sm:p-5 lg:p-6">
        <div class="bg-white rounded-[32px] sm:rounded-[36px] p-6 lg:p-9 shadow-xs min-h-full flex flex-col justify-between">
          
          <div>
            <!-- HEADER ROW: Dynamic title based on active view + Search + Profile -->
            <header class="flex items-center justify-between pb-6 border-b border-gray-100 mb-8">
              <div class="flex items-center gap-4">
                <div>
                  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#111215] tracking-tight">
                    {{ 
                      currentView === 'overview' ? 'Overview' : 
                      currentView === 'products' ? 'Products Catalog' : 
                      currentView === 'categories' ? 'Categories Management' : 
                      currentView === 'add-product' ? (editingProductId ? 'Edit Product' : 'Add New Product') : 
                      'Admin Profile' 
                    }}
                  </h1>
                  <p class="text-xs text-gray-400 font-medium mt-0.5">
                    {{
                      currentView === 'overview' ? 'Real-time overview of your electrical inventory and category performance' :
                      currentView === 'products' ? 'Manage and browse your complete product inventory' :
                      currentView === 'categories' ? 'Organize product classification and storefront navigation filter tabs' :
                      currentView === 'add-product' ? 'Configure product details, electrical specifications, and storefront photography' :
                      'Manage administrator credentials and notification preferences'
                    }}
                  </p>
                </div>
              </div>

              <!-- Top Right Controls -->
              <div class="flex items-center gap-3">
                <!-- Search Button -->
                <div class="relative">
                  <button
                    type="button"
                    @click="searchBarOpen = !searchBarOpen"
                    class="w-10 h-10 rounded-full bg-[#F5F6F8] hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
                    title="Search catalog"
                  >
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </button>

                  <div
                    v-if="searchBarOpen"
                    class="absolute right-0 top-12 w-72 bg-white rounded-2xl shadow-xl border border-gray-200 p-2 z-30 animate-in fade-in"
                  >
                    <input
                      v-model="dashboardSearch"
                      type="text"
                      placeholder="Search products or specs..."
                      class="w-full px-3.5 py-2 text-xs rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-primary"
                      autofocus
                    />
                  </div>
                </div>

                <!-- Bell Icon -->
                <div class="relative">
                  <button
                    type="button"
                    @click="showToast('Catalog is synchronized with public website.')"
                    class="w-10 h-10 rounded-full bg-[#F5F6F8] hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
                    title="Notifications"
                  >
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                    </svg>
                  </button>
                  <span class="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary ring-2 ring-white"></span>
                </div>

                <!-- Profile Pill -->
                <div class="relative">
                  <button
                    type="button"
                    @click="profileDropdownOpen = !profileDropdownOpen"
                    class="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-[#F5F6F8] hover:bg-gray-200 transition-colors"
                  >
                    <img
                      v-if="adminProfile.avatar"
                      :src="adminProfile.avatar"
                      alt="Avatar"
                      class="w-8 h-8 rounded-full object-cover border border-gray-200 shadow-xs"
                    />
                    <div v-else class="w-8 h-8 rounded-full bg-[#111215] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                      {{ adminProfile.name.charAt(0) }}
                    </div>
                    <span class="text-xs font-bold text-gray-900 hidden sm:inline">{{ adminProfile.name }}</span>
                    <svg class="w-3.5 h-3.5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  <div
                    v-if="profileDropdownOpen"
                    class="absolute right-0 top-12 w-48 bg-white border border-gray-200 rounded-2xl shadow-xl py-2 z-30 text-xs"
                  >
                    <div class="px-4 py-2 border-b border-gray-100">
                      <p class="font-bold text-gray-900">{{ adminProfile.name }}</p>
                      <p class="text-[10px] text-gray-400">{{ adminProfile.role }}</p>
                    </div>
                    <button
                      type="button"
                      @click="currentView = 'profile'; profileDropdownOpen = false"
                      class="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 font-medium"
                    >
                      Admin Profile & Settings
                    </button>
                    <button
                      type="button"
                      @click="handleLogout"
                      class="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </header>

            <!-- ============================================== -->
            <!-- VIEW 1: OVERVIEW TAB (Matching Reference Image) -->
            <!-- ============================================== -->
            <div v-if="currentView === 'overview'" class="space-y-8">
              <!-- ROW 1: Portfolio Balance Card + Your Assets Cards -->
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                <!-- LEFT: Portfolio Card (Pastel Blue with Sparkline Wave & Black Tooltip) -->
                <div class="lg:col-span-5 bg-[#EDF5FE] border border-[#D7E8FC] rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-xs min-h-[250px]">
                  <div>
                    <div class="flex items-center justify-between">
                      <span class="text-base font-bold text-[#111215]">Portfolio</span>
                      <button type="button" @click="navigateToAddProduct" class="text-gray-400 hover:text-gray-700" title="Add Product">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="5" r="1.5"></circle>
                          <circle cx="12" cy="12" r="1.5"></circle>
                          <circle cx="12" cy="19" r="1.5"></circle>
                        </svg>
                      </button>
                    </div>
                    <div class="mt-3">
                      <h2 class="text-3xl sm:text-4xl font-extrabold text-[#111215] tracking-tight">
                        {{ productStore.allProducts.length }} Products
                      </h2>
                      <p class="text-xs text-gray-400 font-medium mt-1">Portfolio balance</p>
                    </div>
                  </div>

                  <!-- Black Floating Tooltip Pill -->
                  <div class="absolute right-6 sm:right-10 top-16 bg-[#16171B] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                    <span class="flex items-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>{{ productStore.publishedProducts.length }} Live</span>
                    </span>
                    <span class="text-white/40">•</span>
                    <span class="flex items-center gap-1 text-amber-300">
                      <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <span>{{ productStore.draftProducts.length }} Drafts</span>
                    </span>
                  </div>

                  <!-- Thin Sky-Blue Step / Wave Sparkline -->
                  <div class="w-full h-20 my-1 relative">
                    <svg class="w-full h-full overflow-visible" viewBox="0 0 400 90" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.25"></stop>
                          <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.0"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,65 Q50,60 100,62 T180,55 T250,30 L250,75 L300,70 L340,50 L400,55 L400,90 L0,90 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M0,65 Q50,60 100,62 T180,55 T250,30 L250,75 L300,70 L340,50 L400,55"
                        fill="none"
                        stroke="#38BDF8"
                        stroke-width="2.5"
                        stroke-linecap="round"
                      />
                      <circle cx="250" cy="30" r="4.5" fill="#0284C7" stroke="#FFFFFF" stroke-width="2"></circle>
                    </svg>
                  </div>

                  <!-- Time Range Selector -->
                  <div class="flex items-center justify-between text-[11px] font-bold text-gray-400 pt-2 border-t border-[#D7E8FC]/60">
                    <button type="button" class="hover:text-gray-900 transition-colors">1H</button>
                    <button type="button" class="hover:text-gray-900 transition-colors">24H</button>
                    <button type="button" class="text-[#111215] font-extrabold border-b-2 border-[#111215] pb-0.5">1W</button>
                    <button type="button" class="hover:text-gray-900 transition-colors">1M</button>
                    <button type="button" class="hover:text-gray-900 transition-colors">1Y</button>
                    <button type="button" class="hover:text-gray-900 transition-colors">ALL</button>
                  </div>
                </div>

                <!-- RIGHT: Your Assets (Pastel Rounded Cards for Categories) -->
                <div class="lg:col-span-7 flex flex-col justify-between">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="text-base font-bold text-[#111215]">Your Assets</h3>
                    <div class="flex items-center gap-3">
                      <button
                        type="button"
                        @click="currentView = 'categories'"
                        class="text-xs font-semibold text-primary hover:underline"
                      >
                        + Add Category
                      </button>
                      <button
                        type="button"
                        @click="currentView = 'categories'"
                        class="text-gray-800 hover:text-black transition-colors"
                        title="Category Settings"
                      >
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <line x1="4" y1="21" x2="4" y2="14"></line>
                          <line x1="4" y1="10" x2="4" y2="3"></line>
                          <line x1="12" y1="21" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12" y2="3"></line>
                          <line x1="20" y1="21" x2="20" y2="16"></line>
                          <line x1="20" y1="12" x2="20" y2="3"></line>
                          <line x1="1" y1="14" x2="7" y2="14"></line>
                          <line x1="9" y1="8" x2="15" y2="8"></line>
                          <line x1="17" y1="16" x2="23" y2="16"></line>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <!-- 3 Pastel Cards -->
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
                    <!-- Card 1: Lavender -->
                    <div
                      @click="filterByCategory('copper-wiring')"
                      class="bg-[#F3ECFD] border border-[#E5D7FA] rounded-3xl p-5 flex flex-col justify-between cursor-pointer hover:shadow-md transition-all group"
                    >
                      <div class="flex items-start justify-between">
                        <div>
                          <h4 class="text-sm font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors">
                            Copper Wiring
                          </h4>
                          <p class="text-xs text-gray-400 font-medium mt-0.5">
                            {{ productStore.getProductCountByCategory('copper-wiring') }} Products
                          </p>
                        </div>
                        <span class="text-gray-400 group-hover:text-gray-700">⋮</span>
                      </div>

                      <div class="mt-6 flex items-center justify-between">
                        <div class="w-9 h-9 rounded-2xl bg-white shadow-xs flex items-center justify-center font-bold text-xs text-purple-700">
                          Cu
                        </div>
                        <span class="text-[11px] font-bold text-purple-700 bg-white/70 px-2.5 py-0.5 rounded-full">
                          + 0.14%
                        </span>
                      </div>
                    </div>

                    <!-- Card 2: Mint Green -->
                    <div
                      @click="filterByCategory('submersible')"
                      class="bg-[#E8F7F0] border border-[#CEF0E0] rounded-3xl p-5 flex flex-col justify-between cursor-pointer hover:shadow-md transition-all group"
                    >
                      <div class="flex items-start justify-between">
                        <div>
                          <h4 class="text-sm font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors">
                            Submersible
                          </h4>
                          <p class="text-xs text-gray-400 font-medium mt-0.5">
                            {{ productStore.getProductCountByCategory('submersible') }} Products
                          </p>
                        </div>
                        <span class="text-gray-400 group-hover:text-gray-700">⋮</span>
                      </div>

                      <div class="mt-6 flex items-center justify-between">
                        <div class="w-9 h-9 rounded-2xl bg-white shadow-xs flex items-center justify-center font-bold text-xs text-emerald-700">
                          P
                        </div>
                        <span class="text-[11px] font-bold text-emerald-700 bg-white/70 px-2.5 py-0.5 rounded-full">
                          + 0.31%
                        </span>
                      </div>
                    </div>

                    <!-- Card 3: Soft Cream / Warm Yellow -->
                    <div
                      @click="filterByCategory('power-cords')"
                      class="bg-[#FCF6E5] border border-[#F5E8C1] rounded-3xl p-5 flex flex-col justify-between cursor-pointer hover:shadow-md transition-all group"
                    >
                      <div class="flex items-start justify-between">
                        <div>
                          <h4 class="text-sm font-extrabold text-gray-900 group-hover:text-amber-800 transition-colors">
                            Power Cords
                          </h4>
                          <p class="text-xs text-gray-400 font-medium mt-0.5">
                            {{ productStore.getProductCountByCategory('power-cords') }} Products
                          </p>
                        </div>
                        <span class="text-gray-400 group-hover:text-gray-700">⋮</span>
                      </div>

                      <div class="mt-6 flex items-center justify-between">
                        <div class="w-9 h-9 rounded-2xl bg-white shadow-xs flex items-center justify-center font-bold text-xs text-amber-700">
                          16A
                        </div>
                        <span class="text-[11px] font-bold text-amber-800 bg-white/70 px-2.5 py-0.5 rounded-full">
                          + 0.27%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ROW 2: Catalog Table + Dark Action Promo Card -->
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                <!-- LEFT (8 cols): Products Table -->
                <div class="lg:col-span-8 space-y-4">
                  <div class="flex flex-wrap items-center justify-between gap-3">
                    <h3 class="text-xl font-extrabold text-[#111215]">
                      Catalog is active
                    </h3>

                    <!-- Dropdowns -->
                    <div class="flex items-center gap-2">
                      <select
                        v-model="dashboardCategoryFilter"
                        class="text-xs font-semibold bg-[#F5F6F8] hover:bg-gray-200 border-0 rounded-full px-3.5 py-1.5 text-gray-700 focus:outline-none cursor-pointer"
                      >
                        <option value="all">All Categories</option>
                        <option
                          v-for="cat in productStore.manageableCategories"
                          :key="cat.id"
                          :value="cat.id"
                        >
                          {{ cat.name }}
                        </option>
                      </select>

                      <button
                        type="button"
                        @click="currentView = 'products'"
                        class="text-xs font-semibold bg-[#F5F6F8] hover:bg-gray-200 rounded-full px-3.5 py-1.5 text-gray-700 inline-flex items-center gap-1"
                      >
                        <span>View All</span>
                        <span>▾</span>
                      </button>
                    </div>
                  </div>

                  <!-- Table List -->
                  <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs">
                      <thead class="text-gray-400 font-semibold uppercase text-[10px] tracking-wider border-b border-gray-100">
                        <tr>
                          <th class="py-3 px-2">Name</th>
                          <th class="py-3 px-4">Category</th>
                          <th class="py-3 px-4">Status</th>
                          <th class="py-3 px-4">Specification</th>
                          <th class="py-3 px-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-50">
                        <tr
                          v-for="prod in displayedProducts.slice(0, 5)"
                          :key="prod.id"
                          class="hover:bg-gray-50/70 transition-colors group cursor-pointer"
                          @click="navigateToEditProduct(prod)"
                        >
                          <td class="py-3 px-2">
                            <div class="flex items-center gap-3">
                              <div class="w-10 h-10 rounded-2xl bg-[#111215] text-white flex items-center justify-center font-bold text-xs p-1 flex-shrink-0">
                                <img
                                  v-if="prod.image"
                                  :src="prod.image"
                                  :alt="prod.title"
                                  class="max-h-full max-w-full object-contain filter invert brightness-200"
                                />
                                <span v-else>{{ prod.title.charAt(0) }}</span>
                              </div>
                              <div>
                                <span class="font-extrabold text-gray-900 block text-sm group-hover:text-primary transition-colors">
                                  {{ prod.title }}
                                </span>
                                <span class="text-[11px] font-semibold text-gray-400 uppercase">
                                  {{ prod.category }}
                                </span>
                              </div>
                            </div>
                          </td>

                          <td class="py-3 px-4 font-bold text-gray-800">
                            {{ prod.categoryLabel || prod.category }}
                          </td>

                          <td class="py-3 px-4">
                            <span
                              v-if="prod.status === 'draft'"
                              class="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full inline-flex items-center gap-1"
                            >
                              <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                              <span>Draft</span>
                            </span>
                            <span
                              v-else
                              class="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full inline-flex items-center gap-1"
                            >
                              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              <span>Live</span>
                            </span>
                          </td>

                          <td class="py-3 px-4 font-bold text-gray-800">
                            <span v-if="prod.specs?.length">
                              {{ prod.specs[0].value }}
                            </span>
                            <span v-else class="text-gray-300">—</span>
                          </td>

                          <td class="py-3 px-2 text-center text-xs font-bold text-gray-400 group-hover:text-primary">
                            Edit →
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- RIGHT (4 cols): Dark Promo Card -->
                <div class="lg:col-span-4 bg-[#141518] text-white rounded-3xl p-6 sm:p-7 relative overflow-hidden shadow-xl min-h-[300px] flex flex-col justify-between">
                  <svg class="absolute -right-6 -bottom-6 w-52 h-52 text-white/10 pointer-events-none" viewBox="0 0 200 200" fill="none">
                    <rect x="20" y="20" width="160" height="160" rx="30" stroke="currentColor" stroke-width="1.5" transform="rotate(12 100 100)"/>
                    <rect x="30" y="30" width="140" height="140" rx="25" stroke="currentColor" stroke-width="1" transform="rotate(24 100 100)"/>
                  </svg>

                  <div>
                    <h3 class="text-2xl font-bold leading-snug tracking-tight">
                      Add <span class="border border-white/60 px-2.5 py-0.5 rounded-full text-sm font-semibold">new</span> product<br/>to Sedin catalog!
                    </h3>
                    <p class="text-xs text-gray-400 mt-3 leading-relaxed max-w-xs">
                      Quickly add custom electrical cables, pure copper wiring, or create new categories with live storefront sync.
                    </p>
                  </div>

                  <div class="mt-8 relative z-10 flex items-center gap-3">
                    <button
                      type="button"
                      @click="navigateToAddProduct"
                      class="bg-[#8EC5FC] hover:bg-[#A0D2FD] text-[#111215] font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all shadow-md hover:scale-105"
                    >
                      Add Product Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- ============================================== -->
            <!-- VIEW 2: PRODUCTS CATALOG FULL VIEW             -->
            <!-- ============================================== -->
            <div v-else-if="currentView === 'products'" class="space-y-6">
              <!-- Filter Row with Search, Category Filter, and Status Filter Tabs -->
              <div class="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-4 p-4 bg-[#F5F6F8] rounded-2xl">
                <div class="flex flex-wrap items-center gap-3 flex-1">
                  <!-- Search Input -->
                  <input
                    v-model="dashboardSearch"
                    type="text"
                    placeholder="Search products by title, gauge or description..."
                    class="w-full sm:w-64 px-4 py-2.5 text-xs rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-black shadow-2xs"
                  />
                  <!-- Category Dropdown -->
                  <select
                    v-model="dashboardCategoryFilter"
                    class="px-3.5 py-2.5 text-xs font-semibold rounded-xl bg-white border border-gray-200 text-gray-700 cursor-pointer shadow-2xs"
                  >
                    <option value="all">All Categories ({{ productStore.allProducts.length }})</option>
                    <option
                      v-for="cat in productStore.manageableCategories"
                      :key="cat.id"
                      :value="cat.id"
                    >
                      {{ cat.name }} ({{ productStore.getProductCountByCategory(cat.id) }})
                    </option>
                  </select>

                  <!-- Status Filter Segmented Control -->
                  <div class="flex items-center p-1 bg-white border border-gray-200 rounded-xl text-xs shadow-2xs">
                    <button
                      type="button"
                      @click="dashboardStatusFilter = 'all'"
                      class="px-3 py-1 font-bold rounded-lg transition-all"
                      :class="dashboardStatusFilter === 'all' ? 'bg-[#111215] text-white shadow-2xs' : 'text-gray-600 hover:text-black'"
                    >
                      All ({{ productStore.allProducts.length }})
                    </button>
                    <button
                      type="button"
                      @click="dashboardStatusFilter = 'published'"
                      class="px-3 py-1 font-bold rounded-lg transition-all flex items-center gap-1.5"
                      :class="dashboardStatusFilter === 'published' ? 'bg-emerald-600 text-white shadow-2xs' : 'text-gray-600 hover:text-black'"
                    >
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>Live ({{ productStore.publishedProducts.length }})</span>
                    </button>
                    <button
                      type="button"
                      @click="dashboardStatusFilter = 'draft'"
                      class="px-3 py-1 font-bold rounded-lg transition-all flex items-center gap-1.5"
                      :class="dashboardStatusFilter === 'draft' ? 'bg-amber-600 text-white shadow-2xs' : 'text-gray-600 hover:text-black'"
                    >
                      <span class="w-1.5 h-1.5 rounded-full bg-amber-300"></span>
                      <span>Drafts ({{ productStore.draftProducts.length }})</span>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  @click="navigateToAddProduct"
                  class="bg-[#111215] hover:bg-black text-white text-xs font-bold px-6 py-2.5 rounded-full transition-all shadow-xs inline-flex items-center gap-2 flex-shrink-0"
                >
                  <span>+ Add Product</span>
                </button>
              </div>

              <!-- Products Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <div
                  v-for="prod in displayedProducts"
                  :key="prod.id"
                  class="border border-gray-200 rounded-3xl p-4 bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                >
                  <div class="w-full h-44 bg-[#F5F6F8] rounded-2xl p-3 flex items-center justify-center overflow-hidden mb-3 relative group">
                    <img
                      :src="prod.image"
                      :alt="prod.title"
                      class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                    />

                    <!-- Status Pill on Image -->
                    <span
                      class="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-2xs flex items-center gap-1"
                      :class="prod.status === 'draft' ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-emerald-100 text-emerald-800 border border-emerald-200'"
                    >
                      <span class="w-1.5 h-1.5 rounded-full" :class="prod.status === 'draft' ? 'bg-amber-500' : 'bg-emerald-500'"></span>
                      <span>{{ prod.status === 'draft' ? 'Draft' : 'Live' }}</span>
                    </span>
                  </div>

                  <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-primary">
                      {{ prod.categoryLabel || prod.category }}
                    </span>
                    <h4 class="text-sm font-bold text-gray-900 mt-0.5 line-clamp-1">
                      {{ prod.title }}
                    </h4>
                    <p class="text-xs text-gray-400 line-clamp-2 mt-1">
                      {{ prod.shortDesc }}
                    </p>

                    <div v-if="prod.specs?.length" class="mt-3 pt-2 border-t border-gray-100 space-y-1">
                      <div
                        v-for="(s, idx) in prod.specs.slice(0, 2)"
                        :key="idx"
                        class="text-[11px] flex justify-between text-gray-600"
                      >
                        <span>{{ s.label }}:</span>
                        <span class="font-bold text-gray-900">{{ s.value }}</span>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <button
                        v-if="prod.status === 'draft'"
                        type="button"
                        @click="quickPublishProduct(prod)"
                        class="text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-200 transition-colors"
                      >
                        Publish Now
                      </button>
                      <button
                        type="button"
                        @click="navigateToEditProduct(prod)"
                        class="text-xs font-bold text-gray-800 hover:text-primary transition-colors"
                      >
                        Edit Details
                      </button>
                    </div>
                    <button
                      type="button"
                      @click="promptDeleteProduct(prod)"
                      class="text-xs font-semibold text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- ============================================== -->
            <!-- VIEW 3: CATEGORIES VIEW                         -->
            <!-- ============================================== -->
            <div v-else-if="currentView === 'categories'" class="space-y-6">
              <!-- Inline Add Category Card -->
              <div class="p-6 bg-[#F5F6F8] rounded-3xl border border-gray-200">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">Add New Category</h3>
                    <p class="text-xs text-gray-500 mt-0.5">
                      Create product categories that appear in the customer storefront filter pills.
                    </p>
                  </div>

                  <form @submit.prevent="handleQuickAddCategory" class="flex items-center gap-3">
                    <input
                      v-model="quickCategoryName"
                      type="text"
                      required
                      placeholder="e.g., Extension Leads"
                      class="px-4 py-2.5 text-xs rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-black min-w-[220px]"
                    />
                    <button
                      type="submit"
                      class="bg-[#111215] hover:bg-black text-white text-xs font-bold px-6 py-2.5 rounded-full transition-all shadow-xs flex-shrink-0"
                    >
                      Create
                    </button>
                  </form>
                </div>
              </div>

              <!-- Categories Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div
                  v-for="cat in productStore.categories"
                  :key="cat.id"
                  class="border border-gray-200 rounded-3xl p-6 bg-white hover:border-gray-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div class="flex items-center justify-between">
                      <span class="text-base font-bold text-gray-900">{{ cat.name }}</span>
                      <span class="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                        {{ productStore.getProductCountByCategory(cat.id) }} items
                      </span>
                    </div>
                    <p class="text-xs font-mono text-gray-400 mt-2">slug: {{ cat.id }}</p>
                  </div>

                  <div class="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      type="button"
                      @click="filterByCategory(cat.id)"
                      class="text-xs font-bold text-gray-700 hover:text-primary"
                    >
                      View Products →
                    </button>
                    <div v-if="cat.id !== 'all'" class="flex items-center gap-2">
                      <button
                        type="button"
                        @click="openEditCategoryModal(cat)"
                        class="text-xs font-semibold text-primary hover:underline"
                      >
                        Rename
                      </button>
                      <button
                        type="button"
                        @click="promptDeleteCategory(cat)"
                        class="text-xs font-semibold text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                    <span v-else class="text-[11px] text-gray-400 italic">Protected Default</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- ============================================== -->
            <!-- VIEW 4: DEDICATED ADD / EDIT PRODUCT PAGE VIEW -->
            <!-- (NO MODAL: User Friendly Full Page Editor)       -->
            <!-- ============================================== -->
            <div v-else-if="currentView === 'add-product'" class="space-y-6">
              
              <!-- Clean Top Action & Breadcrumb Header -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-[#F8F9FB] border border-gray-100 rounded-3xl">
                <div class="flex items-center gap-3">
                  <button
                    type="button"
                    @click="currentView = 'products'"
                    class="w-9 h-9 rounded-2xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 flex items-center justify-center transition-colors shadow-2xs"
                    title="Return to Catalog"
                  >
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-semibold text-gray-400">Products Catalog</span>
                      <span class="text-xs text-gray-300">/</span>
                      <span class="text-xs font-bold text-gray-900">
                        {{ editingProductId ? 'Edit Product' : 'Add New Product' }}
                      </span>
                      <!-- Status Pill -->
                      <span
                        v-if="editingProductId"
                        class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-2xs ml-1"
                        :class="productForm.status === 'draft' ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-emerald-100 text-emerald-800 border border-emerald-200'"
                      >
                        <span class="w-1.5 h-1.5 rounded-full" :class="productForm.status === 'draft' ? 'bg-amber-500' : 'bg-emerald-500'"></span>
                        <span>{{ productForm.status === 'draft' ? 'Draft' : 'Live' }}</span>
                      </span>
                      <span
                        v-else
                        class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs ml-1"
                      >
                        New Listing
                      </span>
                    </div>
                    <p class="text-[11px] text-gray-500 mt-0.5">
                      {{ editingProductId ? 'Update specifications, toggle draft/published status, and manage assets' : 'Add electrical cable or component to Sedin Traders catalog' }}
                    </p>
                  </div>
                </div>

                <!-- Right Action Buttons -->
                <div class="flex items-center gap-2.5">
                  <button
                    type="button"
                    @click="resetProductPageForm"
                    class="text-xs font-semibold text-gray-600 hover:text-black bg-white hover:bg-gray-100 border border-gray-200 px-4 py-2.5 rounded-2xl transition-colors shadow-2xs"
                  >
                    Reset Form
                  </button>

                  <!-- SAVE AS DRAFT BUTTON -->
                  <button
                    type="button"
                    @click="saveProductPageForm(true)"
                    class="text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-4 py-2.5 rounded-2xl transition-colors shadow-2xs flex items-center gap-1.5"
                    title="Save changes without making visible on the public website"
                  >
                    <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>Save as Draft</span>
                  </button>

                  <!-- PUBLISH / SAVE CHANGES BUTTON -->
                  <button
                    type="button"
                    @click="saveProductPageForm(false)"
                    class="bg-[#111215] hover:bg-black text-white text-xs font-extrabold px-6 py-2.5 rounded-2xl transition-all shadow-sm hover:scale-[1.02] flex items-center gap-2"
                  >
                    <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{{ editingProductId ? (productForm.status === 'draft' ? 'Publish to Live Catalog' : 'Save Changes') : 'Publish Product' }}</span>
                  </button>
                </div>
              </div>

              <!-- 2-Column Responsive Editor Form -->
              <form @submit.prevent="saveProductPageForm" class="space-y-6">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
                  
                  <!-- Left Column: Details & Technical Specs (7 cols) -->
                  <div class="lg:col-span-7 space-y-6">
                    
                    <!-- Card 1: General Product Information -->
                    <div class="border border-gray-100 rounded-3xl p-6 sm:p-7 bg-[#FAFAFC] space-y-5 shadow-2xs">
                      <div class="flex items-center justify-between border-b border-gray-200/60 pb-3">
                        <div>
                          <h3 class="text-sm font-extrabold text-gray-900 tracking-tight flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-primary"></span>
                            <span>General Information</span>
                          </h3>
                          <p class="text-[11px] text-gray-400 mt-0.5">Title, categorization, and customer overview</p>
                        </div>
                        <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-white px-2.5 py-1 rounded-full border border-gray-200/60">
                          Step 1
                        </span>
                      </div>

                      <!-- Product Title -->
                      <div>
                        <label class="block text-xs font-bold text-gray-700 mb-1.5">
                          Product Title <span class="text-primary">*</span>
                        </label>
                        <input
                          v-model="productForm.title"
                          type="text"
                          required
                          placeholder="e.g., 35/76 High Voltage Pure Copper Cable"
                          class="w-full px-4 py-3 text-xs sm:text-sm rounded-2xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all shadow-2xs"
                        />
                      </div>

                      <!-- Category Selector (Clean Chips + Dropdown) -->
                      <div>
                        <div class="flex items-center justify-between mb-1.5">
                          <label class="block text-xs font-bold text-gray-700">
                            Product Category <span class="text-primary">*</span>
                          </label>
                          <button
                            type="button"
                            @click="currentView = 'categories'"
                            class="text-[11px] text-primary hover:underline font-semibold"
                          >
                            + Manage Categories
                          </button>
                        </div>

                        <!-- Quick Category Pills -->
                        <div class="flex flex-wrap gap-2 mb-3">
                          <button
                            v-for="cat in productStore.manageableCategories"
                            :key="cat.id"
                            type="button"
                            @click="selectCategory(cat.id)"
                            class="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border"
                            :class="productForm.category === cat.id
                              ? 'bg-[#111215] text-white border-[#111215] shadow-xs'
                              : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50'"
                          >
                            {{ cat.name }}
                          </button>
                        </div>

                        <select
                          v-model="productForm.category"
                          @change="onProductCategorySelect"
                          required
                          class="w-full px-4 py-2.5 text-xs rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-black cursor-pointer shadow-2xs"
                        >
                          <option
                            v-for="cat in productStore.manageableCategories"
                            :key="cat.id"
                            :value="cat.id"
                          >
                            {{ cat.name }} ({{ cat.id }})
                          </option>
                        </select>
                      </div>

                      <!-- Short Description -->
                      <div>
                        <label class="block text-xs font-bold text-gray-700 mb-1.5">
                          Product Description <span class="text-primary">*</span>
                        </label>
                        <textarea
                          v-model="productForm.shortDesc"
                          rows="3"
                          required
                          placeholder="High conductivity 99.9% annealed electrolytic copper wire engineered for high-amperage residential and commercial distribution..."
                          class="w-full px-4 py-3 text-xs sm:text-sm rounded-2xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all shadow-2xs leading-relaxed"
                        ></textarea>
                      </div>
                    </div>

                    <!-- Card 2: Technical Specifications & Electrical Standards -->
                    <div class="border border-gray-100 rounded-3xl p-6 sm:p-7 bg-[#FAFAFC] space-y-5 shadow-2xs">
                      <div class="flex items-center justify-between border-b border-gray-200/60 pb-3">
                        <div>
                          <h3 class="text-sm font-extrabold text-gray-900 tracking-tight flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <span>Technical Specifications</span>
                          </h3>
                          <p class="text-[11px] text-gray-400 mt-0.5">
                            Displayed in the technical specification sheet on customer storefront
                          </p>
                        </div>
                        <button
                          type="button"
                          @click="addSpecRow"
                          class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 transition-colors inline-flex items-center gap-1 shadow-2xs"
                        >
                          <span>+ Add Custom Row</span>
                        </button>
                      </div>

                      <!-- Quick Add Specification Presets -->
                      <div>
                        <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                          Quick Presets for Electrical Products:
                        </span>
                        <div class="flex flex-wrap gap-1.5">
                          <button
                            type="button"
                            @click="addPresetSpec('Conductor', '99.9% Pure Annealed Copper')"
                            class="px-2.5 py-1 rounded-lg bg-white hover:bg-gray-100 border border-gray-200 text-[11px] font-semibold text-gray-700 transition-colors shadow-2xs"
                          >
                            + Conductor (99.9% Cu)
                          </button>
                          <button
                            type="button"
                            @click="addPresetSpec('Voltage', '450 / 750 Volts')"
                            class="px-2.5 py-1 rounded-lg bg-white hover:bg-gray-100 border border-gray-200 text-[11px] font-semibold text-gray-700 transition-colors shadow-2xs"
                          >
                            + Voltage (450/750V)
                          </button>
                          <button
                            type="button"
                            @click="addPresetSpec('Insulation', 'Grade A Virgin PVC')"
                            class="px-2.5 py-1 rounded-lg bg-white hover:bg-gray-100 border border-gray-200 text-[11px] font-semibold text-gray-700 transition-colors shadow-2xs"
                          >
                            + Insulation (PVC)
                          </button>
                          <button
                            type="button"
                            @click="addPresetSpec('Standard', 'Certified BSS 6004 / IEC')"
                            class="px-2.5 py-1 rounded-lg bg-white hover:bg-gray-100 border border-gray-200 text-[11px] font-semibold text-gray-700 transition-colors shadow-2xs"
                          >
                            + Standard (BSS 6004)
                          </button>
                          <button
                            type="button"
                            @click="addPresetSpec('Coil Length', '90 Meters / 100 Yards')"
                            class="px-2.5 py-1 rounded-lg bg-white hover:bg-gray-100 border border-gray-200 text-[11px] font-semibold text-gray-700 transition-colors shadow-2xs"
                          >
                            + Length (90m)
                          </button>
                        </div>
                      </div>

                      <!-- Specification Dynamic Rows -->
                      <div class="space-y-2.5">
                        <div
                          v-for="(spec, idx) in productForm.specs"
                          :key="idx"
                          class="flex items-center gap-2.5 bg-white p-2 rounded-2xl border border-gray-200/80 shadow-2xs"
                        >
                          <input
                            v-model="spec.label"
                            type="text"
                            placeholder="Attribute (e.g., Conductor)"
                            class="w-1/3 px-3 py-2 text-xs rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-black font-semibold"
                          />
                          <input
                            v-model="spec.value"
                            type="text"
                            placeholder="Specification (e.g., 99.9% Electrolytic Copper)"
                            class="flex-1 px-3 py-2 text-xs rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-black"
                          />
                          <button
                            type="button"
                            @click="removeSpecRow(idx)"
                            class="w-8 h-8 rounded-xl hover:bg-red-50 text-gray-400 hover:text-red-500 flex items-center justify-center transition-colors flex-shrink-0"
                            title="Remove specification"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Right Column: Imagery & Storefront Live Preview (5 cols) -->
                  <div class="lg:col-span-5 space-y-6">
                    
                    <!-- Card 3: Photography Selector -->
                    <div class="border border-gray-100 rounded-3xl p-6 sm:p-7 bg-[#FAFAFC] space-y-4 shadow-2xs">
                      <div class="flex items-center justify-between border-b border-gray-200/60 pb-3">
                        <div>
                          <h3 class="text-sm font-extrabold text-gray-900 tracking-tight flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                            <span>Product Photography</span>
                          </h3>
                          <p class="text-[11px] text-gray-400 mt-0.5">Authentic Sedin images or upload</p>
                        </div>
                        <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-white px-2.5 py-1 rounded-full border border-gray-200/60">
                          Step 2
                        </span>
                      </div>

                      <!-- Image Mode Selector Tabs -->
                      <div class="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-2xl text-xs shadow-2xs">
                        <button
                          type="button"
                          @click="productImageTab = 'presets'"
                          class="flex-1 py-1.5 font-bold rounded-xl transition-all"
                          :class="productImageTab === 'presets' ? 'bg-[#111215] text-white shadow-xs' : 'text-gray-600 hover:text-black'"
                        >
                          Preset Photos ({{ presetImages.length }})
                        </button>
                        <button
                          type="button"
                          @click="productImageTab = 'upload'"
                          class="flex-1 py-1.5 font-bold rounded-xl transition-all"
                          :class="productImageTab === 'upload' ? 'bg-[#111215] text-white shadow-xs' : 'text-gray-600 hover:text-black'"
                        >
                          Upload File
                        </button>
                        <button
                          type="button"
                          @click="productImageTab = 'url'"
                          class="flex-1 py-1.5 font-bold rounded-xl transition-all"
                          :class="productImageTab === 'url' ? 'bg-[#111215] text-white shadow-xs' : 'text-gray-600 hover:text-black'"
                        >
                          Link URL
                        </button>
                      </div>

                      <!-- Tab 1: Authentic Gallery Presets -->
                      <div v-if="productImageTab === 'presets'" class="space-y-2">
                        <p class="text-[11px] text-gray-500 font-medium">Click any genuine cable image below:</p>
                        <div class="grid grid-cols-3 gap-2.5 max-h-56 overflow-y-auto p-1.5 border border-gray-200/80 rounded-2xl bg-white shadow-2xs">
                          <button
                            v-for="(img, idx) in presetImages"
                            :key="idx"
                            type="button"
                            @click="productForm.image = img.url"
                            class="aspect-square rounded-xl p-1.5 bg-gray-50 border-2 transition-all hover:opacity-90 relative overflow-hidden group"
                            :class="productForm.image === img.url ? 'border-primary ring-2 ring-primary/20 bg-white' : 'border-transparent hover:border-gray-200'"
                            :title="img.label"
                          >
                            <img :src="img.url" :alt="img.label" class="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                            <span
                              v-if="productForm.image === img.url"
                              class="absolute top-1 right-1 w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center text-[9px] font-bold"
                            >
                              ✓
                            </span>
                          </button>
                        </div>
                      </div>

                      <!-- Tab 2: File Upload -->
                      <div v-else-if="productImageTab === 'upload'" class="space-y-2">
                        <label class="block border-2 border-dashed border-gray-300 hover:border-black rounded-2xl p-6 text-center cursor-pointer transition-colors bg-white shadow-2xs">
                          <input
                            type="file"
                            accept="image/*"
                            @change="handleProductFileUpload"
                            class="hidden"
                          />
                          <div class="flex flex-col items-center justify-center gap-1.5 text-gray-500">
                            <svg class="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                            </svg>
                            <span class="text-xs font-bold text-gray-900">Click to choose image file</span>
                            <span class="text-[10px] text-gray-400">Supports JPG, PNG, WEBP from your computer</span>
                          </div>
                        </label>
                      </div>

                      <!-- Tab 3: Direct URL -->
                      <div v-else class="space-y-2">
                        <input
                          v-model="productForm.image"
                          type="url"
                          placeholder="https://example.com/cable.jpg"
                          class="w-full px-4 py-2.5 text-xs rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-black font-mono shadow-2xs"
                        />
                      </div>
                    </div>

                    <!-- Card 4: Storefront Live Preview Card -->
                    <div class="border border-gray-100 rounded-3xl p-6 sm:p-7 bg-[#FAFAFC] space-y-3.5 shadow-2xs">
                      <div class="flex items-center justify-between border-b border-gray-200/60 pb-3">
                        <div>
                          <h4 class="text-xs font-extrabold uppercase tracking-wider text-gray-500">
                            Storefront Live Preview
                          </h4>
                          <p class="text-[11px] text-gray-400">Real-time public card preview</p>
                        </div>
                        <span class="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 flex items-center gap-1.5">
                          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span>Live Sync</span>
                        </span>
                      </div>

                      <!-- Exact Storefront Product Card Replica -->
                      <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                        <div class="w-full h-44 bg-[#F5F6F8] rounded-xl p-3 flex items-center justify-center overflow-hidden mb-3">
                          <img
                            v-if="productForm.image"
                            :src="productForm.image"
                            :alt="productForm.title || 'Product'"
                            class="max-h-full max-w-full object-contain"
                          />
                          <div v-else class="text-xs text-gray-400">No Image Selected</div>
                        </div>

                        <div>
                          <span class="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                            {{ productForm.categoryLabel || 'Category' }}
                          </span>
                          <h4 class="text-sm font-extrabold text-gray-900 line-clamp-1 mt-1.5">
                            {{ productForm.title || 'Product Title' }}
                          </h4>
                          <p class="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
                            {{ productForm.shortDesc || 'Product short description will appear here...' }}
                          </p>

                          <!-- Key Specs Pills Preview -->
                          <div v-if="productForm.specs?.length" class="mt-3 pt-2.5 border-t border-gray-100 space-y-1">
                            <div
                              v-for="(s, idx) in productForm.specs.slice(0, 2)"
                              :key="idx"
                              class="text-[10px] flex justify-between text-gray-600"
                            >
                              <span class="font-medium text-gray-400">{{ s.label || 'Spec' }}:</span>
                              <span class="font-bold text-gray-900 truncate max-w-[150px]">{{ s.value || 'Value' }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Bottom Floating-Style Action Bar -->
                <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    type="button"
                    @click="currentView = 'products'"
                    class="text-xs font-semibold text-gray-500 hover:text-black px-4 py-2.5 transition-colors"
                  >
                    ← Return to Products
                  </button>

                  <div class="flex items-center gap-3">
                    <button
                      type="button"
                      @click="resetProductPageForm"
                      class="text-xs font-semibold text-gray-600 hover:text-black bg-white hover:bg-gray-100 border border-gray-200 px-5 py-3 rounded-full transition-colors shadow-2xs"
                    >
                      Clear Form
                    </button>
                    <!-- SAVE AS DRAFT BUTTON -->
                    <button
                      type="button"
                      @click="saveProductPageForm(true)"
                      class="text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-6 py-3.5 rounded-full transition-all shadow-2xs hover:scale-[1.02] flex items-center gap-2"
                      title="Save product as a draft hidden from customers"
                    >
                      <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span>Save as Draft</span>
                    </button>
                    <!-- PUBLISH BUTTON -->
                    <button
                      type="button"
                      @click="saveProductPageForm(false)"
                      class="bg-[#111215] hover:bg-black text-white text-xs font-extrabold px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-[1.02] flex items-center gap-2"
                    >
                      <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{{ editingProductId ? (productForm.status === 'draft' ? 'Publish to Live Catalog' : 'Save Changes') : 'Publish to Catalog' }}</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <!-- ============================================== -->
            <!-- VIEW 5: ADMIN PROFILE VIEW                      -->
            <!-- ============================================== -->
            <div v-else-if="currentView === 'profile'" class="space-y-8">
              <div class="p-6 bg-[#F5F6F8] rounded-3xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 class="text-xl font-bold text-gray-900">Administrator Profile & Settings</h3>
                  <p class="text-xs text-gray-500 mt-1">
                    Manage administrative details, profile photo, credentials, and notification settings.
                  </p>
                </div>
                <button
                  type="button"
                  @click="saveAdminProfile"
                  class="bg-[#111215] hover:bg-black text-white text-xs font-bold px-6 py-3 rounded-full transition-all shadow-md flex items-center gap-2"
                >
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Save Profile Changes</span>
                </button>
              </div>

              <!-- Profile Details Grid -->
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <!-- Left: Profile Photo & Quick Stats (4 cols) -->
                <div class="lg:col-span-4 bg-[#F8F9FA] border border-gray-200 rounded-3xl p-6 text-center space-y-4">
                  <!-- Photo Display -->
                  <div class="relative w-28 h-28 mx-auto">
                    <img
                      v-if="adminProfile.avatar"
                      :src="adminProfile.avatar"
                      alt="Admin Avatar"
                      class="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <div
                      v-else
                      class="w-full h-full rounded-full bg-[#111215] text-white flex items-center justify-center text-3xl font-extrabold border-4 border-white shadow-md"
                    >
                      {{ adminProfile.name.charAt(0) }}
                    </div>

                    <!-- Upload Trigger Icon -->
                    <label
                      class="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-primary hover:bg-brand-red-hover text-white flex items-center justify-center cursor-pointer shadow-md transition-transform hover:scale-110"
                      title="Upload New Photo"
                    >
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <input
                        type="file"
                        accept="image/*"
                        @change="handleAvatarUpload"
                        class="hidden"
                      />
                    </label>
                  </div>

                  <div>
                    <h4 class="text-base font-extrabold text-gray-900">{{ adminProfile.name }}</h4>
                    <p class="text-xs text-primary font-bold mt-0.5">{{ adminProfile.role }}</p>
                    <p class="text-[11px] text-gray-400 mt-1">{{ adminProfile.branch }}</p>
                  </div>

                  <!-- Upload / Remove Actions -->
                  <div class="pt-2 flex items-center justify-center gap-2">
                    <label class="text-xs font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 px-3.5 py-1.5 rounded-full cursor-pointer transition-colors shadow-xs">
                      Change Photo
                      <input
                        type="file"
                        accept="image/*"
                        @change="handleAvatarUpload"
                        class="hidden"
                      />
                    </label>
                    <button
                      v-if="adminProfile.avatar"
                      type="button"
                      @click="adminProfile.avatar = ''"
                      class="text-xs font-semibold text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-full transition-colors"
                    >
                      Remove
                    </button>
                  </div>

                  <div class="pt-4 border-t border-gray-200/80 space-y-2 text-left text-xs">
                    <div class="flex justify-between text-gray-500">
                      <span>Access Level:</span>
                      <span class="font-bold text-gray-900">Super Administrator</span>
                    </div>
                    <div class="flex justify-between text-gray-500">
                      <span>Headquarters:</span>
                      <span class="font-bold text-gray-900">Lahore, PK</span>
                    </div>
                    <div class="flex justify-between text-gray-500">
                      <span>Security Status:</span>
                      <span class="font-bold text-emerald-600">● Active</span>
                    </div>
                  </div>
                </div>

                <!-- Right: Profile Form & Credentials (8 cols) -->
                <div class="lg:col-span-8 space-y-6">
                  <div class="border border-gray-200 rounded-3xl p-6 bg-white space-y-4">
                    <h4 class="text-sm font-bold text-gray-900 border-b border-gray-100 pb-3">
                      Personal & Contact Information
                    </h4>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label class="block text-xs font-bold text-gray-700 mb-1.5">
                          Full Name
                        </label>
                        <input
                          v-model="adminProfile.name"
                          type="text"
                          class="w-full px-4 py-2.5 text-xs rounded-xl bg-[#F5F6F8] border border-gray-200 text-gray-900 focus:outline-none focus:border-black"
                        />
                      </div>

                      <div>
                        <label class="block text-xs font-bold text-gray-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          v-model="adminProfile.email"
                          type="email"
                          class="w-full px-4 py-2.5 text-xs rounded-xl bg-[#F5F6F8] border border-gray-200 text-gray-900 focus:outline-none focus:border-black"
                        />
                      </div>

                      <div>
                        <label class="block text-xs font-bold text-gray-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          v-model="adminProfile.phone"
                          type="text"
                          class="w-full px-4 py-2.5 text-xs rounded-xl bg-[#F5F6F8] border border-gray-200 text-gray-900 focus:outline-none focus:border-black"
                        />
                      </div>

                      <div>
                        <label class="block text-xs font-bold text-gray-700 mb-1.5">
                          Designation / Role
                        </label>
                        <input
                          v-model="adminProfile.role"
                          type="text"
                          class="w-full px-4 py-2.5 text-xs rounded-xl bg-[#F5F6F8] border border-gray-200 text-gray-900 focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Change Password -->
                  <div class="border border-gray-200 rounded-3xl p-6 bg-white space-y-4">
                    <h4 class="text-sm font-bold text-gray-900 border-b border-gray-100 pb-3">
                      Dashboard Security & Password
                    </h4>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label class="block text-xs font-bold text-gray-700 mb-1.5">
                          New Password
                        </label>
                        <input
                          v-model="newPassword"
                          type="password"
                          placeholder="Enter new dashboard password"
                          class="w-full px-4 py-2.5 text-xs rounded-xl bg-[#F5F6F8] border border-gray-200 text-gray-900 focus:outline-none focus:border-black"
                        />
                      </div>

                      <div>
                        <label class="block text-xs font-bold text-gray-700 mb-1.5">
                          Confirm New Password
                        </label>
                        <input
                          v-model="confirmPassword"
                          type="password"
                          placeholder="Re-type new password"
                          class="w-full px-4 py-2.5 text-xs rounded-xl bg-[#F5F6F8] border border-gray-200 text-gray-900 focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Notifications & Preferences -->
                  <div class="border border-gray-200 rounded-3xl p-6 bg-white space-y-4">
                    <h4 class="text-sm font-bold text-gray-900 border-b border-gray-100 pb-3">
                      Alert Preferences
                    </h4>

                    <div class="space-y-3">
                      <label class="flex items-center justify-between cursor-pointer">
                        <div>
                          <p class="text-xs font-bold text-gray-900">Email Inquiry Notifications</p>
                          <p class="text-[11px] text-gray-400">Receive alert when customer submits a quote form</p>
                        </div>
                        <input
                          v-model="adminProfile.emailAlerts"
                          type="checkbox"
                          class="w-4 h-4 rounded text-black focus:ring-black border-gray-300 cursor-pointer"
                        />
                      </label>

                      <label class="flex items-center justify-between cursor-pointer">
                        <div>
                          <p class="text-xs font-bold text-gray-900">WhatsApp Inquiry Routing</p>
                          <p class="text-[11px] text-gray-400">Keep Lahore WhatsApp sales link synchronized</p>
                        </div>
                        <input
                          v-model="adminProfile.whatsappAlerts"
                          type="checkbox"
                          class="w-4 h-4 rounded text-black focus:ring-black border-gray-300 cursor-pointer"
                        />
                      </label>
                    </div>
                  </div>

                  <div class="flex justify-end pt-2">
                    <button
                      type="button"
                      @click="saveAdminProfile"
                      class="bg-[#111215] hover:bg-black text-white text-xs font-bold px-8 py-3 rounded-full transition-all shadow-md"
                    >
                      Save Profile Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Canvas Indicator -->
          <footer class="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Catalog Active • {{ productStore.allProducts.length }} products synchronized</span>
            </div>
            <span class="text-gray-400 font-medium">Sedin Traders Lahore</span>
          </footer>
        </div>
      </main>
    </div>

    <!-- Rename Category Modal (Clean small dialog) -->
    <CategoryModal
      :is-open="categoryModalOpen"
      :category="selectedCategoryToEdit"
      @close="categoryModalOpen = false"
      @saved="handleCategorySaved"
    />

    <!-- Delete Confirmation Modal -->
    <Teleport to="body">
      <div
        v-if="itemToDelete"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
        @click.self="itemToDelete = null"
      >
        <div class="bg-white rounded-3xl p-6 max-w-sm w-full text-[#111215] shadow-2xl border border-gray-200">
          <div class="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900">
            Delete {{ itemToDelete.type === 'product' ? 'Product' : 'Category' }}?
          </h3>
          <p class="text-xs text-gray-500 mt-1 leading-relaxed">
            Are you sure you want to delete <strong class="text-gray-900">"{{ itemToDelete.title || itemToDelete.name }}"</strong>?
          </p>

          <div class="flex items-center justify-end gap-2.5 mt-6 pt-3 border-t border-gray-100">
            <button
              type="button"
              @click="itemToDelete = null"
              class="px-4 py-2 text-xs font-bold rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              @click="confirmDelete"
              class="px-4 py-2 text-xs font-bold rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Toast Notification -->
    <transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="toastMessage"
        class="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#16171B] text-white border border-white/10 px-5 py-3.5 rounded-2xl shadow-2xl"
      >
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span class="text-xs sm:text-sm font-semibold">{{ toastMessage }}</span>
        <button @click="toastMessage = ''" class="text-gray-400 hover:text-white ml-2 text-xs">✕</button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useProductStore, PRESET_IMAGES } from '~/stores/useProductStore'
import CategoryModal from '~/components/dashboard/CategoryModal.vue'

definePageMeta({
  layout: false
})

useHead({
  title: 'Dashboard – Sedin Traders',
  meta: [
    {
      name: 'description',
      content: 'Sedin Traders Management Dashboard. Clean, simple, and professional product & category management.'
    }
  ]
})

const productStore = useProductStore()
const presetImages = PRESET_IMAGES

// Authentication State
const isAuthenticated = ref(false)
const showPassword = ref(false)
const loginError = ref('')

const loginForm = reactive({
  username: '',
  password: '',
  remember: true
})

// Current View Controller: 'overview' | 'products' | 'categories' | 'add-product' | 'profile'
const currentView = ref('overview')
const dashboardSearch = ref('')
const dashboardCategoryFilter = ref('all')
const dashboardStatusFilter = ref('all') // 'all' | 'published' | 'draft'
const searchBarOpen = ref(false)
const profileDropdownOpen = ref(false)
const toastMessage = ref('')

// Quick Add Category Form State in Categories tab
const quickCategoryName = ref('')

// Dedicated Add/Edit Product Form State (NO MODAL)
const editingProductId = ref(null)
const productImageTab = ref('presets')

const productForm = reactive({
  title: '',
  category: 'copper-wiring',
  categoryLabel: 'Copper Wiring',
  image: '/images/products/copper-35-76-blue.jpg',
  shortDesc: '',
  status: 'published', // 'published' | 'draft'
  specs: [
    { label: 'Conductor', value: '100% Pure Annealed Copper' },
    { label: 'Rating', value: '450 / 750V Grade A PVC' },
    { label: 'Standard', value: 'Certified BSS / IEC Compliant' }
  ]
})

// Admin Profile State
const adminProfile = reactive({
  name: 'Sedin Admin',
  email: 'admin@sedintraders.com',
  phone: '+92 300 4268 720',
  role: 'Inventory Director',
  branch: 'Lahore Headquarters, Pakistan',
  avatar: '',
  emailAlerts: true,
  whatsappAlerts: true
})

const newPassword = ref('')
const confirmPassword = ref('')

// Category Modal for Rename
const categoryModalOpen = ref(false)
const selectedCategoryToEdit = ref(null)

const itemToDelete = ref(null)

onMounted(() => {
  productStore.initStore()

  if (import.meta.client) {
    const savedAuth = localStorage.getItem('sedin_dashboard_auth')
    if (savedAuth === 'true') {
      isAuthenticated.value = true
    }

    const savedProfile = localStorage.getItem('sedin_admin_profile')
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile)
        Object.assign(adminProfile, parsed)
      } catch (e) {
        console.error('Error parsing admin profile:', e)
      }
    }
  }
})

// Navigation Handlers for Add/Edit Product (NO MODAL)
const navigateToAddProduct = () => {
  editingProductId.value = null
  resetProductPageForm()
  currentView.value = 'add-product'
}

const navigateToEditProduct = (product) => {
  editingProductId.value = product.id
  productForm.title = product.title || ''
  productForm.category = product.category || 'copper-wiring'
  productForm.categoryLabel = product.categoryLabel || ''
  productForm.image = product.image || '/images/products/copper-35-76-blue.jpg'
  productForm.shortDesc = product.shortDesc || ''
  productForm.status = product.status || 'published'
  productForm.specs = Array.isArray(product.specs)
    ? JSON.parse(JSON.stringify(product.specs))
    : [{ label: 'Conductor', value: '100% Pure Annealed Copper' }]

  if (productForm.image.startsWith('data:')) {
    productImageTab.value = 'upload'
  } else if (presetImages.some(p => p.url === productForm.image)) {
    productImageTab.value = 'presets'
  } else {
    productImageTab.value = 'url'
  }

  currentView.value = 'add-product'
}

const resetProductPageForm = () => {
  productForm.title = ''
  productForm.category = productStore.manageableCategories[0]?.id || 'copper-wiring'
  productForm.categoryLabel = productStore.manageableCategories[0]?.name || 'Copper Wiring'
  productForm.image = '/images/products/copper-35-76-blue.jpg'
  productForm.shortDesc = ''
  productForm.status = 'published'
  productForm.specs = [
    { label: 'Conductor', value: '100% Pure Annealed Copper' },
    { label: 'Rating', value: '450 / 750V Grade A PVC' },
    { label: 'Standard', value: 'Certified BSS / IEC Compliant' }
  ]
}

const selectCategory = (catId) => {
  productForm.category = catId
  onProductCategorySelect()
}

const onProductCategorySelect = () => {
  const match = productStore.categories.find(c => c.id === productForm.category)
  if (match) {
    productForm.categoryLabel = match.name
  }
}

const addSpecRow = () => {
  productForm.specs.push({ label: '', value: '' })
}

const removeSpecRow = (idx) => {
  productForm.specs.splice(idx, 1)
}

const addPresetSpec = (label, value) => {
  const existing = productForm.specs.find(s => s.label.toLowerCase() === label.toLowerCase())
  if (existing) {
    existing.value = value
  } else {
    productForm.specs.push({ label, value })
  }
  showToast(`Added specification: ${label}`)
}

const handleProductFileUpload = (event) => {
  const file = event.target.files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    productForm.image = e.target.result
    showToast('Photo uploaded and preview updated!')
  }
  reader.readAsDataURL(file)
}

const saveProductPageForm = (isDraft = false) => {
  if (!productForm.title.trim()) {
    showToast('Please enter a product title.')
    return
  }
  if (!isDraft && !productForm.shortDesc.trim()) {
    showToast('Please provide a short description before publishing.')
    return
  }

  const cleanSpecs = productForm.specs.filter(s => s.label && s.label.trim() && s.value && s.value.trim())
  const targetStatus = isDraft ? 'draft' : 'published'

  const payload = {
    title: productForm.title.trim(),
    category: productForm.category,
    categoryLabel: productForm.categoryLabel.trim() || 'General',
    image: productForm.image,
    shortDesc: productForm.shortDesc.trim() || 'Draft description pending.',
    specs: cleanSpecs,
    status: targetStatus
  }

  if (editingProductId.value) {
    productStore.updateProduct(editingProductId.value, payload)
    showToast(
      isDraft
        ? `Product "${payload.title}" saved as draft (hidden from public website).`
        : `Product "${payload.title}" published to live catalog!`
    )
  } else {
    productStore.addProduct(payload)
    showToast(
      isDraft
        ? `Product "${payload.title}" saved to drafts!`
        : `Product "${payload.title}" published to live catalog!`
    )
  }

  editingProductId.value = null
  currentView.value = 'products'
}

const quickPublishProduct = (prod) => {
  productStore.updateProduct(prod.id, { status: 'published' })
  showToast(`"${prod.title}" is now published to the public website!`)
}

// Quick Add Category from Categories Page
const handleQuickAddCategory = () => {
  if (!quickCategoryName.value.trim()) return

  const created = productStore.addCategory({
    name: quickCategoryName.value.trim()
  })

  if (created) {
    showToast(`Category "${created.name}" created!`)
    quickCategoryName.value = ''
  } else {
    showToast('Category already exists or name invalid.')
  }
}

// Avatar File Upload
const handleAvatarUpload = (event) => {
  const file = event.target.files?.[0]
  if (!file) return

  if (!file.type.startsWith('image/')) {
    showToast('Please select a valid image file.')
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    adminProfile.avatar = e.target.result
    saveAdminProfile()
    showToast('Profile photo updated successfully!')
  }
  reader.readAsDataURL(file)
}

// Save Admin Profile
const saveAdminProfile = () => {
  if (newPassword.value) {
    if (newPassword.value !== confirmPassword.value) {
      showToast('Passwords do not match.')
      return
    }
    if (import.meta.client) {
      localStorage.setItem('sedin_admin_custom_password', newPassword.value)
    }
    newPassword.value = ''
    confirmPassword.value = ''
    showToast('Password updated successfully!')
  }

  if (import.meta.client) {
    localStorage.setItem('sedin_admin_profile', JSON.stringify(adminProfile))
  }

  showToast('Admin profile saved!')
}

// Authentication Handlers
const handleLogin = () => {
  loginError.value = ''
  const u = loginForm.username.trim().toLowerCase()
  const p = loginForm.password.trim()

  let customPassword = null
  if (import.meta.client) {
    customPassword = localStorage.getItem('sedin_admin_custom_password')
  }

  const validPasswords = ['admin123', 'sedin123', 'admin']
  if (customPassword) {
    validPasswords.push(customPassword)
  }

  if (
    (u === 'admin' || u === adminProfile.email.toLowerCase()) &&
    validPasswords.includes(p)
  ) {
    isAuthenticated.value = true
    loginError.value = ''
    if (loginForm.remember && import.meta.client) {
      localStorage.setItem('sedin_dashboard_auth', 'true')
    }
    showToast(`Welcome back, ${adminProfile.name}!`)
  } else {
    loginError.value = 'Invalid username or password.'
  }
}

const handleLogout = () => {
  isAuthenticated.value = false
  if (import.meta.client) {
    localStorage.removeItem('sedin_dashboard_auth')
  }
  profileDropdownOpen.value = false
  showToast('Logged out of dashboard.')
}

const showToast = (msg) => {
  toastMessage.value = msg
  setTimeout(() => {
    if (toastMessage.value === msg) {
      toastMessage.value = ''
    }
  }, 4000)
}

// Filtered products list
const displayedProducts = computed(() => {
  let list = productStore.allProducts

  // Filter by Status: All | Live (Published) | Draft
  if (dashboardStatusFilter.value === 'published') {
    list = list.filter(p => p.status !== 'draft')
  } else if (dashboardStatusFilter.value === 'draft') {
    list = list.filter(p => p.status === 'draft')
  }

  // Filter by Category
  if (dashboardCategoryFilter.value !== 'all') {
    list = list.filter(p => p.category === dashboardCategoryFilter.value)
  }

  // Filter by Search Query
  if (dashboardSearch.value.trim()) {
    const q = dashboardSearch.value.toLowerCase().trim()
    list = list.filter(p =>
      (p.title && p.title.toLowerCase().includes(q)) ||
      (p.shortDesc && p.shortDesc.toLowerCase().includes(q)) ||
      (p.categoryLabel && p.categoryLabel.toLowerCase().includes(q)) ||
      (p.specs && p.specs.some(s => s.value && s.value.toLowerCase().includes(q)))
    )
  }

  return list
})

const filterByCategory = (catId) => {
  dashboardCategoryFilter.value = catId
  currentView.value = 'products'
}

// Category Modal Handlers
const openEditCategoryModal = (category) => {
  selectedCategoryToEdit.value = category
  categoryModalOpen.value = true
}

const handleCategorySaved = (cat) => {
  showToast(`Category "${cat.name}" updated!`)
}

const promptDeleteCategory = (category) => {
  itemToDelete.value = {
    type: 'category',
    id: category.id,
    name: category.name
  }
}

const promptDeleteProduct = (product) => {
  itemToDelete.value = {
    type: 'product',
    id: product.id,
    title: product.title
  }
}

const confirmDelete = () => {
  if (!itemToDelete.value) return

  if (itemToDelete.value.type === 'product') {
    productStore.deleteProduct(itemToDelete.value.id)
    showToast(`Product "${itemToDelete.value.title}" deleted.`)
  } else if (itemToDelete.value.type === 'category') {
    productStore.deleteCategory(itemToDelete.value.id)
    showToast(`Category "${itemToDelete.value.name}" deleted.`)
  }

  itemToDelete.value = null
}
</script>
