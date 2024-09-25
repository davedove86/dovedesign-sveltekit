

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.ff6bc9ad.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.a2cc6748.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/projectData.79c588b6.js","_app/immutable/chunks/Testimonials.ec8e0f4e.js"];
export const stylesheets = ["_app/immutable/assets/5.8ad104ed.css","_app/immutable/assets/Testimonials.99a445f3.css"];
export const fonts = [];
