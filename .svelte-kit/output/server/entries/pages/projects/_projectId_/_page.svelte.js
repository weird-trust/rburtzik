import { V as ensure_array_like, W as attr, a1 as escape_html, Y as bind_props, S as pop, Q as push } from "../../../../chunks/index.js";
import { g as getTranslationFunctions } from "../../../../chunks/index3.js";
import { p as projects } from "../../../../chunks/projects.js";
import { P as ProjectArrowsDetail } from "../../../../chunks/ProjectArrowsDetail.js";
import "../../../../chunks/client.js";
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
  $$payload.out += `<!----> <article class="svelte-1w8ihig"><header><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/`, void 0))} class="nav-link home svelte-1w8ihig">Close Project</a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/about`, void 0))} class="nav-link about svelte-1w8ihig">Imprint</a></header> <h1 class="svelte-1w8ihig">${escape_html(project.name)}</h1> <div class="project-info svelte-1w8ihig"><div class="column svelte-1w8ihig"><h2 class="svelte-1w8ihig">PROJECT:</h2> <p class="svelte-1w8ihig">Client: ${escape_html(project.name)}</p> <p class="svelte-1w8ihig">Work: ${escape_html(project.work)}</p> <p class="svelte-1w8ihig">Date: ${escape_html(project.year)}</p></div> <div class="column svelte-1w8ihig"><h2 class="svelte-1w8ihig">CREDITS:</h2> <p class="svelte-1w8ihig">Concept, Design, Code – ${escape_html(project.credits.agency)}</p> <p class="svelte-1w8ihig">Code, Interface Design, Variable Font – ${escape_html(project.credits.personal)}</p></div> <div class="column svelte-1w8ihig"><h2 class="svelte-1w8ihig">LINKS:</h2> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(project.url, void 0))} target="_blank" rel="noopener noreferrer">${escape_html(project.url)}</a></div></div> `;
  if (project.media) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(project.media);
    $$payload.out += `<div class="media-grid svelte-1w8ihig"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      if (item.type === "image") {
        $$payload.out += "<!--[-->";
        $$payload.out += `<img${attr("src", item.url)}${attr("alt", item.alt)} class="svelte-1w8ihig">`;
      } else {
        $$payload.out += "<!--[!-->";
        if (item.type === "video") {
          $$payload.out += "<!--[-->";
          $$payload.out += `<video${attr("src", item.url)} controls class="svelte-1w8ihig"><track kind="captions"${attr("src", item.captions)} srclang="en" label="English"></video>`;
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
  $$payload.out += `<!--]--> <div class="description svelte-1w8ihig"><p class="intro svelte-1w8ihig">${escape_html(project.copy.intro)}</p> <!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
    let section = each_array_1[$$index_2];
    $$payload.out += `<div class="section svelte-1w8ihig"><h3 class="svelte-1w8ihig">${escape_html(section.title)}</h3> <p class="svelte-1w8ihig">${escape_html(section.content)}</p> `;
    if (section.bulletPoints) {
      $$payload.out += "<!--[-->";
      const each_array_2 = ensure_array_like(section.bulletPoints);
      $$payload.out += `<ul class="svelte-1w8ihig"><!--[-->`;
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let point = each_array_2[$$index_1];
        $$payload.out += `<li class="svelte-1w8ihig">${escape_html(point)}</li>`;
      }
      $$payload.out += `<!--]--></ul>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--> <p class="conclusion svelte-1w8ihig">${escape_html(project.copy.conclusion)}</p></div> <footer class="next-project svelte-1w8ihig"><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/projects/${nextProject.id}`, void 0))} class="next-project-link svelte-1w8ihig"><span class="next-label svelte-1w8ihig">Next Project</span> <h2 class="next-title svelte-1w8ihig">${escape_html(nextProject.name)}</h2></a></footer></article>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
