
const firstSlide = document.querySelector(".first-slide")
const secondSlide = document.querySelector(".second-slide")
const thierdSlide = document.querySelector(".thierd-slide")

let slideActive = document.querySelector(".img-phons")

firstSlide.addEventListener("click", function (evt) {

  slideActive.src = "./img/slide1.png"

})

secondSlide.addEventListener("click", function (evt) {

  slideActive.src = "./png/i.png"

})

thierdSlide.addEventListener("click", function (evt) {

  slideActive.src = "./png/tech.png"

})
