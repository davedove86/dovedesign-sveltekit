

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.7d9dc34a.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.a2cc6748.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/projectData.3f05ed79.js"];
export const stylesheets = [];
export const fonts = [];
