var swiper = new Swiper(".testimonialSwiper", {
    // freeMode: true,
    slidesPerView: 1,
    initialSlide: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});