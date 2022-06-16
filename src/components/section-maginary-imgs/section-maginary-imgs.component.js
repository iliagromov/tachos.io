const sectionMaginarImgs = new Swiper('.sectionMaginarImgs', {
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