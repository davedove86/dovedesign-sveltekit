

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c01b1176.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.c8bb605f.js","_app/immutable/chunks/singletons.46b12926.js"];
export const stylesheets = [];
export const fonts = [];
