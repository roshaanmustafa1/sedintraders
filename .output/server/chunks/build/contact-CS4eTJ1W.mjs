import { u as useHead$1, N as NuxtLink } from '../virtual/entry.mjs';
import { ref, reactive, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import '@vue/shared';
import 'pinia';
import 'unhead/utils';

//#region app/pages/contact.vue
var _sfc_main = {
	__name: "contact",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1({
			title: "Contact Us – Sedin Traders",
			meta: [{
				name: "description",
				content: "Contact Sedin Traders in Lahore, Pakistan for inquiries, quotes, or product specifications for our electrical wires, cables, and power cords."
			}]
		});
		const loading = ref(false);
		const submitted = ref(false);
		const form = reactive({
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			message: ""
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-brand-dark text-white py-14 sm:py-18 relative"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left"><div class="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-gray-300 mb-2">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "hover:text-white transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Home`);
					else return [createTextVNode("Home")];
				}),
				_: 1
			}, _parent));
			_push(`<span>/</span><span class="text-primary font-medium">Contact</span></div><h1 class="text-3xl sm:text-5xl font-bold tracking-tight text-white"> Contact </h1></div></div><section class="py-12 bg-background"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="border border-border bg-card rounded-lg p-6 sm:p-8 flex items-start gap-4 hover:shadow-md transition-shadow"><div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0"><svg class="w-6 h-6 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div><h3 class="text-base font-bold text-foreground mb-1">Need Help !</h3><a href="mailto:info@sedintraders.com" class="text-sm text-muted-foreground hover:text-primary transition-colors break-all"> info@sedintraders.com </a></div></div><div class="border border-border bg-card rounded-lg p-6 sm:p-8 flex items-start gap-4 hover:shadow-md transition-shadow"><div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0"><svg class="w-5 h-5 fill-current" viewBox="0 0 512 512"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg></div><div><h3 class="text-base font-bold text-foreground mb-1">Call Us Anytime</h3><div class="space-y-0.5"><a href="tel:+923004268720" class="block text-sm text-muted-foreground hover:text-primary transition-colors"> +92 300 4268 720 </a><a href="tel:04237334344" class="block text-sm text-muted-foreground hover:text-primary transition-colors"> 042 37334344 </a></div></div></div><div class="border border-border bg-card rounded-lg p-6 sm:p-8 flex items-start gap-4 hover:shadow-md transition-shadow"><div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0"><svg class="w-5 h-5 fill-current" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></div><div><h3 class="text-base font-bold text-foreground mb-1">Our Location</h3><p class="text-sm text-muted-foreground"> Lahore, Pakistan. </p></div></div></div></div></section><section class="py-14 sm:py-20 bg-muted/40 border-t border-border"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"><div class="lg:col-span-5"><p class="text-sm font-semibold uppercase tracking-wider text-primary mb-2"> Contact with us </p><h2 class="text-3xl sm:text-4xl font-bold text-foreground mb-5 leading-tight"> Love to Hear from Our Customers </h2><p class="text-base text-muted-foreground leading-relaxed mb-8"> SedinTraders is a leading manufacturer and supplier of high-quality electrical cables, plugs, and extension cords in Lahore, Pakistan — delivering durable products trusted across major cities including Peshawar, Multan, Faisalabad, Sukkur, Swat, and beyond. </p><div class="pt-6 border-t border-border"><h4 class="text-sm font-bold text-foreground uppercase tracking-wider mb-3"> Quick WhatsApp Direct </h4><a href="https://wa.me/923004268720?text=Hello%20Sedin%20Traders,%20I%20have%20an%20inquiry%20regarding%20orders." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2.5 bg-brand-whatsapp hover:brightness-95 text-white text-sm font-semibold px-5 py-3 rounded-lg shadow-xs transition-all"><svg class="w-5 h-5 fill-current" viewBox="0 0 1024 1024"><path d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"></path></svg><span>Chat Instantly on WhatsApp</span></a></div></div><div class="lg:col-span-7 bg-card p-6 sm:p-10 rounded-xl border border-border shadow-xs"><form class="space-y-5">`);
			if (submitted.value) _push(`<div class="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm"><strong>Thank you!</strong> Your message has been received. Our team will contact you shortly. </div>`);
			else _push(`<!---->`);
			_push(`<div><label class="block text-sm font-semibold text-foreground mb-2"> Name <span class="text-primary">*</span></label><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><input${ssrRenderAttr("value", form.firstName)} type="text" required placeholder="First Name" class="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:border-primary text-sm"></div><div><input${ssrRenderAttr("value", form.lastName)} type="text" required placeholder="Last Name" class="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:border-primary text-sm"></div></div></div><div><label class="block text-sm font-semibold text-foreground mb-2"> Email <span class="text-primary">*</span></label><input${ssrRenderAttr("value", form.email)} type="email" required placeholder="your.email@example.com" class="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:border-primary text-sm"></div><div><label class="block text-sm font-semibold text-foreground mb-2"> Phone Number </label><input${ssrRenderAttr("value", form.phone)} type="tel" placeholder="0300-1234567" class="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:border-primary text-sm"></div><div><label class="block text-sm font-semibold text-foreground mb-2"> Comment or Message <span class="text-primary">*</span></label><textarea rows="4" required placeholder="Please describe the products or cables you want to inquire about..." class="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground focus:outline-none focus:border-primary text-sm">${ssrInterpolate(form.message)}</textarea></div><div><button type="submit"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="bg-primary hover:bg-brand-red-hover disabled:opacity-50 text-primary-foreground font-semibold px-8 py-3 rounded text-base transition-colors shadow-xs">`);
			if (!loading.value) _push(`<span>Submit</span>`);
			else _push(`<span>Sending...</span>`);
			_push(`</button></div></form></div></div></div></section><section class="w-full h-80 sm:h-96 bg-muted"><iframe src="https://maps.google.com/maps?q=Lahore%2C%20Pakistan&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near" title="Lahore, Pakistan" aria-label="Lahore, Pakistan" class="w-full h-full border-0" loading="lazy"></iframe></section></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-CS4eTJ1W.mjs.map
