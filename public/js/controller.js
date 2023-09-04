import { setPropertyDropdown } from "./views/dropdownView.js";
import {
  accomplishments,
  articles,
  labels,
  recommendations,
  reviews,
  properties as typesOfProperty,
} from "./model.js";
import { setSelectInput } from "./views/selectInputView.js";
import { setTextArea } from "./views/textareaView.js";
import { MAX_NUM_OF_CHARS } from "./config.js";
import { setAccomplishments } from "./views/accomplishmentsScrollView.js";
import { setRecommendations } from "./views/recommendationsView.js";
import { setVideoPlayer } from "./views/videoPlayerView.js";
import { setReviews } from "./views/reviewsView.js";
import { setArticles } from "./views/articlesView.js";
import { setSubscribeForm } from "./views/subscribeView.js";

function init() {
  setPropertyDropdown(typesOfProperty);
  // setSelectInput();
  // setTextArea(MAX_NUM_OF_CHARS);
  setAccomplishments(accomplishments);
  setRecommendations(recommendations, labels);
  setVideoPlayer();
  setReviews(reviews);
  setArticles(articles);
  setSubscribeForm();
}

init();
