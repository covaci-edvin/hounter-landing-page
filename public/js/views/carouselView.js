export function setCarouselPadding(elClass) {
  const paddingSectionHorizontal = document
    .querySelector(".recommendation__heading")
    .getBoundingClientRect().left;

  const first = document.querySelector(`.${elClass}:first-child`);
  const last = document.querySelector(`.${elClass}:last-child`);

  const paddingHorizontal =
    paddingSectionHorizontal +
    (elClass === "review" && paddingSectionHorizontal + 200);

  first.style.marginLeft = `${paddingHorizontal}px `;
  last.style.marginRight = `${paddingHorizontal}px`;
}

export function navigateLeft(parent, cardWidth) {
  parent.scrollLeft -= cardWidth;
}

export function navigateRight(parent, cardWidth) {
  parent.scrollLeft += cardWidth;
}

export const createCarousel = function (parent, carouselElClass) {
  setCarouselPadding(carouselElClass);
};

window.addEventListener("resize", function () {
  setCarouselPadding("recommendation");
  setCarouselPadding("review");
});
