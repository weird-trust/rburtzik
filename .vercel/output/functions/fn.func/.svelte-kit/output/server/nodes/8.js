import * as universal from '../entries/pages/projects/_projectId_/_page.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_projectId_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/[projectId]/+page.ts";
export const imports = ["_app/immutable/nodes/8.BKnc7a44.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/projects.Crwr5P7G.js","_app/immutable/chunks/legacy.B20OX0cs.js","_app/immutable/chunks/runtime.D5jDPlfy.js","_app/immutable/chunks/render.Cq-8yCv4.js","_app/immutable/chunks/svelte-head.BlQ91ENv.js","_app/immutable/chunks/if.a0tm15lE.js","_app/immutable/chunks/each.BJquQY8s.js","_app/immutable/chunks/index.Z5oNPr27.js","_app/immutable/chunks/lifecycle.DNvCLbJZ.js","_app/immutable/chunks/props.B9KiVsxf.js","_app/immutable/chunks/store.DhLjkDfp.js","_app/immutable/chunks/utils.Bcj1CX31.js","_app/immutable/chunks/ProjectArrowsDetail.B17TftR1.js","_app/immutable/chunks/class.Bvena8yX.js"];
export const stylesheets = ["_app/immutable/assets/8.CxYWZmqP.css","_app/immutable/assets/ProjectArrowsDetail.UAJDHC41.css"];
export const fonts = [];
