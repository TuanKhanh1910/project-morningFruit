export default function sliderSwiper() {
  const slider = document.querySelector(".slider");
  if (slider) {
    let swiper2 = new Swiper(slider.querySelector(".sliderSwiper"), {
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
      },
      grabCursor: true,
      loop: true,

      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        860: {
          slidesPerView: 4,
        },
      },
    });
  }
}
