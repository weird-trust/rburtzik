import * as universal from '../entries/pages/projects/_projectId_/_page.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_projectId_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/[projectId]/+page.ts";
export const imports = ["_app/immutable/nodes/8.Dm73SSWb.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/projects.X5ybOnb3.js","_app/immutable/chunks/legacy.H3Rk6sGl.js","_app/immutable/chunks/runtime.CNqDqZH_.js","_app/immutable/chunks/render.B2tnZ6U6.js","_app/immutable/chunks/svelte-head.Byx9516y.js","_app/immutable/chunks/if.BVymDcXa.js","_app/immutable/chunks/each.HYey5AK_.js","_app/immutable/chunks/index.BW-CVLzd.js","_app/immutable/chunks/lifecycle.N_inlhDP.js","_app/immutable/chunks/props.BTy4-oo2.js","_app/immutable/chunks/store.B5jdUjFW.js","_app/immutable/chunks/utils.Bb3n8h1z.js","_app/immutable/chunks/ProjectArrowsDetail.BaVzjW91.js","_app/immutable/chunks/class.Bvena8yX.js"];
export const stylesheets = ["_app/immutable/assets/8.BRYryqws.css","_app/immutable/assets/ProjectArrowsDetail.UAJDHC41.css"];
export const fonts = [];
