
var container = document.querySelector(".container");
document.addEventListener("DOMContentLoaded", function(e) {
  if (container.offsetWidth !== 320) {
    var elHeader = document.querySelectorAll(".benefits__item p > strong");
    var maxHeader = 0;
    for (var i = 0; i < elHeader.length; i++) {
      if (elHeader[i].offsetHeight > maxHeader) {
        maxHeader = elHeader[i].offsetHeight;
      }
    }
    for (var i = 0; i < elHeader.length; i++) {
      elHeader[i].style.height = maxHeader + "px";
    }
  }
});

document.addEventListener("DOMContentLoaded", function(e) {
  if (container.offsetWidth !== 320) {
    var el = document.querySelectorAll(".benefits__item");
    var max = 0;
    for (var i = 0; i < el.length; i++) {
      if (el[i].offsetHeight > max) {
        max = el[i].offsetHeight;
      }
    }
    for (var i = 0; i < el.length; i++) {
      el[i].style.height = max + 20 + "px";
    }
  }
});

var menuButton = document.querySelector(".header__menu-button");
var menu = document.querySelector(".header__menu");
menuButton.addEventListener("click", function() {
  menu.classList.toggle("header__menu--visible");
  menuButton.classList.toggle("header__menu-button--close");
});