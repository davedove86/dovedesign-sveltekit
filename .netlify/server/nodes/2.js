

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3624d054.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.4d21fe7b.js"];
export const stylesheets = ["_app/immutable/assets/2.d4b41d86.css"];
export const fonts = [];
