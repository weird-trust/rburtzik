import { V as ensure_array_like, W as attr, a1 as escape_html, S as pop, a2 as stringify, Q as push } from "./index.js";
function ProjectArrowsDetail($$payload, $$props) {
  push();
  const ROWS = 4;
  const COLS = 4;
  const rows = Array(ROWS).fill(null);
  const cols = Array(COLS).fill("/");
  const each_array = ensure_array_like(rows);
  $$payload.out += `<section class="arrows-background svelte-2rx67x"><div class="arrow-container svelte-2rx67x"><!--[-->`;
  for (let rowIndex = 0, $$length = each_array.length; rowIndex < $$length; rowIndex++) {
    each_array[rowIndex];
    const each_array_1 = ensure_array_like(cols);
    $$payload.out += `<div class="row svelte-2rx67x"><!--[-->`;
    for (let colIndex = 0, $$length2 = each_array_1.length; colIndex < $$length2; colIndex++) {
      let arrow = each_array_1[colIndex];
      $$payload.out += `<span${attr("class", `arrow svelte-2rx67x ${stringify([colIndex === COLS - 1 ? "last-column" : ""].filter(Boolean).join(" "))}`)}>${escape_html(arrow)}</span>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></section>`;
  pop();
}
export {
  ProjectArrowsDetail as P
};
