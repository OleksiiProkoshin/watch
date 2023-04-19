const swiper = new Swiper(".watch-swiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  
    keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mouseweel: {
    sensitivity: 1,
    eventsTarget: ".swiper-slide",
  },
  freeMode: true,
  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    loop: true,
    speed: 600,
  }
   });