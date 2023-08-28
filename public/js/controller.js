import { setPropertyDropdown } from "./views/dropdownView.js";
import { properties as typesOfProperty } from "./model.js";
import { setSelectInput } from "./views/selectInputView.js";
import { setTextArea } from "./views/textareaView.js";
import { MAX_NUM_OF_CHARS } from "./config.js";

function init() {
  setPropertyDropdown(typesOfProperty);
  setSelectInput();
  setTextArea(MAX_NUM_OF_CHARS);
}

init();
