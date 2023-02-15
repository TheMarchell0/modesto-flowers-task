import Swiper, { Navigation } from "swiper";

Swiper.use(Navigation);

const swiper = new Swiper(".swiper", {
  loop: true,
  allowTouchMove: false,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
