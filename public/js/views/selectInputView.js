export const setSelectInput = function (selectOptions = []) {
  const trigger = document.querySelector(".input--select");
  const dropdownIcon = document.querySelector(".select__icon");
  const optionsContainer = document.querySelector(".select__options");
  const options = document.querySelectorAll(".select__option");
  const placeholder = document.querySelector(".select__placeholder");

  const triggerHeight = trigger.offsetHeight;
  optionsContainer.style.paddingTop = `${triggerHeight + 8}px`;
  let isOpened = false;

  function closeOnOutsideClick(e) {
    const element = e.target;
    if (
      element.closest(".input--select") === trigger ||
      element.previousElementSibling === trigger
    )
      return;

    closeDropdown();
  }

  function openDropdown() {
    isOpened = true;
    dropdownIcon.classList.add("u-rotate-arrow");
    optionsContainer.classList.add("u-show");
    document.addEventListener("click", closeOnOutsideClick);
  }

  function closeDropdown() {
    isOpened = false;
    dropdownIcon.classList.remove("u-rotate-arrow");
    optionsContainer.classList.remove("u-show");
    document.removeEventListener("click", closeOnOutsideClick);
  }

  function toggleDropdown() {
    if (!isOpened) {
      openDropdown();
    } else {
      closeDropdown();
    }
  }

  trigger.addEventListener("click", toggleDropdown);

  options.forEach((option) => {
    option.addEventListener("click", function () {
      placeholder.textContent = option.textContent;
      placeholder.classList.add("u-color-black");
    });
  });
};
