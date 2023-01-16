var hamburger = document.querySelector(".header__hamburger");
var headerMenu = document.querySelector(".header__menu");

hamburger.addEventListener ("click", function(evt) {
  headerMenu.classList.toggle("show");
});

headerMenu.addEventListener ("click", function(evt) {
  headerMenu.classList.remove("show");
})
