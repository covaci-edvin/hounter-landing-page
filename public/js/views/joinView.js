function joinHandler(e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const surname = document.getElementById("surname");
  const education = document.getElementById("select");
  const message = document.getElementById("message");
  const checkbox = document.getElementById("checkbox");

  function clearInputs() {
    name.value = "";
    education.textContent = "Select One";
    surname.value = "";
    message.value = "";
    checkbox.checked = false;
  }

  if (
    checkbox.checked &&
    name.value &&
    surname.value &&
    education.textContent &&
    message.value
  ) {
    const joinData = {
      name: name.value,
      surname: surname.value,
      education: education.textContent,
      message: message.value,
    };
    //join logic
    console.log(joinData);
    clearInputs();
  }
}

export const setJoinForm = function () {
  const joinBtn = document.querySelector(".join__btn");

  joinBtn.addEventListener("click", joinHandler);
};
