

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/faq/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.e2f2c7d9.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.e54f1620.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];
