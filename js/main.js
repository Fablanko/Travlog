const swiper1 = new Swiper('.js--destination', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.destination-control-next',
    prevEl: '.destination-control-prev',
  },
});

const swiper2 = new Swiper('.js--testimonials', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.testimonials-control-next',
    prevEl: '.testimonials-control-prev',
  },
});
