import { onScrollStop } from "../utilities.js";
import { renderMarkup } from "./View.js";
import { createCarousel, navigateLeft, navigateRight } from "./carouselView.js";
import { createUserMarkup } from "./userView.js";

function addOrderPropertyOnReview(reviews) {
  const newArr = reviews.map((review, index) => {
    review.order = index + 1;
    return review;
  });
  return newArr;
}

function isElementCentered(element) {
  const elementRect = element.getBoundingClientRect();
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;

  const elementCenterX = elementRect.left + elementRect.width / 2;
  const viewportCenterX = viewportWidth / 2;

  const distanceToCenter = Math.abs(viewportCenterX - elementCenterX);
  const tolerance = 30;

  return distanceToCenter <= tolerance;
}

function createReviewMarkup(review) {
  const userMarkup = createUserMarkup(review.user);

  return `
        <div class="review" data-id=${review.order}>
            <div class="review__img-container">
                <img
                    class="review__img"
                    src="/assets/images/${review.img}"
                    alt="review 1"
                />
            </div>
                <div class="review__card">
                <h1 class="review__title heading-4">
                    ${review.title}
                </h1>
                <p class="review__review label-text">
                ${review.review}
                </p>
                <div class="review__info">
                    ${userMarkup}
                    <div class="review__rating">
                    <svg class="review__rating-icon">
                        <use xlink:href="/assets/svgs/sprite.svg#star" />
                    </svg>
                    <h4 class="heading-4 review__rating-score">
                    ${review.rating}
                    </h4>
                    </div>
                </div>
                </div>
          </div>
    `;
}

function createReviewsMarkup(reviews) {
  const reviewsWithId = addOrderPropertyOnReview(reviews);
  const markup = reviewsWithId
    .map((review) => {
      return createReviewMarkup(review);
    })
    .join("");
  return markup;
}

function createAndRenderCarouselDots(dotsParent, reviews) {
  const dots = [];

  reviews.forEach((_, index) => {
    dots[index] = `
    <span class="reviews__dot" data-id="${index + 1}"></span>
    `;
  });

  renderMarkup(dotsParent, dots.join(""));
}

function clearDots(dots) {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
}

export const setReviews = function (reviews) {
  const parent = document.querySelector(".reviews");
  const dotsParent = document.querySelector(".reviews__dots");
  const markup = createReviewsMarkup(reviews);

  renderMarkup(parent, markup);
  createAndRenderCarouselDots(dotsParent, reviews);

  const reviewsArr = document.querySelectorAll(".review");
  createCarousel("review");

  const dots = document.querySelectorAll(".reviews__dot");

  let activeReview;
  let centeredReview;


  function setDefaultActiveReview(slideWidth) {
    const defaultReviewId = 2;
    const defaultActiveReview = document.querySelector(
      `.review[data-id="${defaultReviewId}"]`
    );

    if (isElementCentered(defaultActiveReview)) return;

    const navigateDistance =
      Math.abs(centeredReview - defaultReviewId) * slideWidth;

    if (centeredReview < defaultReviewId) {
      navigateRight(parent, navigateDistance);
    }
    if (centeredReview > defaultReviewId) {
      navigateLeft(parent, navigateDistance);
    }
  }

  function checkAndSetActiveReview() {
    reviewsArr.forEach((review, index) => {
      if (
        isElementCentered(
          document.querySelector(`.review[data-id="${index + 1}"]`)
        )
      ) {
        clearDots(dots);
        document
          .querySelector(`.reviews__dot[data-id="${index + 1}"]`)
          .classList.add("active");
        activeReview = review.dataset.id;
        centeredReview = +activeReview;
      }
    });
  }

  function navigate(e, targetElClass, slideWidth) {
    const target = e.target.closest(targetElClass);

    if (!target || target.dataset.id === activeReview) return;

    const targetId = target.dataset.id;

    const navigateDistance = Math.abs(targetId - activeReview) * slideWidth;

    clearDots(dots);

    if (targetElClass === ".review") {
      document
        .querySelector(`.reviews__dot[data-id="${targetId}"]`)
        .classList.add("active");
    }

    if (targetId > activeReview) {
      target.classList.add("active");
      navigateRight(parent, navigateDistance);
    }
    if (targetId < activeReview) {
      target.classList.add("active");
      navigateLeft(parent, navigateDistance);
    }
  }

  const slideWidth = reviewsArr[0].offsetWidth;

  window.addEventListener("load", function () {
    checkAndSetActiveReview();
    setDefaultActiveReview(slideWidth);
  });

  onScrollStop(parent, checkAndSetActiveReview);

  parent.addEventListener("click", function (e) {
    navigate(e, ".review", slideWidth);
  });

  dotsParent.addEventListener("click", function (e) {
    navigate(e, ".reviews__dot", slideWidth);
  });
};
