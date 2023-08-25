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
