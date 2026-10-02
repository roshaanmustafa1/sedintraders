import { u as useHead$1, a as useProductStore, N as NuxtLink } from '../virtual/entry.mjs';
import { mergeProps, ref, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderTeleport } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import '@vue/shared';
import 'pinia';
import 'unhead/utils';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';

//#region \0virtual:public?%2Fimages%2Fhero-banner.png
var _virtual_public__2Fimages_2Fhero_banner_default = publicAssetsURL("/images/hero-banner.png");
//#endregion
//#region app/components/home/HeroSection.vue
var _sfc_main$4 = {
	__name: "HomeHeroSection",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full bg-brand-dark overflow-hidden" }, _attrs))}><div class="w-full"><img${ssrRenderAttr("src", _virtual_public__2Fimages_2Fhero_banner_default)} alt="Sedin Gold - Laundry Iron Lead Copper" class="w-full h-auto block object-cover max-h-[600px] select-none shadow-xs" fetchpriority="high" loading="eager"></div></section>`);
		};
	}
};
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HeroSection.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
//#endregion
//#region app/components/home/ProductCard.vue
var _sfc_main$3 = {
	__name: "HomeProductCard",
	__ssrInlineRender: true,
	props: { product: {
		type: Object,
		required: true
	} },
	emits: ["select"],
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-card border border-border rounded-xl flex flex-col justify-between hover:shadow-xl hover:border-border/80 transition-all duration-300 group" }, _attrs))}><div class="w-full h-full sm:h-80 bg-muted/50 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"><img${ssrRenderAttr("src", __props.product.image)}${ssrRenderAttr("alt", __props.product.title)} class="w-full h-full max-h-68 sm:max-h-76 object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy"></div><div class="pt-4 flex flex-col flex-grow justify-between text-center"><h3 class="text-base sm:text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-1 mb-4 cursor-pointer">${ssrInterpolate(__props.product.title)}</h3><div><button type="button" class="w-full py-2.5 px-4 rounded-md text-sm font-semibold border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"> Read more </button></div></div></div>`);
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ProductCard.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region app/components/home/ProductGrid.vue
var _sfc_main$2 = {
	__name: "HomeProductGrid",
	__ssrInlineRender: true,
	setup(__props) {
		const productStore = useProductStore();
		const activeProduct = ref(null);
		const openModal = (product) => {
			activeProduct.value = product;
		};
		const closeModal = () => {
			activeProduct.value = null;
		};
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "products",
				class: "py-14 sm:py-20 bg-background"
			}, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="mb-10 text-center sm:text-left"><h2 class="text-3xl sm:text-4xl font-bold text-foreground tracking-tight"> All Products </h2><div class="w-16 h-1 bg-primary mt-3 mx-auto sm:mx-0"></div></div><div class="flex items-center flex-wrap gap-2 mb-8"><!--[-->`);
			ssrRenderList(unref(productStore).categories, (cat) => {
				_push(`<button type="button" class="${ssrRenderClass([unref(productStore).selectedCategory === cat.id ? "bg-brand-dark text-white shadow-xs" : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground", "px-4 py-2 rounded text-xs sm:text-sm font-medium transition-colors"])}">${ssrInterpolate(cat.name)}</button>`);
			});
			_push(`<!--]--></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
			ssrRenderList(unref(productStore).filteredProducts, (product) => {
				_push(ssrRenderComponent(_sfc_main$3, {
					key: product.id,
					product,
					onSelect: openModal
				}, null, _parent));
			});
			_push(`<!--]--></div>`);
			if (unref(productStore).filteredProducts.length === 0) _push(`<div class="text-center py-16"><p class="text-muted-foreground text-base">No products found in this category.</p><button class="mt-4 px-4 py-2 bg-primary text-primary-foreground hover:bg-brand-red-hover rounded text-sm font-medium transition-colors"> View All Products </button></div>`);
			else _push(`<!---->`);
			_push(`</div>`);
			ssrRenderTeleport(_push, (_push) => {
				if (activeProduct.value) {
					_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"><div class="bg-card text-card-foreground rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200 border border-border" role="dialog" aria-modal="true"><button class="absolute top-4 right-4 w-9 h-9 rounded-full bg-muted hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" aria-label="Close Modal"><svg class="w-5 h-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button><div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center"><div class="bg-muted/60 rounded-xl flex items-center justify-center h-80 sm:h-96"><img${ssrRenderAttr("src", activeProduct.value.image)}${ssrRenderAttr("alt", activeProduct.value.title)} class="max-h-full max-w-full object-contain rounded-md"></div><div class="flex flex-col justify-between"><div><span class="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-1">${ssrInterpolate(activeProduct.value.categoryLabel)}</span><h3 class="text-2xl sm:text-3xl font-bold text-card-foreground mb-3">${ssrInterpolate(activeProduct.value.title)}</h3><p class="text-sm text-muted-foreground leading-relaxed mb-5">${ssrInterpolate(activeProduct.value.shortDesc)}</p>`);
					if (activeProduct.value.specs?.length) {
						_push(`<div class="space-y-2 mb-6 border-t border-border pt-3"><!--[-->`);
						ssrRenderList(activeProduct.value.specs, (spec, idx) => {
							_push(`<div class="flex items-center justify-between text-xs gap-4"><span class="text-muted-foreground font-medium">${ssrInterpolate(spec.label)}:</span><span class="text-card-foreground font-semibold text-right">${ssrInterpolate(spec.value)}</span></div>`);
						});
						_push(`<!--]--></div>`);
					} else _push(`<!---->`);
					_push(`</div><div class="space-y-2.5 pt-2"><a${ssrRenderAttr("href", `https://wa.me/923004268720?text=Hello%20Sedin%20Traders,%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(activeProduct.value.title)}.`)} target="_blank" rel="noopener noreferrer" class="w-full bg-brand-whatsapp hover:brightness-95 text-white py-3 px-4 rounded text-sm font-semibold flex items-center justify-center gap-2 transition-colors"><svg class="w-4 h-4 fill-current" viewBox="0 0 1024 1024"><path d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706z"></path></svg><span>Inquire on WhatsApp</span></a>`);
					_push(ssrRenderComponent(_component_NuxtLink, {
						to: "/contact",
						onClick: closeModal,
						class: "w-full bg-brand-dark hover:opacity-90 text-white py-3 px-4 rounded text-sm font-semibold text-center block transition-opacity"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Request Official Quote `);
							else return [createTextVNode(" Request Official Quote ")];
						}),
						_: 1
					}, _parent));
					_push(`</div></div></div></div></div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
			_push(`</section>`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ProductGrid.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region app/components/home/AboutSection.vue
var _sfc_main$1 = {
	__name: "HomeAboutSection",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "about",
				class: "py-16 sm:py-24 bg-muted/40 border-t border-border"
			}, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="mx-auto"><p class="text-sm font-semibold uppercase tracking-wider text-primary mb-2"> About Company </p><h2 class="text-3xl sm:text-4xl font-bold text-foreground mb-6"> Sedin Traders </h2><div class="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed"><p> SedinTraders is a Lahore-based electrical manufacturing and distribution company specializing in high-quality cables, plugs, sockets, and extension solutions for residential, commercial, and industrial use. Since our establishment, we have focused on delivering safe, durable, and performance-driven electrical products that meet the growing needs of Pakistan’s infrastructure and development sectors. </p><p> With a strong production network and professional workforce, SedinTraders has successfully built its presence in major markets including Peshawar, Multan, Faisalabad, Sukkur, Swat, and surrounding regions, with plans to expand nationwide. </p></div><div class="mt-8 space-y-3.5"><div class="flex items-start gap-3"><div class="text-primary mt-1 flex-shrink-0"><svg class="w-5 h-5 fill-current" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></div><p class="text-sm sm:text-base text-foreground font-medium"><strong>Premium Quality Products</strong> – Tested for durability &amp; performance </p></div><div class="flex items-start gap-3"><div class="text-primary mt-1 flex-shrink-0"><svg class="w-5 h-5 fill-current" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></div><p class="text-sm sm:text-base text-foreground font-medium"><strong>Competitive Pricing</strong> – Affordable without compromise </p></div><div class="flex items-start gap-3"><div class="text-primary mt-1 flex-shrink-0"><svg class="w-5 h-5 fill-current" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></div><p class="text-sm sm:text-base text-foreground font-medium"><strong>Fast Distribution</strong> – Delivered to Peshawar, Multan, Faisalabad, Sukkur, Swat &amp; more </p></div><div class="flex items-start gap-3"><div class="text-primary mt-1 flex-shrink-0"><svg class="w-5 h-5 fill-current" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></div><p class="text-sm sm:text-base text-foreground font-medium"><strong>Customer-First Support</strong> – Professional service &amp; consultation </p></div></div><div class="mt-10 pt-6 border-t border-border"><p class="text-lg font-bold text-foreground">Mian Khushnood Ali</p><p class="text-sm font-semibold text-primary mt-0.5">CEO</p></div></div></div></section>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/AboutSection.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region app/pages/index.vue
var _sfc_main = {
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1({
			title: "Sedin Traders – Reliable. Strong. Sedin",
			meta: [{
				name: "description",
				content: "Sedin Traders - Lahore-based electrical manufacturing and distribution company specializing in high-quality cables, plugs, sockets, and extension solutions."
			}]
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			_push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pages-BcOlBJov.mjs.map
