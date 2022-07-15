const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];



function tags(obj) {
  
  let productMain = document.createElement('main')
  productMain.classList.add("product-main")

  let productCard = document.createElement('li')
  productCard.classList.add('product')

  let productTitle = document.createElement('h1')
  productTitle.classList.add('product-title"')
  productTitle.innerText = obj.title

  let productCategory = document.createElement('h5')
  productCategory.classList.add('product-category')
  productCategory.innerText = obj.category

  let productImg = document.createElement('img')
  productImg.classList.add('product-img')
  productImg.src = obj.image
  productImg.alt = obj.imageDescription

  if (obj.image == undefined) {
    productImg.classList.add('product-img')
    productImg.src = "./img/products/no-img.svg"
    productImg.alt = obj.imageDescription
  }

  let productPrice = document.createElement('strong')
  productPrice.classList.add('product-price')
  productPrice.innerText = "R$ " + obj.price

  productMain.append(productTitle, productCategory, productPrice)
  productCard.append(productImg, productMain)

  return productCard
}

function constLinst(frutas, bebidas, higiene) {
  for (let p of products) {
    if (p.category == "Frutas") {
      frutas.append(tags(p))
    } else if (p.category == "Higiene") {
      bebidas.append(tags(p))
    } else if (p.category == "Bebidas") {
      higiene.append(tags(p))
    }
  }
}

function final() {
  let fruit = document.querySelector(".fruits")
  let drinks = document.querySelector(".drinks")
  let hygiene = document.querySelector(".hygiene")
  let frutinhas = document.createElement('ul')
  console.log(frutinhas)
  let lBebidas = document.createElement('ul')
  let lHigiene = document.createElement('ul')
  
  fruit.append(frutinhas)
  drinks.append(lBebidas)
  hygiene.append(lHigiene)
  
  constLinst(frutinhas, lBebidas, lHigiene)
}
final()