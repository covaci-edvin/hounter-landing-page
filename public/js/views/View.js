export function renderMarkup(parent, markup) {
  parent.innerHTML = "";
  parent.insertAdjacentHTML("afterbegin", markup);
}
