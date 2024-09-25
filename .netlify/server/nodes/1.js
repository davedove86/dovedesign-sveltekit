

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a95dd759.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.a2cc6748.js","_app/immutable/chunks/singletons.62c6ca8e.js"];
export const stylesheets = [];
export const fonts = [];
