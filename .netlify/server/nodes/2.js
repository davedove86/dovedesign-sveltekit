

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.01008589.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.c8bb605f.js"];
export const stylesheets = ["_app/immutable/assets/2.14b43425.css"];
export const fonts = [];
