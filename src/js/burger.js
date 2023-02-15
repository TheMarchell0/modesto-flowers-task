const headerBlock = document.querySelector(".js-header");
const openButton = document.querySelector("#header-burger");
const closeButton = document.querySelector("#header-burger-close");

openButton.addEventListener("click", () => {
  headerBlock.classList.add("header__mobile-menu_open");
  document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
  headerBlock.classList.remove("header__mobile-menu_open");
  document.body.style.overflow = "";
});
