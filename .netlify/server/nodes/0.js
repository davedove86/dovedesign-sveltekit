

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.df8b488e.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.4d21fe7b.js"];
export const stylesheets = ["_app/immutable/assets/0.175bddda.css"];
export const fonts = [];
