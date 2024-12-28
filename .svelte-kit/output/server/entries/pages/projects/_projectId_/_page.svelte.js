import { V as ensure_array_like, a1 as escape_html, W as attr, Y as bind_props, S as pop, Q as push } from "../../../../chunks/index.js";
import { g as getTranslationFunctions } from "../../../../chunks/index3.js";
import { p as projects } from "../../../../chunks/projects.js";
import { P as ProjectArrowsDetail } from "../../../../chunks/ProjectArrowsDetail.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { project } = data;
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  const each_array_1 = ensure_array_like(project.copy.sections);
  ProjectArrowsDetail($$payload);
  $$payload.out += `<!----> <article class="svelte-1veob57"><header class="svelte-1veob57"><div class="meta svelte-1veob57"><span class="svelte-1veob57">${escape_html(project.name)}</span> <span class="svelte-1veob57">${escape_html(project.year)}</span> <span class="svelte-1veob57">${escape_html(project.type)}</span></div> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/`, void 0))} class="nav-link home svelte-1veob57">Robert Burtzik</a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/projects`, void 0))} class="nav-link close svelte-1veob57">Close Project</a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/about`, void 0))} class="nav-link about svelte-1veob57">About</a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/photo`, void 0))} class="nav-link photo svelte-1veob57">Photo</a></header> <h1 class="svelte-1veob57">${escape_html(project.name)}</h1> <div class="project-info svelte-1veob57"><div class="column svelte-1veob57"><h2 class="svelte-1veob57">PROJECT:</h2> <p class="svelte-1veob57">Client: ${escape_html(project.name)}</p> <p class="svelte-1veob57">Work: ${escape_html(project.work)}</p> <p class="svelte-1veob57">Date: ${escape_html(project.year)}</p></div> <div class="column svelte-1veob57"><h2 class="svelte-1veob57">CREDITS:</h2> <p class="svelte-1veob57">Concept, Design, Code – ${escape_html(project.credits.agency)}</p> <p class="svelte-1veob57">Code, Interface Design, Variable Font – ${escape_html(project.credits.personal)}</p></div> <div class="column svelte-1veob57"><h2 class="svelte-1veob57">LINKS:</h2> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(project.url, void 0))} target="_blank" rel="noopener noreferrer">${escape_html(project.url)}</a></div></div> `;
  if (project.media) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(project.media);
    $$payload.out += `<div class="media-grid svelte-1veob57"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      if (item.type === "image") {
        $$payload.out += "<!--[-->";
        $$payload.out += `<img${attr("src", item.url)}${attr("alt", item.alt)} class="svelte-1veob57">`;
      } else {
        $$payload.out += "<!--[!-->";
        if (item.type === "video") {
          $$payload.out += "<!--[-->";
          $$payload.out += `<video${attr("src", item.url)} controls class="svelte-1veob57"><track kind="captions"${attr("src", item.captions)} srclang="en" label="English"></video>`;
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
  $$payload.out += `<!--]--> <div class="description svelte-1veob57"><p class="intro svelte-1veob57">${escape_html(project.copy.intro)}</p> <!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
    let section = each_array_1[$$index_2];
    $$payload.out += `<div class="section svelte-1veob57"><h3 class="svelte-1veob57">${escape_html(section.title)}</h3> <p class="svelte-1veob57">${escape_html(section.content)}</p> `;
    if (section.bulletPoints) {
      $$payload.out += "<!--[-->";
      const each_array_2 = ensure_array_like(section.bulletPoints);
      $$payload.out += `<ul class="svelte-1veob57"><!--[-->`;
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let point = each_array_2[$$index_1];
        $$payload.out += `<li class="svelte-1veob57">${escape_html(point)}</li>`;
      }
      $$payload.out += `<!--]--></ul>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--> <p class="conclusion svelte-1veob57">${escape_html(project.copy.conclusion)}</p></div> <footer class="next-project svelte-1veob57"><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/projects/${nextProject.id}`, void 0))} class="next-project-link svelte-1veob57"><span class="next-label svelte-1veob57">Next Project</span> <h2 class="next-title svelte-1veob57">${escape_html(nextProject.name)}</h2></a></footer></article>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
