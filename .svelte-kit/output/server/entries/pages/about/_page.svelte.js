import { V as ensure_array_like, a1 as escape_html, W as attr, a2 as stringify, S as pop, Q as push } from "../../../chunks/index.js";
import { g as getTranslationFunctions } from "../../../chunks/index3.js";
function html(value) {
  var html2 = String(value);
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$payload, $$props) {
  push();
  let grid = [];
  let rotations = [];
  let email;
  let currentTime = "";
  let status = "";
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  const each_array = ensure_array_like(grid);
  $$payload.out += `<main class="svelte-14mo62"><p class="svelte-14mo62">Robert Burtzik is a designer and developer based in Hamburg. He is
    interested in the intersection of design, technology, and culture. He is
    currently <span class="status svelte-14mo62">${escape_html(status)}</span>.</p> <p class="time svelte-14mo62">Current Time: ${html(currentTime)}</p> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="modal svelte-14mo62"><div class="modal-content svelte-14mo62"><p class="svelte-14mo62">This site uses your device's gyroscope to interact with the wandering
          flow of ASCII characters. A simple touch on the canvas will enable the
          gyroscope, but first you have to allow it.</p> <button class="permission-button svelte-14mo62">Enable Gyroscope</button></div></div>`;
  }
  $$payload.out += `<!--]--> <div class="ascii-grid svelte-14mo62" role="button" tabindex="0"><!--[-->`;
  for (let rowIndex = 0, $$length = each_array.length; rowIndex < $$length; rowIndex++) {
    let row = each_array[rowIndex];
    const each_array_1 = ensure_array_like(row);
    $$payload.out += `<div class="ascii-row svelte-14mo62"><!--[-->`;
    for (let colIndex = 0, $$length2 = each_array_1.length; colIndex < $$length2; colIndex++) {
      let cell = each_array_1[colIndex];
      $$payload.out += `<span${attr("style", `transform: rotate(${stringify(rotations[rowIndex][colIndex])}deg)`)} class="svelte-14mo62">${escape_html(cell)}</span>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div> <nav class="svelte-14mo62"><footer class="svelte-14mo62"><p class="svelte-14mo62">This site is a wandering flow, a collection of filaments, a promise of
        perception in both their analog and digital nature. It seeks to explore
        the motivations behind the creation of digital spaces and the ways in
        which they can be used to create new forms of expression.</p> <p class="svelte-14mo62">This place is built with svelte, vite and typescript and is running on
        vercel.</p> <p class="svelte-14mo62">Void Filamente was last updated on 21/09/2024</p> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://www.are.na/robert-burtzik/channels`, void 0))} class="svelte-14mo62">Are.na</a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://www.instagram.com/rburtzik`, void 0))} class="svelte-14mo62">Instagram</a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`mailto:${email}`, void 0))} class="svelte-14mo62">${escape_html(email)}</a> <p class="svelte-14mo62">© 2024 Robert Burtzik. All rights reserved.</p></footer></nav></main>`;
  pop();
}
export {
  _page as default
};
