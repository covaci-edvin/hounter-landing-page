export const generateLabelMarkup = function ({ type, message, iconId }) {
  return `
    <div class="label label--${type}">
        <svg class="label__icon">
            <use xlink:href="/assets/svgs/sprite.svg#${iconId}" />
        </svg>
        <span class="label-text-medium">${message}</span>
    </div>
 `;
};
