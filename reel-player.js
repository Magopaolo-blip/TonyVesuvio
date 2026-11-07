(() => {
  const video = document.querySelector('.naples-reel-video');
  const button = document.querySelector('.naples-reel-play');
  if (!video || !button) return;
  button.hidden = false;
  button.addEventListener('click', async () => {
    video.muted = false;
    video.volume = 1;
    try { await video.play(); }
    catch { button.hidden = false; video.focus(); }
  });
  video.addEventListener('play', () => { button.hidden = true; });
  video.addEventListener('pause', () => { button.hidden = false; });
  video.addEventListener('ended', () => { button.hidden = false; });
})();
