import { V as ensure_array_like, W as attr, a2 as stringify, a1 as escape_html, S as pop, Q as push } from "../../chunks/index.js";
import { g as getTranslationFunctions } from "../../chunks/index3.js";
import { P as ProjectArrows } from "../../chunks/ProjectArrows.js";
function P5($$payload, $$props) {
  push();
  let grid = [];
  let rotations = [];
  const each_array = ensure_array_like(grid);
  $$payload.out += `<div class="ascii-wrapper"><div class="ascii-grid svelte-z1exui" role="button" tabindex="0"><!--[-->`;
  for (let rowIndex = 0, $$length = each_array.length; rowIndex < $$length; rowIndex++) {
    let row = each_array[rowIndex];
    const each_array_1 = ensure_array_like(row);
    $$payload.out += `<div class="ascii-row svelte-z1exui"><!--[-->`;
    for (let colIndex = 0, $$length2 = each_array_1.length; colIndex < $$length2; colIndex++) {
      let cell = each_array_1[colIndex];
      $$payload.out += `<span${attr("style", `transform: rotate(${stringify(rotations[rowIndex][colIndex])}deg)`)} class="svelte-z1exui">${escape_html(cell)}</span>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let onlineTimes = "Mo - So: 14:00 - 00:00";
  let status = "offline";
  let timeObj = { hours: "00", minutes: "00", seconds: "00" };
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<main class="svelte-mvk0nv"><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/about`, void 0))} class="nav-link about svelte-mvk0nv">Imprint</a> <div class="clock nav-link svelte-mvk0nv">${escape_html(timeObj.hours)}<span class="blink svelte-mvk0nv">:</span>${escape_html(timeObj.minutes)}<span class="blink svelte-mvk0nv">:</span>${escape_html(timeObj.seconds)}</div> <div class="p5-wrapper svelte-mvk0nv">`;
  P5($$payload);
  $$payload.out += `<!----></div> <div class="svelte-mvk0nv"><p class="intro svelte-mvk0nv">Robert Burtzik is a designer and developer based in Hamburg. He is interested in the
			intersection of design, technology, and culture. He is currently <span class="tooltip svelte-mvk0nv"><span class="status svelte-mvk0nv"${attr("data-status", status)}>● ${escape_html(status)}</span> <span class="tooltiptext svelte-mvk0nv">${escape_html(onlineTimes)}</span></span>. <br class="svelte-mvk0nv"><br class="svelte-mvk0nv"> He has recently worked on <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`#haus-der-kunst`, void 0))} class="svelte-mvk0nv">Haus der Kunst München</a>, <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`#shoah-memorial`, void 0))} class="svelte-mvk0nv">Shoah Memorial Frankfurt</a>, <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`#kampnagel`, void 0))} class="svelte-mvk0nv">Kampnagel</a>, <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`#internet-changed-my-life`, void 0))} class="svelte-mvk0nv">internet changed my life</a>.</p></div> <button class="scroll-hint svelte-mvk0nv">scroll to projects</button></main> `;
  ProjectArrows($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
