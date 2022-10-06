// Animation when the video stop

const video = document.querySelector(".videoContainer > video");
const videoContainer = document.querySelector(".videoContainer");

video.onended = function () {
    videoContainer.style.display = 'none'
}