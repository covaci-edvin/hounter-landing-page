export const setVideoPlayer = function () {
  const trigger = document.querySelector(".thumbnail__container");
  const videoPlayer = document.querySelector(".video-player");
  const backdrop = document.querySelector(".backdrop");

  function showVideoPlayer() {
    document.body.classList.add("lock-scroll");
    videoPlayer.classList.add("show-video-player");
  }

  function hideVideoPlayer(e) {
    if (e.target.closest(".backdrop")) {
      document.body.classList.remove("lock-scroll");
      videoPlayer.classList.remove("show-video-player");
    }
  }

  trigger.addEventListener("click", showVideoPlayer);

  backdrop.addEventListener("click", hideVideoPlayer);
};
