

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0abb4c8d.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.4d21fe7b.js","_app/immutable/chunks/singletons.23881e48.js"];
export const stylesheets = [];
export const fonts = [];
