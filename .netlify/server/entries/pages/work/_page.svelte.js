import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/ssr.js";
import { p as projects } from "../../../chunks/projectData.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-15p12fn">Our Work</h1> ${each(projects, (projects2) => {
    return `<h2>${escape(projects2.name)}</h2> <p>${escape(projects2.kicker)}</p> <p>${escape(projects2.tags)}</p> <p>${escape(projects2.overview)}</p>`;
  })}`;
});
export {
  Page as default
};
