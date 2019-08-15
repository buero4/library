
if($('.swiper-container').length) {
  var insightSwiper = new Swiper('.swiper-container.insight', {
    speed: 400,
    spaceBetween: 0,
    loop: true,
    init: false,
    autoplay: {
      delay: 3000,
    },
    lazy: {
      loadPrevNext: true,
    },
  });

  insightSwiper.init();
}