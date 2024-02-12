

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.lwzC_rQ1.js","_app/immutable/chunks/scheduler.C0bs57FV.js","_app/immutable/chunks/index.BUyZdqt5.js","_app/immutable/chunks/paths.DKVym3Ib.js"];
export const stylesheets = ["_app/immutable/assets/2.D3bcCndt.css"];
export const fonts = [];
