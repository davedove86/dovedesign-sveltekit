

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.cd1781e7.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.e54f1620.js","_app/immutable/chunks/singletons.9feb9781.js"];
export const stylesheets = [];
export const fonts = [];
