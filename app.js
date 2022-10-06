// Animation when the video stop

const video = document.querySelector(".videoContainer > video");
const videoContainer = document.querySelector(".videoContainer");
const navigation = document.querySelector(".adressAndMaps");
const chevron = document.querySelector(".chevron");
const link = document.querySelector(".linkContainer > a");
const linkAnimated = document.querySelector(".linkAnimated");

video.onended = function () {
  videoContainer.style.display = "none";
  navigation.classList.add("navReverse");
  chevron.style.display = "none";
  link.textContent = "j'y vais";
  linkAnimated.style.height = "50px";
};
