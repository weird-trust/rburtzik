

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/demo/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.6L9ayP2R.js","_app/immutable/chunks/legacy.B20OX0cs.js","_app/immutable/chunks/runtime.D5jDPlfy.js","_app/immutable/chunks/index.Z5oNPr27.js","_app/immutable/chunks/lifecycle.DNvCLbJZ.js"];
export const stylesheets = [];
export const fonts = [];
