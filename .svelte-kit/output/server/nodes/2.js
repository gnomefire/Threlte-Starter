

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CaJRhXtI.js","_app/immutable/chunks/scheduler.C0bs57FV.js","_app/immutable/chunks/index.DS5UkMoq.js","_app/immutable/chunks/paths.B5S0hZNg.js"];
export const stylesheets = ["_app/immutable/assets/2.D3bcCndt.css"];
export const fonts = [];
