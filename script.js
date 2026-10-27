document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".bg");
  if (!video) return;

  video.muted = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");

  const startVideo = () => {
    const promise = video.play();
    if (promise && typeof promise.catch === "function") {
      promise.catch(() => {});
    }
  };

  startVideo();

  document.addEventListener("touchstart", startVideo, { once: true, passive: true });
  document.addEventListener("pointerdown", startVideo, { once: true, passive: true });
});
