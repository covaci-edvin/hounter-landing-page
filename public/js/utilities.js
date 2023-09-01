function isMobile() {
  if (window.innerWidth <= 768) {
    return true;
  } else {
    return false;
  }
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
