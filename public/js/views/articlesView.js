import { getDate } from "../utilities.js";
import { renderMarkup } from "./View.js";
import { createUserMarkup } from "./userView.js";

function createArticleMarkup(article, index, visible = true) {
  const user = createUserMarkup(article.user);
  const date = getDate(article.date);
  return `
    <li class="article ${!visible && "hide"}" data-id="${index + 1}" >
        <div class="article__img-container">
            <img
                src="/assets/images/${article.imageSmall}"
                alt="article 1" 
            />
        </div>
        <div class="article__info">
           ${user}
            <h3 class="subtitle article__title">
                ${article.title}
            </h3>
            <div class="article__details">
                <svg class="article__read-time-icon">
                    <use xlink:href="/assets/svgs/sprite.svg#time" />
                </svg>
                <p class="label-text article__read-time">${
                  article.readTime
                } min read</p>
                <p class="label-text article__date">${date}</p>
            </div>
        </div>
    </li>
`;
}

function createArticlesListMarkup(articles) {
  const first = articles.slice(0, 3);
  const last = articles.slice(3, 6);
  const firstThree = first.map((article, index) =>
    createArticleMarkup(article, index + 0)
  );

  const lastThree = last.map((article, index) =>
    createArticleMarkup(article, index + 3, false)
  );

  return { firstThree, lastThree };
}

function setReviewActive(article) {
  article.classList.add("article-active");
}

function clearReviews() {
  document.querySelector(".article-active").classList.remove("article-active");
}

function createDisplayedArticleMarkup(article) {
  const user = createUserMarkup(article.user);
  const date = getDate(article.date);

  return `
    <a
              href="${article?.link || "#"}"
              class="article article--overview "
            >
              <div
                class="article__img-container article__img-container--overview"
              >
                <img
                  src="/assets/images/${article.imageLarge}"
                  alt="${article.imageSmall}"
                  class="article__img"
                />
              </div>
              <div class="article__info article__info--overview">
                ${user}
                <h3 class="subtitle article__title">
                  ${article.title}
                </h3>
                <p class="body-text article__summary">
                  ${article.summary}
                </p>
                <div class="article__details">
                  <svg class="article__read-time-icon">
                    <use xlink:href="/assets/svgs/sprite.svg#time" />
                  </svg>
                  <p class="label-text article__read-time">${
                    article.readTime
                  } min read</p>
                  <p class="label-text article__date">${date}</p>
                </div>
              </div>
            </a>
    `;
}

function displayThreeMoreArticles(articles, articlesList) {
  let i = 0;
  let interval;

  function startDisplaying() {
    if (!interval) {
      interval = setInterval(display, 300);
    }
  }

  startDisplaying();

  function stopDisplaying() {
    clearInterval(interval);
    interval = null;
  }

  function display() {
    if (!articles[i]) {
      stopDisplaying();
      return;
    }
    articlesList.insertAdjacentHTML("beforeend", articles[i]);
    setTimeout(function () {
      articlesList.lastElementChild.classList.remove("hide");
    }, 100);
    i++;
  }
}

function hideThreeArticles(articlesList) {
  for (let i = 0; i < 3; i++) {
    articlesList.removeChild(articlesList.lastElementChild);
  }
}

export const setArticles = function (articles) {
  const articleCopy = [...articles];
  const articlesList = document.querySelector(".articles__list");
  const articleDisplay = document.querySelector(".articles__display-container");
  const moreArticleBtn = document.querySelector(".more-articles-btn");
  let threeMoreDisplayed = false;

  const articlesListMarkupFirst =
    createArticlesListMarkup(articleCopy).firstThree.join("");

  renderMarkup(articlesList, articlesListMarkupFirst);

  const articlesListMarkupLast =
    createArticlesListMarkup(articleCopy).lastThree;

  const articlesEls = document.querySelectorAll(".article");
  setReviewActive(articlesEls[0]);
  const displayedArticleMarkup = createDisplayedArticleMarkup(articles[0]);
  renderMarkup(articleDisplay, displayedArticleMarkup);

  let currentDisplayedArticle = 1;

  articlesList.addEventListener("click", function (e) {
    const article = e.target.closest(".article");
    if (!article || article.dataset.id == currentDisplayedArticle) return;
    currentDisplayedArticle = article.dataset.id;
    clearReviews();
    setReviewActive(article);
    const markup = createDisplayedArticleMarkup(
      articles[article.dataset.id - 1]
    );

    articleDisplay.classList.remove("u-show");
    setTimeout(function () {
      renderMarkup(articleDisplay, markup);
      articleDisplay.classList.add("u-show");
    }, 200);
  });

  moreArticleBtn.addEventListener("click", function () {
    if (!threeMoreDisplayed) {
      displayThreeMoreArticles(articlesListMarkupLast, articlesList);
      moreArticleBtn.textContent = "Hide articles";
      threeMoreDisplayed = true;
    } else {
      hideThreeArticles(articlesList);
      moreArticleBtn.textContent = "More articles";
      threeMoreDisplayed = false;
    }
  });
};
