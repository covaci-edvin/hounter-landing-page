export const setTextArea = function (maxNumOfChars) {
  const textArea = document.querySelector(".textarea");
  const characterCounter = document.querySelector(".textarea__count");

  const countCharacters = () => {
    let numOfEnteredChars = textArea.value.length;
    let counter = numOfEnteredChars;
    characterCounter.textContent = `${counter}/${maxNumOfChars}`;
  };

  textArea.addEventListener("input", countCharacters);
};
