import * as universal from '../entries/pages/projects/_projectId_/_page.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_projectId_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/[projectId]/+page.ts";
export const imports = ["_app/immutable/nodes/8.D5E4Zvj6.js","_app/immutable/chunks/entry.DM4uZxnJ.js","_app/immutable/chunks/runtime.Bf7gSquH.js","_app/immutable/chunks/index-client.BFjiRGoS.js","_app/immutable/chunks/transition.D7cL3PZn.js","_app/immutable/chunks/legacy.CNCX3zJT.js","_app/immutable/chunks/render.CNhWQkix.js","_app/immutable/chunks/svelte-head.BpJpdfBE.js","_app/immutable/chunks/if.DstTksvS.js","_app/immutable/chunks/each.COXiciz1.js","_app/immutable/chunks/index.DPdw9lY7.js","_app/immutable/chunks/lifecycle.CEOqf6lJ.js","_app/immutable/chunks/props.B6yDadDT.js","_app/immutable/chunks/store.B0kon1Po.js","_app/immutable/chunks/ProjectArrowsDetail.DwgDEM1p.js","_app/immutable/chunks/class.Bvena8yX.js"];
export const stylesheets = ["_app/immutable/assets/8.g0_84bdq.css","_app/immutable/assets/ProjectArrowsDetail.B11FN3vu.css"];
export const fonts = [];
