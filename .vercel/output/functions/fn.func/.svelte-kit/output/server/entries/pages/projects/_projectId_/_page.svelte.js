import { V as ensure_array_like, a1 as escape_html, W as attr, Y as bind_props, S as pop, Q as push } from "../../../../chunks/index.js";
import { g as getTranslationFunctions } from "../../../../chunks/index3.js";
import { P as ProjectArrowsDetail } from "../../../../chunks/ProjectArrowsDetail.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { project } = data;
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  const each_array_1 = ensure_array_like(project.copy.sections);
  ProjectArrowsDetail($$payload);
  $$payload.out += `<!----> <article class="svelte-qfba5n"><header class="svelte-qfba5n"><div class="meta svelte-qfba5n"><span class="svelte-qfba5n">${escape_html(project.name)}</span> <span class="svelte-qfba5n">${escape_html(project.year)}</span> <span class="svelte-qfba5n">${escape_html(project.type)}</span></div> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/`, void 0))} class="nav-link home svelte-qfba5n">Robert Burtzik</a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/projects`, void 0))} class="nav-link close svelte-qfba5n">Close Project</a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/about`, void 0))} class="nav-link about svelte-qfba5n">About</a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/photo`, void 0))} class="nav-link photo svelte-qfba5n">Photo</a></header> <h1 class="svelte-qfba5n">${escape_html(project.name)}</h1> <div class="project-info svelte-qfba5n"><div class="column svelte-qfba5n"><h2 class="svelte-qfba5n">PROJECT:</h2> <p class="svelte-qfba5n">Client: ${escape_html(project.name)}</p> <p class="svelte-qfba5n">Work: ${escape_html(project.work)}</p> <p class="svelte-qfba5n">Date: ${escape_html(project.year)}</p></div> <div class="column svelte-qfba5n"><h2 class="svelte-qfba5n">CREDITS:</h2> <p class="svelte-qfba5n">Concept, Design, Code – ${escape_html(project.credits.agency)}</p> <p class="svelte-qfba5n">Code, Interface Design, Variable Font – ${escape_html(project.credits.personal)}</p></div> <div class="column svelte-qfba5n"><h2 class="svelte-qfba5n">LINKS:</h2> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(project.url, void 0))} target="_blank" rel="noopener noreferrer">${escape_html(project.url)}</a></div></div> `;
  if (project.media) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(project.media);
    $$payload.out += `<div class="media-grid svelte-qfba5n"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      if (item.type === "image") {
        $$payload.out += "<!--[-->";
        $$payload.out += `<img${attr("src", item.url)}${attr("alt", item.alt)} class="svelte-qfba5n">`;
      } else {
        $$payload.out += "<!--[!-->";
        if (item.type === "video") {
          $$payload.out += "<!--[-->";
          $$payload.out += `<video${attr("src", item.url)} controls class="svelte-qfba5n"></video>`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]-->`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="description svelte-qfba5n"><p class="intro svelte-qfba5n">${escape_html(project.copy.intro)}</p> <!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
    let section = each_array_1[$$index_2];
    $$payload.out += `<div class="section svelte-qfba5n"><h3 class="svelte-qfba5n">${escape_html(section.title)}</h3> <p class="svelte-qfba5n">${escape_html(section.content)}</p> `;
    if (section.bulletPoints) {
      $$payload.out += "<!--[-->";
      const each_array_2 = ensure_array_like(section.bulletPoints);
      $$payload.out += `<ul class="svelte-qfba5n"><!--[-->`;
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let point = each_array_2[$$index_1];
        $$payload.out += `<li class="svelte-qfba5n">${escape_html(point)}</li>`;
      }
      $$payload.out += `<!--]--></ul>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--> <p class="conclusion svelte-qfba5n">${escape_html(project.copy.conclusion)}</p></div></article>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
