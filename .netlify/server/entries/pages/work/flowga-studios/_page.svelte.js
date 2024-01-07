import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { p as projects } from "../../../../chunks/projectData.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>${escape(projects.name)}</h1>`;
});
export {
  Page as default
};
