

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.84d0907d.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.c8bb605f.js"];
export const stylesheets = [];
export const fonts = [];
