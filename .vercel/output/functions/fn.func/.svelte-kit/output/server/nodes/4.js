

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/demo/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.DDJXfJx8.js","_app/immutable/chunks/legacy.H3Rk6sGl.js","_app/immutable/chunks/runtime.CNqDqZH_.js","_app/immutable/chunks/index.BW-CVLzd.js","_app/immutable/chunks/lifecycle.N_inlhDP.js"];
export const stylesheets = [];
export const fonts = [];
