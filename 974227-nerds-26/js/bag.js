const products = document.querySelector(".bags-list")

const cookies = document.cookie.split(';').map(item => item.split('=')).reduce((acc, [k, v]) => (acc[k.trim().replace('"', '')] = v) && acc, {});

const arr = cookies.productNames.split(",")

for (let i = 0; i < arr.length; i++) {

  const deleteButton = document.createElement("div")
  deleteButton.classList.add("delete-button")
  const li = document.createElement("li")

  li.textContent = arr[i];

  products.appendChild(li)
  products.appendChild(deleteButton)
}

products.addEventListener("click", function (evn) {

  if (evn.target.className === 'delete-button') {
    const a = cookies.productNames.split(",")

    const newArr = a.filter((item) => {

      if (item !== evn.target.previousSibling.textContent) {
        return item
      }
    })

    evn.target.previousSibling.remove()
    evn.target.remove()

    const stringFromArr = newArr.join(",")

    document.cookie = `productNames=${stringFromArr};`
  }
})
