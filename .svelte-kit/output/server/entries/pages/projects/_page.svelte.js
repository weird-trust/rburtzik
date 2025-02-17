import { W as attr, S as pop, Q as push } from "../../../chunks/index.js";
import { g as getTranslationFunctions } from "../../../chunks/index3.js";
import { P as ProjectArrows } from "../../../chunks/ProjectArrows.js";
function _page($$payload, $$props) {
  push();
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<main>`;
  ProjectArrows($$payload);
  $$payload.out += `<!----> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/`, void 0))} class="nav-link home svelte-sht5ek">Robert Burtzik</a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/`, void 0))} class="nav-link close svelte-sht5ek">Close Projects</a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/about`, void 0))} class="nav-link about svelte-sht5ek">About</a></main>`;
  pop();
}
export {
  _page as default
};
