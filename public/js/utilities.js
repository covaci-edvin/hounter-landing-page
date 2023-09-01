function isMobile() {
  if (window.innerWidth <= 768) {
    return true;
  } else {
    return false;
  }
}

function getMonthShortName(monthNo) {
  const date = new Date();
  date.setMonth(monthNo);

  return date.toLocaleString("en-US", { month: "short" });
}

export function isTouchScreen() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

export function onScrollStop(parent, callback) {
  let isScrolling;
  parent.addEventListener(
    "scroll",
    () => {
      isScrolling && clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        callback();
      }, 100);
    },
    false
  );
}

export function getDate(time) {
  const date = new Date(time);

  const day = date.getDate();
  const month = getMonthShortName(date.getMonth());
  const year = date.getYear();

  return `${day} ${month} ${year}`;
}
