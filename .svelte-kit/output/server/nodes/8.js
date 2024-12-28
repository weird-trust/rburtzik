import * as universal from '../entries/pages/projects/_projectId_/_page.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_projectId_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/[projectId]/+page.ts";
export const imports = ["_app/immutable/nodes/8.BuzP1SFR.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/projects.CRZ4rKeV.js","_app/immutable/chunks/legacy.5YMitVpx.js","_app/immutable/chunks/runtime.CNqDqZH_.js","_app/immutable/chunks/render.C5h9Bc4F.js","_app/immutable/chunks/svelte-head.Byx9516y.js","_app/immutable/chunks/if.BVymDcXa.js","_app/immutable/chunks/each.HYey5AK_.js","_app/immutable/chunks/index.B1---fbt.js","_app/immutable/chunks/lifecycle.N_inlhDP.js","_app/immutable/chunks/props.DWyCrFmv.js","_app/immutable/chunks/store.CgpizAPX.js","_app/immutable/chunks/utils.Bb3n8h1z.js","_app/immutable/chunks/ProjectArrowsDetail.U9afpxIX.js","_app/immutable/chunks/class.Bvena8yX.js"];
export const stylesheets = ["_app/immutable/assets/8.B8buamAO.css","_app/immutable/assets/ProjectArrowsDetail.UAJDHC41.css"];
export const fonts = [];
