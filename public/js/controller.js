import { setPropertyDropdown } from "./views/dropdownView.js";
import { accomplishments, properties as typesOfProperty } from "./model.js";
import { setSelectInput } from "./views/selectInputView.js";
import { setTextArea } from "./views/textareaView.js";
import { MAX_NUM_OF_CHARS } from "./config.js";
import { setAccomplishments } from "./views/accomplishmentsScrollView.js";

function init() {
  setPropertyDropdown(typesOfProperty);
  setSelectInput();
  setTextArea(MAX_NUM_OF_CHARS);
  setAccomplishments(accomplishments);
}

init();
