import { V as ensure_array_like, W as attr, a2 as stringify, a1 as escape_html, S as pop, Q as push } from "../../chunks/index.js";
import { g as getTranslationFunctions } from "../../chunks/index3.js";
import { P as ProjectArrows } from "../../chunks/ProjectArrows.js";
function P5($$payload, $$props) {
  push();
  let grid = [];
  let rotations = [];
  const each_array = ensure_array_like(grid);
  $$payload.out += `<main class="svelte-zn78re">`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="modal svelte-zn78re"><div class="modal-content svelte-zn78re"><p class="svelte-zn78re">This site uses your device's gyroscope to interact with the wandering
            flow of ASCII characters. A simple touch on the canvas will enable the
            gyroscope, but first you have to allow it.</p> <button class="permission-button svelte-zn78re">Enable Gyroscope</button></div></div>`;
  }
  $$payload.out += `<!--]--> <div class="ascii-grid svelte-zn78re" role="button" tabindex="0"><!--[-->`;
  for (let rowIndex = 0, $$length = each_array.length; rowIndex < $$length; rowIndex++) {
    let row = each_array[rowIndex];
    const each_array_1 = ensure_array_like(row);
    $$payload.out += `<div class="ascii-row svelte-zn78re"><!--[-->`;
    for (let colIndex = 0, $$length2 = each_array_1.length; colIndex < $$length2; colIndex++) {
      let cell = each_array_1[colIndex];
      $$payload.out += `<span${attr("style", `transform: rotate(${stringify(rotations[rowIndex][colIndex])}deg)`)} class="svelte-zn78re">${escape_html(cell)}</span>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></main>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let status = "offline";
  let timeObj = { hours: "00", minutes: "00", seconds: "00" };
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<main class="svelte-kuyvbr"><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/projects`, void 0))} class="nav-link close svelte-kuyvbr">Projects</a> <div class="clock nav-link svelte-kuyvbr">${escape_html(timeObj.hours)}<span class="blink svelte-kuyvbr">:</span>${escape_html(timeObj.minutes)}<span class="blink svelte-kuyvbr">:</span>${escape_html(timeObj.seconds)}</div> <div class="svelte-kuyvbr"><p class="intro svelte-kuyvbr">Robert Burtzik is a designer and developer based in Hamburg. He is interested in the
                intersection of design, technology, and culture. He is currently <span class="status svelte-kuyvbr"${attr("data-status", status)}>● ${escape_html(status)}</span>. He has worked on various <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/projects`, void 0))} rel="noopener noreferrer" class="svelte-kuyvbr">projects</a> such as <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/projects/haus-der-kunst`, void 0))} rel="noopener noreferrer" class="svelte-kuyvbr">Haus der Kunst München</a>, <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/projects/hilti`, void 0))} rel="noopener noreferrer" class="svelte-kuyvbr">Hilti</a></p></div> `;
  P5($$payload);
  $$payload.out += `<!----></main> `;
  ProjectArrows($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
