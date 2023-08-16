let itemsCatalog = document.querySelectorAll(".for-examples-item")


let sortNameItem = document.querySelector(".items-name")
let sortCostItem = document.querySelector(".items-cost")
let sortTypeItem = document.querySelector(".items-type")

let listExamples = document.querySelector(".examples")

const range = document.getElementById("custom-range")
const field = document.getElementById("to")

const filterButton = document.querySelector(".filter-button")
const checkbox = document.querySelector(".filter__item-check")

const itemsArr = Array.from(itemsCatalog)

sortNameItem.addEventListener('click', function (evn) {

  for (let i = 0; i < itemsArr.length; i++) {
    itemsArr[i].remove()
  }

  itemsArr.sort((x, y) => {
    const k1 = x.querySelector('.examples__item').textContent
    const k2 = y.querySelector('.examples__item').textContent

    if (k1 > k2) { return -1 }
    if (k1 < k2) { return 1 }
  })

  for (let j = 0; j < itemsArr.length; j++) {
    listExamples.appendChild(itemsArr[j])
  }
})

sortCostItem.addEventListener("click", function (evn) {
  for (let i = 0; i < itemsArr.length; i++) {
    itemsArr[i].remove()
  }

  console.log('hohohoho')

  itemsArr.sort((x, y) => {
    const k1 = x.querySelector('.examples__prise').textContent
    const k2 = y.querySelector('.examples__prise').textContent

    if (Number(k1) > Number(k2)) { return -1 }
    if (Number(k1) < Number(k2)) { return 1 }

  })

  for (let j = 0; j < itemsArr.length; j++) {
    listExamples.appendChild(itemsArr[j])
  }
})

sortTypeItem.addEventListener("click", function (evn) {
  for (let i = 0; i < itemsArr.length; i++) {
    itemsArr[i].remove()
  }

  itemsArr.sort((x, y) => {
    const k1 = x.querySelector('.examples__text').textContent.indexOf("магазин")
    const k2 = y.querySelector('.examples__text').textContent.indexOf("магазин")

    if (k1 < k2) { return 1 }
    if (k1 > k2) { return -1 }

  })

  for (let j = 0; j < itemsArr.length; j++) {
    listExamples.appendChild(itemsArr[j])
  }
})


range.addEventListener('input', function (evn) {
  field.value = evn.target.value;
});
field.addEventListener('input', function (evn) {
  range.value = evn.target.value;
});


const benefitsSlider = document.getElementById("slider")
const benefitsBlok = document.getElementById("benefits-blok")
const news = document.getElementById("news")
const gallery = document.getElementById("gallery")
const bag = document.getElementById("bag")

const itemSedona = document.querySelector(".item-sedona")
const itemPink = document.querySelector(".item-pink")
const itemA = document.querySelector(".item-A")
const itemKvast = document.querySelector(".item-kvast")

filterButton.addEventListener("click", function (evn) {

  if (benefitsSlider.checked || bag.checked || benefitsSlider.checked & bag.checked) {

    itemSedona.classList.add("invisible")
  } else { itemSedona.classList.remove("invisible") }

  if (benefitsBlok.checked) {
    itemPink.classList.add("invisible")
  } else { itemPink.classList.remove("invisible") }

  if (news.checked) {
    itemA.classList.add("invisible")
  } else { itemA.classList.remove("invisible") }

  if (gallery.checked) {
    itemKvast.classList.add("invisible")
  } else { itemKvast.classList.remove("invisible") }

})

const examples = document.querySelector(".examples")


examples.addEventListener("click", function (evn) {

  const parent = evn.target.parentElement
  const product = parent.querySelector(".examples__item").textContent

  const cookies = document.cookie.split(';').map(item => item.split('=')).reduce((acc, [k, v]) => (acc[k.trim().replace('"', '')] = v) && acc, {});
  if (cookies.productNames === undefined || cookies.productNames.indexOf(product) === -1) {
    document.cookie = `productNames=${cookies.productNames},${product}`
  }
})
