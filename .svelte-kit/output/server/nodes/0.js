import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DQ1Z1htc.js","_app/immutable/chunks/scheduler.C0bs57FV.js","_app/immutable/chunks/index.BUyZdqt5.js"];
export const stylesheets = ["_app/immutable/assets/0.iAfsnpVR.css"];
export const fonts = [];
