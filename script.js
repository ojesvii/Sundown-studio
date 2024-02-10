const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

var full = document.getElementById("wrap");
// var navimg = document.querySelector(".nav img");
// var line = document.querySelector(".page1 hr");
var flag = 1;

// function hide() {
//   if (flag == 1) {
//     full.style.top = 0;
//     flag = 0;
//   } else {
//     full.style.top = "-100%";
//     flag = 1;
//   }
// }

function loaderanimation() {
  var load = document.querySelector(".loader");
  setTimeout(function () {
    load.style.top = "-100%";
  }, 3700);
}

loaderanimation();
