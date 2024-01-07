import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-arv51z.svelte-arv51z{width:100%;background-color:var(--white);padding:1rem 0;box-shadow:var(--box-shadow)}.navbar-flex.svelte-arv51z.svelte-arv51z{display:flex;justify-content:space-between;align-items:center;width:100%}.navbar-flex.svelte-arv51z img.svelte-arv51z{width:63px}.nav-items.svelte-arv51z ul.svelte-arv51z{display:flex;align-items:center;list-style-type:none}.nav-items.svelte-arv51z ul a.svelte-arv51z{text-decoration:none}.nav-items.svelte-arv51z ul a li.svelte-arv51z{color:var(--black);padding:0.5rem 1rem}@media(max-width: 760px){.navbar-flex.svelte-arv51z.svelte-arv51z{flex-direction:column;gap:1rem}.nav-items.svelte-arv51z ul.svelte-arv51z{flex-wrap:wrap;justify-content:center}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="svelte-arv51z" data-svelte-h="svelte-95prrq"><div class="container"><div class="navbar-flex svelte-arv51z"><a href="/"><img src="./images/nav/logo-only.svg" alt="Dove Design Ltd Logo" class="svelte-arv51z"></a> <div class="nav-items svelte-arv51z"><ul class="svelte-arv51z"><a href="/work" class="svelte-arv51z"><li class="svelte-arv51z">Our Work</li></a> <a href="/faq" class="svelte-arv51z"><li class="svelte-arv51z">FAQs</li></a> <a href="/contact" class="svelte-arv51z"><li class="svelte-arv51z">Contact</li></a> <button>Schedule a call</button></ul></div></div></div> </nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-174ft70.svelte-174ft70{background-color:var(--black-blue)}.footer-grid.svelte-174ft70.svelte-174ft70{display:flex;justify-content:space-between;align-items:center;padding:3rem 0}.center-align-grid.svelte-174ft70.svelte-174ft70{display:flex;justify-content:center;align-items:center;padding:3rem 0}a.svelte-174ft70.svelte-174ft70,p.svelte-174ft70.svelte-174ft70{text-decoration:none;color:var(--white);margin:0 1.5rem}ul.svelte-174ft70.svelte-174ft70{display:flex;gap:1.5rem}ul.svelte-174ft70 a.svelte-174ft70{text-decoration:none;color:var(--white);list-style:none}a.svelte-174ft70 img.svelte-174ft70{height:24px}@media screen and (max-width: 600px){.footer-grid.svelte-174ft70.svelte-174ft70{display:flex;flex-direction:column;gap:1rem}ul.svelte-174ft70.svelte-174ft70{display:block;text-align:center;margin:1rem 0}ul.svelte-174ft70 a li.svelte-174ft70{margin:1rem 0}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-174ft70" data-svelte-h="svelte-vuvcwt"><div class="container"><div class="footer-grid svelte-174ft70"><img src="/images/footer-logo.svg" alt="Dove Design Logo"> <div><ul class="svelte-174ft70"><a href="/work" class="svelte-174ft70"><li class="svelte-174ft70">Our Work</li></a> <a href="/faq" class="svelte-174ft70"><li class="svelte-174ft70">FAQs</li></a> <a href="/contact" class="svelte-174ft70"><li class="svelte-174ft70">Contact</li></a></ul></div> <a href="https://www.linkedin.com/company/dovedesignweb/" target="_blank" class="svelte-174ft70"><img src="/images/linkedin-footer.svg" alt="" class="svelte-174ft70"></a></div> <div class="center-align-grid svelte-174ft70"><a href="https://www.dovedesign.io" target="_blank" class="svelte-174ft70"><p class="svelte-174ft70">©<span id="currentYear">2024</span> Dove Design Ltd</p></a> <a href="/" target="_blank" class="svelte-174ft70"><p class="svelte-174ft70">Privacy Policy</p></a> <a href="/" target="_blank" class="svelte-174ft70">Cookies Policy</a></div></div> </footer>`;
});
const styles = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}  <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
