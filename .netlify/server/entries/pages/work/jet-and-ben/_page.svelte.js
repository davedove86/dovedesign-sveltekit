import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { p as projects } from "../../../../chunks/projectData.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log(projects);
  return `<section><div class="container"><h1>${escape(projects[2].name)}</h1> <p>${escape(projects[2].overview)}</p></div></section>`;
});
export {
  Page as default
};
