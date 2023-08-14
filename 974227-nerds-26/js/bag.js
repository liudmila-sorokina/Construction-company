const products = document.querySelector(".bags-list")

const cookies = document.cookie.split(';').map(item => item.split('=')).reduce((acc, [k, v]) => (acc[k.trim().replace('"', '')] = v) && acc, {});

cookies.productNames
console.log(cookies.productNames)

products.innerHTML = cookies.productNames
