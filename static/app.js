const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Chicken shawerma",
    price: 100,
    colors: [
      {
        img: "/static/img/kilo_tavuk_doner_b2.png",
      },
      {
        img: "/static/img/kilo_tavuk_doner_b2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Meat shawerma",
    price: 120,
    colors: [
      {
        img: "/static/img/kilo_et_doner_b2.png",
      },
      {
        img: "/static/img/kilo_et_doner_b2.png",
      },
    ],
  },
  {
    id: 3,
    title: "chicken shawerma sandwich",
    price: 70,
    colors: [
      {
        img: "/static/img/shawerma chicken.png",
      },
      {
        img: "/static/img/shawerma chicken.png",
      },
    ],
  },
  {
    id: 4,
    title: "meat shawerma sandwich",
    price: 180,
    colors: [
      {
        img: "/static/img/meat sand.png",
      },
      {
        img: "/static/img/meat sand.png",
      },
    ],
  },
  {
    id: 5,
    title: "burger",
    price: 99,
    colors: [
      {
        img: "/static/img/burgerr.png",
      },
      {
        img: "/static/img/burgerr.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "L.E" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
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
  localStorage.setItem("dark-mode", "disabled");
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
