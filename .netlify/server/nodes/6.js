

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/community-peer-mentors/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.10b04173.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.a2cc6748.js","_app/immutable/chunks/projectData.79c588b6.js"];
export const stylesheets = [];
export const fonts = [];
