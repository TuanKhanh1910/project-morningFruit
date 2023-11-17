export default function bannerSwiper() {
  const banner = document.querySelector(".banner");

  if (banner) {
    let swiper2 = new Swiper(banner.querySelector(".swiper"), {
      loop: true,
      spaceBetween: 10,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
