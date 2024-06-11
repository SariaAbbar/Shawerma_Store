const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");



// product arrayyvit have an id and the title and the price and the img
const products = [{id: 1,   title: "Chicken shawerma",         price: 100,           img: "/static/img/kilo_tavuk_doner_b2.png",},
                  {id: 2,   title: "Meat shawerma",            price: 120,           img: "/static/img/kilo_et_doner_b2.png",},
                  {id: 3,   title: "chicken shawerma sandwich",price: 70,            img: "/static/img/shawerma chicken.png",},
                  {id: 4,   title: "meat shawerma sandwich",   price: 180,           img: "/static/img/meat sand.png",},
                  {id: 5,   title: "burger",                   price: 99,            img: "/static/img/burgerr.png",},];

// start from the fist product in the array
let choosenProduct = products[0];



const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductSizes = document.querySelectorAll(".size");
// switching from the one to the another

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change the texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    // change the price of currentPruduct
    currentProductPrice.textContent = "L.E" + choosenProduct.price;
    // change the image of currentProduct
    currentProductImg.src = choosenProduct.img;
  });
});



// dark mode and save it inside local storage

const toggleBtn = document.getElementById("toggle-btn");
const theme = document.getElementById("theme");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  theme.classList.add("dark-mode-theme");
  toggleBtn.classList.remove("dark-mode-toggle");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  theme.classList.remove("dark-mode-theme");
  toggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("dark-mode", "disabled");``
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
