import { c as create_ssr_component, d as each, v as validate_component, f as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { p as projects } from "../../../chunks/projectData.js";
import { T as Testimonials } from "../../../chunks/Testimonials.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".work-wrapper.svelte-ya7zpn{margin:2rem 0}.grid-col-2.svelte-ya7zpn{margin:3rem 0;padding-bottom:3rem;border-bottom:0.5px solid var(--black-blue)}.portfolio-image.svelte-ya7zpn{width:100%;height:100%;object-fit:cover}.tags-wrapper.svelte-ya7zpn{display:flex;flex-direction:row;margin:1rem 0}.tags.svelte-ya7zpn{color:var(--accent-blue);background-color:var(--grey);padding:4px 8px;margin-right:0.5rem;font-weight:800;border-radius:4px}button.svelte-ya7zpn{margin:2rem 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section><div class="container"><h1 data-svelte-h="svelte-15p12fn">Our Work</h1> <div class="work-wrapper svelte-ya7zpn"></div> ${each(projects, (projects2) => {
    return `<div class="grid-col-2 svelte-ya7zpn"><div data-svelte-h="svelte-tx1ss8"><img class="portfolio-image svelte-ya7zpn"${add_attribute("src", projects2.image, 0)} alt="${escape(projects2.name, true) + " website"}"></div> <div><h2>${escape(projects2.name)}</h2> <div class="tags-wrapper svelte-ya7zpn">${each(projects2.tags, (tag) => {
      return `<div class="tags svelte-ya7zpn"><p>${escape(tag)}</p> </div>`;
    })}</div> <p>${escape(projects2.kicker)}</p> <a${add_attribute("href", projects2.link, 0)} rel="noopener noreferrer" data-svelte-h="svelte-1rc6w2o"><button class="svelte-ya7zpn">View Project</button> </a></div> </div>`;
  })}</div></section> ${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
