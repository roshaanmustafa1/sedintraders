import { c as defineEventHandler, r as readBody, e as createError } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const inquiry_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body || !body.fullName || !body.phone) {
    throw createError({
      statusCode: 400,
      statusMessage: "Please provide at least your full name and phone number."
    });
  }
  return {
    success: true,
    message: "Thank you for contacting Sedin Traders! Your inquiry has been routed to our Lahore sales headquarters. An electrical technical sales representative will contact you within 2 business hours.",
    inquiryId: `ST-${Date.now().toString().slice(-6)}`,
    submittedData: {
      fullName: body.fullName,
      companyName: body.companyName || "Individual/Contractor",
      phone: body.phone,
      email: body.email,
      city: body.city || "Lahore",
      productCategory: body.productCategory || "General Inquiry",
      estimatedQuantity: body.estimatedQuantity || "Not Specified"
    },
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
});

export { inquiry_post as default };
//# sourceMappingURL=inquiry.post.mjs.map
