import { renderMarkup } from "./View.js";
import { generateLabelMarkup } from "./labelView.js";
import { createUserMarkup } from "./userView.js";

function createRecommMarkup(recommendation, labels) {
  const userMarkup = createUserMarkup(recommendation.user);
  const labelMarkup = generateLabelMarkup(labels[recommendation.label]);

  return `
        <div class="recommendation" data-type="${recommendation.type}">
            <a href="#" class="recommendation__img-container">
                <img
                    src="/assets/images/${recommendation.img}"
                    alt="Featured house 1"
                    class="recommendation__img"
                />
                ${labelMarkup}
            </a>
            <div class="recommendation__info">
                <h3 class="heading-3 recommendation__title">${recommendation.title}</h3>
                <p class="heading-4 recommendation__price">$ ${recommendation.price}</p>
            </div>
            ${userMarkup}      
        </div>
    `;
}

function sortProperties(houses, sortBy) {
  return [...houses].sort((a, b) => {
    if (a.type === sortBy && b.type !== sortBy) {
      return -1;
    }
    if (a.type !== sortBy && b.type === sortBy) {
      return 1;
    }
    return 0;
  });
}

function clearFilters(filters) {
  filters.forEach((filter) => filter.classList.remove("filter-active"));
}

function setCarouselPadding() {
  const paddingHorizontal = document
    .querySelector(".recommendation__heading")
    .getBoundingClientRect().left;

  const firstRecomm = document.querySelector(".recommendation:first-child");
  const lastRecomm = document.querySelector(".recommendation:last-child");

  firstRecomm.style.paddingLeft = `${paddingHorizontal}px`;
  lastRecomm.style.paddingRight = `${paddingHorizontal}px`;
}

function createRecommsMarkup(recommendations, labels) {
  return recommendations
    .map((recomm) => {
      return createRecommMarkup(recomm, labels);
    })
    .join("");
}

export const setRecommendations = function (recommendations, labels) {
  const navigateLeftBtn = document.getElementById("control-left");
  const navigateRightBtn = document.getElementById("control-right");
  const parent = document.querySelector(".recommendations");
  const filters = document.querySelectorAll(".filter");

  function renderSortedRecommsWithTimeout(sortedRecomms, seconds, filter = "") {
    clearFilters(filters);
    setTimeout(function () {
      renderMarkup(parent, createRecommsMarkup(sortedRecomms, labels));
      setCarouselPadding();
      parent.scrollLeft = 0;
      parent.classList.add("u-show");
    }, seconds * 1000);
    filter && filter.classList.add("filter-active");
  }

  filters.forEach((filter) => {
    filter.addEventListener("click", function () {
      parent.classList.remove("u-show");
      const activeFilter = document.querySelector(".filter-active");

      if (activeFilter === filter) {
        renderSortedRecommsWithTimeout(recommendations, 0.3);
      } else {
        const filterType = filter.textContent.trim().toLowerCase();
        const sortedProperties = sortProperties(recommendations, filterType);
        renderSortedRecommsWithTimeout(sortedProperties, 0.3, filter);
      }
    });
  });

  const markup = createRecommsMarkup(recommendations, labels);

  renderMarkup(parent, markup);
  setCarouselPadding();

  const cardWidth = document.querySelector(
    ".recommendation:nth-child(2)"
  ).offsetWidth;

  navigateLeftBtn.addEventListener("click", function navigateLeft() {
    parent.scrollLeft -= cardWidth;
  });

  navigateRightBtn.addEventListener("click", function navigateRight() {
    parent.scrollLeft += cardWidth;
  });
};
