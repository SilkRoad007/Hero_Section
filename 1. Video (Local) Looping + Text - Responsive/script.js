const video = document.getElementById('bg-video');

video.addEventListener('ended', function() {
  video.currentTime = 0;
  video.play();
}, false);