// Animation when the video stop

const video = document.querySelector(".videoContainer > video");
const linkContainer = document.querySelector(".linkContainer");
const chevron = document.querySelector(".chevron");
const firstcontainerAnimatedChild = document.querySelector(
  ".firstcontainerAnimatedChild"
);

video.onended = function () {
  firstcontainerAnimatedChild.classList.add("containerToUp");
  linkContainer.classList.add("linkTextChange");
  chevron.classList.add("chevronUp");
};

function myFunction(x) {
  if (x.matches) {
  } else {
  }
}

var x = window.matchMedia("(max-width: 500px)")
myFunction(x) 
x.addListener(myFunction)