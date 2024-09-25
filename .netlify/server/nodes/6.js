

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/community-peer-mentors/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.5ae52a93.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.e54f1620.js","_app/immutable/chunks/projectData.79c588b6.js"];
export const stylesheets = [];
export const fonts = [];
