

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.b872ad41.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.e54f1620.js","_app/immutable/chunks/Testimonials.1028e85c.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/2.c0e9a68d.css","_app/immutable/assets/Testimonials.99a445f3.css"];
export const fonts = [];
