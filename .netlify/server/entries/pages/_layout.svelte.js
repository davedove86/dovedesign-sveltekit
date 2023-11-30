import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-arv51z.svelte-arv51z{width:100%;background-color:var(--white);padding:1rem 0;box-shadow:var(--box-shadow)}.navbar-flex.svelte-arv51z.svelte-arv51z{display:flex;justify-content:space-between;align-items:center;width:100%}.navbar-flex.svelte-arv51z img.svelte-arv51z{width:63px}.nav-items.svelte-arv51z ul.svelte-arv51z{display:flex;align-items:center;list-style-type:none}.nav-items.svelte-arv51z ul a.svelte-arv51z{text-decoration:none}.nav-items.svelte-arv51z ul a li.svelte-arv51z{color:var(--black);padding:0.5rem 1rem}@media(max-width: 760px){.navbar-flex.svelte-arv51z.svelte-arv51z{flex-direction:column;gap:1rem}.nav-items.svelte-arv51z ul.svelte-arv51z{flex-wrap:wrap;justify-content:center}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="svelte-arv51z" data-svelte-h="svelte-1pxunsy"><div class="container"><div class="navbar-flex svelte-arv51z"><a href="/"><img src="./images/nav/logo-only.svg" alt="Dove Design Ltd Logo" class="svelte-arv51z"></a> <div class="nav-items svelte-arv51z"><ul class="svelte-arv51z"><a href="/work" class="svelte-arv51z"><li class="svelte-arv51z">Our Work</li></a> <a href="/faq" class="svelte-arv51z"><li class="svelte-arv51z">FAQs</li></a> <a href="/contact" class="svelte-arv51z"><li class="svelte-arv51z">Contact</li></a> <button>Schedule a call</button></ul></div></div></div> </nav>`;
});
const styles = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}  <main>${slots.default ? slots.default({}) : ``}</main> `;
});
export {
  Layout as default
};
