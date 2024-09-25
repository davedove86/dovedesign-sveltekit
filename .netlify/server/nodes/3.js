

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.99fc54fc.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.a2cc6748.js","_app/immutable/chunks/Contact.ef1f1489.js","_app/immutable/chunks/Testimonials.ec8e0f4e.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/Contact.b10608a5.css","_app/immutable/assets/Testimonials.99a445f3.css"];
export const fonts = [];
