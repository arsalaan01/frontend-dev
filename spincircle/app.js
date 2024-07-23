var active = 3;
var mncircles = document.querySelectorAll(".mncircle");
var sec = document.querySelectorAll(".sec");

gsap.to(mncircles[active - 1], {
  opacity: 0.5,
});

gsap.to(sec[active - 1], {
  opacity: 1,
});

mncircles.forEach(function (val, index) {
  val.addEventListener("click", function () {
    gsap.to(".circle", {
      rotate: (3 - (index + 1)) * 10,
      ease: Expo.easeInOut,
      duration: 1,
    });
    greyOut();
    gsap.to(this, {
      opacity: 0.5,
    });
    gsap.to(sec[index], {
      opacity: 1,
    });
  });
});

function greyOut() {
  gsap.to(".mncircle", {
    opacity: 0.08,
  });
  gsap.to(".sec", {
    opacity: 0.4,
  });
}

gsap.to(".circle", {
  duration: 2,
  rotate: 0,
});
