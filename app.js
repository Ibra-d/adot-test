// Animation when the video stop

const video = document.querySelector(".videoContainer > video");
const videoContainer = document.querySelector(".videoContainer");

const chevron = document.querySelector(".chevron");
const link = document.querySelector(".linkContainer > a");
const linkAnimated = document.querySelector(".linkAnimated");

video.onended = function () {
  const navigation = document.createElement("div");
  navigation.classList.add(".adressAndMaps");
};
