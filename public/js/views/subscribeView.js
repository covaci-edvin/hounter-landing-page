import { validateEmail } from "../utilities.js";

function subscribeHandler(e) {
  e.preventDefault();

  const email = document.getElementById("subscribe-email").value;

  if (validateEmail(email)) {
    //subscribe logic
    console.log(email);
  }
}

export const setSubscribeForm = function () {
  const subscribeBtn = document.getElementById("subscribe-btn");

  subscribeBtn.addEventListener("click", subscribeHandler);
};
