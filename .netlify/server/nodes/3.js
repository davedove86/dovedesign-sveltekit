

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.89a871b4.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.c8bb605f.js"];
export const stylesheets = [];
export const fonts = [];
