import { V as ensure_array_like, W as attr, S as pop, Q as push } from "../../../chunks/index.js";
import { g as getTranslationFunctions } from "../../../chunks/index3.js";
function _page($$payload, $$props) {
  push();
  let images = [
    "public/android-chrome-192x192.png",
    "2.jpg",
    "3.jpg"
  ];
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  const each_array = ensure_array_like(images);
  $$payload.out += `<main class="svelte-c9o3nb"><h1 class="svelte-c9o3nb">Photo Space</h1> <div class="image-wrapper svelte-c9o3nb" role="region" aria-label="Image carousel"><div class="image-container svelte-c9o3nb"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let image = each_array[$$index];
    $$payload.out += `<img${attr("src", image)} class="svelte-c9o3nb">`;
  }
  $$payload.out += `<!--]--></div></div> <nav class="svelte-c9o3nb"><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/`, void 0))} class="svelte-c9o3nb">Home</a></nav></main>`;
  pop();
}
export {
  _page as default
};
