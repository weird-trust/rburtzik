import { a1 as escape_html, S as pop, Q as push } from "../../../../chunks/index.js";
import "clsx";
import { l as languageTag } from "../../../../chunks/i18n.js";
import "../../../../chunks/client.js";
const hello_world$2 = /* @__NO_SIDE_EFFECTS__ */ (params) => `Hello, ${params.name} from en!`;
const hello_world$1 = /* @__NO_SIDE_EFFECTS__ */ (params) => `Hello, ${params.name} from de!`;
const hello_world = /* @__NO_SIDE_EFFECTS__ */ (params, options = {}) => {
  return {
    de: hello_world$1,
    en: hello_world$2
  }[options.languageTag ?? languageTag()](params);
};
function _page($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html(/* @__PURE__ */ hello_world({ name: "SvelteKit User" }))}</h1> <div><button>en</button> <button>de</button></div>`;
  pop();
}
export {
  _page as default
};
