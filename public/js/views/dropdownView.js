import { isTouchScreen } from "../utilities.js";

const generateItemMarkup = function (item) {
  return `
    <a href="#" class="dropdown__link">
      <li class="dropdown__item">
        <svg class="dropdown__item-icon">
          <use xlink:href="/assets/svgs/sprite.svg#${item.icon}" />
        </svg>
        <span>${item.name}</span>
      </li>
    </a>
  `;
};

const renderMarkup = function (markup) {
  const dropdownList = document.querySelector(".dropdown__list");
  dropdownList.insertAdjacentHTML("beforeend", markup);
};

export const setPropertyDropdown = function (dropdownItems) {
  const trigger = document.getElementById("property");
  const dropdown = document.querySelector(".dropdown");
  const dropdownIcon = document.querySelector(".dropdown__icon");
  const triggerHeight = trigger.offsetHeight;
  const triggerWidth = trigger.offsetWidth;

  dropdownItems.forEach((item) => {
    const markup = generateItemMarkup(item);
    renderMarkup(markup);
  });

  dropdown.style.top = `${triggerHeight}px`;
  dropdown.style.minWidth = `${triggerWidth}px`;

  function toggleDropdown() {
    dropdown.classList.toggle("u-show");
    dropdownIcon.classList.toggle("u-rotate-arrow");
  }

  if (isTouchScreen()) {
    trigger.addEventListener("click", toggleDropdown);
  } else {
    trigger.addEventListener("mouseover", toggleDropdown);
    trigger.addEventListener("mouseout", toggleDropdown);
  }
};
