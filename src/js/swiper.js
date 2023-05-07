
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  keyboard: {
    enabled: true,
  },
   pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
