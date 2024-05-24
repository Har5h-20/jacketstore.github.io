const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Black Leather Jacket",
    price: 10800,
    img: "./img/jacket 1.webp",
  },
  {
    id: 2,
    title: "Brown Leather Jacket",
    price: 10080,
    img: "./img/jacket 2.webp",
  },
  {
    id: 3,
    title: "Red Leather Jacket",
    price: 8600,
    img: "./img/jacket 3.webp",
  },
  {
    id: 4,
    title: "Blue Leather Jacket",
    price: 7890,
    img: "./img/jacket 4.webp",
  },
  {
    id: 5,
    title: "Green Leather Jacket",
    price: 11080,
    img: "./img/jacket 5.webp",
  },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the chosen product
    chosenProduct = products[index];

    // Change texts of currentProduct
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "₹" + chosenProduct.price;
    currentProductImg.src = chosenProduct.img;
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
