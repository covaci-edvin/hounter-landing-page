export const createUserMarkup = function (user, type = "small") {
  return `
    <div class="user">
        <div class="user__img-container ${type}">
            <img
                class="user__img"
                src="/assets/images/${user.photo}"
                alt="user"
            />
        </div>
        <div class="user__details">
        ${
          user.subheading
            ? `
            <h1 class="user__heading subtitle">${user.name}</h1>
            <p class="user__sub-heading label-text">${user.subheading}</p>
        `
            : `<h1 class="user__sub-heading label-text">${user.name}</h1>`
        }
        </div>
  </div>`;
};
