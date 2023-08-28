function createImgsMarkup(imgs, heading) {
  const imgsMarkup = imgs.map(
    (img) => `
        <img
            src="/assets/images/${img}"
            alt="${heading}"
            class="accomplishment__img"
        />
        `
  );

  return `
    <picture class="accomplishment__imgs">
        ${imgsMarkup.join("")}
    </picture>
    `;
}

function createAccompMarkup(accomp) {
  const imgsMarkup = createImgsMarkup(accomp.imgs, accomp.heading);

  return `
        <a href="#" class="accomplishment__card">
            ${imgsMarkup}
            <div class="accomplishment__info">
                <h1 class="body-text-semibold accomplishment__heading">
                  ${accomp.heading}
                </h1>
                <h2 class="label-text-small accomplishment__subheading">
                ${accomp.subheading}
                </h2>
            </div>
        </a>
    `;
}

export const setAccomplishments = function (accomplishments) {
  const parent = document.querySelector(".hero__accomplishments");
  const markup = accomplishments.map(createAccompMarkup).join("");
  parent.insertAdjacentHTML("afterbegin", markup);
};
