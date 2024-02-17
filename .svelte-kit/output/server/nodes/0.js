import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BsepZjka.js","_app/immutable/chunks/scheduler.C0bs57FV.js","_app/immutable/chunks/index.DS5UkMoq.js"];
export const stylesheets = ["_app/immutable/assets/0.BtAvt2Mu.css"];
export const fonts = [];
