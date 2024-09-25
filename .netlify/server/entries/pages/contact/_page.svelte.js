import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Contact } from "../../../chunks/Contact.js";
import { T as Testimonials } from "../../../chunks/Testimonials.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} ${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
