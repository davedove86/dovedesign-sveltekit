

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.27afebfb.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.a2cc6748.js"];
export const stylesheets = [];
export const fonts = [];
