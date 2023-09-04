export const setCookieBanner = function () {
  const cookieBanner = document.querySelector(".cookie-banner");
  const closeBtn = document.querySelector(".close-banner");

  closeBtn.addEventListener("click", function () {
    cookieBanner.style.display = "none";
  });
};
