
const firstSlide = document.querySelector(".first-slide")
const secondSlide = document.querySelector(".second-slide")
const thierdSlide = document.querySelector(".thierd-slide")

let slideActive = document.querySelector(".img-phons")

firstSlide.addEventListener("click", function (evt){
  // const imageFirst = document.createElement("img")
  slideActive.src = "./img/slide1.png"
  // slideActive = imageFirst
})

secondSlide.addEventListener("click", function (evt){
 // const imageSecond = document.createElement("img")
 slideActive.src = "./png/i.png"
 // slideActive = imageSecond
})

thierdSlide.addEventListener("click", function (evt){
  // const imageThierd = document.createElement("img")
  slideActive.src = "./png/tech.png"
  // slideActive = imageThierd
})
