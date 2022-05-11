let header__burger = document.querySelector(".header__burger");
let header_menu = document.querySelector(".header__content");
let back = document.querySelector("body");
let header__list = document.querySelector(".header__list");

header__burger.onclick = function () {
   header__burger.classList.toggle("activeMenu");
   header_menu.classList.toggle("activeMenu");
   back.classList.toggle("lock");
};

header__list.onclick = function () {
   header__list.classList.remove("activeMenu");
   back.classList.toggle("lock");
};
