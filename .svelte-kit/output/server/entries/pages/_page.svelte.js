import { V as ensure_array_like, W as attr, a2 as stringify, a1 as escape_html, S as pop, Q as push } from "../../chunks/index.js";
import { g as getTranslationFunctions } from "../../chunks/index3.js";
import { P as ProjectArrows } from "../../chunks/ProjectArrows.js";
function P5($$payload, $$props) {
  push();
  let grid = [];
  let rotations = [];
  const each_array = ensure_array_like(grid);
  $$payload.out += `<div class="ascii-wrapper svelte-mlk2xk">`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="modal svelte-mlk2xk"><div class="modal-content svelte-mlk2xk"><p class="svelte-mlk2xk">This site uses your device's gyroscope to interact with the wandering flow of ASCII
					characters. A simple touch on the canvas will enable the gyroscope, but first you have to
					allow it.</p> <button class="permission-button svelte-mlk2xk">Enable Gyroscope</button></div></div>`;
  }
  $$payload.out += `<!--]--> <div class="ascii-grid svelte-mlk2xk" role="button" tabindex="0"><!--[-->`;
  for (let rowIndex = 0, $$length = each_array.length; rowIndex < $$length; rowIndex++) {
    let row = each_array[rowIndex];
    const each_array_1 = ensure_array_like(row);
    $$payload.out += `<div class="ascii-row svelte-mlk2xk"><!--[-->`;
    for (let colIndex = 0, $$length2 = each_array_1.length; colIndex < $$length2; colIndex++) {
      let cell = each_array_1[colIndex];
      $$payload.out += `<span${attr("style", `transform: rotate(${stringify(rotations[rowIndex][colIndex])}deg)`)} class="svelte-mlk2xk">${escape_html(cell)}</span>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
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
  $$payload.out += `<main class="svelte-grbebf"><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/about`, void 0))} class="nav-link about svelte-grbebf">Imprint</a> <div class="clock nav-link svelte-grbebf">${escape_html(timeObj.hours)}<span class="blink svelte-grbebf">:</span>${escape_html(timeObj.minutes)}<span class="blink svelte-grbebf">:</span>${escape_html(timeObj.seconds)}</div> <div class="p5-wrapper svelte-grbebf">`;
  P5($$payload);
  $$payload.out += `<!----></div> <div class="svelte-grbebf"><p class="intro svelte-grbebf">Robert Burtzik is a designer and developer based in Hamburg. He is interested in the
			intersection of design, technology, and culture. He is currently <span class="status svelte-grbebf"${attr("data-status", status)}>● ${escape_html(status)}</span>. He has recently worked on <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`#haus-der-kunst`, void 0))} class="svelte-grbebf">Haus der Kunst München</a>, <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`#shoah-memorial`, void 0))} class="svelte-grbebf">Shoah Memorial Frankfurt</a>, <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`#kampnagel`, void 0))} class="svelte-grbebf">Kampnagel</a>, <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`#internet-changed-my-life`, void 0))} class="svelte-grbebf">internet changed my life</a>.</p></div> <button class="scroll-hint svelte-grbebf">scroll to projects</button></main> `;
  ProjectArrows($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
