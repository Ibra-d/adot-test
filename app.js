
const video = document.querySelector(".videoContainer > video");
const linkContainer = document.querySelector(".linkContainer");
const chevron = document.querySelector(".chevron");
const firstcontainerAnimatedChild = document.querySelector(
  ".firstcontainerAnimatedChild"
);

// Animation a déclaré une fois la video terminée

video.onended = function () {
  firstcontainerAnimatedChild.classList.add("containerToUp");
  linkContainer.classList.add("linkTextChange");
  chevron.classList.add("chevronUp");
};
