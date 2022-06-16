const sectionMonteImgs = new Swiper('.sectionMonteImgs', {
  spaceBetween: 0,
  slidesPerView: 'auto',

  loop: false,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});